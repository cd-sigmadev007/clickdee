import React from 'react';
import { ArticleCategory } from '../types/articleData';

export interface CategoryFiltersProps {
  categories: Array<{ label: string; value: ArticleCategory }>;
  activeCategory: ArticleCategory;
  onCategoryChange: (category: ArticleCategory) => void;
  className?: string;
}

export const CategoryFilters: React.FC<CategoryFiltersProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
  className = '',
}) => {
  return (
    <div className={`flex flex-row items-center gap-[24px] ${className}`}>
      {categories.map((category) => {
        const isActive = activeCategory === category.value;
        return (
          <button
            key={category.value}
            onClick={() => onCategoryChange(category.value)}
            className={`
              font-medium text-s leading-[1.3] transition-colors
              ${isActive ? 'text-primary-500' : 'text-neutral-900'}
            `}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
};

