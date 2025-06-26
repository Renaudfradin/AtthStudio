import React from 'react';
import { callApi } from '@/utils/api';
import DocumentGallery from '@/app/components/documentGallery/DocumentGallery';
import './project.css';

type ProjectDetailType = {
  id: string;
  title: string;
  slug: string;
  content: string;
  image: string;
  documents: any;
};

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  let project: ProjectDetailType | null = null;
  try {
    const response: ProjectDetailType | { data: ProjectDetailType } =
      await callApi(`/api/project/${params.slug}`);
    if ('data' in response) {
      project = response.data;
    } else {
      project = response;
    }
  } catch (e) {
    project = null;
  }

  if (!project) {
    return <div>Project non trouvée</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.content}</p>
      <img src={project.image} alt={project.title} />
      <DocumentGallery documents={project.documents} />
    </div>
  );
}
