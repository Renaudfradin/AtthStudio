import React from 'react';
import { remark } from 'remark';
import html from 'remark-html';
import { callApi } from '@/utils/api';
import DocumentGallery from '@/app/components/documentGallery/DocumentGallery';
import { Metadata } from 'next';
import type { DocumentType } from '@/app/components/documentGallery/DocumentGallery';
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
    console.error(e);
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
    console.error(e);
    archive = null;
  }

  if (!archive) {
    return <div>Archive non trouvée</div>;
  }

  const processedContent = await remark()
    .use(html)
    .process(archive.content || '');
  const contentHtml = processedContent.toString();

  return (
    <div className="archive-detail-container">
      <div className="archive-detail-top">
        <h1 className="archive-detail-title">{archive.title}</h1>
        <div
          className="archive-detail-content"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
      <div className="archive-detail-gallery">
        <DocumentGallery documents={archive.documents} />
      </div>
    </div>
  );
}
