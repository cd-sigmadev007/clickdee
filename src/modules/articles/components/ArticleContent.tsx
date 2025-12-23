import React from 'react';
import { Article } from '../types/articleData';
import { Typography } from '@/components/Typography';
import { getArticleContentSections } from '../data/articlesDataLoader';

export interface ArticleContentProps {
  article: Article;
  className?: string;
}

export const ArticleContent: React.FC<ArticleContentProps> = ({
  article,
  className = '',
}) => {
  // Get content sections from article data
  const contentSections = getArticleContentSections(article);

  // If no content, show a message
  if (!contentSections || contentSections.length === 0) {
    return (
      <div className={`flex flex-col gap-5 items-start relative shrink-0 ${className}`}>
        <Typography variant="s" weight="medium" className="text-neutral-500">
          Content coming soon...
        </Typography>
      </div>
    );
  }

  // Map content sections to table of contents IDs if available
  const getSectionId = (heading: string, index: number): string => {
    if (article.tableOfContents && article.tableOfContents[index]) {
      return article.tableOfContents[index].id;
    }
    // Fallback: generate ID from heading text
    return heading
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  return (
    <div className={`flex flex-col gap-5 items-start relative shrink-0 ${className}`}>
      {contentSections.map((section, index) => {
        const sectionId = getSectionId(section.heading, index);
        return (
          <div key={index} id={sectionId} className="scroll-mt-20">
            <Typography
              variant="h4"
              weight="medium"
              className="text-neutral-900 mb-5"
            >
              {section.heading}
            </Typography>
            {section.paragraphs.map((paragraph, pIndex) => (
              <Typography
                key={pIndex}
                variant="s"
                weight="medium"
                className="text-neutral-500 mb-5"
              >
                {paragraph}
              </Typography>
            ))}
          </div>
        );
      })}
    </div>
  );
};

