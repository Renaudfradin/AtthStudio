import { PERFORMANCE_CONFIG } from './performance';

// Types pour la gestion du cache
interface CacheEntry {
  data: any;
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

  // Ajouter une entrée au cache avec métadonnées
  set(key: string, data: any, headers?: Headers): void {
    const entry: CacheEntry = {
      data,
      timestamp: Date.now(),
      lastModified: headers?.get('last-modified') || undefined,
      etag: headers?.get('etag') || undefined,
      version: this.getVersionFromData(data),
    };

    this.cache.set(key, entry);
    console.log(`📦 Cache mis à jour: ${key}`);
  }

  // Récupérer une entrée du cache
  get(key: string): any | null {
    const entry = this.cache.get(key);
    if (!entry) return null;

    // Vérifier si le cache est encore valide
    const ttl = this.getTTLForKey(key);
    if (Date.now() - entry.timestamp > ttl) {
      this.cache.delete(key);
      console.log(`⏰ Cache expiré: ${key}`);
      return null;
    }

    return entry.data;
  }

  // Invalider le cache pour une clé spécifique
  invalidate(key: string, reason = 'manual'): void {
    this.cache.delete(key);
    console.log(`🗑️ Cache invalidé: ${key} (${reason})`);

    // Notifier les abonnés
    const callbacks = this.subscribers.get(key);
    if (callbacks) {
      callbacks.forEach((callback) => callback());
    }
  }

  // Invalider plusieurs clés liées
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

    // Invalider immédiatement les caches liés
    dependencies.forEach((key) => {
      this.invalidate(key, `${type} on ${endpoint}`);
    });

    console.log(`🔄 Invalidation en cascade pour ${endpoint}:`, dependencies);
  }

  // S'abonner aux changements d'une clé
  subscribe(key: string, callback: () => void): () => void {
    if (!this.subscribers.has(key)) {
      this.subscribers.set(key, new Set());
    }

    this.subscribers.get(key)!.add(callback);

    // Retourner une fonction de désabonnement
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

  // Démarrer le polling pour vérifier les changements
  startPolling(endpoint: string): void {
    if (this.pollingIntervals.has(endpoint)) return;

    const interval = setInterval(async () => {
      await this.checkForChanges(endpoint);
    }, PERFORMANCE_CONFIG.CACHE_INVALIDATION.POLLING_INTERVAL);

    this.pollingIntervals.set(endpoint, interval);
    console.log(`🔄 Polling démarré pour ${endpoint}`);
  }

  // Arrêter le polling
  stopPolling(endpoint: string): void {
    const interval = this.pollingIntervals.get(endpoint);
    if (interval) {
      clearInterval(interval);
      this.pollingIntervals.delete(endpoint);
      console.log(`⏹️ Polling arrêté pour ${endpoint}`);
    }
  }

  // Vérifier s'il y a des changements sur le serveur
  private async checkForChanges(endpoint: string): Promise<void> {
    try {
      const cachedEntry = this.cache.get(endpoint);
      if (!cachedEntry) return;

      // Faire une requête HEAD pour vérifier les changements
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      if (!baseUrl) return;

      const response = await fetch(`${baseUrl}${endpoint}`, {
        method: 'HEAD',
        headers: {
          'If-None-Match': cachedEntry.etag || '',
          'If-Modified-Since': cachedEntry.lastModified || '',
        },
      });

      // Si le serveur retourne 304, pas de changement
      if (response.status === 304) {
        console.log(`✅ Pas de changement détecté pour ${endpoint}`);
        return;
      }

      // Si différent, invalider le cache
      if (response.status === 200) {
        console.log(`🔄 Changement détecté pour ${endpoint}`);
        this.invalidateRelated(endpoint, 'update');
      }
    } catch (error) {
      console.error(`❌ Erreur lors de la vérification de ${endpoint}:`, error);
    }
  }

  // Obtenir le TTL pour une clé
  private getTTLForKey(key: string): number {
    if (key.includes('project'))
      return PERFORMANCE_CONFIG.CACHE_DURATIONS.PROJECTS;
    if (key.includes('article'))
      return PERFORMANCE_CONFIG.CACHE_DURATIONS.ARTICLES;
    return PERFORMANCE_CONFIG.CACHE_DURATIONS.PROJECTS; // Par défaut
  }

  // Extraire une version des données pour détecter les changements
  private getVersionFromData(data: any): number {
    if (!data) return 0;

    // Créer un hash simple basé sur le contenu
    const str = JSON.stringify(data);
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convertir en 32bit integer
    }
    return Math.abs(hash);
  }

  // Nettoyer tous les caches
  clear(): void {
    this.cache.clear();
    this.invalidationQueue = [];

    // Arrêter tous les pollings
    this.pollingIntervals.forEach((interval, endpoint) => {
      clearInterval(interval);
    });
    this.pollingIntervals.clear();

    console.log('🧹 Cache complètement nettoyé');
  }

  // Obtenir des statistiques du cache
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

// Instance globale du gestionnaire de cache
export const cacheManager = new CacheInvalidationManager();

// Hook pour utiliser le cache avec invalidation automatique
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
