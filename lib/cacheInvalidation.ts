import { PERFORMANCE_CONFIG } from './performance';

interface CacheEntry<T = unknown> {
  data: T;
  timestamp: number;
  lastModified?: string;
  etag?: string;
  version?: number;
}

interface InvalidationEvent {
  endpoint: string;
  type: 'update' | 'delete' | 'create';
  timestamp: number;
  affectedKeys: string[];
}

class CacheInvalidationManager {
  private cache = new Map<string, CacheEntry>();
  private invalidationQueue: InvalidationEvent[] = [];
  private subscribers = new Map<string, Set<() => void>>();
  private pollingIntervals = new Map<string, NodeJS.Timeout>();

  set<T>(key: string, data: T, headers?: Headers): void {
    const entry: CacheEntry<T> = {
      data,
      timestamp: Date.now(),
      lastModified: headers?.get('last-modified') || undefined,
      etag: headers?.get('etag') || undefined,
      version: this.getVersionFromData(data),
    };

    this.cache.set(key, entry);
    console.log(`📦 Cache mis à jour: ${key}`);
  }

  get<T>(key: string): T | null {
    const entry = this.cache.get(key);
    if (!entry) return null;

    const ttl = this.getTTLForKey(key);
    if (Date.now() - entry.timestamp > ttl) {
      this.cache.delete(key);
      console.log(`⏰ Cache expiré: ${key}`);
      return null;
    }

    return entry.data as T;
  }

  invalidate(key: string, reason = 'manual'): void {
    this.cache.delete(key);
    console.log(`🗑️ Cache invalidé: ${key} (${reason})`);

    const callbacks = this.subscribers.get(key);
    if (callbacks) {
      callbacks.forEach((callback) => callback());
    }
  }

  invalidateRelated(
    endpoint: string,
    type: 'update' | 'delete' | 'create' = 'update',
  ): void {
    const dependencies =
      PERFORMANCE_CONFIG.CACHE_INVALIDATION.DEPENDENCIES[endpoint];
    if (!dependencies) return;

    const event: InvalidationEvent = {
      endpoint,
      type,
      timestamp: Date.now(),
      affectedKeys: dependencies,
    };

    this.invalidationQueue.push(event);

    dependencies.forEach((key) => {
      this.invalidate(key, `${type} on ${endpoint}`);
    });

    console.log(`🔄 Invalidation en cascade pour ${endpoint}:`, dependencies);
  }

  subscribe(key: string, callback: () => void): () => void {
    if (!this.subscribers.has(key)) {
      this.subscribers.set(key, new Set());
    }

    this.subscribers.get(key)!.add(callback);

    return () => {
      const callbacks = this.subscribers.get(key);
      if (callbacks) {
        callbacks.delete(callback);
        if (callbacks.size === 0) {
          this.subscribers.delete(key);
        }
      }
    };
  }

  startPolling(endpoint: string): void {
    if (this.pollingIntervals.has(endpoint)) return;

    const interval = setInterval(async () => {
      await this.checkForChanges(endpoint);
    }, PERFORMANCE_CONFIG.CACHE_INVALIDATION.POLLING_INTERVAL);

    this.pollingIntervals.set(endpoint, interval);
    console.log(`🔄 Polling démarré pour ${endpoint}`);
  }

  stopPolling(endpoint: string): void {
    const interval = this.pollingIntervals.get(endpoint);
    if (interval) {
      clearInterval(interval);
      this.pollingIntervals.delete(endpoint);
      console.log(`⏹️ Polling arrêté pour ${endpoint}`);
    }
  }

  private async checkForChanges(endpoint: string): Promise<void> {
    try {
      const cachedEntry = this.cache.get(endpoint);
      if (!cachedEntry) return;

      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      if (!baseUrl) return;

      const response = await fetch(`${baseUrl}${endpoint}`, {
        method: 'HEAD',
        headers: {
          'If-None-Match': cachedEntry.etag || '',
          'If-Modified-Since': cachedEntry.lastModified || '',
        },
      });

      if (response.status === 304) {
        console.log(`✅ Pas de changement détecté pour ${endpoint}`);
        return;
      }

      if (response.status === 200) {
        console.log(`🔄 Changement détecté pour ${endpoint}`);
        this.invalidateRelated(endpoint, 'update');
      }
    } catch (error) {
      console.error(`❌ Erreur lors de la vérification de ${endpoint}:`, error);
    }
  }

  private getTTLForKey(key: string): number {
    if (key.includes('project'))
      return PERFORMANCE_CONFIG.CACHE_DURATIONS.PROJECTS;
    if (key.includes('article'))
      return PERFORMANCE_CONFIG.CACHE_DURATIONS.ARTICLES;
    return PERFORMANCE_CONFIG.CACHE_DURATIONS.PROJECTS; // Par défaut
  }

  private getVersionFromData<T>(data: T): number {
    if (!data) return 0;

    const str = JSON.stringify(data);
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return Math.abs(hash);
  }

  clear(): void {
    this.cache.clear();
    this.invalidationQueue = [];

    this.pollingIntervals.forEach((interval) => {
      clearInterval(interval);
    });
    this.pollingIntervals.clear();

    console.log('🧹 Cache complètement nettoyé');
  }

  getStats(): {
    cacheSize: number;
    activePolling: number;
    subscribers: number;
    invalidationEvents: number;
  } {
    return {
      cacheSize: this.cache.size,
      activePolling: this.pollingIntervals.size,
      subscribers: Array.from(this.subscribers.values()).reduce(
        (sum, set) => sum + set.size,
        0,
      ),
      invalidationEvents: this.invalidationQueue.length,
    };
  }
}

export const cacheManager = new CacheInvalidationManager();

export function useCacheInvalidation() {
  return {
    invalidate: (key: string) => cacheManager.invalidate(key),
    invalidateRelated: (
      endpoint: string,
      type?: 'update' | 'delete' | 'create',
    ) => cacheManager.invalidateRelated(endpoint, type),
    subscribe: (key: string, callback: () => void) =>
      cacheManager.subscribe(key, callback),
    startPolling: (endpoint: string) => cacheManager.startPolling(endpoint),
    stopPolling: (endpoint: string) => cacheManager.stopPolling(endpoint),
    clear: () => cacheManager.clear(),
    getStats: () => cacheManager.getStats(),
  };
}
