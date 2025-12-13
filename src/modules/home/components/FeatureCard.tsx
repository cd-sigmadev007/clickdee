import React from 'react';
import { Card } from '@/components/Card';
import { Typography } from '@/components';
import { Feature } from '../types';

interface FeatureCardProps {
  feature: Feature;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <Card variant="elevated" className="flex flex-col gap-4 items-center justify-center h-[250px] p-8">
      <div className="relative w-12 h-12 flex items-center justify-center">
        <img src={feature.icon} alt={feature.title} className="w-full h-full object-contain" />
      </div>
      <Typography variant="h4" weight="medium" className="text-neutral-900 text-center">
        {feature.title}
      </Typography>
      <Typography variant="p" weight="medium" className="text-neutral-500 text-center">
        {feature.description}
      </Typography>
    </Card>
  );
};

