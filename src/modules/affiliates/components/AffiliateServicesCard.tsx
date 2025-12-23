import React from 'react';
import { Typography } from '@/components/Typography';
import { Logo } from '@/components/Logo';
import affiliateGridlines from '@/assets/images/affliate-gridlines.svg';
import applianceRepairIcon from '@/assets/icons/appliance-repair.svg';
import fireDamageIcon from '@/assets/icons/fire-damage-leads.svg';
import moldRemovalIcon from '@/assets/icons/mold-removal-leads.svg';
import plumbingIcon from '@/assets/icons/plumbing-leads.svg';
import electricianIcon from '@/assets/icons/electrician-leads.svg';
import pestControlIcon from '@/assets/icons/pest-control-leads.svg';
import hvacIcon from '@/assets/icons/hvac-leads.svg';
import waterDamageIcon from '@/assets/icons/water-damage-leads.svg';
import roofingIcon from '@/assets/icons/roofing-leads.svg';
import locksmithIcon from '@/assets/icons/locksmith-leads.svg';

interface ServiceBadge {
  id: string;
  name: string;
  location: string;
  icon: string;
}

const topRowBadges: ServiceBadge[] = [
  {
    id: 'appliance-1',
    name: 'Appliance Repair',
    location: 'Cincinnati, OH',
    icon: applianceRepairIcon,
  },
  {
    id: 'fire-restoration',
    name: 'Fire Restoration',
    location: 'Miami, FL',
    icon: fireDamageIcon,
  },
  {
    id: 'mold-1',
    name: 'Mold Removal Leads',
    location: 'Miami, FL',
    icon: moldRemovalIcon,
  },
  {
    id: 'plumbing',
    name: 'Plumbing Leads',
    location: 'Birmingham, AL',
    icon: plumbingIcon,
  },
  {
    id: 'mold-2',
    name: 'Mold Removal Leads',
    location: 'Miami, FL',
    icon: moldRemovalIcon,
  },
  {
    id: 'water-damage',
    name: 'Water Damage',
    location: 'Atlanta, GA',
    icon: waterDamageIcon,
  },
];

const bottomRowBadges: ServiceBadge[] = [
  {
    id: 'appliance-2',
    name: 'Appliance Repair',
    location: 'Cincinnati, OH',
    icon: applianceRepairIcon,
  },
  {
    id: 'electrician',
    name: 'Electrician Leads',
    location: 'Indianapolis, IN',
    icon: electricianIcon,
  },
  {
    id: 'pest-control',
    name: 'Pest Control Leads',
    location: 'Jersey City, NJ',
    icon: pestControlIcon,
  },
  {
    id: 'hvac',
    name: 'HVAC Leads',
    location: 'Miami, FL',
    icon: hvacIcon,
  },
  {
    id: 'roofing',
    name: 'Roofing Leads',
    location: 'Dallas, TX',
    icon: roofingIcon,
  },
  {
    id: 'locksmith',
    name: 'Locksmith Leads',
    location: 'Phoenix, AZ',
    icon: locksmithIcon,
  },
];

// Duplicate badges for seamless infinite scroll
const duplicatedTopRow = [...topRowBadges, ...topRowBadges, ...topRowBadges];
const duplicatedBottomRow = [...bottomRowBadges, ...bottomRowBadges, ...bottomRowBadges];

const ServiceBadgeItem: React.FC<{ badge: ServiceBadge }> = ({ badge }) => (
  <div
    className="flex gap-1.5 items-center justify-center px-2 py-2 rounded-[10px] shadow-[0px_4.924px_12.31px_0px_rgba(0,0,0,0.05)] border border-primary-200 shrink-0"
    style={{
      background: 'linear-gradient(196deg, rgba(41, 135, 255, 1) 10.529%, rgba(0, 105, 240, 1) 91.148%)',
    }}
  >
    <img 
      src={badge.icon} 
      alt="" 
      className="w-8 h-8 flex-shrink-0" 
    />
    <div className="flex flex-col items-start">
      <Typography variant="xs" weight="bold" className="text-white whitespace-nowrap">
        {badge.name}
      </Typography>
      <Typography variant="2xs" weight="medium" className="text-white whitespace-nowrap">
        {badge.location}
      </Typography>
    </div>
  </div>
);

export const AffiliateServicesCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-primary-600 to-primary-500 relative w-full h-full overflow-hidden" style={{ overflow: 'hidden' }}>
      {/* Gridlines background - centered and flipped vertically */}
      <div className="absolute top-0 bottom-[50%] w-full h-auto pointer-events-none scale-y-[-1]">
        <img 
          src={affiliateGridlines} 
          alt="" 
          className="w-full opacity-100" 
        />
      </div>
      
      {/* Clickdee Logo - centered in the grid background */}
      <div 
        className="absolute left-1/2 z-10 pointer-events-none"
        style={{
          top: '20%', // Center of the grid (which spans top 50% of container)
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Logo className="brightness-0 invert" />
      </div>
      
      {/* Service badges - Carousel */}
      <div className="relative z-10 w-full h-full" style={{ overflow: 'hidden' }}>
        {/* Top row - Moving Left */}
        <div
          className="absolute flex gap-6 items-center whitespace-nowrap"
          style={{
            bottom: '20%',
            left: '0',
            willChange: 'transform',
            animation: 'scroll-left-services 60s linear infinite',
          }}
        >
          {duplicatedTopRow.map((badge, index) => (
            <ServiceBadgeItem key={`${badge.id}-${index}`} badge={badge} />
          ))}
        </div>

        {/* Bottom row - Moving Right */}
        <div
          className="absolute flex gap-6 items-center whitespace-nowrap"
          style={{
            bottom: '40%',
            left: '0',
            willChange: 'transform',
            animation: 'scroll-right-services 60s linear infinite',
          }}
        >
          {duplicatedBottomRow.map((badge, index) => (
            <ServiceBadgeItem key={`${badge.id}-${index}`} badge={badge} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-left-services {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        @keyframes scroll-right-services {
          0% {
            transform: translateX(calc(-100% / 3));
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};
