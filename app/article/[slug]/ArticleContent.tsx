'use client';

import React, { useEffect, useState } from 'react';
import { useApiCache } from '@/hooks/useApiCache';
import { PERFORMANCE_CONFIG } from '@/lib/performance';
import SuggestArticle from '@/app/components/suggestArticle/suggestArticle';
import { remark } from 'remark';
import html from 'remark-html';
import Image from 'next/image';

type ArticleDetailType = {
  id: string;
  title: string;
  slug: string;
  content: string;
  image: string;
  time_read: number;
  category_id: string;
  category_name: string;
  active: boolean;
};

type ArticleDetailResponse = ArticleDetailType | { data: ArticleDetailType };

interface ArticleContentProps {
  slug: string;
}

export default function ArticleContent({ slug }: ArticleContentProps) {
  const [contentHtml, setContentHtml] = useState<string>('');

  const { data, loading, error } = useApiCache<ArticleDetailResponse>(
    `/api/article/${slug}`,
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
        let article: ArticleDetailType;
        if ('data' in data) {
          article = data.data;
        } else {
          article = data;
        }

        if (article.content) {
          const processedContent = await remark()
            .use(html)
            .process(article.content);
          setContentHtml(processedContent.toString());
        }
      }
    };

    processContent();
  }, [data]);

  // Traitement des données
  let article: ArticleDetailType | null = null;
  if (data) {
    if ('data' in data) {
      article = data.data;
    } else {
      article = data;
    }
  }

  // État de chargement
  if (loading || (!data && !error)) {
    return (
      <div className="article-detail-page">
        <div className="article-loading">
          <div className="loading-content">
            <div className="loading-spinner"></div>
            <p>Chargement de l&apos;article...</p>
          </div>
        </div>
      </div>
    );
  }

  // Vérification de sécurité finale
  if (!article) {
    return (
      <div className="article-detail-page">
        <div className="article-loading">
          <div className="loading-content">
            <div className="loading-spinner"></div>
            <p>Chargement de l&apos;article...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="article-detail-page">
      <div className="article-detail-header">
        <div className="article-detail-header-img-wrapper">
          <Image
            src={article.image}
            alt={article.title}
            className="article-detail-header-img"
            width={500}
            height={500}
          />
        </div>
        <div className="article-detail-header-meta-row">
          <span className="article-detail-category-badge">
            {article.category_name}
          </span>
          <span className="article-detail-time-read">
            {article.time_read}m de lecture
          </span>
        </div>
        <div className="article-detail-header-content">
          <h1 className="article-detail-title">
            <span>{article.title}</span>
          </h1>
          <div className="article-detail-author">Par Annie, UX Designer</div>
        </div>
      </div>
      <div className="article-detail-body">
        <div
          className="article-detail-content"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
      <div className="article-detail-suggest">
        <SuggestArticle article={article} />
      </div>
    </div>
  );
}
