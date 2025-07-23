import Link from 'next/link';
import React from 'react';
import { callApi } from '@/utils/api';
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
              <span className="project-grid-btn project-grid-btn-mobile">
                See work
              </span>
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
