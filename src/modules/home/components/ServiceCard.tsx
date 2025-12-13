import React from 'react';
import { Card } from '@/components/Card';
import { Typography } from '@/components';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onClick?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  const textColor = service.featured && service.gradient ? 'text-white' : 'text-neutral-900';
  const descColor = service.featured && service.gradient ? 'text-white' : 'text-neutral-500';
  
  const cardHeight = service.large ? 'h-[350px]' : 'h-[270px]';
  
  // For featured gradient cards, use custom div instead of Card component
  if (service.featured && service.gradient) {
    return (
      <div
        className={`flex flex-col items-end justify-between ${cardHeight} p-8 rounded-[20px] bg-gradient-to-br from-primary-500 to-primary-600 shadow-[0px_10px_25px_0px_rgba(0,0,0,0.1)] ${onClick ? 'cursor-pointer hover:shadow-xl transition-shadow' : ''}`}
        onClick={onClick}
      >
        <div className="relative w-[68px] h-[68px] flex items-center justify-center">
          <img src={service.icon} alt={service.name} className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col gap-4 items-start justify-end w-full">
          <Typography variant="h3" weight="bold" className={`${textColor} w-full`}>
            {service.name}
          </Typography>
          <Typography variant="p" weight="medium" className={`${descColor} w-full`}>
            {service.description}
          </Typography>
        </div>
      </div>
    );
  }
  
  return (
    <Card 
      variant={service.featured ? 'default' : 'bordered'} 
      className={`flex flex-col items-end justify-between ${cardHeight} p-8 ${onClick ? 'cursor-pointer hover:shadow-lg transition-shadow' : ''}`}
      onClick={onClick}
    >
      <div className="relative w-[68px] h-[68px] flex items-center justify-center">
        <img src={service.icon} alt={service.name} className="w-full h-full object-contain" />
      </div>
      <div className="flex flex-col gap-4 items-start justify-end w-full">
        <Typography variant="h3" weight="bold" className={`${textColor} w-full`}>
          {service.name}
        </Typography>
        <Typography variant="p" weight="medium" className={`${descColor} w-full`}>
          {service.description}
        </Typography>
      </div>
    </Card>
  );
};

