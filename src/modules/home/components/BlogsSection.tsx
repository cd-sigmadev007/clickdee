import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@/components';
import { ArticleCard } from '@/modules/articles/components';
import { getFeaturedArticles } from '@/modules/articles/data/articlesDataLoader';
import { Button } from '@/components/Button';
import chevronRightIcon from '@/assets/icons/heroicons_chevron-right.svg';

export const BlogsSection: React.FC = () => {
  const navigate = useNavigate();
  const featuredArticles = getFeaturedArticles().slice(0, 3); // Get top 3 featured articles

  const handleArticleClick = (slug: string) => {
    navigate(`/articles/${slug}`);
  };

  const handleViewAllClick = () => {
    navigate('/articles');
  };

  return (
    <div className="bg-white flex flex-col gap-8 md:gap-12 items-center justify-center px-4 sm:px-6 md:px-6 lg:px-20 py-12 md:py-16 lg:py-20 relative w-full">
      {/* Section Header */}
      <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
        <div className="bg-primary-100 flex items-start justify-center px-2.5 py-[5px] relative rounded-[10px] shrink-0">
          <Typography variant="headline" weight="bold" className="text-primary-500">
            Latest insights
          </Typography>
        </div>
        <Typography variant="h1" weight="bold" className="text-neutral-900 text-center">
          from our experts
        </Typography>
        <Typography
          variant="s"
          weight="medium"
          className="text-neutral-500 text-center max-w-2xl"
        >
          Industry best practices, marketing news, case studies, tips and tricks, plus much more.
        </Typography>
      </div>

      {/* Articles Grid */}
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch relative shrink-0 w-full">
        {featuredArticles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            onClick={() => handleArticleClick(article.slug)}
            forceVertical={true}
            className="w-full"
          />
        ))}
      </div>

      {/* View All Button */}
      <div className="flex items-center justify-center relative shrink-0">
        <Button
          variant="outline"
          onClick={handleViewAllClick}
          className="flex items-center gap-[5px]"
          icon={
            <img
              src={chevronRightIcon}
              alt=""
              className="w-4 h-4"
            />
          }
        >
          View all articles
        </Button>
      </div>
    </div>
  );
};

