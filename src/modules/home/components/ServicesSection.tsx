import React, { useState } from 'react';
import { Typography } from '@/components';
import { ServiceCategoriesTabs } from './ServiceCategoriesTabs';
import { ServicesGrid } from './ServicesGrid';
import { Service, ServiceCategory } from '../types';
import fireDamageIcon from '@/assets/icons/fire-damage-leads.svg';
import bathroomRemodelIcon from '@/assets/icons/bathroom-remodel-leads.svg';
import waterDamageIcon from '@/assets/icons/water-damage-leads.svg';
import gutterIcon from '@/assets/icons/gutter-leads.svg';
import applianceRepairIcon from '@/assets/icons/appliance-repair.svg';
import moldRemovalIcon from '@/assets/icons/mold-removal-leads.svg';
import roofingIcon from '@/assets/icons/roofing-leads.svg';
import locksmithIcon from '@/assets/icons/locksmith-leads.svg';
import electricianIcon from '@/assets/icons/electrician-leads.svg';
import pestControlIcon from '@/assets/icons/pest-control-leads.svg';
import hvacIcon from '@/assets/icons/hvac-leads.svg';
import plumbingIcon from '@/assets/icons/plumbing-leads.svg';

const homeServices: Service[] = [
  {
    id: 'fire-damage',
    name: 'Fire Damage',
    description: 'We help urgently seeking immediate assistance with fire dama...',
    icon: fireDamageIcon,
    category: 'home-services',
  },
  {
    id: 'bathroom-remodel',
    name: 'Bathroom Remodel',
    description: 'Providing yearning for professionals to rejuvenate their ...',
    icon: bathroomRemodelIcon,
    category: 'home-services',
  },
  {
    id: 'water-damage',
    name: 'Water Damage',
    description: 'Leverage our expansive network to connect with local homeowners seeking immediate assistance for the water damage services you offer.',
    icon: waterDamageIcon,
    category: 'home-services',
    featured: true,
    gradient: true,
    large: false,
  },
  {
    id: 'gutter',
    name: 'Gutter',
    description: 'Respond to the call of homeowners in our community, seeking ...',
    icon: gutterIcon,
    category: 'home-services',
  },
  {
    id: 'appliance-repair',
    name: 'Appliance Repair',
    description: 'We help customers seeking repair solutions for their malfunc...',
    icon: applianceRepairIcon,
    category: 'home-services',
  },
  {
    id: 'mold-removal',
    name: 'Mold Removal',
    description: 'With precision and care, we eliminate mold infestations, off...',
    icon: moldRemovalIcon,
    category: 'home-services',
  },
  {
    id: 'roofing',
    name: 'Roofing',
    description: 'Our roofing solutions ensure homeowners\' peace of mind, safe...',
    icon: roofingIcon,
    category: 'home-services',
  },
  {
    id: 'locksmith',
    name: 'Locksmith',
    description: 'Providing reliable locksmith solutions, we assist in fortify...',
    icon: locksmithIcon,
    category: 'home-services',
  },
  {
    id: 'electrician',
    name: 'Electrician',
    description: 'Our skilled electricians offer tailored solutions, addressin...',
    icon: electricianIcon,
    category: 'home-services',
  },
  {
    id: 'pest-control',
    name: 'Pest control',
    description: 'Tap into our vast network to connect with local residents se...',
    icon: pestControlIcon,
    category: 'home-services',
  },
  {
    id: 'hvac',
    name: 'Hvac',
    description: 'Meet the needs of issues your area, seek our expertise to en...',
    icon: hvacIcon,
    category: 'home-services',
  },
  {
    id: 'plumbing',
    name: 'Plumbing',
    description: 'From repairs to installations, our plumbing solutions keep y...',
    icon: plumbingIcon,
    category: 'home-services',
  },
];

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('home-services');
  
  const filteredServices = homeServices.filter(service => service.category === activeCategory);
  
  return (
    <div className="bg-neutral-100 flex flex-col gap-6 sm:gap-8 items-center justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-[80px] lg:py-[88px] relative w-full rounded-[20px] sm:rounded-[40px]" data-node-id="1:14123">
      {/* Title */}
      <div className="flex flex-col sm:flex-row gap-2.5 items-center justify-center w-full" data-node-id="1:14125">
        <Typography variant="h1" weight="bold" className="text-neutral-900 whitespace-nowrap" data-node-id="1:14126">
          We deliver the
        </Typography>
        <div className="bg-primary-200 flex items-start justify-center px-2.5 py-1.5 rounded-[10px]" data-node-id="1:14127">
          <Typography variant="h1" weight="bold" className="text-primary-500 whitespace-nowrap" data-node-id="1:14128">
            leads,
          </Typography>
        </div>
        <Typography variant="h1" weight="bold" className="text-neutral-900 whitespace-nowrap" data-node-id="1:14129">
          You get the solutions!
        </Typography>
      </div>
      
      {/* Tabs */}
      <ServiceCategoriesTabs
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />
      
      {/* Services Grid */}
      <ServicesGrid services={filteredServices} />
    </div>
  );
};

