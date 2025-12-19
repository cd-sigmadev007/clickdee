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
    <div className="bg-gradient-to-b from-primary-600 to-primary-500 relative w-full h-full overflow-hidden">
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
          top: '25%', // Center of the grid (which spans top 50% of container)
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Logo className="brightness-0 invert" />
      </div>
      
      {/* Service badges */}
      <div className="relative z-10 w-full h-full">
        {/* Top row - 6 badges, centered */}
        <div
          className="absolute flex gap-6 items-center"
          style={{
            left: 'calc(50% + 0.42px)',
            bottom: '20%',
            transform: 'translateX(-50%)',
          }}
        >
          {topRowBadges.map((badge) => (
            <ServiceBadgeItem key={badge.id} badge={badge} />
          ))}
        </div>

        {/* Bottom row - 6 badges */}
        <div
          className="absolute flex gap-6 items-center"
          style={{
            left: '-20.18px',
            bottom: '40%',
            width: '879.183px',
          }}
        >
          {bottomRowBadges.map((badge) => (
            <ServiceBadgeItem key={badge.id} badge={badge} />
          ))}
        </div>
      </div>
    </div>
  );
};
