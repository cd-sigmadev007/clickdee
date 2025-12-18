import React from 'react';
import { Typography } from '@/components/Typography';
import googlePartnerLogo from '@/assets/images/google-partner.png';

export const GooglePartnerSection: React.FC = () => {
  return (
    <div className="bg-primary-600 flex gap-4 items-center px-4 py-6 sm:px-6 sm:py-6 lg:px-20 lg:py-6 w-full">
      <div className="relative shrink-0 size-[52px]">
        <img 
          src={googlePartnerLogo} 
          alt="Google Partner" 
          className="w-full h-full object-contain" 
        />
      </div>
      <div className="flex flex-col gap-1.5 items-start justify-center flex-1 min-w-0">
        <Typography variant="s" weight="bold" className="text-white">
          We are a Google Partner
        </Typography>
        <Typography variant="2xs" weight="medium" className="text-white leading-[1.3]">
          We are a Google Partner. Being a Google Partner means that our company is recognized for maximizing campaign success, driving growth by maintaining campaigns, as well as developing our Google Ads skills and expertise with certifications.
        </Typography>
      </div>
    </div>
  );
};

