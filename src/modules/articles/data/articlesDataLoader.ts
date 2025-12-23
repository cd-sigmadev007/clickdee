import articlesDatabase from './articlesDatabase.json';
import { Article, ArticleCategory, TableOfContentsItem } from '../types/articleData';

// Article images
import naturalPestControlImage from '@/assets/images/articles/natural-pest-control-remedies.jpg';
import naturalPestControlHeroImage from '@/assets/images/natural-pest-control-hero.jpg';
import commonHouseholdPestsImage from '@/assets/images/articles/common-household-pests.jpg';
import rodentProofingImage from '@/assets/images/articles/rodent-proofing-home.jpg';
import dayInLifeExterminatorImage from '@/assets/images/articles/day-in-life-exterminator.jpg';
import climateChangeImage from '@/assets/images/articles/climate-change-pest-infestations.jpg';
import authorAvatarImage from '@/assets/images/articles/author-avatar.jpg';

// Image mapping
const imageMap: Record<string, string> = {
  'natural-pest-control-remedies.jpg': naturalPestControlImage,
  'natural-pest-control-hero.jpg': naturalPestControlHeroImage,
  'common-household-pests.jpg': commonHouseholdPestsImage,
  'rodent-proofing-home.jpg': rodentProofingImage,
  'day-in-life-exterminator.jpg': dayInLifeExterminatorImage,
  'climate-change-pest-infestations.jpg': climateChangeImage,
  'author-avatar.jpg': authorAvatarImage,
};

// Helper function to resolve image path
function resolveImage(imageName: string): string {
  return imageMap[imageName] || imageName;
}

// Convert JSON article data to Article type
function convertArticleData(articleData: any): Article {
  return {
    id: articleData.id,
    slug: articleData.slug,
    title: articleData.title,
    date: articleData.date,
    author: articleData.author,
    authorAvatar: resolveImage(articleData.authorAvatar),
    image: resolveImage(articleData.image),
    heroImage: articleData.heroImage ? resolveImage(articleData.heroImage) : undefined,
    categories: articleData.categories as ArticleCategory[],
    isFeatured: articleData.isFeatured || false,
    isPopular: articleData.isPopular || false,
    isLatest: articleData.isLatest || false,
    excerpt: articleData.excerpt,
    readTime: articleData.readTime,
    tableOfContents: articleData.tableOfContents as TableOfContentsItem[] | undefined,
    content: articleData.content ? {
      headings: articleData.content.sections.map((section: any, index: number) => ({
        id: articleData.tableOfContents?.[index]?.id || section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''),
        text: section.heading,
      })),
      paragraphs: articleData.content.sections.flatMap((section: any) =>
        section.paragraphs.map((paragraph: string) => ({
          headingId: section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''),
          text: paragraph,
        }))
      ),
    } : undefined,
  };
}

/**
 * Get all articles
 */
export function getAllArticles(): Article[] {
  return articlesDatabase.articles.map(convertArticleData);
}

/**
 * Get article by slug
 */
export function getArticleBySlug(slug: string): Article | undefined {
  const articleData = articlesDatabase.articles.find((article: any) => article.slug === slug);
  return articleData ? convertArticleData(articleData) : undefined;
}

/**
 * Get articles filtered by category
 */
export function getArticlesByCategory(category: ArticleCategory): Article[] {
  const articles = getAllArticles();
  if (category === 'all') {
    return articles;
  }
  return articles.filter(article => article.categories.includes(category));
}

/**
 * Get featured articles
 */
export function getFeaturedArticles(): Article[] {
  return getAllArticles().filter(article => article.isFeatured);
}

/**
 * Get popular articles (returns articles marked as popular)
 */
export function getPopularArticles(limit: number = 5): Article[] {
  const popularArticles = getAllArticles().filter(article => article.isPopular);
  return popularArticles.slice(0, limit);
}

/**
 * Get latest articles (returns articles marked as latest, sorted by date if available)
 */
export function getLatestArticles(limit: number = 5): Article[] {
  const latestArticles = getAllArticles().filter(article => article.isLatest);
  // Sort by date if available (most recent first)
  // For now, return in order they appear in the array
  return latestArticles.slice(0, limit);
}

/**
 * Filter articles by search query
 */
export function filterArticlesBySearch(searchQuery: string): Article[] {
  if (!searchQuery.trim()) {
    return getAllArticles();
  }
  const query = searchQuery.toLowerCase();
  const articles = getAllArticles();
  return articles.filter(article =>
    article.title.toLowerCase().includes(query) ||
    article.excerpt?.toLowerCase().includes(query) ||
    article.author.toLowerCase().includes(query)
  );
}

/**
 * Get articles page data
 */
export function getArticlesPageData() {
  return articlesDatabase.articlesPage;
}

/**
 * Get article content sections for rendering
 */
export function getArticleContentSections(article: Article): Array<{ heading: string; paragraphs: string[] }> {
  if (!article.content) {
    return [];
  }

  // Group paragraphs by heading
  const sections: Array<{ heading: string; paragraphs: string[] }> = [];

  // Create sections from headings
  article.content.headings.forEach((heading) => {
    sections.push({
      heading: heading.text,
      paragraphs: [],
    });
  });

  // Assign paragraphs to their respective headings
  article.content.paragraphs.forEach((paragraph) => {
    if (paragraph.headingId) {
      // Find the section that matches this headingId
      const sectionIndex = article.content!.headings.findIndex((h) => {
        const headingId = h.text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
        return headingId === paragraph.headingId;
      });
      
      if (sectionIndex >= 0 && sections[sectionIndex]) {
        sections[sectionIndex].paragraphs.push(paragraph.text);
      }
    } else {
      // If no headingId, add to the last section
      if (sections.length > 0) {
        sections[sections.length - 1].paragraphs.push(paragraph.text);
      }
    }
  });

  return sections;
}

