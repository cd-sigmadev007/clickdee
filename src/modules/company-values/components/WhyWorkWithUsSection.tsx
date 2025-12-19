import React from 'react';
import { Typography, Banner } from '@/components';
import coreValuesBannerImage from '@/assets/images/core-values-banner.png';

// Icons for benefits section
import streamlinePayment from '@/assets/icons/streamline_payment-10.svg';
import iconoirLaptop from '@/assets/icons/iconoir_laptop-dev-mode.svg';
import streamlineBeach from '@/assets/icons/streamline_travel-places-beach-island-waves-outdoor-recreation-tree-beach-palm-wave-water.svg';
import hugeiconsTeaching from '@/assets/icons/hugeicons_teaching.svg';

interface BenefitItem {
  id: string;
  title: string;
  icon: string;
}

const benefits: BenefitItem[] = [
  {
    id: 'competitive-compensation',
    title: 'Competitive Compensation',
    icon: streamlinePayment,
  },
  {
    id: 'flexible-working-hours',
    title: 'Flexible Working Hours',
    icon: iconoirLaptop,
  },
  {
    id: 'unlimited-pto',
    title: 'Unlimited PTO',
    icon: streamlineBeach,
  },
  {
    id: 'on-job-training',
    title: 'On The Job Training',
    icon: hugeiconsTeaching,
  },
];

export const WhyWorkWithUsSection: React.FC = () => {
  return (
    <div className="bg-neutral-100 flex flex-col gap-8 lg:gap-[32px] items-center justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-[80px] lg:py-[88px] relative w-full">
      {/* Title */}
      <Typography variant="title" weight="bold" className="text-neutral-900 text-center">
        Why work with us?
      </Typography>

      {/* Description */}
      <Typography variant="s" weight="medium" className="text-neutral-500 text-center max-w-2xl">
        At Clickdee, we offer competitive pay, flexible remote work, unlimited PTO, and extensive on-the-job training.{' '}
        <br />
        We prioritize work-life balance, empower remote work, and value teamwork, hard work, and innovation.
      </Typography>

      {/* Benefit Cards Grid */}
      <div className="w-full max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white border border-neutral-200 rounded-card p-8 flex flex-col items-end justify-between h-[400px]"
            >
              <div className="relative w-12 h-12 flex items-center justify-center">
                <img src={benefit.icon} alt={benefit.title} className="w-full h-full object-contain" />
              </div>
              <Typography variant="h3" weight="bold" className="text-neutral-900 text-left w-full">
                {benefit.title}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Banner */}
      <div className="w-full max-w-[1280px]">
        <Banner
          title="Join us for a culture that nurtures learning, growth, and excellence."
          description=""
          icon={
            <img 
              src={coreValuesBannerImage} 
              alt="Company culture" 
              className="w-[120px] h-[120px] object-cover"
            />
          }
          className="w-full"
        />
      </div>
    </div>
  );
};

