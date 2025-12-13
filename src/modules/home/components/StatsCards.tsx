import React from 'react';
import { StatCard } from '../types';

interface StatsCardsProps {
  stats: StatCard[];
}

export const StatsCards: React.FC<StatsCardsProps> = ({ stats }) => {
  return (
    <div className="flex flex-col gap-4 h-full items-center justify-center w-[300px]" data-node-id="1:14671">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="bg-neutral-800 flex flex-col items-end px-8 py-6 relative rounded-[20px] text-center w-full"
        >
          <p className="font-bold text-display text-white w-full mb-2" data-node-id={stat.id === 'roi' ? '1:14673' : stat.id === 'leads' ? '1:14676' : '1:14679'}>
            {stat.value}
          </p>
          <p className="font-medium text-p text-neutral-500 w-full" data-node-id={stat.id === 'roi' ? '1:14674' : stat.id === 'leads' ? '1:14677' : '1:14680'}>
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

