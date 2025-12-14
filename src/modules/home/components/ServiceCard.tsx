import React from 'react';
import { Card } from '@/components/Card';
import { Typography } from '@/components';
import { Service } from '../types';
import heroiconsChevronRight from '@/assets/icons/heroicons_chevron-right.svg';

interface ServiceCardProps {
  service: Service;
  onClick?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  const textColor = service.featured && service.gradient ? 'text-white' : 'text-neutral-900';
  const descColor = service.featured && service.gradient ? 'text-white' : 'text-neutral-500';
  
  // Mobile: all cards are 200px
  // Tablet: Locksmith is 350px, HVAC is 350px, large cards are 350px, regular are 270px
  // Desktop: large cards are 350px, regular are 270px (HVAC is 270px on desktop)
  // Gradient cards (Water Damage, Home Insurance) are 350px on tablet/desktop, positioned to span 2 rows
  const isLocksmith = service.name === 'Locksmith';
  const isHvac = service.name === 'Hvac';
  const cardHeight = service.featured && service.gradient 
    ? 'h-[200px] md:h-[350px]' // Mobile: 200px, Tablet/Desktop: 350px (spans 2 rows visually)
    : service.large && !isHvac
      ? 'h-[200px] md:h-[350px]' // Mobile: 200px, Tablet/Desktop: 350px (for large cards except HVAC)
      : isLocksmith
        ? 'h-[200px] md:h-[350px] lg:h-[270px]' // Mobile: 200px, Tablet: 350px, Desktop: 270px
        : isHvac
          ? 'h-[200px] md:h-[350px] lg:h-[270px]' // Mobile: 200px, Tablet: 350px, Desktop: 270px
          : 'h-[200px] md:h-[270px]'; // Mobile: 200px, Tablet/Desktop: 270px
  
  // For featured gradient cards (e.g., Water Damage, Home Insurance), use custom div with exact Figma gradient
  // Mobile gradient angle: 251.776deg, Desktop: 241.944deg
  if (service.featured && service.gradient) {
    return (
      <div
        className={`service-gradient flex flex-col ${cardHeight} max-md:h-full items-end justify-between p-6 md:p-8 rounded-[20px] shadow-[0px_10px_25px_0px_rgba(0,0,0,0.1)] ${onClick ? 'cursor-pointer hover:shadow-xl transition-shadow' : ''}`}
        onClick={onClick}
        data-node-id="1:14155"
      >
        <div className="relative w-12 h-12 md:w-[68px] md:h-[68px] flex items-center justify-center">
          <img src={service.icon} alt={service.name} className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col gap-4 items-start justify-end w-full">
          <Typography variant="h3" weight="bold" className={`${textColor} w-full`} data-node-id="1:14160">
            {service.name}
          </Typography>
          <Typography variant="p" weight="medium" className={`${descColor} w-full`} data-node-id="1:14161">
            {service.description}
          </Typography>
          {/* Learn More link for featured gradient cards */}
          <div className="flex items-center gap-0" data-node-id="1:14162">
            <Typography variant="s" weight="bold" className="text-white whitespace-nowrap" data-node-id="1:14163">
              Learn More
            </Typography>
            <img 
              src={heroiconsChevronRight} 
              alt="" 
              className="w-6 h-6 brightness-0 invert" 
              data-node-id="1:14164"
            />
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <Card 
      variant={service.featured ? 'default' : 'bordered'} 
      className={`flex flex-col items-end justify-between ${cardHeight} max-md:h-full p-6 md:p-8 ${onClick ? 'cursor-pointer hover:shadow-lg transition-shadow' : ''}`}
      onClick={onClick}
    >
      <div className="relative w-12 h-12 md:w-[68px] md:h-[68px] flex items-center justify-center">
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

