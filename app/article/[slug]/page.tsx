import React from 'react';
import { callApi } from '@/utils/api';
import { Metadata } from 'next';
import SuggestArticle from '@/app/components/suggestArticle/suggestArticle';
import { remark } from 'remark';
import html from 'remark-html';
import Image from 'next/image';
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

  if (!article) {
    return <div>Article non trouvée</div>;
  }

  const processedContent = await remark()
    .use(html)
    .process(article.content || '');
  const contentHtml = processedContent.toString();

  return (
    <div className="article-detail-page">
      <div className="article-detail-header">
        {' '}
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
            {article.category_id}
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
