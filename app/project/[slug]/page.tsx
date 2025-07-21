import React from 'react';
import { callApi } from '@/utils/api';
import DocumentGallery from '@/app/components/documentGallery/DocumentGallery';
import type { DocumentType } from '@/app/components/documentGallery/DocumentGallery';
import { Metadata } from 'next';
import { remark } from 'remark';
import html from 'remark-html';
import './project.css';

type ProjectDetailType = {
  id: string;
  title: string;
  slug: string;
  content: string;
  image: string;
  documents: DocumentType[];
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  let project: ProjectDetailType | null = null;

  try {
    const response: ProjectDetailType | { data: ProjectDetailType } =
      await callApi(`/api/project/${slug}`);
    if ('data' in response) {
      project = response.data;
    } else {
      project = response;
    }
  } catch (e) {
    console.error(e);
    project = null;
  }

  return {
    title: project?.title || slug,
    description: 'Project ATTHSTUDIO',
  };
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let project: ProjectDetailType | null = null;
  try {
    const response: ProjectDetailType | { data: ProjectDetailType } =
      await callApi(`/api/project/${slug}`);
    if ('data' in response) {
      project = response.data;
    } else {
      project = response;
    }
  } catch (e) {
    console.error(e);
    project = null;
  }

  if (!project) {
    return <div>Project non trouvée</div>;
  }

  const processedContent = await remark()
    .use(html)
    .process(project.content || '');
  const contentHtml = processedContent.toString();

  return (
    <div className="project-detail-container">
      <div className="project-detail-top">
        <h1 className="project-detail-title">{project.title}</h1>
        <div
          className="project-detail-content"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
      <div className="project-detail-gallery">
        <DocumentGallery documents={project.documents} />
      </div>
    </div>
  );
}
