import React from 'react';
import { callApi } from '@/utils/api';
import '../archive.css';
import DocumentGallery from '@/app/components/documentGallery/DocumentGallery';

type ArchiveDetailType = {
  id: string;
  title: string;
  slug: string;
  content: string;
  image: string;
  documents: any;
};

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
    <div>
      <h1>{archive.title}</h1>
      <p>{archive.content}</p>
      <img src={archive.image} alt={archive.title} />
      <DocumentGallery documents={archive.documents} />
    </div>
  );
}
