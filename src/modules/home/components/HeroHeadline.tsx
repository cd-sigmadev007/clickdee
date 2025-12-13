import React from 'react';
import { Typography } from '@/components';

export const HeroHeadline: React.FC = () => {
  return (
    <div className="flex flex-col gap-1 sm:gap-[5px] items-center justify-center w-full text-center" data-node-id="1:14034">
      <Typography variant="display" weight="bold" className="text-neutral-900" data-node-id="1:14035">
        High Quality
      </Typography>
      <div className="bg-primary-100 flex items-start justify-center px-2.5 sm:px-[10px] py-1 sm:py-[5px] rounded-[10px]" data-node-id="1:14036">
        <Typography variant="display" weight="bold" className="text-primary-500 text-center" data-node-id="1:14037">
          Home Service & Insurance Leads
        </Typography>
      </div>
      <Typography variant="display" weight="bold" className="text-neutral-900" data-node-id="1:14038">
        Drive Results & Fuel Growth
      </Typography>
    </div>
  );
};

