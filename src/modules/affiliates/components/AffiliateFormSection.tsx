import React from 'react';
import { Typography } from '@/components/Typography';
import { AffiliateForm } from './AffiliateForm';
import clsx from 'clsx';

export const AffiliateFormSection: React.FC = () => {
  const handleSubmit = (formData: Record<string, any>) => {
    console.log('Affiliate form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="bg-white flex flex-col lg:flex-row gap-8 items-start px-4 py-8 sm:px-6 sm:py-12 lg:px-[80px] lg:py-[56px] w-full">
      {/* Left: Title */}
      <div className="flex flex-col gap-[5px] items-start justify-center lg:flex-1">
        <Typography variant="headline" weight="bold" className="text-neutral-900">
          Apply for our
        </Typography>
        <div className="bg-primary-100 flex items-center px-[10px] py-[5px] rounded-[10px]">
          <Typography variant="headline" weight="bold" className="text-primary-500">
            Affiliate Program Now!
          </Typography>
        </div>
      </div>

      {/* Right: Form */}
      <div className="w-full lg:flex-1">
        <AffiliateForm 
          onSubmit={handleSubmit}
          className={clsx('-mx-4 md:-mx-6 lg:mx-0')}
        />
      </div>
    </div>
  );
};

