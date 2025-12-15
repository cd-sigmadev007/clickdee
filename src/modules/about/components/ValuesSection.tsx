import React from 'react';
import { Typography } from '@/components';
import { Card } from '@/components/Card';
import icRoundStar from '@/assets/icons/ic_round-star.svg';
import fluentPeopleTeam from '@/assets/icons/fluent_people-team-48-regular.svg';
import hugeiconsMessageUser from '@/assets/icons/hugeicons_message-user-02.svg';

interface Value {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const values: Value[] = [
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-[1280px]">
        {values.map((value) => (
          <Card key={value.id} variant="elevated" className="flex flex-col gap-4 items-center justify-start h-full p-8">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <img src={value.icon} alt={value.title} className="w-full h-full object-contain" />
            </div>
            <Typography variant="h4" weight="bold" className="text-neutral-900 text-center">
              {value.title}
            </Typography>
            <Typography variant="p" weight="medium" className="text-neutral-500 text-center">
              {value.description}
            </Typography>
          </Card>
        ))}
      </div>
    </div>
  );
};
