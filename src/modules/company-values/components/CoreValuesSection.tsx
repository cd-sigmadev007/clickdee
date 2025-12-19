import React from 'react';
import { Typography, IconCardGrid, IconCardItem } from '@/components';

// Icons for core values section
import fluentPeopleTeam from '@/assets/icons/fluent_people-team-48-regular.svg';
import solarGraphUp from '@/assets/icons/solar_graph-up-outline.svg';
import mdiBrainFreeze from '@/assets/icons/mdi_brain-freeze-outline.svg';
import hugeiconsTarget from '@/assets/icons/hugeicons_target-02.svg';
import solarChatRoundCall from '@/assets/icons/solar_chat-round-call-outline.svg';

const coreValues: IconCardItem[] = [
  {
    id: 'team-players',
    title: 'We Are Team Players',
    description: 'We know that the best way to overcome obstacles, find solutions, and deliver exceptional results, is as a team — together.',
    icon: fluentPeopleTeam,
  },
  {
    id: 'strive-improve',
    title: 'We Strive to Improve',
    description: 'We are passionate about learning, improving, and innovating.',
    icon: solarGraphUp,
  },
  {
    id: 'rational',
    title: 'We Are Rational',
    description: 'We execute decisions based on data and evidence.',
    icon: mdiBrainFreeze,
  },
  {
    id: 'focus-results',
    title: 'We Focus on Results',
    description: 'We prefer actions over words.',
    icon: hugeiconsTarget,
  },
  {
    id: 'trustworthy',
    title: 'We Are Trustworthy',
    description: 'We are committed to honesty, trust, and transparency.',
    icon: solarChatRoundCall,
  },
];

export const CoreValuesSection: React.FC = () => {
  return (
    <div className="bg-primary-500 flex flex-col gap-8 lg:gap-[32px] items-center justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-[80px] lg:py-[88px] relative w-full">
      {/* Title */}
      <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-[10px] items-center justify-center w-full">
        <Typography variant="title" weight="bold" className="text-white">
          Get to know
        </Typography>
        <div className="bg-primary-100 border border-primary-100 flex items-start justify-center px-2.5 sm:px-[10px] py-1 sm:py-[5px] rounded-[10px]">
          <Typography variant="title" weight="bold" className="text-primary-500">
            who we are
          </Typography>
        </div>
      </div>

      {/* Value Cards Grid */}
      <div className="w-full max-w-[1280px]">
        <IconCardGrid items={coreValues} gridCols="1-2-3" titleWeight="medium" useAlternatingLayout />
      </div>

      {/* Footer Text */}
      <Typography variant="s" weight="medium" className="text-white text-center max-w-full">
        Clickdee is the premier lead provider for home service companies in the United States
      </Typography>
    </div>
  );
};

