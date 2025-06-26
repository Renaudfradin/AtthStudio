'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { callApi } from '@/utils/api';
import CategoryFilter from '@/app/components/categoryFilter/CategoryFilter';
import './article.css';

type ArticleType = {
  id: string;
  title: string;
  slug: string;
  content: string;
  time_read: number;
  image: string;
  category?: { id: string; slug: string; title: string };
};

type CategoryType = {
  id: string;
  title: string;
  slug: string;
};

type ArticlesApiResponse = ArticleType[] | { data: ArticleType[] };
type CategoriesApiResponse = CategoryType[] | { data: CategoryType[] };

export default function Article() {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response: ArticlesApiResponse = await callApi('/api/articles');
        if (Array.isArray(response)) {
          setArticles(response);
        } else if (response && 'data' in response) {
          setArticles(response.data);
        }
      } catch (e) {
        setArticles([]);
      }
    }
    async function fetchCategories() {
      try {
        const response: CategoriesApiResponse =
          await callApi('/api/categories');
        if (Array.isArray(response)) {
          setCategories(response);
        } else if (response && 'data' in response) {
          setCategories(response.data);
        }
      } catch (e) {
        setCategories([]);
      }
    }
    fetchArticles();
    fetchCategories();
  }, []);

  const filteredArticles = selectedCategory
    ? articles.filter(
        (article: any) => article.category?.slug === selectedCategory,
      )
    : articles;

  return (
    <div>
      <h1>Article</h1>

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {filteredArticles.map((article: any) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.category?.title}</p>
          <Link href={`/article/${article.slug}`}>Voir l'article</Link>
          <p>{article.time_read} minutes de lecture</p>
          <img src={article.image} alt={article.title} />
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
}
