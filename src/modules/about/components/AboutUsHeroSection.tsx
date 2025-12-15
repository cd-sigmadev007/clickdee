import React from 'react';
import { HeroBackground } from '@/components/HeroBackground';
import { Typography } from '@/components/Typography';

export const AboutUsHeroSection: React.FC = () => {
  return (
    <HeroBackground>
      <div className="flex flex-col gap-4 sm:gap-6 items-center justify-center w-full text-center relative z-10">
        {/* Headline */}
        <div className="flex flex-col gap-1 sm:gap-[5px] items-center justify-center w-full">
          {/* First line with blue pill background */}
          <div className="bg-primary-100 flex items-start justify-center px-2.5 sm:px-[10px] py-1 sm:py-[5px] rounded-[10px]">
            <Typography 
              variant="headline" 
              weight="bold" 
              className="text-primary-500 text-center md:text-h1"
            >
              From startup to
            </Typography>
          </div>
          
          {/* Second line - large headline */}
          <Typography 
            variant="headline" 
            weight="bold" 
            className="text-neutral-900 text-center md:text-h1"
          >
            Lead Generation Leaders
          </Typography>
        </div>
        
        {/* Description */}
        <Typography 
          variant="p" 
          weight="regular" 
          className="text-neutral-500 text-center max-w-2xl"
        >
          Clickdee brings together a diverse team of experts united by a common goal: to help businesses thrive in a competitive marketplace.
        </Typography>
      </div>
    </HeroBackground>
  );
};
