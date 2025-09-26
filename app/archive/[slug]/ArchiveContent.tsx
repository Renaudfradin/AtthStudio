'use client';

import React, { useEffect, useState } from 'react';
import { useApiCache } from '@/hooks/useApiCache';
import { PERFORMANCE_CONFIG } from '@/lib/performance';
import DocumentGallery from '@/app/components/documentGallery/DocumentGallery';
import type { DocumentType } from '@/app/components/documentGallery/DocumentGallery';
import { remark } from 'remark';
import html from 'remark-html';

type ArchiveDetailType = {
  id: string;
  title: string;
  slug: string;
  content: string;
  image: string;
  documents: DocumentType[];
};

type ArchiveDetailResponse = ArchiveDetailType | { data: ArchiveDetailType };

interface ArchiveContentProps {
  slug: string;
}

export default function ArchiveContent({ slug }: ArchiveContentProps) {
  const [contentHtml, setContentHtml] = useState<string>('');
  const { data, loading, error } = useApiCache<ArchiveDetailResponse>(
    `/api/archive/${slug}`,
    {
      ttl: PERFORMANCE_CONFIG.CACHE_DURATIONS.SINGLE_ARTICLE,
      enabled: true,
      enablePolling: true,
    },
  );

  // Traitement du contenu Markdown
  useEffect(() => {
    const processContent = async () => {
      if (data) {
        let archive: ArchiveDetailType;
        if ('data' in data) {
          archive = data.data;
        } else {
          archive = data;
        }

        if (archive.content) {
          const processedContent = await remark()
            .use(html)
            .process(archive.content);
          setContentHtml(processedContent.toString());
        }
      }
    };

    processContent();
  }, [data]);

  // Traitement des données
  let archive: ArchiveDetailType | null = null;
  if (data) {
    if ('data' in data) {
      archive = data.data;
    } else {
      archive = data;
    }
  }

  // État de chargement
  if (loading || (!data && !error)) {
    return (
      <div className="archive-detail-container">
        <div className="archive-loading">
          <div className="loading-content">
            <div className="loading-spinner"></div>
            <p>Chargement de l&apos;archive...</p>
          </div>
        </div>
      </div>
    );
  }

  // Vérification de sécurité finale
  if (!archive) {
    return (
      <div className="archive-detail-container">
        <div className="archive-loading">
          <div className="loading-content">
            <div className="loading-spinner"></div>
            <p>Chargement de l&apos;archive...</p>
          </div>
        </div>
      </div>
    );
  }

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
        <DocumentGallery documents={archive.documents} columns={3} />
      </div>
    </div>
  );
}
