import React from 'react';
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
  document: any;
};

import { callApi } from '@/utils/api';
import Link from 'next/link';

async function getSuggestedArticles(categoryId: string, excludeId: string) {
  const response = await callApi(
    `/api/articles?category_id=${categoryId}&limit=4`,
  );
  let articles: ArticleDetailType[] = [];

  if ('data' in response) {
    articles = response.data;
  } else {
    articles = response;
  }

  return articles.filter((a) => a.id !== excludeId).slice(0, 3);
}

export default async function SuggestArticle({
  article,
}: {
  article: ArticleDetailType;
}) {
  const suggestions = await getSuggestedArticles(
    article.category_id,
    article.id,
  );

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
        {suggestions.map((a: any) => (
          <div className="suggest-article-card" key={a.id}>
            <div className="suggest-article-img-wrapper">
              <img
                src={a.image}
                alt={a.title}
                className="suggest-article-img"
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
                  Lire l’article ↗
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
