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
    <div className="articles-page-wrapper">
      <div className="articles-header-row">
        <h1 className="articles-title">
          Terminados.<span className="articles-title-sub"> find my topic</span>
        </h1>
      </div>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="articles-grid">
        {filteredArticles.map((article: any) => (
          <div className="article-card" key={article.id}>
            <div className="article-card-img-wrapper">
              <img
                src={article.image}
                alt={article.title}
                className="article-card-img"
              />
            </div>
            <div className="article-card-content">
              <h2 className="article-card-title">
                <span className="article-card-title-bold">{article.title}</span>
              </h2>
              <div className="article-card-excerpt">
                {article.content?.slice(0, 120)}...
              </div>
              <div className="article-card-meta-row">
                <span className="article-card-meta-read">
                  {article.time_read} min de lecture
                </span>
                <span className="article-card-meta-dot">·</span>
                <Link
                  href={`/article/${article.slug}`}
                  className="article-card-link"
                >
                  Lire l’article
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
