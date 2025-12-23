import React from 'react';
import { Typography } from '@/components';
import { ContentGrid, TextSection } from '@/components/ContentGrid';
import fireDamageIcon from '@/assets/icons/fire-damage-leads.svg';
import gridImage from '@/assets/images/grid-services-blue.png';
import gridImageblack from '@/assets/images/grid-services-black.png';
import dollarIcon from '@/assets/images/dollar.svg';
import dollarPattern from '@/assets/images/dollar-pattern.svg';

export interface BenefitsSectionProps {
  className?: string;
  fireRestorationCard?: {
    title: string;
    location: string;
    badgeText: string;
  };
  payPerLeadCard?: {
    amount: string;
    label: string;
    title: string;
    description: string;
  };
  spendingRevenueCard?: {
    title: string;
  };
  shareInterestsCard?: {
    heading: string;
    paragraph: string;
    subtitle: string;
  };
  avoidWastingCard?: {
    title: string;
    description: string;
    subtitle: string;
  };
  trackROICard?: {
    heading: string;
    paragraph: string;
    subtitle: string;
  };
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ 
  className = '',
  fireRestorationCard: fireRestorationCardData,
  payPerLeadCard: payPerLeadCardData,
  spendingRevenueCard: spendingRevenueCardData,
  shareInterestsCard: shareInterestsCardData,
  avoidWastingCard: avoidWastingCardData,
  trackROICard: trackROICardData,
}) => {
  const fireRestorationCard = (
    <div className="bg-primary-500 h-full flex gap-6 md:gap-8 items-center justify-center px-4 py-8 sm:px-6 sm:py-12 md:px-[80px] md:py-[88px] lg:px-[80px] lg:py-[88px] relative w-full overflow-hidden">
      {/* Grid background */}
      <img 
        src={gridImage} 
        alt="" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[743px] h-[470px] opacity-90 pointer-events-none" 
      />
      
      <div className="flex flex-row max-md:flex-col gap-6 md:gap-6 lg:gap-10 items-center justify-center relative z-10 w-full">
        {/* Gradient Card */}
        <div 
          className="fire-restoration-gradient border border-white flex flex-col gap-2.5 md:gap-3 items-center justify-center p-4 md:p-4 lg:p-6 relative rounded-[16px] md:rounded-[16px] lg:rounded-[20px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.05)] md:shadow-[0px_10px_15px_0px_rgba(0,0,0,0.05)] lg:shadow-[0px_10px_25px_0px_rgba(0,0,0,0.05)] shrink-0"
        >
          <div className="relative w-12 h-12 md:w-12 md:h-12 lg:w-[68px] lg:h-[68px] flex items-center justify-center">
            <img src={fireDamageIcon} alt="Fire Restoration" className="w-full h-full object-contain" />
          </div>
          <Typography variant="p" weight="bold" className="text-white whitespace-nowrap md:text-p lg:text-h3">
            {fireRestorationCardData?.title || 'Fire Restoration'}
          </Typography>
          <Typography variant="2xs" weight="medium" className="text-white whitespace-nowrap md:text-2xs lg:text-p">
            {fireRestorationCardData?.location || 'Miami, FL'}
          </Typography>
          {/* Badge */}
          <div className="absolute -top-5 -right-3 md:-top-5 md:-right-3 lg:-top-6 lg:-right-4 rotate-[8.149deg]">
            <div className="bg-primary-100 flex items-start justify-center px-2.5 py-1.5 md:px-2.5 md:py-1.5 lg:px-4 lg:py-2 rounded-[32px] shadow-[-11.175px_14.368px_19.157px_0px_rgba(255,255,255,0.15)] md:shadow-[-11.175px_14.368px_19.157px_0px_rgba(255,255,255,0.15)] lg:shadow-[-14px_18px_24px_0px_rgba(255,255,255,0.15)]">
              <Typography variant="s" weight="bold" className="text-primary-500 whitespace-nowrap md:text-s lg:text-p">
                {fireRestorationCardData?.badgeText || '+1 New Lead'}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Pay-Per Lead Card (middleRight) - Dark background with centered pricing
  const payPerLeadCard = (
    <div className="bg-neutral-900 h-full flex flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-12 md:px-[80px] md:py-12 lg:px-[80px] lg:py-[88px] relative w-full overflow-hidden">
      {/* Grid background */}
      <img 
        src={gridImageblack} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
      />
      
      <div className="flex flex-col items-center justify-center text-center relative z-10">
        <Typography variant="display" weight="bold" className="text-white mb-2">
          {payPerLeadCardData?.amount || '$350'}
        </Typography>
        <Typography variant="p" weight="medium" className="text-white mb-6 opacity-80">
          {payPerLeadCardData?.label || 'Average Cost per Lead'}
        </Typography>
        <Typography variant="h2" weight="bold" className="text-white mb-2">
          {payPerLeadCardData?.title || 'Pay-Per Lead'}
        </Typography>
        <Typography variant="p" weight="medium" className="text-white opacity-80">
          {payPerLeadCardData?.description || 'Pay for new Restoration Leads.'}
        </Typography>
      </div>
    </div>
  );

  // Spending Revenue Card (bottomLeft) - Green background with dollar pattern and icon
  const spendingRevenueCard = (
    <div className="bg-success-100 h-full flex flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-12 md:px-[80px] md:py-12 lg:px-[80px] lg:py-[88px] relative w-full overflow-hidden">
      {/* Dollar Pattern Background */}
      <img 
        src={dollarPattern} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-100" 
      />
      
      <div className="flex flex-col items-center justify-center relative z-10">
        <Typography variant="h2" weight="bold" className="text-neutral-900 text-center">
          {spendingRevenueCardData?.title || 'See How Your Spending Turns Into Revenue'}
        </Typography>
        <div className="flex justify-center">
          <img src={dollarIcon} alt="" className="w-[88px] h-[80px] object-contain" />
        </div>
      </div>
    </div>
  );

  // Text cards as TextSection objects
  const shareInterestsCard: TextSection = {
    heading: shareInterestsCardData?.heading || 'Share your interests with us',
    paragraph: shareInterestsCardData?.paragraph || 'Clickdee provides exclusive, real-time restoration leads tailored to your area, ensuring local prospects and effective scaling.',
    variant: 'bold-subtitle',
    subtitle: shareInterestsCardData?.subtitle || 'What Types of Customers and Where',
    bgColor: 'bg-neutral-100', // Light gray background
  };

  // Avoid Wasting Card (middleLeft) - Custom card with white background
  const avoidWastingCard = (
    <div className="bg-white h-full flex flex-col items-start justify-start gap-4 px-4 py-8 sm:px-6 sm:py-12 md:px-[80px] md:py-12 lg:px-[80px] lg:py-[88px] relative w-full overflow-hidden">
      <div className="relative z-10 w-full flex flex-col items-start justify-start gap-4">
        <Typography variant="h3" weight="bold" className="text-neutral-900 w-full md:text-h3 lg:text-h2">
          {avoidWastingCardData?.title || "Avoid wasting money on clicks that don't convert"}
        </Typography>
        <Typography variant="p" weight="medium" className="text-neutral-600 w-full">
          {avoidWastingCardData?.description || "Clickdee's flexible model for acquiring restoration leads without minimum commitments, allowing budget control and attracting more customers."}
        </Typography>
        <Typography variant="h4" weight="bold" className="text-neutral-900 w-full">
          {avoidWastingCardData?.subtitle || 'Why Pay For Clicks When You Can Pay For Leads'}
        </Typography>
      </div>
    </div>
  );

  const trackROICard: TextSection = {
    heading: trackROICardData?.heading || 'Track your returns on investment',
    paragraph: trackROICardData?.paragraph || 'Clickdee enhances profitability with detailed ROI metrics, enabling visualization of spending-to-revenue conversions and targeted strategies.',
    variant: 'bold-subtitle',
    subtitle: trackROICardData?.subtitle || 'Know Your Return to the Penny',
    bgColor: 'bg-white', // White background
  };

  return (
    <ContentGrid
      topLeft={fireRestorationCard}
      topRight={shareInterestsCard}
      middleLeft={avoidWastingCard}
      middleRight={payPerLeadCard}
      bottomLeft={spendingRevenueCard}
      bottomRight={trackROICard}
      className={className}
    />
  );
};
