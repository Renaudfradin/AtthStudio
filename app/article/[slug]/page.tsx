import React from 'react';
import { callApi } from '@/utils/api';
import '../article.css';

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

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  let article: ArticleDetailType | null = null;

  try {
    const response: ArticleDetailType | { data: ArticleDetailType } =
      await callApi(`/api/article/${params.slug}`);
    if ('data' in response) {
      article = response.data;
      console.log(article);
    } else {
      article = response;
    }
  } catch (e) {
    article = null;
  }

  if (!article) {
    return <div>article non trouvée</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <p>{article.time_read} minutes de lecture</p>
      <p>{article.active ? 'Actif' : 'Inactif'}</p>
      <p>{article.category_id}</p>
      <img src={article.image} alt={article.title} />
      <div>{article.document}</div>
    </div>
  );
}
