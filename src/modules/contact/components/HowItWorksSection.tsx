import React from 'react';
import { ContentGrid } from '@/components/ContentGrid';
import { IconHeadingSection, ChecklistSection } from '@/components/ContentGrid/types';
import userSearchIcon from '@/assets/icons/hugeicons_user-search-01.svg';

export const HowItWorksSection: React.FC = () => {
  const leftSection: IconHeadingSection = {
    icon: userSearchIcon,
    heading: 'We identify potential clients in your nearby region',
    bgColor: 'bg-neutral-900',
    textColor: 'text-white',
    gridPattern: true,
  };

  const rightSection: ChecklistSection = {
    items: [
      {
        text: 'Our lead-generation services connect you with the core of your business: homeowners and business property managers eagerly looking for the exact solutions you provide. \n ',
      },
      {
        text: 'Our marketing service is simple: our leads are exclusive inquiries from zip-code or state-level targeting, delivered real-time straight to you and only you. Our internet prospects are actively looking for a solution and want answers now. ',
      },
      {
        text: 'You offer a solution for these prospects. Become part of our network today and start experiencing the growth and profitability you deserve.',
      },
    ],
    bgColor: 'bg-neutral-100',
    textColor: 'text-neutral-500',
  };

  return (
    <ContentGrid
      left={leftSection}
      right={rightSection}
    />
  );
};


