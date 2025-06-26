import Link from 'next/link';
import React from 'react';
import { callApi } from '@/utils/api';
import './archive.css';
import Image from 'next/image';

type ArchiveType = {
  id: string;
  title: string;
  slug: string;
  content: string;
  image: string;
};

type ArchivesApiResponse = ArchiveType[] | { data: ArchiveType[] };

export default async function Archive() {
  let archives: ArchiveType[] = [];
  try {
    const response: ArchivesApiResponse = await callApi('/api/archives');
    if (Array.isArray(response)) {
      archives = response;
    } else if (response && 'data' in response) {
      archives = response.data;
    }
  } catch (e) {
    archives = [];
  }

  return (
    <div>
      <h1>Archive</h1>
      {archives.map((archive: any) => (
        <div key={archive.id}>
          <h2>{archive.title}</h2>
          <Link href={`/archive/${archive.slug}`}>Voir l'archive</Link>
          <p>{archive.content}</p>
          <Image src={archive.image} alt="dddddd" width={300} height={300} />
        </div>
      ))}
    </div>
  );
}
