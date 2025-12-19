import React from 'react';
import { HeroBackground } from '@/components/HeroBackground';
import { Typography } from '@/components/Typography';
import { Button } from '@/components/Button';

export const AffiliateHeroSection: React.FC = () => {
  return (
    <HeroBackground>
      <div className="flex flex-col gap-5 items-center justify-center w-full relative z-10">
        {/* Title with badge */}
        <div className="flex flex-col gap-[5px] items-center justify-center">
          <div className="bg-primary-100 flex items-start justify-center px-[10px] py-[5px] rounded-[10px]">
            <Typography variant="headline" weight="bold" className="text-primary-500">
              Pay-Per-Lead & Pay-Per-Call
            </Typography>
          </div>
          <Typography variant="headline" weight="bold" className="text-neutral-900 text-center">
            Affiliate program
          </Typography>
        </div>

        {/* Description */}
        <Typography variant="s" weight="medium" className="text-neutral-500 text-center">
          Maximize your earnings with industry-leading Pay-Per-Lead & Pay-Per-Call affiliate program.
          <br />
          Join today and unlock your potential with high-conversion opportunities.
        </Typography>

        {/* CTA Button */}
        <Button variant="outline" className="border-neutral-900">
          Apply Now
        </Button>
      </div>
    </HeroBackground>
  );
};

