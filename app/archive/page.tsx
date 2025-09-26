'use client';

import Link from 'next/link';
import React from 'react';
import { useApiCache } from '@/hooks/useApiCache';
import { PERFORMANCE_CONFIG } from '@/lib/performance';
import Image from 'next/image';
import './archive.css';

type ArchiveType = {
  id: string;
  title: string;
  slug: string;
  content: string;
  image: string;
};

type ArchivesApiResponse = ArchiveType[] | { data: ArchiveType[] };

export default function Archive() {
  const { data } = useApiCache<ArchivesApiResponse>('/api/archives', {
    ttl: PERFORMANCE_CONFIG.CACHE_DURATIONS.ARTICLES,
    enabled: true,
    enablePolling: true,
  });

  let archives: ArchiveType[] = [];
  if (data) {
    if (Array.isArray(data)) {
      archives = data;
    } else if ('data' in data) {
      archives = data.data;
    }
  }

  return (
    <div className="archives">
      <div className="archives-header">
        <span className="archives-title underline">Archives.</span>
        <span className="archives-subtitle">inspire.kind.respect</span>
      </div>
      <div className="archives-grid">
        {archives.map((archive: ArchiveType) => (
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
