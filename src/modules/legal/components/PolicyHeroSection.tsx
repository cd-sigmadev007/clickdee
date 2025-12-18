import React from 'react';
import { Typography, HeroBackground } from '@/components';

export interface PolicyHeroSectionProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  className?: string;
}

export const PolicyHeroSection: React.FC<PolicyHeroSectionProps> = ({
  title,
  subtitle,
  lastUpdated,
  className = '',
}) => {
  return (
    <HeroBackground className={`bg-neutral-10 ${className}`}>
      <div className="flex flex-col items-center text-center relative z-10">
        <Typography
          variant="headline"
          weight="bold"
          className="text-primary-500 mb-4"
        >
          {title}
        </Typography>
        <Typography
          variant="p"
          weight="bold"
          className="text-neutral-900 mb-4"
        >
          {subtitle}
        </Typography>
        <Typography
          variant="p"
          weight="medium"
          className="text-primary-500"
        >
          {lastUpdated}
        </Typography>
      </div>
    </HeroBackground>
  );
};
