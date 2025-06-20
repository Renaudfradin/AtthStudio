import React from 'react';
import { callApi } from '@/utils/api';
import '../article.css';
import { Metadata } from 'next';
import Article from '@/app/components/article/page';
import SuggestArticle from '@/app/components/suggestArticle/page';

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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  let article: ArticleDetailType | null = null;

  try {
    const response: ArticleDetailType | { data: ArticleDetailType } =
      await callApi(`/api/article/${params.slug}`);
    if ('data' in response) {
      article = response.data;
    } else {
      article = response;
    }
  } catch (e) {
    article = null;
  }

  return {
    title: article?.title || params.slug,
    description: 'Article ATTHSTUDIO',
  };
}

export default async function ArticlePage({
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
      <Article article={article} />
      <SuggestArticle article={article} />
    </div>
  );
}
