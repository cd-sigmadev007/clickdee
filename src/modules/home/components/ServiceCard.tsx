import React from 'react';
import { Typography } from '@/components';
import { Service } from '../types';
import heroiconsChevronRight from '@/assets/icons/heroicons_chevron-right.svg';

interface ServiceCardProps {
  service: Service;
  onClick?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  // Mobile: all cards are 200px
  // Tablet: all cards are 270px or 350px
  // Desktop: small cards are 270px, large cards are 350px
  const cardHeight = service.large
    ? 'h-[200px] md:h-[350px] lg:h-[350px]' // Mobile: 200px, Tablet/Desktop: 350px (large cards)
    : 'h-[200px] md:h-[270px] lg:h-[270px]'; // Mobile: 200px, Tablet/Desktop: 270px (small cards)
  
  // All cards show gradient on hover
  return (
    <div
      className={`group relative flex flex-col ${cardHeight} max-md:h-full items-end justify-between p-6 md:p-8 rounded-[20px] shadow-[0px_10px_25px_0px_rgba(0,0,0,0.1)] bg-white border border-neutral-200 service-card-gradient-hover ${onClick ? 'cursor-pointer hover:shadow-xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-transparent' : ''}`}
      onClick={onClick}
      data-node-id="1:14155"
    >
      <div className="relative w-12 h-12 md:w-[68px] md:h-[68px] flex items-center justify-center">
        <img src={service.icon} alt={service.name} className="w-full h-full object-contain transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-110" />
      </div>
      <div className="flex flex-col gap-4 items-start justify-end w-full">
        <Typography variant="h3" weight="bold" className="text-neutral-900 group-hover:text-white w-full transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" data-node-id="1:14160">
          {service.name}
        </Typography>
        <Typography variant="p" weight="medium" className="text-neutral-500 group-hover:text-white w-full transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" data-node-id="1:14161">
          {service.description}
        </Typography>
        {/* Learn More link - only visible on hover */}
        <div className="flex items-center gap-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" data-node-id="1:14162">
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
};

