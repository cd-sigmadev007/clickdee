import React from 'react';
import { Button } from '@/components/Button';
import { HeroBackground } from '@/components/HeroBackground';
import { ScrollingBanner } from '@/components/ScrollingBanner';
import { HeroHeadline } from './HeroHeadline';
import { HeroMap } from './HeroMap';
import checkIcon from '@/assets/icons/gravity-ui_check.svg';
import chevronLeftIcon from '@/assets/icons/heroicons_chevron-left.svg';

export const HeroSection: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <HeroBackground data-node-id="1:13983">
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[32px] items-center justify-center w-full relative z-10" data-node-id="1:14033">
        <HeroHeadline />

        {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full sm:w-auto" data-node-id="1:14039">
          <Button variant="primary" className="flex items-center justify-center gap-[5px] w-full sm:w-auto">
            Get Leads Now
            <img src={chevronLeftIcon} alt="" className="w-4 h-4 rotate-180 brightness-0 invert" data-node-id="1:14042" />
          </Button>
          <Button variant="outline" className="w-full sm:w-auto">
            How it Works?
          </Button>
        </div>
        
        {/* Checkmarks */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4 w-full max-w-[450px]" data-node-id="1:14046">
          <div className="flex gap-[5px] items-center justify-center sm:justify-start" data-node-id="1:14047">
            <img src={checkIcon} alt="" className="w-4 h-4 flex-shrink-0" data-node-id="1:14048" />
            <p className="font-medium text-p text-neutral-500 text-center sm:text-left">
              Leads available in 50 States
            </p>
          </div>
          <div className="flex gap-[5px] items-center justify-center sm:justify-start" data-node-id="1:14051">
            <img src={checkIcon} alt="" className="w-4 h-4 flex-shrink-0" data-node-id="1:14052" />
            <p className="font-medium text-p text-neutral-500 text-center sm:text-left">
              100% Exclusive Leads
            </p>
          </div>
          <div className="flex gap-[5px] items-center justify-center sm:justify-start" data-node-id="1:14055">
            <img src={checkIcon} alt="" className="w-4 h-4 flex-shrink-0" data-node-id="1:14056" />
            <p className="font-medium text-p text-neutral-500 text-center sm:text-left">
              Top-tier leads from SEO & our web portfolio
            </p>
          </div>
        </div>
      </div>
      </HeroBackground>
      
      {/* Hero Map */}
      <HeroMap />
      
      {/* Scrolling Banner */}
      <ScrollingBanner />
    </div>
  );
};

