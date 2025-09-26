import React from 'react';
import { callApi } from '@/utils/api';
import type { DocumentType } from '@/app/components/documentGallery/DocumentGallery';
import { Metadata } from 'next';
import ProjectContent from './ProjectContent';
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
  return <ProjectContent slug={slug} />;
}
