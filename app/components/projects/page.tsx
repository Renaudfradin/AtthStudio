import Link from 'next/link';
import React from 'react';
import { callApi } from '@/utils/api';
import './projects.css';

type ProjectType = {
  id: string;
  title: string;
  slug: string;
  content: string;
};

type ProjectsApiResponse = ProjectType[] | { data: ProjectType[] };

export default async function Projects() {
  let projects: ProjectType[] = [];
  try {
    const response: ProjectsApiResponse = await callApi('/api/projects');
    if (Array.isArray(response)) {
      projects = response;
    } else if (response && 'data' in response) {
      projects = response.data;
    }
  } catch (e) {
    console.error(e);
    projects = [];
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
    <div className="projects-grid-wrapper">
      <div className="projects-grid">
        {gridProjects.map((project, idx) => (
          <div
            className={`project-grid-item ${colors[idx % colors.length]}`}
            key={project.id}
          >
            <Link
              href={`/project/${project.slug}`}
              className="project-grid-link"
            >
              <span className="project-grid-title">{project.title}</span>
              {/* <span className={`project-grid-btn${idx === 0 ? ' always-visible' : ''}`}>See work</span> */}
            </Link>
          </div>
        ))}
        <div className="projects-grid-center">
          <span className="projects-grid-center-title">
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
