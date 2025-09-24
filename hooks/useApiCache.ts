import { useState, useEffect, useCallback } from 'react';
import { callApi } from '@/utils/api';
import { cacheManager, useCacheInvalidation } from '@/lib/cacheInvalidation';

// Utiliser le gestionnaire de cache global au lieu d'une classe locale
const apiCache = cacheManager;

export function useApiCache<T>(
  endpoint: string,
  options: { enabled?: boolean; ttl?: number; enablePolling?: boolean } = {},
) {
  const {
    enabled = true,
    ttl = 5 * 60 * 1000,
    enablePolling = false,
  } = options;
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { invalidate, subscribe, startPolling, stopPolling } =
    useCacheInvalidation();

  const fetchData = useCallback(
    async (force = false) => {
      if (!enabled) return;

      // Vérifier le cache d'abord
      if (!force) {
        const cachedData = apiCache.get<T>(endpoint);
        if (cachedData) {
          setData(cachedData);
          return cachedData;
        }
      }

      setLoading(true);
      setError(null);

      try {
        const result = await callApi<T>(endpoint);
        // Utiliser le nouveau gestionnaire de cache avec headers
        apiCache.set<T>(endpoint, result);
        setData(result);
        return result;
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Erreur API';
        setError(errorMessage);
        console.error('Erreur API:', err);
      } finally {
        setLoading(false);
      }
    },
    [endpoint, enabled],
  );

  useEffect(() => {
    fetchData();

    // S'abonner aux invalidations de cache
    const unsubscribe = subscribe(endpoint, () => {
      console.log(`🔄 Cache invalidé pour ${endpoint}, rechargement...`);
      fetchData(true);
    });

    // Démarrer le polling si activé
    if (enablePolling) {
      startPolling(endpoint);
    }

    return () => {
      unsubscribe();
      if (enablePolling) {
        stopPolling(endpoint);
      }
    };
  }, [
    endpoint,
    enabled,
    fetchData,
    subscribe,
    startPolling,
    stopPolling,
    enablePolling,
  ]);

  return {
    data,
    loading,
    error,
    refetch: () => fetchData(true),
    clearCache: () => invalidate(endpoint),
  };
}

export { apiCache };
