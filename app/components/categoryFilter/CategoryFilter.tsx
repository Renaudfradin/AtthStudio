'use client';

import React from 'react';
import './categoryFilter.css';

type CategoryType = {
  id: string;
  title: string;
  slug: string;
};

type CategoryFilterProps = {
  categories: CategoryType[];
  selectedCategory: string | null;
  onSelectCategory: (slug: string | null) => void;
};

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="category-filter-row">
      <button
        className={`category-pill${!selectedCategory ? ' selected' : ''}`}
        onClick={() => onSelectCategory(null)}
        type="button"
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          className={`category-pill${selectedCategory === category.slug ? ' selected' : ''}`}
          onClick={() => onSelectCategory(category.slug)}
          type="button"
        >
          {category.title}
        </button>
      ))}
    </div>
  );
}
