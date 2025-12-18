import React from 'react';
import { Article } from '../types/articleData';
import { Typography } from '@/components/Typography';
import arrowUpRightIcon from '@/assets/icons/iconamoon_arrow-up-1-light.svg';

export interface ArticleSidebarProps {
  articles: Article[];
  activeTab: 'popular' | 'latest';
  onTabChange: (tab: 'popular' | 'latest') => void;
  onArticleClick?: (article: Article) => void;
  className?: string;
}

export const ArticleSidebar: React.FC<ArticleSidebarProps> = ({
  articles,
  activeTab,
  onTabChange,
  onArticleClick,
  className = '',
}) => {
  return (
    <div className={`bg-white border border-neutral-200 flex flex-col gap-6 items-start p-6 relative rounded-[20px] shadow-[0px_10px_16px_0px_rgba(0,0,0,0.05)] w-full ${className}`}>
      {/* Tabs */}
      <div className="flex gap-[14px] items-center relative shrink-0 w-full">
        <div
          className={`
            ${activeTab === 'popular' ? 'bg-primary-100' : 'bg-white'}
            flex items-center px-[14px] py-2 relative rounded-[10px] shrink-0
          `}
        >
          <button
            onClick={() => onTabChange('popular')}
            className={`
              font-medium text-s leading-[1.3] transition-colors
              ${activeTab === 'popular' ? 'text-primary-500' : 'text-neutral-900'}
            `}
          >
            Popular
          </button>
        </div>
        <div
          className={`
            ${activeTab === 'latest' ? 'bg-primary-100' : 'bg-white'}
            flex items-center px-[14px] py-2 relative rounded-[10px] shrink-0
          `}
        >
          <button
            onClick={() => onTabChange('latest')}
            className={`
              font-medium text-s leading-[1.3] transition-colors
              ${activeTab === 'latest' ? 'text-primary-500' : 'text-neutral-900'}
            `}
          >
            Latest
          </button>
        </div>
      </div>

      {/* Article List */}
      <div className="flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        {articles.map((article) => (
          <button
            key={article.id}
            onClick={() => onArticleClick?.(article)}
            className="flex gap-[10px] items-center relative shrink-0 w-full text-left hover:opacity-70 transition-opacity"
          >
            <div className="relative shrink-0 size-5">
              <img
                src={arrowUpRightIcon}
                alt=""
                className="block max-w-none size-full"
              />
            </div>
            <Typography
              variant="xs"
              weight="medium"
              className="basis-0 grow min-h-px min-w-px relative shrink-0 text-neutral-800"
            >
              {article.title}
            </Typography>
          </button>
        ))}
      </div>
    </div>
  );
};

