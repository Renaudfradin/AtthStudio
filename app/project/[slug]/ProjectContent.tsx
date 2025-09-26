'use client';

import React from 'react';
import { useApiCache } from '@/hooks/useApiCache';
import { PERFORMANCE_CONFIG } from '@/lib/performance';
import DocumentGallery from '@/app/components/documentGallery/DocumentGallery';
import type { DocumentType } from '@/app/components/documentGallery/DocumentGallery';
import { remark } from 'remark';
import html from 'remark-html';
import { useEffect, useState } from 'react';

type ProjectDetailType = {
  id: string;
  title: string;
  slug: string;
  content: string;
  image: string;
  documents: DocumentType[];
};

type ProjectDetailResponse = ProjectDetailType | { data: ProjectDetailType };

interface ProjectContentProps {
  slug: string;
}

export default function ProjectContent({ slug }: ProjectContentProps) {
  const [contentHtml, setContentHtml] = useState<string>('');

  const { data, loading, error } = useApiCache<ProjectDetailResponse>(
    `/api/project/${slug}`,
    {
      ttl: PERFORMANCE_CONFIG.CACHE_DURATIONS.SINGLE_PROJECT,
      enabled: true,
      enablePolling: true,
    },
  );

  useEffect(() => {
    const processContent = async () => {
      if (data) {
        let project: ProjectDetailType;
        if ('data' in data) {
          project = data.data;
        } else {
          project = data;
        }

        if (project.content) {
          const processedContent = await remark()
            .use(html)
            .process(project.content);
          setContentHtml(processedContent.toString());
        }
      }
    };

    processContent();
  }, [data]);

  let project: ProjectDetailType | null = null;
  if (data) {
    if ('data' in data) {
      project = data.data;
    } else {
      project = data;
    }
  }

  if (loading || (!data && !error)) {
    return (
      <div className="project-detail-container">
        <div className="project-loading">
          <div className="loading-content">
            <div className="loading-spinner"></div>
            <p>Chargement du projet...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="project-detail-container">
        <div className="project-loading">
          <div className="loading-content">
            <div className="loading-spinner"></div>
            <p>Chargement du projet...</p>
          </div>
        </div>
      </div>
    );
  }

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
        <DocumentGallery documents={project.documents} columns={2} />
      </div>
    </div>
  );
}
