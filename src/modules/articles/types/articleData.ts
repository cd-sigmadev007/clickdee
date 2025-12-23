/**
 * Articles Module Types
 */

export type ArticleCategory = 'all' | 'pest-identification' | 'prevention' | 'insights' | 'pest-control';

export interface TableOfContentsItem {
  id: string;
  label: string;
}

export interface ArticleContentData {
  headings: Array<{
    id: string;
    text: string;
  }>;
  paragraphs: Array<{
    headingId?: string;
    text: string;
  }>;
}

export interface Article {
  id: string;
  slug: string; // URL-friendly identifier
  title: string;
  date: string; // Format: "August 3, 2024"
  author: string;
  authorAvatar: string; // Path to avatar image
  image: string; // Path to article image
  heroImage?: string; // Path to hero image for single article page
  categories: ArticleCategory[]; // Can have multiple categories
  isFeatured?: boolean; // Featured articles appear first with special styling
  isPopular?: boolean; // Popular articles for sidebar
  isLatest?: boolean; // Latest articles for sidebar
  excerpt?: string; // Short description for listing pages
  readTime?: string; // e.g., "3 min read"
  tableOfContents?: TableOfContentsItem[]; // Table of contents items
  content?: ArticleContentData; // Article content structure
}

/**
 * Get article by slug
 */
export function getArticleBySlug(articles: Article[], slug: string): Article | undefined {
  return articles.find(article => article.slug === slug);
}

/**
 * Get articles filtered by category
 */
export function getArticlesByCategory(articles: Article[], category: ArticleCategory): Article[] {
  if (category === 'all') {
    return articles;
  }
  return articles.filter(article => article.categories.includes(category));
}

/**
 * Get featured articles
 */
export function getFeaturedArticles(articles: Article[]): Article[] {
  return articles.filter(article => article.isFeatured);
}

/**
 * Get popular articles (for now, returns first 5 articles)
 * TODO: Implement proper popularity logic based on views/clicks
 */
export function getPopularArticles(articles: Article[], limit: number = 5): Article[] {
  // For now, return first articles. Can be enhanced with popularity metrics later
  return articles.slice(0, limit);
}

/**
 * Get latest articles (sorted by date, most recent first)
 */
export function getLatestArticles(articles: Article[], limit: number = 5): Article[] {
  // Sort by date (assuming dates are in format "Month Day, Year")
  // For now, return articles in order (can be enhanced with date parsing)
  return articles.slice(0, limit);
}

/**
 * Filter articles by search query
 */
export function filterArticlesBySearch(articles: Article[], searchQuery: string): Article[] {
  if (!searchQuery.trim()) {
    return articles;
  }
  const query = searchQuery.toLowerCase();
  return articles.filter(article => 
    article.title.toLowerCase().includes(query) ||
    article.excerpt?.toLowerCase().includes(query) ||
    article.author.toLowerCase().includes(query)
  );
}

