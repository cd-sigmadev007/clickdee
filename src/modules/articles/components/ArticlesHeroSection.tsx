import React from 'react';
import { Typography } from '@/components/Typography';
import { HeroBackground } from '@/components/HeroBackground';

export const ArticlesHeroSection: React.FC = () => {
  return (
    <HeroBackground>
      <div className="flex flex-col gap-[5px] items-center justify-center relative shrink-0 w-full">
        {/* Main Heading */}
        <div className="flex flex-col gap-[5px] items-center justify-center relative shrink-0 w-full">
          <div className="bg-primary-100 flex items-start justify-center px-2.5 py-[5px] relative rounded-[10px] shrink-0">
            <Typography variant="headline" weight="bold" className="text-primary-500">
              Explore insights
            </Typography>
          </div>
          <Typography variant="headline" weight="bold" className="text-neutral-900 text-center">
            from our experts
          </Typography>
        </div>

        {/* Subtitle */}
        <Typography
          variant="s"
          weight="medium"
          className="text-neutral-500 text-center mt-0"
        >
          Industry best practices, marketing news, case studies,
          <br />
          tips and tricks, plus much more.
        </Typography>
      </div>
    </HeroBackground>
  );
};

