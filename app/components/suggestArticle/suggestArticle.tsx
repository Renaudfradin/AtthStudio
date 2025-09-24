import React from 'react';
import SuggestArticleClient from './SuggestArticleClient';
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

export default function SuggestArticle({
  article,
}: {
  article: ArticleDetailType;
}) {
  return <SuggestArticleClient article={article} />;
}
