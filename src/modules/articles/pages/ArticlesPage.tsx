import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/Button';
import {
  ArticlesHeroSection,
  ArticleCard,
  ArticleSidebar,
  CategoryFilters,
  ArticleSearch,
} from '../components';
import {
  getArticlesByCategory,
  getPopularArticles,
  getLatestArticles,
  getArticlesPageData,
} from '../data/articlesDataLoader';
import { ArticleCategory } from '../types/articleData';
import chevronUpIcon from '@/assets/icons/heroicons_chevron-up.svg';
import { CTASection } from '@/modules/home/components';

// Get category options from JSON data
const articlesPageData = getArticlesPageData();
const categoryOptions: Array<{ label: string; value: ArticleCategory }> = articlesPageData.categories.map(
  (cat: { label: string; value: string }) => ({
    label: cat.label,
    value: cat.value as ArticleCategory,
  })
);

const ArticlesPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<ArticleCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarTab, setSidebarTab] = useState<'popular' | 'latest'>('popular');
  const sidebarRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Filter articles based on category and search
  const filteredArticles = useMemo(() => {
    let filtered = getArticlesByCategory(activeCategory);
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt?.toLowerCase().includes(query) ||
        article.author.toLowerCase().includes(query)
      );
    }
    return filtered;
  }, [activeCategory, searchQuery]);

  // Get sidebar articles based on active tab
  const sidebarArticles = useMemo(() => {
    if (sidebarTab === 'popular') {
      return getPopularArticles();
    }
    return getLatestArticles();
  }, [sidebarTab]);

  // Match search bar width to sidebar width on desktop
  useEffect(() => {
    const updateSearchWidth = () => {
      if (window.innerWidth >= 1024 && sidebarRef.current && searchRef.current) {
        const sidebarWidth = sidebarRef.current.offsetWidth;
        searchRef.current.style.width = `${sidebarWidth}px`;
      } else if (searchRef.current) {
        searchRef.current.style.width = '';
      }
    };

    updateSearchWidth();
    window.addEventListener('resize', updateSearchWidth);
    return () => window.removeEventListener('resize', updateSearchWidth);
  }, [sidebarArticles]);

  // All articles use the same view

  // Handle article click (navigate to article detail page)
  const handleArticleClick = (article: any) => {
    navigate(`/articles/${article.slug}`);
  };

  const handleShowMore = () => {
    // TODO: Implement pagination or load more functionality
    console.log('Show more clicked');
  };

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <ArticlesHeroSection
        highlightedTitle={articlesPageData.hero.highlightedTitle}
        title={articlesPageData.hero.title}
        description={articlesPageData.hero.description}
      />

      {/* Main Content */}
      <div className="flex flex-col gap-8 md:gap-[32px] items-start justify-center px-4 sm:px-6 md:px-6 lg:px-20 py-12 md:py-10 lg:py-12 relative shrink-0 w-full">
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row items-start md:items-start gap-4 md:gap-4 relative shrink-0 w-full">
          {/* Category Filters */}
          <div className="flex flex-row items-center self-stretch w-full md:flex-1 md:min-w-0">
            <CategoryFilters
              categories={categoryOptions}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              className="w-full md:w-auto flex-wrap md:flex-nowrap"
            />
          </div>

          {/* Search - matches sidebar width on desktop */}
          <div ref={searchRef} className="w-full md:w-auto md:flex-shrink-0 lg:flex-shrink-0">
            <ArticleSearch
              value={searchQuery}
              onChange={setSearchQuery}
              className="w-full md:h-[44px]"
            />
          </div>
        </div>

        {/* Articles List and Sidebar */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-6 items-start relative shrink-0 w-full">
          {/* Left Column - Articles List */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-6 lg:flex lg:flex-col lg:gap-[32px] items-stretch md:items-start relative shrink-0 w-full lg:flex-1 lg:min-w-0">
            {/* Articles */}
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onClick={() => handleArticleClick(article)}
              />
            ))}

            {/* Show More Button */}
            <div className="flex items-center relative shrink-0 md:col-span-2">
              <Button
                variant="outline"
                onClick={handleShowMore}
                className="flex items-center gap-[5px]"
                icon={
                  <img
                    src={chevronUpIcon}
                    alt=""
                    className="w-4 h-4 scale-y-[-100%]"
                  />
                }
              >
                Show more
              </Button>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div ref={sidebarRef} className="w-full lg:max-w-[35%]">
            <ArticleSidebar
              articles={sidebarArticles}
              activeTab={sidebarTab}
              onTabChange={setSidebarTab}
              onArticleClick={handleArticleClick}
              className="w-full"
            />
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
};

export default ArticlesPage;

