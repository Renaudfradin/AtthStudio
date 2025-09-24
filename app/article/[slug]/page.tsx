import React from 'react';
import { callApi } from '@/utils/api';
import { Metadata } from 'next';
import ArticleContent from './ArticleContent';
import '../article.css';

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  let article: ArticleDetailType | null = null;

  try {
    const response: ArticleDetailType | { data: ArticleDetailType } =
      await callApi(`/api/article/${slug}`);
    if ('data' in response) {
      article = response.data;
    } else {
      article = response;
    }
  } catch (e) {
    console.error(e);
    article = null;
  }

  return {
    title: article?.title || slug,
    description: 'Article ATTHSTUDIO',
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <ArticleContent slug={slug} />;
}
