import React from 'react';
import { callApi } from '@/utils/api';
import '../archive.css';
import DocumentGallery from '@/app/components/documentGallery/DocumentGallery';
import { Metadata } from 'next';

type ArchiveDetailType = {
  id: string;
  title: string;
  slug: string;
  content: string;
  image: string;
  documents: any;
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  let archive: ArchiveDetailType | null = null;

  try {
    const response: ArchiveDetailType | { data: ArchiveDetailType } =
      await callApi(`/api/archive/${params.slug}`);
    if ('data' in response) {
      archive = response.data;
    } else {
      archive = response;
    }
  } catch (e) {
    archive = null;
  }

  return {
    title: archive?.title || params.slug,
    description: 'Archive ATTHSTUDIO',
  };
}

export default async function Archive({
  params,
}: {
  params: { slug: string };
}) {
  let archive: ArchiveDetailType | null = null;
  try {
    const response: ArchiveDetailType | { data: ArchiveDetailType } =
      await callApi(`/api/archive/${params.slug}`);
    if ('data' in response) {
      archive = response.data;
    } else {
      archive = response;
    }
  } catch (e) {
    archive = null;
  }

  if (!archive) {
    return <div>Archive non trouvée</div>;
  }

  return (
    <div className="archive-detail-container">
      <div className="archive-detail-top">
        <h1 className="archive-detail-title">{archive.title}</h1>
        <p className="archive-detail-content">{archive.content}</p>
      </div>
      <div className="archive-detail-gallery">
        <DocumentGallery documents={archive.documents} />
      </div>
    </div>
  );
}
