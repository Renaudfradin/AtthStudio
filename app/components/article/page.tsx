import React from 'react';
import './article.css';

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

export default function Article({ article }: { article: ArticleDetailType }) {
  return (
    <div className="article-detail">
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
