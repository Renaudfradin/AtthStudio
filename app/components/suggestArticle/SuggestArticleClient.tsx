'use client';

import React from 'react';
import { useApiCache } from '@/hooks/useApiCache';
import { PERFORMANCE_CONFIG } from '@/lib/performance';
import Link from 'next/link';
import Image from 'next/image';
import './suggestArticle.css';

type ArticleDetailType = {
  id: string;
  title: string;
  slug: string;
  content: string;
  image: string;
  time_read: number;
  category_id: string;
  active: boolean;
};

type SuggestArticlesResponse =
  | ArticleDetailType[]
  | { data: ArticleDetailType[] };

interface SuggestArticleClientProps {
  article: ArticleDetailType;
}

export default function SuggestArticleClient({
  article,
}: SuggestArticleClientProps) {
  const { data } = useApiCache<SuggestArticlesResponse>(
    `/api/suggest-articles/${article.category_id}`,
    {
      ttl: PERFORMANCE_CONFIG.CACHE_DURATIONS.ARTICLES,
      enabled: true,
      enablePolling: true,
    },
  );

  // Traitement des données
  let articles: ArticleDetailType[] = [];
  if (data) {
    if (Array.isArray(data)) {
      articles = data;
    } else if ('data' in data) {
      articles = data.data;
    }
  }

  // Filtrer les suggestions (exclure l'article actuel et limiter à 3)
  const suggestions = articles.filter((a) => a.id !== article.id).slice(0, 3);

  if (!suggestions || suggestions.length === 0) {
    return null;
  }

  return (
    <div className="suggest-articles">
      <div className="suggest-articles-header">
        <span className="suggest-articles-title">Mes autres articles.</span>
        <span className="suggest-articles-sub">find my topic</span>
      </div>
      <div className="suggest-articles-list">
        {suggestions.map((a: ArticleDetailType) => (
          <div className="suggest-article-card" key={a.id}>
            <div className="suggest-article-img-wrapper">
              <Image
                alt={a.title}
                className="suggest-article-img"
                src={a.image}
                width={500}
                height={500}
              />
            </div>
            <div className="suggest-article-content">
              <div className="suggest-article-title">{a.title}</div>
              <div className="suggest-article-excerpt">
                {a.content?.slice(0, 120)}...
              </div>
              <div className="suggest-article-meta">
                <span className="suggest-article-read">
                  {a.time_read}m de lecture
                </span>
                <Link
                  className="suggest-article-link"
                  href={`/article/${a.slug}`}
                >
                  Lire l&apos;article ↗
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
