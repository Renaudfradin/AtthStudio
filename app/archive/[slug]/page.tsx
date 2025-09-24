import React from 'react';
import { callApi } from '@/utils/api';
import { Metadata } from 'next';
import type { DocumentType } from '@/app/components/documentGallery/DocumentGallery';
import ArchiveContent from './ArchiveContent';
import '../archive.css';

type ArchiveDetailType = {
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
  let archive: ArchiveDetailType | null = null;

  try {
    const response: ArchiveDetailType | { data: ArchiveDetailType } =
      await callApi(`/api/archive/${slug}`);
    if ('data' in response) {
      archive = response.data;
    } else {
      archive = response;
    }
  } catch (e) {
    console.error(e);
    archive = null;
  }

  return {
    title: archive?.title || slug,
    description: 'Archive ATTHSTUDIO',
  };
}

export default async function Archive({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <ArchiveContent slug={slug} />;
}
