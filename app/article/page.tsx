'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { callApi } from '@/utils/api';
import CategoryFilter from '@/app/components/categoryFilter/CategoryFilter';
import Image from 'next/image';
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
  const [gridColumns, setGridColumns] = useState<number>(3);

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
        console.error(e);
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
        console.error(e);
        setCategories([]);
      }
    }
    fetchArticles();
    fetchCategories();
  }, []);

  const filteredArticles = selectedCategory
    ? articles.filter(
        (article: ArticleType) => article.category?.slug === selectedCategory,
      )
    : articles;

  return (
    <div className="articles-page-wrapper">
      <div className="articles-header-row">
        <h1 className="articles-title">
          Terminados.<span className="articles-title-sub"> find my topic</span>
        </h1>
      </div>
      <div className="articles-controls-row">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <div className="grid-layout-buttons">
          <button
            className={`grid-layout-btn ${gridColumns === 1 ? 'active' : ''}`}
            onClick={() => setGridColumns(1)}
            title="1 colonne"
          >
            <div className="grid-icon">
              <div className="grid-square single"></div>
            </div>
          </button>
          <button
            className={`grid-layout-btn ${gridColumns === 2 ? 'active' : ''}`}
            onClick={() => setGridColumns(2)}
            title="2 colonnes"
          >
            <div className="grid-icon">
              <div className="grid-square left"></div>
              <div className="grid-square right"></div>
            </div>
          </button>
          <button
            className={`grid-layout-btn ${gridColumns === 3 ? 'active' : ''}`}
            onClick={() => setGridColumns(3)}
            title="3 colonnes"
          >
            <div className="grid-icon">
              <div className="grid-square top-left"></div>
              <div className="grid-square top-right"></div>
              <div className="grid-square bottom-left"></div>
              <div className="grid-square bottom-right"></div>
            </div>
          </button>
        </div>
      </div>
      <div
        className="articles-grid"
        style={{ gridTemplateColumns: `repeat(${gridColumns}, 1fr)` }}
      >
        {filteredArticles.map((article: ArticleType) => (
          <div className="article-card" key={article.id}>
            <div className="article-card-img-wrapper">
              <Image
                src={article.image}
                alt={article.title}
                className="article-card-img"
                width={500}
                height={500}
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
