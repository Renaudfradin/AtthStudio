'use client';

import { useApiCache } from '@/hooks/useApiCache';
import { useCacheInvalidation } from '@/lib/cacheInvalidation';
import { PERFORMANCE_CONFIG } from '@/lib/performance';

type ProjectType = {
  id: string;
  title: string;
  title_home: string;
  slug: string;
  content: string;
};

type ProjectsApiResponse = ProjectType[] | { data: ProjectType[] };

export default function SmartProjects() {
  const { invalidateRelated, getStats } = useCacheInvalidation();

  // Cache avec invalidation automatique et polling
  const { data, loading, error, refetch } = useApiCache<ProjectsApiResponse>(
    '/api/projects',
    {
      ttl: PERFORMANCE_CONFIG.CACHE_DURATIONS.PROJECTS,
      enabled: true,
      enablePolling: true, // Vérification automatique des changements
    },
  );

  // Simuler une mise à jour (par exemple après modification d'un projet)
  const handleProjectUpdate = (projectId: string) => {
    console.log(`🔄 Projet ${projectId} mis à jour, invalidation du cache...`);

    // Invalider tous les caches liés aux projets
    invalidateRelated('/api/projects', 'update');

    // Optionnel: invalider aussi le cache du projet spécifique
    invalidateRelated(`/api/projects/${projectId}`, 'update');
  };

  // Simuler la création d'un nouveau projet
  const handleProjectCreate = () => {
    console.log('🆕 Nouveau projet créé, invalidation du cache...');
    invalidateRelated('/api/projects', 'create');
  };

  // Simuler la suppression d'un projet
  const handleProjectDelete = (projectId: string) => {
    console.log(`🗑️ Projet ${projectId} supprimé, invalidation du cache...`);
    invalidateRelated('/api/projects', 'delete');
  };

  if (loading) {
    return (
      <div className="smart-projects-loading">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Chargement intelligent des projets...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="smart-projects-error">
        <div className="error-content">
          <h3>❌ Erreur de chargement</h3>
          <p>{error}</p>
          <button onClick={refetch} className="retry-btn">
            🔄 Réessayer
          </button>
        </div>
      </div>
    );
  }

  let projects: ProjectType[] = [];
  if (data) {
    if (Array.isArray(data)) {
      projects = data;
    } else if ('data' in data) {
      projects = data.data;
    }
  }

  const gridProjects = projects.slice(0, 12);
  const stats = getStats();

  return (
    <div className="smart-projects">
      <div className="projects-header">
        <h2>🧠 Projets avec Cache Intelligent</h2>
        <div className="cache-controls">
          <button onClick={refetch} className="refresh-btn">
            🔄 Actualiser
          </button>
          <div className="cache-stats">
            <small>
              Cache: {stats.cacheSize} | Polling: {stats.activePolling} |
              Abonnés: {stats.subscribers}
            </small>
          </div>
        </div>
      </div>

      <div className="demo-actions">
        <h3>🎮 Actions de démonstration :</h3>
        <div className="action-buttons">
          <button
            onClick={() => handleProjectUpdate('demo-project-1')}
            className="demo-btn update"
          >
            📝 Simuler mise à jour
          </button>
          <button onClick={handleProjectCreate} className="demo-btn create">
            ➕ Simuler création
          </button>
          <button
            onClick={() => handleProjectDelete('demo-project-1')}
            className="demo-btn delete"
          >
            🗑️ Simuler suppression
          </button>
        </div>
      </div>

      <div className="projects-grid">
        {gridProjects.map((project) => (
          <div key={project.id} className="smart-project-item">
            <h3>{project.title_home}</h3>
            <p>{project.content.substring(0, 100)}...</p>
            <div className="project-actions">
              <button
                onClick={() => handleProjectUpdate(project.id)}
                className="project-action-btn"
              >
                ✏️ Modifier
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cache-info">
        <details>
          <summary>ℹ️ Informations sur le cache intelligent</summary>
          <div className="cache-details">
            <h4>🔄 Fonctionnalités actives :</h4>
            <ul>
              <li>✅ Cache automatique (5 min)</li>
              <li>✅ Invalidation en cascade</li>
              <li>✅ Polling automatique (30s)</li>
              <li>✅ Détection des changements serveur</li>
              <li>✅ Retry automatique en cas d'erreur</li>
            </ul>

            <h4>📊 Statistiques :</h4>
            <ul>
              <li>Entrées en cache: {stats.cacheSize}</li>
              <li>Polling actif: {stats.activePolling}</li>
              <li>Abonnements: {stats.subscribers}</li>
              <li>Événements d'invalidation: {stats.invalidationEvents}</li>
            </ul>
          </div>
        </details>
      </div>
    </div>
  );
}
