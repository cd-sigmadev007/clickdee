import React from 'react';
import { Article } from '../types/articleData';
import { Typography } from '@/components/Typography';
import chevronRightIcon from '@/assets/icons/heroicons_chevron-right.svg';

export interface ArticleCardProps {
  article: Article;
  onClick?: () => void;
  className?: string;
  forceVertical?: boolean; // Force vertical layout (image on top, content below)
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onClick,
  className = '',
  forceVertical = false,
}) => {
  return (
    <div
      className={`group flex flex-col ${forceVertical ? '' : 'lg:flex-row'} items-start ${forceVertical ? '' : 'lg:items-center'} relative rounded-[10px] ${forceVertical ? 'shadow-[0px_10px_16px_0px_rgba(0,0,0,0.05)]' : ''} ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {/* Image */}
      <div className={`h-[220px] relative rounded-[20px] shrink-0 w-full ${forceVertical ? '' : 'lg:w-[270px]'} overflow-hidden`}>
        <img
          alt={article.title}
          src={article.image}
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full"
        />
        <div className="absolute bg-[rgba(0,112,255,0.5)] inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <img
            src={chevronRightIcon}
            alt=""
            className="relative shrink-0 size-12 brightness-0 invert"
          />
        </div>
      </div>

      {/* Content */}
      <div className={`flex p-4 h-full justify-between flex-col gap-4 ${forceVertical ? '' : 'lg:p-[24px]'} items-start relative w-full`}>
        {/* Date */}
        <Typography variant="2xs" weight="medium" className="text-neutral-500">
          {article.date}
        </Typography>

        {/* Title */}
        <Typography
          variant="h4"
          weight="medium"
          className="min-w-full text-neutral-900 group-hover:text-primary-500 transition-colors"
        >
          {article.title}
        </Typography>

        {/* Categories */}
        <div className="flex gap-[10px] items-center">
          {article.categories.map((category) => {
            // Skip 'all' category from display
            if (category === 'all') return null;
            
            const categoryLabels: Record<string, string> = {
              'pest-identification': 'Pest Identification',
              'prevention': 'Prevention',
              'insights': 'Insights',
              'pest-control': 'Pest Control',
            };

            return (
              <div
                key={category}
                className="bg-white border border-neutral-300 flex items-center px-[10px] py-[5px] relative rounded-[24px] shrink-0"
              >
                <Typography variant="xs" weight="medium" className="text-neutral-500">
                  {categoryLabels[category] || category}
                </Typography>
              </div>
            );
          })}
        </div>

        {/* Author */}
        <div className="flex gap-1.5 items-center rounded-[24px]">
          <img
            src={article.authorAvatar}
            alt={article.author}
            className="relative shrink-0 size-6 rounded-full object-cover"
          />
          <Typography variant="xs" weight="medium" className="text-neutral-500">
            {article.author}
          </Typography>
        </div>
      </div>

    </div>
  );
};

