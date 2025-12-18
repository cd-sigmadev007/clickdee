import React from 'react';
import { Typography, IconCardGrid, IconCardItem } from '@/components';
import hugeiconsTarget02 from '@/assets/icons/hugeicons_target-02.svg';
import streamlinePayment10 from '@/assets/icons/streamline_payment-10.svg';
import solarChatRoundCallOutline from '@/assets/icons/solar_chat-round-call-outline.svg';
import solarGraphUpOutline from '@/assets/icons/solar_graph-up-outline.svg';
import chevronLeftIcon from '@/assets/icons/heroicons_chevron-left.svg';

const features: IconCardItem[] = [
  {
    id: 'define-leads',
    title: 'Define what leads you want',
    description: 'Our portfolio of websites attracts potential clients with home service needs',
    icon: hugeiconsTarget02,
  },
  {
    id: 'define-payment',
    title: 'Define how much you want to pay',
    description: 'Dynamic pricing suited to your budget and location',
    icon: streamlinePayment10,
  },
  {
    id: 'receive-leads',
    title: 'Receive exclusive leads only for you',
    description: 'All leads and calls are 100% exclusive and only routed to one partner',
    icon: solarChatRoundCallOutline,
  },
  {
    id: 'track-roi',
    title: 'Track the return of your investment',
    description: 'Login to your portal view reports, listen to call recordings and more',
    icon: solarGraphUpOutline,
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <div className="bg-primary-500 flex flex-col gap-6 sm:gap-8 items-center justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-[80px] lg:py-[88px] relative w-full" data-node-id="1:14086">
      {/* Title */}
      <div className="flex flex-col sm:flex-row gap-2.5 items-center justify-center w-full" data-node-id="1:14087">
        <Typography variant="h1" weight="bold" className="text-white whitespace-nowrap" data-node-id="1:14088">
          Real Customers
        </Typography>
        <div className="bg-primary-100 border border-primary-100 flex items-start justify-center px-2.5 py-1.5 rounded-[10px]" data-node-id="1:14089">
          <Typography variant="h1" weight="bold" className="text-primary-500 whitespace-nowrap" data-node-id="1:14090">
            Real Revenue
          </Typography>
        </div>
      </div>
      
      {/* Subtitle */}
      <div className="font-medium text-p text-center text-white max-w-full" data-node-id="1:14091">
        <p className="mb-0">We focus on generating high-quality,</p>
        <p>exclusive leads for home service companies</p>
      </div>
      
      {/* CTA Button */}
      <button className="bg-white text-primary-500 flex items-center gap-[5px] px-6 py-[14px] rounded-button font-bold text-s transition-all duration-200 focus:outline-none" data-node-id="1:14092">
        <span className="font-bold text-s text-primary-500" data-node-id="1:14093">Get Leads Now</span>
        <img src={chevronLeftIcon} alt="" className="w-4 h-4 rotate-180 text-primary-500" style={{ filter: 'brightness(0) saturate(100%) invert(30%) sepia(100%) saturate(7500%) hue-rotate(210deg) brightness(100%) contrast(100%)' }} data-node-id="1:14094" />
      </button>
      
      {/* Feature Cards Grid */}
      <IconCardGrid items={features} gridCols="1-2-4" data-node-id="1:14096" />
      
      {/* Footer Text */}
      <Typography variant="s" weight="medium" className="text-white text-center max-w-full" data-node-id="1:14122">
        Clickdee is the premier lead provider for home service companies in the United States
      </Typography>
    </div>
  );
};

