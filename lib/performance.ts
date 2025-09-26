// Configuration des performances API
export const PERFORMANCE_CONFIG = {
  // Durées de cache (en millisecondes)
  CACHE_DURATIONS: {
    PROJECTS: 5 * 60 * 1000, // 5 minutes
    ARTICLES: 3 * 60 * 1000, // 3 minutes
    SINGLE_PROJECT: 10 * 60 * 1000, // 10 minutes
    SINGLE_ARTICLE: 10 * 60 * 1000, // 10 minutes
  },

  // Timeouts pour les requêtes
  TIMEOUTS: {
    DEFAULT: 10000, // 10 secondes
    IMAGES: 15000, // 15 secondes
    UPLOAD: 30000, // 30 secondes
  },

  // Configuration de retry
  RETRY: {
    MAX_ATTEMPTS: 3,
    DELAY: 1000, // 1 seconde
    BACKOFF_MULTIPLIER: 2,
  },

  // Configuration pour l'invalidation de cache
  CACHE_INVALIDATION: {
    // Endpoints qui invalident d'autres caches quand ils changent
    DEPENDENCIES: {
      '/api/projects': ['projects-list', 'home-projects'],
      '/api/articles': ['articles-list', 'recent-articles'],
      '/api/categories': ['categories-list', 'article-filters'],
      '/api/archives': ['archives-list', 'home-archives'],
      '/api/suggest-articles/[categoryId]': [
        'suggest-articles',
        'related-articles',
      ],
      '/api/project/[slug]': ['project-detail', 'related-projects'],
      '/api/article/[slug]': ['article-detail', 'related-articles'],
      '/api/archive/[slug]': ['archive-detail', 'related-archives'],
    } as Record<string, string[]>,
    // Polling pour vérifier les changements (en millisecondes)
    POLLING_INTERVAL: 30000,
  },
};

// Fonction utilitaire pour retry automatique
export async function withRetry<T>(
  fn: () => Promise<T>,
  maxAttempts = PERFORMANCE_CONFIG.RETRY.MAX_ATTEMPTS,
): Promise<T> {
  let lastError: Error;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error('Unknown error');

      if (attempt === maxAttempts) {
        throw lastError;
      }

      // Attendre avant le prochain essai avec backoff exponentiel
      const delay =
        PERFORMANCE_CONFIG.RETRY.DELAY *
        Math.pow(PERFORMANCE_CONFIG.RETRY.BACKOFF_MULTIPLIER, attempt - 1);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  throw lastError!;
}

// Fonction pour mesurer les performances
export function measurePerformance<T>(
  name: string,
  fn: () => Promise<T>,
): Promise<T> {
  return new Promise(async (resolve, reject) => {
    const start = performance.now();

    try {
      const result = await fn();
      const end = performance.now();
      console.log(`⚡ ${name}: ${(end - start).toFixed(2)}ms`);
      resolve(result);
    } catch (error) {
      const end = performance.now();
      console.error(
        `❌ ${name} failed after ${(end - start).toFixed(2)}ms:`,
        error,
      );
      reject(error);
    }
  });
}
