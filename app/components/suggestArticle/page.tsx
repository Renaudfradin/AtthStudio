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
      <h3>Articles suggérés :</h3>
      <ul>
        {suggestions.map((article: any) => (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <Link href={`/article/${article.slug}`}>Voir l'article</Link>
            <p>{article.time_read} minutes de lecture</p>
            <img src={article.image} alt={article.title} />
            <p>{article.content}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
