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
    projects = [];
  }

  return (
    <div>
      <h1>Projects</h1>

      {projects.map((project: any) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <Link href={`/project/${project.slug}`}>Voir l'project</Link>
        </div>
      ))}
    </div>
  );
}
