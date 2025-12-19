import React from 'react';
import { Typography } from '@/components/Typography';

export const AffiliateAboutSection: React.FC = () => {
  return (
    <div className="bg-white flex flex-col gap-4 items-start justify-start px-4 py-8 sm:px-6 sm:py-12 lg:px-[80px] lg:py-[88px] relative w-full h-full">
      {/* Title */}
      <Typography variant="title" weight="bold" className="text-neutral-900">
        About Clickdee
      </Typography>

      {/* Divider */}
      <div className="flex items-center justify-center relative w-full">
        <div className="flex-none rotate-180 w-full">
          <div className="h-px w-full bg-neutral-200"></div>
        </div>
      </div>

      {/* Description Paragraphs */}
      <Typography variant="s" weight="medium" className="text-neutral-500">
        Clickdee is quickly becoming a top name in generating Home Service & Insurance Leads. We connect contractors with interested clients, so they can focus on profitable projects hassle-free.
      </Typography>

      <Typography variant="s" weight="medium" className="text-neutral-500">
        Designed on a custom call tracking and lead form monetization platform, Clickdee has active networks in damage restoration space with plans to expand into other services in the near future.
      </Typography>
    </div>
  );
};

