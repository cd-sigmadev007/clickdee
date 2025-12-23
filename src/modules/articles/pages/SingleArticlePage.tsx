import React, { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { ArticleHeroSection, ArticleContent, TableOfContents, ArticleSidebar, RelatedArticlesGrid } from '../components';
import {
  getArticleBySlug,
  getPopularArticles,
  getLatestArticles,
  getAllArticles,
} from '../data/articlesDataLoader';
import { CTASection } from '@/modules/home/components';

const SingleArticlePage: React.FC = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const [sidebarTab, setSidebarTab] = React.useState<'popular' | 'latest'>('popular');

  if (!slug) {
    return <Navigate to="/articles" replace />;
  }

  const article = getArticleBySlug(slug);

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  // Get sidebar articles
  const sidebarArticles = useMemo(() => {
    if (sidebarTab === 'popular') {
      return getPopularArticles();
    }
    return getLatestArticles();
  }, [sidebarTab]);

  // Get related articles (exclude current article)
  const relatedArticles = useMemo(() => {
    return getAllArticles()
      .filter(a => a.id !== article.id)
      .slice(0, 9); // Get up to 9 articles for 3x3 grid
  }, [article.id]);

  const handleArticleClick = (clickedArticle: any) => {
    // Navigate to the clicked article
    navigate(`/articles/${clickedArticle.slug}`);
  };

  const handleTableOfContentsClick = (itemId: string) => {
    const element = document.getElementById(itemId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <ArticleHeroSection article={article} />

      {/* Main Content */}
      <div className="flex flex-col md:flex-col lg:flex-row gap-4 lg:gap-4 items-start justify-center px-4 sm:px-6 md:px-6 lg:px-20 py-12 relative shrink-0 w-full">
        {/* Left Sidebar - Table of Contents */}
        {article.tableOfContents && article.tableOfContents.length > 0 && (
          <div className="w-full md:w-full lg:w-auto lg:flex-shrink-0 lg:max-w-[200px]">
            <TableOfContents
              items={article.tableOfContents}
              onItemClick={handleTableOfContentsClick}
            />
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 min-w-0 w-full md:w-full lg:max-w-[600px]">
          <ArticleContent article={article} />
        </div>

        {/* Right Sidebar */}
        <div className="w-full md:w-full lg:w-[400px] lg:flex-shrink-0">
          <ArticleSidebar
            articles={sidebarArticles}
            activeTab={sidebarTab}
            onTabChange={setSidebarTab}
            onArticleClick={handleArticleClick}
            className="w-full"
          />
        </div>
      </div>

      {/* Related Articles */}
      <div className="px-4 sm:px-6 lg:px-20 py-12 relative shrink-0 w-full">
        <RelatedArticlesGrid
          articles={relatedArticles}
          onArticleClick={handleArticleClick}
        />
      </div>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default SingleArticlePage;

