import React from 'react';
import { HeroBackground } from '@/components/HeroBackground';
import { Typography } from '@/components';
import { Button } from '@/components/Button';

export const PartnersHeroSection: React.FC = () => {
  return (
    <HeroBackground>
      <div className="flex flex-col gap-4 sm:gap-6 items-center justify-center w-full text-center relative z-10">
        {/* Title */}
        <div className="flex flex-col gap-2.5 items-center justify-center w-full">
          <Typography variant="headline" weight="bold" className="text-neutral-900 text-center">
            Partner with Clickdee to unlock
          </Typography>
          <Typography variant="headline" weight="bold" className="text-primary-500 text-center">
            Growth Opportunities
          </Typography>
        </div>
        
        {/* Description */}
        <Typography 
          variant="p" 
          weight="medium" 
          className="text-neutral-500 text-center max-w-2xl"
        >
          Clickdee is your trusted partner in lead generation. We provide high-quality, exclusive leads that help your business grow and succeed in the competitive home services market.
        </Typography>
        
        {/* CTA Button */}
        <Button variant="outline" className="mt-2">
          Visit Partner Dashboard
        </Button>
      </div>
    </HeroBackground>
  );
};
