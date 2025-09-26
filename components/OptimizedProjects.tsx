'use client';

import { useApiCache } from '@/hooks/useApiCache';
import { PERFORMANCE_CONFIG } from '@/lib/performance';

type ProjectType = {
  id: string;
  title: string;
  title_home: string;
  slug: string;
  content: string;
};

type ProjectsApiResponse = ProjectType[] | { data: ProjectType[] };

export default function OptimizedProjects() {
  const { data, loading, error, refetch } = useApiCache<ProjectsApiResponse>(
    '/api/projects',
    {
      ttl: PERFORMANCE_CONFIG.CACHE_DURATIONS.PROJECTS,
      enabled: true,
    },
  );

  if (loading) {
    return (
      <div className="projects-loading">
        <div className="loading-spinner">Chargement des projets...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="projects-error">
        <p>Erreur: {error}</p>
        <button onClick={refetch} className="retry-btn">
          Réessayer
        </button>
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

  return (
    <div className="optimized-projects">
      <div className="projects-header">
        <h2>Projets Optimisés</h2>
        <button onClick={refetch} className="refresh-btn">
          🔄 Actualiser
        </button>
      </div>

      <div className="projects-grid">
        {gridProjects.map((project) => (
          <div key={project.id} className="project-item">
            <h3>{project.title_home}</h3>
            <p>{project.content.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}
