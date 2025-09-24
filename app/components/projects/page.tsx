'use client';

import Link from 'next/link';
import React from 'react';
import { useApiCache } from '@/hooks/useApiCache';
import { PERFORMANCE_CONFIG } from '@/lib/performance';
import localFont from 'next/font/local';
import CustomCursor from './CustomCursor';
import './projects.css';

type ProjectType = {
  id: string;
  title: string;
  title_home: string;
  slug: string;
  content: string;
};

const HV_Weist_Havanah_Trial = localFont({
  src: '../../assets/font/HV-Weist-Havanah-Trial.otf',
});

type ProjectsApiResponse = ProjectType[] | { data: ProjectType[] };

export default function Projects() {
  const { data } = useApiCache<ProjectsApiResponse>('/api/projects', {
    ttl: PERFORMANCE_CONFIG.CACHE_DURATIONS.PROJECTS,
    enabled: true,
    enablePolling: true, // Vérification automatique des changements
  });

  let projects: ProjectType[] = [];
  if (data) {
    if (Array.isArray(data)) {
      projects = data;
    } else if ('data' in data) {
      projects = data.data;
    }
  }

  const gridProjects = projects.slice(0, 12);
  const colors = [
    'proj-color-green',
    'proj-color-beige',
    'proj-color-blue',
    'proj-color-olive',
    'proj-color-brown',
    'proj-color-yellow',
    'proj-color-orange',
    'proj-color-pink',
    'proj-color-purple',
    'proj-color-lilac',
    'proj-color-grey',
    'proj-color-violet',
  ];

  return (
    <div className="projects-grid-wrapper custom-cursor">
      <CustomCursor />
      <div className="projects-grid">
        {gridProjects.map((project, idx) => (
          <div
            className={`project-grid-item ${colors[idx % colors.length]}`}
            key={project.id}
          >
            <span className="project-grid-title">{project.title_home}</span>

            <Link
              href={`/project/${project.slug}`}
              className="project-grid-link"
            >
              <span className="project-grid-btn">See work</span>
              <span className="project-grid-btn-mobile">See work</span>
            </Link>
          </div>
        ))}
        <div className="projects-grid-center">
          <span
            className={`${HV_Weist_Havanah_Trial.className} projects-grid-center-title`}
          >
            Select
            <br />
            the
            <br />
            work
          </span>
        </div>
      </div>
    </div>
  );
}
