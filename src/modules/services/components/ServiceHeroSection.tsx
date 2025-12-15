import React from 'react';
import { Typography } from '@/components';
import { Button } from '@/components/Button';
import { ServicePageData } from '../types';
import gridImage from '@/assets/images/image.png';
import chevronUpIcon from '@/assets/icons/heroicons_chevron-up.svg';
import fireDamageIcon from '@/assets/icons/fire-damage-leads.svg';

export interface ServiceHeroSectionProps {
  service: ServicePageData;
}

export const ServiceHeroSection: React.FC<ServiceHeroSectionProps> = ({ service }) => {
  // Rotate chevron icon for button (270deg and flip vertically)
  const ChevronIcon = () => (
    <img 
      src={chevronUpIcon} 
      alt="" 
      className="w-4 h-4 rotate-[270deg] scale-y-[-100%] brightness-0 invert" 
    />
  );

  return (
    <div className="bg-white flex flex-col lg:flex-row items-stretch relative w-full overflow-hidden">
      {/* Grid Background - Visible on all screens */}
      <img 
        src={gridImage} 
        alt="" 
        className="absolute inset-0 max-lg:top-0 w-full h-full object-cover object-top pointer-events-none z-0"
      />

      {/* Left Column - Content */}
      <div className="flex-1 flex flex-col items-center lg:items-start lg:px-[80px] lg:py-[120px] px-4 py-14 sm:px-6 relative shrink-0 w-full lg:w-auto lg:min-w-0 z-10">
        <div className="flex flex-col gap-[24px] sm:gap-[32px] items-center lg:items-start justify-center w-full text-center lg:text-left">
          {/* Heading */}
          <div className="flex flex-col gap-[5px] items-center lg:items-start justify-center w-full">
            <Typography 
              as="p"
              variant='headline'
              weight="bold"
            >
              Boost your business with exclusive
            </Typography>
            <div className="bg-primary-100  px-[10px] py-[5px] rounded-[10px]">
              <Typography 
                variant="headline"
                weight="bold"
                className="text-primary-500"
              >
                {service.name}
              </Typography>
            </div>
          </div>

          {/* Description */}
          <Typography 
            variant="s" 
            weight="medium" 
            className="text-neutral-500 leading-[1.3]"
          >
            With Clickdee you can gain a competitive
            <br />
            edge in the market.
          </Typography>

          {/* CTA Button */}
          <Button 
            variant="primary" 
            icon={<ChevronIcon />} 
            iconPosition="right"
            className="px-6 py-[14px] gap-[5px] w-full sm:w-auto"
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Right Column - Hero Image */}
      <div className="w-full lg:flex-1 lg:h-[720px] h-[441px] sm:h-[501px] overflow-hidden relative rounded-tl-[24px] rounded-tr-[24px] lg:rounded-bl-[24px] lg:rounded-tr-none lg:rounded-tl-[24px] lg:w-auto lg:min-w-0">
        {/* Background Image with Overlay */}
        <img 
          src={service.heroImage} 
          alt={service.name}
          className="absolute inset-0 w-full h-full object-cover object-center rounded-tl-[24px] rounded-tr-[24px] lg:rounded-bl-[24px] lg:rounded-tr-none lg:rounded-tl-[24px] z-0"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(231,127,4,0.6)] rounded-tl-[24px] rounded-tr-[24px] lg:rounded-bl-[24px] lg:rounded-tr-none lg:rounded-tl-[24px] z-10" />

        {/* Center Icon */}
        {service.centerIcon && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[530px] h-[530px] max-w-[70%] max-h-[90%] z-20">
            <img 
              src={service.centerIcon} 
              alt="" 
              className="w-full h-full object-contain"
            />
          </div>
        )}

        {/* Top Badge - Service Name with Incoming Lead */}
        <div className="absolute left-1/2 top-[57px] sm:top-[70px] -translate-x-1/2 backdrop-blur-md bg-[rgba(0,0,0,0.35)] border-[0.5px] border-transparent rounded-[32px] px-8 py-[14px] flex items-center justify-center gap-3 shadow-[0px_10px_25px_0px_rgba(0,0,0,0.05)] z-30">
          <img src={service.icon || fireDamageIcon} alt="" className="w-8 h-8 flex-shrink-0" />
          <Typography variant="h3" weight="bold" className="text-white whitespace-nowrap">
            {service.name.replace(' Leads', '')}
          </Typography>
          {/* Incoming Lead Badge */}
          <div className="absolute left-[127.16px] top-[-30.15px] w-[149.404px] h-[46.683px] flex items-center justify-center pointer-events-none">
            <div className="rotate-[5deg] bg-primary-100 px-4 py-2 rounded-[40px] shadow-[-14px_18px_24px_0px_rgba(255,255,255,0.15)]">
              <Typography variant="s" weight="bold" className="text-primary-500 whitespace-nowrap">
                +{service.incomingLeadCount} Incoming Lead
              </Typography>
            </div>
          </div>
        </div>

        {/* Bottom Badge - Cost Per Lead */}
        <div className="absolute left-1/2 bottom-[10%] -translate-x-1/2 backdrop-blur-md bg-[rgba(0,0,0,0.35)] border-[0.5px] border-white rounded-[32px] px-6 py-3 flex items-center justify-center gap-[10px] shadow-[0px_10px_25px_0px_rgba(0,0,0,0.05)] z-30">
          <Typography variant="h3" weight="bold" className="text-primary-100 whitespace-nowrap">
            {service.avgCostPerLead}
          </Typography>
          <Typography variant="s" weight="medium" className="text-primary-100 whitespace-nowrap">
            Avg. winning cost per lead
          </Typography>
        </div>

        {/* Left Shadow Overlay - Desktop only */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none shadow-[inset_20px_0px_32px_0px_rgba(0,0,0,0.2)]" />
      </div>
    </div>
  );
};
