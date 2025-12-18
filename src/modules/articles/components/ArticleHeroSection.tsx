import React from 'react';
import { Article } from '../types/articleData';
import { Typography } from '@/components/Typography';
import naturalPestControlHeroImage from '@/assets/images/natural-pest-control-hero.jpg';

export interface ArticleHeroSectionProps {
  article: Article;
}

export const ArticleHeroSection: React.FC<ArticleHeroSectionProps> = ({ article }) => {
  const heroImage = article.heroImage || naturalPestControlHeroImage;

  const categoryLabels: Record<string, string> = {
    'pest-identification': 'Pest Identification',
    'prevention': 'Prevention',
    'insights': 'Insights',
    'pest-control': 'Pest Control',
  };

  return (
    <div className="border-primary-500 border-b-[6px] flex flex-col gap-8 items-start px-4 sm:px-6 md:px-12 lg:px-20 xl:px-[120px] py-14 lg:py-14 relative shrink-0 w-full">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          alt={article.title}
          src={heroImage}
          className="absolute inset-0 max-w-none object-cover size-full"
        />
        <div className="absolute bg-[rgba(0,0,0,0.75)] inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        {/* Title */}
        <Typography
          variant="display"
          weight="bold"
          className="text-white mb-8"
        >
          {article.title}
        </Typography>

        {/* Categories */}
        <div className="flex gap-[10px] items-center mb-6">
          {article.categories.map((category) => {
            if (category === 'all') return null;
            return (
              <div
                key={category}
                className="bg-primary-200 border border-neutral-300 flex items-center px-[10px] py-[5px] relative rounded-[24px] shrink-0"
              >
                <Typography variant="xs" weight="medium" className="text-primary-500">
                  {categoryLabels[category] || category}
                </Typography>
              </div>
            );
          })}
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-5 items-start font-medium text-s leading-[1.3] text-neutral-200">
          <span>{article.date}</span>
          <span>{article.author}</span>
          {article.readTime && <span>{article.readTime}</span>}
        </div>
      </div>
    </div>
  );
};

