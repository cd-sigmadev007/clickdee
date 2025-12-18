import React from 'react';
import { Article } from '../types/articleData';
import { ArticleCard } from './ArticleCard';
import { Typography } from '@/components/Typography';

export interface RelatedArticlesGridProps {
  articles: Article[];
  onArticleClick?: (article: Article) => void;
  className?: string;
}

export const RelatedArticlesGrid: React.FC<RelatedArticlesGridProps> = ({
  articles,
  onArticleClick,
  className = '',
}) => {
  return (
    <div className={`flex flex-col gap-8 items-start justify-center relative shrink-0 w-full ${className}`}>
      <Typography variant="h3" weight="medium" className="text-primary-500">
        Related Articles
      </Typography>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            onClick={() => onArticleClick?.(article)}
            forceVertical={true}
          />
        ))}
      </div>
    </div>
  );
};

