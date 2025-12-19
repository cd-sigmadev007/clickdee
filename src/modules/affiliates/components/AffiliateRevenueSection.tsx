import React from 'react';
import { Typography } from '@/components/Typography';
import { Button } from '@/components/Button';

export const AffiliateRevenueSection: React.FC = () => {
  return (
    <div className="bg-neutral-100 flex flex-col gap-4 items-start justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-[80px] lg:py-[88px] relative w-full h-full">
      {/* Title */}
      <Typography variant="title" weight="bold" className="text-neutral-900">
        Achieve higher revenue and ROI with Clickdee's Affiliate Program.
      </Typography>

      {/* Divider */}
      <div className="flex items-center justify-center relative w-full">
        <div className="flex-none rotate-180 w-full">
          <div className="h-px w-full bg-neutral-200"></div>
        </div>
      </div>

      {/* Description */}
      <Typography variant="s" weight="medium" className="text-neutral-500">
        We are looking to add new publishers that generate high-quality, inbound phone or form leads to our affiliate network. If this is you, we want to hear from you!
      </Typography>

      {/* CTA Button */}
      <Button variant="outline" className="border-neutral-900">
        Apply Now
      </Button>
    </div>
  );
};

