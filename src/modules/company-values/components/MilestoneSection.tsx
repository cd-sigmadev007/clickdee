import React from 'react';
import { ContentGrid } from '@/components/ContentGrid';
import { Typography } from '@/components/Typography';

const MilestoneCard: React.FC = () => {
  return (
    <div className="bg-neutral-100 flex flex-col gap-4 items-start justify-start px-4 py-8 sm:px-6 sm:py-12 lg:px-[80px] lg:py-[88px] relative w-full h-full">
      {/* Year */}
      <Typography variant="p" weight="bold" className="text-neutral-500">
        2023
      </Typography>

      {/* Heading */}
      <Typography variant="h2" weight="bold" className="text-neutral-900">
        500 Clients Milestone
      </Typography>

      {/* Decorative Divider */}
      <div className="flex items-center justify-center relative w-full">
        <div className="flex-none rotate-180 w-full">
          <div className="h-px w-full bg-neutral-200"></div>
        </div>
      </div>

      {/* Description */}
      <Typography variant="s" weight="medium" className="text-neutral-500">
        This achievement is a testament to Inquirly's dedication to authenticity, transparency and a customer-first approach. It shows that Inquirly's promise of creating real value through high-quality leads resonates with clients and is translating into results.
      </Typography>
    </div>
  );
};

const StatsCard: React.FC = () => {
  return (
    <div className="bg-neutral-900 flex items-center justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-[80px] lg:py-[88px] relative w-full h-full">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 w-full">
        {/* Clients Stat */}
        <div className="flex flex-col items-center justify-center text-center text-white">
          <Typography variant="display" weight="bold" className="text-white whitespace-nowrap">
            700+
          </Typography>
          <Typography variant="s" weight="medium" className="text-white">
            Clients
          </Typography>
        </div>

        {/* Founding Year Stat */}
        <div className="flex flex-col items-center justify-center text-center text-white">
          <Typography variant="display" weight="bold" className="text-white whitespace-nowrap">
            2020
          </Typography>
          <Typography variant="s" weight="medium" className="text-white">
            Founding Year
          </Typography>
        </div>
      </div>
    </div>
  );
};

export const MilestoneSection: React.FC = () => {
  return (
    <ContentGrid
      left={<MilestoneCard />}
      right={<StatsCard />}
    />
  );
};

