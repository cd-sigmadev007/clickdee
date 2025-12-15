import { ServicePageData } from './index';
import applianceRepairIcon from '@/assets/icons/appliance-repair.svg';
import asbestosRemovalIcon from '@/assets/icons/asbestos-removal.svg';
import bathroomRemodelLeadsIcon from '@/assets/icons/bathroom-remodel-leads.svg';
import biohazardLeadsIcon from '@/assets/icons/biohazard-leads.svg';
import electricianLeadsIcon from '@/assets/icons/electrician-leads.svg';
import fireDamageLeadsIcon from '@/assets/icons/fire-damage-leads.svg';
import flooringLeadsIcon from '@/assets/icons/flooring-leads.svg';
import gutterLeadsIcon from '@/assets/icons/gutter-leads.svg';
import hvacLeadsIcon from '@/assets/icons/hvac-leads.svg';
import locksmithLeadsIcon from '@/assets/icons/locksmith-leads.svg';
import moldRemovalLeadsIcon from '@/assets/icons/mold-removal-leads.svg';
import pestControlLeadsIcon from '@/assets/icons/pest-control-leads.svg';
import plumbingLeadsIcon from '@/assets/icons/plumbing-leads.svg';
import roofingLeadsIcon from '@/assets/icons/roofing-leads.svg';
import sidingLeadsIcon from '@/assets/icons/siding-leads.svg';
import treeServicesLeadsIcon from '@/assets/icons/tree-services-leads.svg';
import waterDamageLeadsIcon from '@/assets/icons/water-damage-leads.svg';

// Hero images
import fireDamageHeroImage from '@/assets/images/fire-damage-hero-image.jpg';
import fireDamageHeroCenterIcon from '@/assets/images/fire-damage-hero-center-icon.svg';

// Placeholder hero images - these should be replaced with actual images from Figma
const placeholderHeroImage = '/placeholder-hero.jpg';

/**
 * Helper function to generate slug from service name
 */
export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

/**
 * Service data array - maps all services from Header.tsx
 * Note: Hero images and badge values are placeholders and should be updated with actual data
 */
export const servicesData: ServicePageData[] = [
  {
    id: 'appliance-repair',
    slug: 'appliance-repair',
    name: 'Appliance Repair',
    heroImage: placeholderHeroImage,
    icon: applianceRepairIcon,
    incomingLeadCount: 1,
    avgCostPerLead: '$30',
  },
  {
    id: 'asbestos-removal',
    slug: 'asbestos-removal',
    name: 'Asbestos Removal',
    heroImage: placeholderHeroImage,
    icon: asbestosRemovalIcon,
    incomingLeadCount: 1,
    avgCostPerLead: '$30',
  },
  {
    id: 'bathroom-remodel-leads',
    slug: 'bathroom-remodel-leads',
    name: 'Bathroom Remodel Leads',
    heroImage: placeholderHeroImage,
    icon: bathroomRemodelLeadsIcon,
    incomingLeadCount: 1,
    avgCostPerLead: '$30',
  },
  {
    id: 'biohazard-leads',
    slug: 'biohazard-leads',
    name: 'Biohazard Leads',
    heroImage: placeholderHeroImage,
    icon: biohazardLeadsIcon,
    incomingLeadCount: 1,
    avgCostPerLead: '$30',
  },
  {
    id: 'electrician-leads',
    slug: 'electrician-leads',
    name: 'Electrician Leads',
    heroImage: placeholderHeroImage,
    icon: electricianLeadsIcon,
    incomingLeadCount: 1,
    avgCostPerLead: '$30',
  },
  {
    id: 'fire-damage-leads',
    slug: 'fire-damage-leads',
    name: 'Fire Restoration Leads',
    heroImage: fireDamageHeroImage,
    icon: fireDamageLeadsIcon,
    centerIcon: fireDamageHeroCenterIcon,
    incomingLeadCount: 1,
    avgCostPerLead: '$30',
  },
  {
    id: 'flooring-leads',
    slug: 'flooring-leads',
    name: 'Flooring Leads',
    heroImage: placeholderHeroImage,
    icon: flooringLeadsIcon,
    incomingLeadCount: 1,
    avgCostPerLead: '$30',
  },
  {
    id: 'gutter-leads',
    slug: 'gutter-leads',
    name: 'Gutter Leads',
    heroImage: placeholderHeroImage,
    icon: gutterLeadsIcon,
    incomingLeadCount: 1,
    avgCostPerLead: '$30',
  },
  {
    id: 'hvac-leads',
    slug: 'hvac-leads',
    name: 'HVAC Leads',
    heroImage: placeholderHeroImage,
    icon: hvacLeadsIcon,
    incomingLeadCount: 1,
    avgCostPerLead: '$30',
  },
  {
    id: 'locksmith-leads',
    slug: 'locksmith-leads',
    name: 'Locksmith Leads',
    heroImage: placeholderHeroImage,
    icon: locksmithLeadsIcon,
    incomingLeadCount: 1,
    avgCostPerLead: '$30',
  },
  {
    id: 'mold-removal-leads',
    slug: 'mold-removal-leads',
    name: 'Mold Removal Leads',
    heroImage: placeholderHeroImage,
    icon: moldRemovalLeadsIcon,
    incomingLeadCount: 1,
    avgCostPerLead: '$30',
  },
  {
    id: 'pest-control-leads',
    slug: 'pest-control-leads',
    name: 'Pest Control Leads',
    heroImage: placeholderHeroImage,
    icon: pestControlLeadsIcon,
    incomingLeadCount: 1,
    avgCostPerLead: '$30',
  },
  {
    id: 'plumbing-leads',
    slug: 'plumbing-leads',
    name: 'Plumbing Leads',
    heroImage: placeholderHeroImage,
    icon: plumbingLeadsIcon,
    incomingLeadCount: 1,
    avgCostPerLead: '$30',
  },
  {
    id: 'roofing-leads',
    slug: 'roofing-leads',
    name: 'Roofing Leads',
    heroImage: placeholderHeroImage,
    icon: roofingLeadsIcon,
    incomingLeadCount: 1,
    avgCostPerLead: '$30',
  },
  {
    id: 'siding-leads',
    slug: 'siding-leads',
    name: 'Siding Leads',
    heroImage: placeholderHeroImage,
    icon: sidingLeadsIcon,
    incomingLeadCount: 1,
    avgCostPerLead: '$30',
  },
  {
    id: 'tree-services-leads',
    slug: 'tree-services-leads',
    name: 'Tree Services Leads',
    heroImage: placeholderHeroImage,
    icon: treeServicesLeadsIcon,
    incomingLeadCount: 1,
    avgCostPerLead: '$30',
  },
  {
    id: 'water-damage-leads',
    slug: 'water-damage-leads',
    name: 'Water Damage Leads',
    heroImage: placeholderHeroImage,
    icon: waterDamageLeadsIcon,
    incomingLeadCount: 1,
    avgCostPerLead: '$30',
  },
];

/**
 * Get service data by slug
 */
export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return servicesData.find(service => service.slug === slug);
}

/**
 * Get service data by name (for backward compatibility)
 */
export function getServiceByName(name: string): ServicePageData | undefined {
  return servicesData.find(service => service.name === name);
}
