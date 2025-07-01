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
    <div className="archives">
      <div className="archives-header">
        <span className="archives-title underline">Archives.</span>
        <span className="archives-subtitle">inspire.kind.respect</span>
      </div>
      <div className="archives-grid">
        {archives.map((archive: any) => (
          <div className="archive-card" key={archive.id}>
            <Link href={`/archive/${archive.slug}`}>
              <div className="archive-image-wrapper">
                <Image
                  src={archive.image}
                  alt={archive.title}
                  width={120}
                  height={120}
                  className="archive-image"
                />
              </div>
              <div className="archive-title">{archive.title}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
