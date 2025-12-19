import React from 'react';
import { ContentGrid } from '@/components/ContentGrid';
import { Typography } from '@/components/Typography';
import { ChecklistSection } from '@/components/ContentGrid/types';

const benefitsChecklist: ChecklistSection = {
  items: [
    { text: 'Various payout structures that align with your marketing needs and goals.' },
    { text: 'Automated payment system that ensures you are paid on time, every time. No invoice required!' },
    { text: 'Transparency with direct access to detailed, real-time analytics via the affiliate dashboard.' },
    { text: 'Industry leading conversion rates from high-quality sources.' },
    { text: 'Specialty APIs that have the option to Ping Post or Host and Post data.' },
    { text: 'Affiliate Account Managers that are always available to assist and yield optimization.' },
  ],
  bgColor: 'bg-white',
  textColor: 'text-neutral-500',
};

const BenefitsTitleCard: React.FC = () => {
  return (
    <div className="bg-neutral-900 flex flex-col gap-6 min-h-[470px] items-center justify-center px-6 py-12 relative w-full h-full overflow-hidden">
      {/* Grid background */}


      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><svg width="720" height="400" viewBox="0 0 720 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.2">
          <line opacity="0.8" y1="-0.5" x2="1511.58" y2="-0.5" transform="matrix(1 0 0 -1 -13 286.813)" stroke="white" />
          <line opacity="0.1" y1="-0.5" x2="1511.58" y2="-0.5" transform="matrix(1 0 0 -1 -13 44.7607)" stroke="white" />
          <line opacity="0.2" y1="-0.5" x2="1511.58" y2="-0.5" transform="matrix(1 0 0 -1 -13 126.761)" stroke="white" />
          <line y1="-0.5" x2="1511.58" y2="-0.5" transform="matrix(1 0 0 -1 -13 367.499)" stroke="white" />
          <line opacity="0.5" y1="-0.5" x2="1511.58" y2="-0.5" transform="matrix(1 0 0 -1 -13 206.128)" stroke="white" />
          <line y1="-0.5" x2="474" y2="-0.5" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 5 481.818)" stroke="url(#paint0_linear_1_5928)" />
          <line y1="-0.5" x2="474" y2="-0.5" transform="matrix(-4.50388e-08 -1 -1 4.24231e-08 650 481.818)" stroke="url(#paint1_linear_1_5928)" />
          <line y1="-0.5" x2="474" y2="-0.5" transform="matrix(-4.50388e-08 -1 -1 4.24231e-08 328 481.818)" stroke="url(#paint2_linear_1_5928)" />
          <line y1="-0.5" x2="474" y2="-0.5" transform="matrix(-4.50388e-08 -1 -1 4.24231e-08 166 481.818)" stroke="url(#paint3_linear_1_5928)" />
          <line y1="-0.5" x2="474" y2="-0.5" transform="matrix(-4.50388e-08 -1 -1 4.24231e-08 489 481.818)" stroke="url(#paint4_linear_1_5928)" />
          <line y1="-0.5" x2="474" y2="-0.5" transform="matrix(-4.50388e-08 -1 -1 4.24231e-08 86 481.818)" stroke="url(#paint5_linear_1_5928)" />
          <line y1="-0.5" x2="474" y2="-0.5" transform="matrix(-4.50388e-08 -1 -1 4.24231e-08 408 481.818)" stroke="url(#paint6_linear_1_5928)" />
          <line y1="-0.5" x2="474" y2="-0.5" transform="matrix(-4.50388e-08 -1 -1 4.24231e-08 247 481.818)" stroke="url(#paint7_linear_1_5928)" />
          <line y1="-0.5" x2="474" y2="-0.5" transform="matrix(-4.50388e-08 -1 -1 4.24231e-08 570 481.818)" stroke="url(#paint8_linear_1_5928)" />
        </g>
        <defs>
          <linearGradient id="paint0_linear_1_5928" x1="0" y1="0.5" x2="474" y2="0.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#1F1F1F" />
          </linearGradient>
          <linearGradient id="paint1_linear_1_5928" x1="0" y1="0.5" x2="474" y2="0.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#1F1F1F" />
          </linearGradient>
          <linearGradient id="paint2_linear_1_5928" x1="0" y1="0.5" x2="474" y2="0.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#1F1F1F" />
          </linearGradient>
          <linearGradient id="paint3_linear_1_5928" x1="0" y1="0.5" x2="474" y2="0.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#1F1F1F" />
          </linearGradient>
          <linearGradient id="paint4_linear_1_5928" x1="0" y1="0.5" x2="474" y2="0.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#1F1F1F" />
          </linearGradient>
          <linearGradient id="paint5_linear_1_5928" x1="0" y1="0.5" x2="474" y2="0.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#1F1F1F" />
          </linearGradient>
          <linearGradient id="paint6_linear_1_5928" x1="0" y1="0.5" x2="474" y2="0.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#1F1F1F" />
          </linearGradient>
          <linearGradient id="paint7_linear_1_5928" x1="0" y1="0.5" x2="474" y2="0.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#1F1F1F" />
          </linearGradient>
          <linearGradient id="paint8_linear_1_5928" x1="0" y1="0.5" x2="474" y2="0.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#1F1F1F" />
          </linearGradient>
        </defs>
      </svg>
      </div>
      {/* Title */}
      <Typography variant="h2" weight="bold" className="text-white relative z-10 text-center">
        Benefits for our Affiliates
      </Typography>
    </div>
  );
};

export const AffiliateBenefitsChecklistSection: React.FC = () => {
  return (
    <ContentGrid
      left={benefitsChecklist}
      right={<BenefitsTitleCard />}
    />
  );
};

