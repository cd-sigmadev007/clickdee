import React from 'react';
import { Button } from '@/components/Button';
import { HeroHeadline } from './HeroHeadline';
import { HeroMap } from './HeroMap';
import checkIcon from '@/assets/icons/gravity-ui_check.svg';
import chevronLeftIcon from '@/assets/icons/heroicons_chevron-left.svg';
import gridLayers from '@/assets/images/Grid layers - v1.png';

export const HeroSection: React.FC = () => {
  return (
    <div className="bg-white relative flex flex-col items-center justify-center w-full overflow-hidden" data-node-id="1:13983">
        {/* Hero Content */}
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[32px] items-center justify-center px-4 py-6 sm:px-6 sm:py-8 lg:px-[80px] lg:py-[56px] relative w-full" data-node-id="1:14033">
        <HeroHeadline />
        <img src={gridLayers} alt="" className="absolute top-0 bottom-0 w-[90%] h-full opacity-30 lg:opacity-100" />

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full sm:w-auto relative z-10" data-node-id="1:14039">
          <Button variant="primary" className="flex items-center justify-center gap-[5px] w-full sm:w-auto">
            Get Leads Now
            <img src={chevronLeftIcon} alt="" className="w-4 h-4 rotate-180 brightness-0 invert" data-node-id="1:14042" />
          </Button>
          <Button variant="outline" className="w-full sm:w-auto">
            How it Works?
          </Button>
        </div>
        
        {/* Checkmarks */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4 w-full max-w-[450px] relative z-10" data-node-id="1:14046">
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
      
      {/* Hero Map */}
      <HeroMap />
      
      {/* Scrolling Banner */}
      <div className="bg-neutral-900 flex font-medium gap-6 items-start justify-center overflow-hidden px-0 py-2 relative w-full text-s whitespace-nowrap text-white" data-node-id="1:14081">
        <p className="relative">No setup fees. No contract required. Cancel at any time – no cancellation charges.</p>
        <p className="relative">No setup fees. No contract required. Cancel at any time – no cancellation charges.</p>
        <p className="relative">No setup fees. No contract required. Cancel at any time – no cancellation charges.</p>
        <p className="relative">No setup fees. No contract required. Cancel at any time – no cancellation charges.</p>
      </div>
    </div>
  );
};

