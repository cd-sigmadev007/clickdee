import servicesData from './servicesData.json';
import pageSectionsData from './pageSectionsData.json';
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
import fireDamageHeroImage from '@/assets/images/fire-damage-hero-image.jpg';
import fireDamageHeroCenterIcon from '@/assets/images/fire-damage-hero-center-icon.svg';
import iconoirUserStar from '@/assets/icons/iconoir_user-star-1.svg';
import hugeiconsDollarReceive from '@/assets/icons/hugeicons_dollar-receive-01.svg';
import solarBillListOutline from '@/assets/icons/solar_bill-list-outline.svg';
import mageLocation from '@/assets/icons/mage_location.svg';
import solarMedalStar from '@/assets/icons/solar_medal-star-square-linear.svg';
import marketeqCall from '@/assets/icons/marketeq_call.svg';
import hugeiconsSearchArea from '@/assets/icons/hugeicons_search-area.svg';
import fireServiceBanner from '@/assets/images/fire-service-banner.png';
import gridImage from '@/assets/images/image.png';
import gridImageBlue from '@/assets/images/grid-services-blue.png';
import gridImageBlack from '@/assets/images/grid-services-black.png';
import dollarIcon from '@/assets/images/dollar.svg';
import dollarPattern from '@/assets/images/dollar-pattern.svg';
import baseMapImage from '@/assets/images/base-map.png';
import mapMarkerIcon from '@/assets/images/services-map-marker.svg';
import avatarAlbertFlores from '@/assets/images/avatar-peter-renolds.png';

// Icon mapping
const iconMap: Record<string, string> = {
  applianceRepair: applianceRepairIcon,
  asbestosRemoval: asbestosRemovalIcon,
  bathroomRemodelLeads: bathroomRemodelLeadsIcon,
  biohazardLeads: biohazardLeadsIcon,
  electricianLeads: electricianLeadsIcon,
  fireDamageLeads: fireDamageLeadsIcon,
  flooringLeads: flooringLeadsIcon,
  gutterLeads: gutterLeadsIcon,
  hvacLeads: hvacLeadsIcon,
  locksmithLeads: locksmithLeadsIcon,
  moldRemovalLeads: moldRemovalLeadsIcon,
  pestControlLeads: pestControlLeadsIcon,
  plumbingLeads: plumbingLeadsIcon,
  roofingLeads: roofingLeadsIcon,
  sidingLeads: sidingLeadsIcon,
  treeServicesLeads: treeServicesLeadsIcon,
  waterDamageLeads: waterDamageLeadsIcon,
  medicare: fireDamageLeadsIcon, // Placeholder
  aca: bathroomRemodelLeadsIcon, // Placeholder
  homeInsurance: waterDamageLeadsIcon, // Placeholder
  u65Health: gutterLeadsIcon, // Placeholder
  finalExpense: applianceRepairIcon, // Placeholder
  autoInsurance: moldRemovalLeadsIcon, // Placeholder
};

// Process icon mapping
const processIconMap: Record<string, string> = {
  marketeqCall,
  hugeiconsSearchArea,
  iconoirUserStar,
};

// Commitment icon mapping
const commitmentIconMap: Record<string, string> = {
  iconoirUserStar,
  hugeiconsDollarReceive,
  solarBillListOutline,
  mageLocation,
  solarMedalStar,
};

// Image mapping
const imageMap: Record<string, string> = {
  'fire-damage-hero-image.jpg': fireDamageHeroImage,
  'fire-damage-hero-center-icon.svg': fireDamageHeroCenterIcon,
  '/placeholder-hero.jpg': '/placeholder-hero.jpg',
  'fire-service-banner.png': fireServiceBanner,
  'image.png': gridImage,
  'grid-services-blue.png': gridImageBlue,
  'grid-services-black.png': gridImageBlack,
  'dollar.svg': dollarIcon,
  'dollar-pattern.svg': dollarPattern,
  'base-map.png': baseMapImage,
  'services-map-marker.svg': mapMarkerIcon,
  'avatar-peter-renolds.png': avatarAlbertFlores,
};

export interface ServiceData {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  heroImage: string;
  centerIcon?: string;
  incomingLeadCount: number;
  avgCostPerLead: string;
}

export interface PageSectionsData {
  page?: {
    title: string;
    subtitle: string;
    description: string;
  };
  commitment?: {
    title: string;
    highlightedTitle: string;
    description: string;
    banner: {
      title: string;
      description: string;
    };
    features: Array<{
      title: string;
      description: string;
      icon: string;
      linkText: string;
    }>;
  };
  process?: {
    title: string;
    subtitle: string;
    description: string;
    steps: Array<{
      stepNumber: string;
      title: string;
      description: string;
      icon: string;
    }>;
  };
  benefits?: {
    fireRestorationCard: {
      title: string;
      location: string;
      badgeText: string;
    };
    payPerLeadCard: {
      amount: string;
      label: string;
      title: string;
      description: string;
    };
    spendingRevenueCard: {
      title: string;
    };
    shareInterestsCard: {
      heading: string;
      paragraph: string;
      subtitle: string;
    };
    avoidWastingCard: {
      title: string;
      description: string;
      subtitle: string;
    };
    trackROICard: {
      heading: string;
      paragraph: string;
      subtitle: string;
    };
  };
  leadProfiles?: {
    title: string;
    highlightedTitle: string;
    description: string;
    leadDetails: {
      firstGroup: Array<{
        label: string;
        value: string;
        centerAlign: boolean;
      }>;
      secondGroup: Array<{
        label: string;
        value: string;
        centerAlign: boolean;
      }>;
    };
    testimonial: {
      name: string;
      role: string;
      text: string;
    };
    pricing: {
      title: string;
      description: string;
      ctaText: string;
    };
  };
  faq?: {
    title: string;
    items: Array<{
      value: string;
      question: string;
      answer: string;
    }>;
    defaultOpen: string[];
  };
}

/**
 * Get page sections data by page identifier (e.g., 'servicesPage' or service slug)
 */
export function getPageSectionsData(pageId: string = 'servicesPage'): PageSectionsData {
  const sectionsData = pageSectionsData as Record<string, PageSectionsData>;
  const pageData = sectionsData[pageId] || sectionsData['servicesPage'] || {};
  
  // Resolve commitment feature icons if they exist
  if (pageData.commitment?.features) {
    pageData.commitment.features = pageData.commitment.features.map(feature => ({
      ...feature,
      icon: commitmentIconMap[feature.icon] || iconoirUserStar,
    }));
  }

  // Resolve process step icons if they exist
  if (pageData.process?.steps) {
    pageData.process.steps = pageData.process.steps.map(step => ({
      ...step,
      icon: processIconMap[step.icon] || marketeqCall,
    }));
  }

  return pageData;
}

/**
 * Get all services with resolved icons and images
 */
export function getAllServices(): ServiceData[] {
  return (servicesData as ServiceData[]).map(service => ({
    ...service,
    icon: iconMap[service.icon] || fireDamageLeadsIcon,
    heroImage: imageMap[service.heroImage] || service.heroImage,
    centerIcon: service.centerIcon ? imageMap[service.centerIcon] : undefined,
  }));
}

/**
 * Get services by category
 */
export function getServicesByCategory(category: string): ServiceData[] {
  return getAllServices().filter(service => service.category === category);
}

/**
 * Get service by slug
 */
export function getServiceBySlug(slug: string): ServiceData | undefined {
  return getAllServices().find(service => service.slug === slug);
}

/**
 * Convert ServiceData to ServicePageData format for ServiceHeroSection
 */
export function convertToServicePageData(service: ServiceData): {
  id: string;
  slug: string;
  name: string;
  heroImage: string;
  icon: string;
  centerIcon?: string;
  incomingLeadCount: number;
  avgCostPerLead: string;
} {
  return {
    id: service.id,
    slug: service.slug,
    name: service.name,
    heroImage: service.heroImage,
    icon: service.icon,
    centerIcon: service.centerIcon,
    incomingLeadCount: service.incomingLeadCount,
    avgCostPerLead: service.avgCostPerLead,
  };
}

