import React from 'react';
import { Typography, IconCardGrid, IconCardItem } from '@/components';
import icRoundStar from '@/assets/icons/ic_round-star.svg';
import fluentPeopleTeam from '@/assets/icons/fluent_people-team-48-regular.svg';
import hugeiconsMessageUser from '@/assets/icons/hugeicons_message-user-02.svg';

const values: IconCardItem[] = [
  {
    id: 'transparency',
    title: 'Transparency',
    description: 'Through radical transparency, our clients are confident in our lead generation services.',
    icon: icRoundStar,
  },
  {
    id: 'teamwork',
    title: 'Teamwork',
    description: 'With respect and humility, we seek diversity of opinion and perspective in our work.',
    icon: fluentPeopleTeam,
  },
  {
    id: 'passionate',
    title: 'Passionate',
    description: 'We are customer-driven and service is always our top priority.',
    icon: hugeiconsMessageUser,
  },
];

export const ValuesSection: React.FC = () => {
  return (
    <div className="bg-primary-500 flex flex-col gap-6 sm:gap-8 items-center justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-[80px] lg:py-[88px] relative w-full">
      {/* Title */}
      <Typography variant="title" weight="bold" className="text-white text-center">
        Our Values
      </Typography>
      
      {/* Value Cards Grid */}
      <IconCardGrid items={values} gridCols="1-2-3" titleWeight="bold" />
    </div>
  );
};
