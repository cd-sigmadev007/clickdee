import React from 'react';
import { Typography } from '@/components/Typography';
import { HeroBackground } from '@/components/HeroBackground';

export interface ArticlesHeroSectionProps {
  highlightedTitle: string;
  title: string;
  description: string;
}

export const ArticlesHeroSection: React.FC<ArticlesHeroSectionProps> = ({
  highlightedTitle,
  title,
  description,
}) => {
  return (
    <HeroBackground>
      <div className="flex flex-col gap-[5px] items-center justify-center relative shrink-0 w-full">
        {/* Main Heading */}
        <div className="flex flex-col gap-[5px] items-center justify-center relative shrink-0 w-full">
          <div className="bg-primary-100 flex items-start justify-center px-2.5 py-[5px] relative rounded-[10px] shrink-0">
            <Typography variant="headline" weight="bold" className="text-primary-500">
              {highlightedTitle}
            </Typography>
          </div>
          <Typography variant="headline" weight="bold" className="text-neutral-900 text-center">
            {title}
          </Typography>
        </div>

        {/* Subtitle */}
        <Typography
          variant="s"
          weight="medium"
          className="text-neutral-500 text-center mt-0"
        >
          {description.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < description.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </Typography>
      </div>
    </HeroBackground>
  );
};

