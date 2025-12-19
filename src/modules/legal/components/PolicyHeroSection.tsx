import React from 'react';
import { Typography, HeroBackground } from '@/components';

export interface PolicyHeroSectionProps {
  title: string;
  subtitle: string;
  lastUpdated?: string;
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
      <div className="flex flex-col items-center text-center relative z-10 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-[120px] py-14 lg:py-14">
          <div className="flex flex-col gap-[5px] items-center justify-center">
            <Typography
              variant="headline"
              weight="bold"
              className="text-neutral-900"
            >
              {title}
            </Typography>
            <div className="bg-primary-100 flex items-start justify-center px-2.5 py-1.5 rounded-[10px]">
              <Typography
                variant="headline"
                weight="bold"
                className="text-primary-500"
              >
                {subtitle}
              </Typography>
            </div>
            {lastUpdated && <Typography
              variant="p"
              weight="medium"
              className="text-primary-500 lg:mt-[32px] mt-[24px]"
            >
              {lastUpdated}
            </Typography>}
          </div>
      </div>
    </HeroBackground>
  );
};
