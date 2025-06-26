'use client';

import React from 'react';

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
    <div>
      <h2>Catégories</h2>
      <button
        onClick={() => onSelectCategory(null)}
        style={{
          marginRight: 8,
          fontWeight: !selectedCategory ? 'bold' : 'normal',
        }}
      >
        Toutes
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.slug)}
          style={{
            marginRight: 8,
            fontWeight: selectedCategory === category.slug ? 'bold' : 'normal',
          }}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
}
