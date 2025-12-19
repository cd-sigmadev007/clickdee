import React from 'react';
import { HeroBackground } from '@/components/HeroBackground';
import { Typography } from '@/components/Typography';

export const CompanyValuesHeroSection: React.FC = () => {
  return (
    <HeroBackground>
      <div className="flex flex-col gap-1 sm:gap-[5px] items-center justify-center w-full text-center relative z-10">
        <div className="bg-primary-100 flex items-start justify-center px-2.5 sm:px-[10px] py-1 sm:py-[5px] rounded-[10px]">
          <Typography variant="headline" weight="bold" className="text-primary-500">
            Core Values
          </Typography>
        </div>
        <Typography variant="headline" weight="bold" className="text-neutral-900">
          Our Foundation for Success
        </Typography>
        <Typography variant="s" weight="medium" className="text-neutral-500 text-center max-w-2xl">
          Our company is built on key values that shape everything we do.{' '}
          <br />
          Integrity, innovation, and dedication drive us to provide excellent service and build strong relationships.
        </Typography>
      </div>
    </HeroBackground>
  );
};

