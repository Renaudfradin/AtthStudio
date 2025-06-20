import Link from 'next/link';
import React from 'react';
import { callApi } from '@/utils/api';
import './article.css';
import { Metadata } from 'next';

type ArticleType = {
  id: string;
  title: string;
  slug: string;
  content: string;
  time_read: number;
  image: string;
};

type CategoryType = {
  id: string;
  title: string;
  slug: string;
};

type ArticlesApiResponse = ArticleType[] | { data: ArticleType[] };
type CategoriesApiResponse = CategoryType[] | { data: CategoryType[] };

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Articles ATTHSTUDIO',
};

export default async function Article() {
  let articles: ArticleType[] = [];
  let categories: CategoryType[] = [];
  try {
    const response: ArticlesApiResponse = await callApi('/api/articles');
    if (Array.isArray(response)) {
      articles = response;
    } else if (response && 'data' in response) {
      articles = response.data;
    }
    console.log(articles);
  } catch (e) {
    articles = [];
  }

  try {
    const response: CategoriesApiResponse = await callApi('/api/categories');
    if (Array.isArray(response)) {
      categories = response;
    } else if (response && 'data' in response) {
      categories = response.data;
    }
    console.log(categories);
  } catch (e) {
    categories = [];
  }

  return (
    <div>
      <h1>Article</h1>

      <div>
        <h2>Catégories</h2>
        {categories.map((category: any) => (
          <Link key={category.id} href={`/category/${category.slug}`}>
            {category.title}
          </Link>
        ))}
      </div>

      {articles.map((article: any) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <Link href={`/article/${article.slug}`}>Voir l'article</Link>
          <p>{article.time_read} minutes de lecture</p>
          <img src={article.image} alt={article.title} />
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
}
