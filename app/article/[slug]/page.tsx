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
    console.error(e);
    article = null;
  }

  return {
    title: article?.title || params.slug,
    description: 'Article ATTHSTUDIO',
  };
}

import { remark } from 'remark';
import html from 'remark-html';

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
          <img
            src={article.image}
            alt={article.title}
            className="article-detail-header-img"
          />
        </div>
        <div className="article-detail-header-meta-row">
          <span className="article-detail-category-badge">
            {article.category_id}
          </span>
          <span className="article-detail-time-read">
            {article.time_read}mn de lecture
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
