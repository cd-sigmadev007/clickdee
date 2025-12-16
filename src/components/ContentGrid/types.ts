import { StatCard } from '@/modules/home/types';

export interface TextSection {
  heading: string;
  paragraph: string;
  variant?: 'default' | 'bold-subtitle';
  subtitle?: string;
  className?: string;
  bgColor?: string; // Custom background color (e.g., 'bg-white', 'bg-neutral-100')
  pattern?: boolean; // Add pattern overlay
}

export interface ImageSection {
  src: string;
  alt: string;
  filter?: 'blue' | 'none' | string; // Custom filter class
  className?: string;
}

export interface StatsSection {
  stats: StatCard[];
  gridBackground?: string;
}

export interface BenefitCard {
  id: string;
  type: 'feature' | 'pricing' | 'highlight';
  title: string;
  subtitle?: string;
  description?: string;
  price?: string;
  priceLabel?: string;
  location?: string;
  badge?: string;
  icon?: string;
  bgColor: string;
  textColor: string;
}

export interface ContentGridProps {
  // Legacy 4-card support
  topLeft?: TextSection | StatsSection | React.ReactNode;
  topRight?: StatsSection | TextSection | React.ReactNode;
  bottomLeft?: ImageSection | TextSection | React.ReactNode;
  bottomRight?: TextSection | React.ReactNode;
  // Extended 6-card support
  middleLeft?: TextSection | React.ReactNode;
  middleRight?: TextSection | React.ReactNode;
  // New array-based support for multiple cards
  cards?: BenefitCard[];
  className?: string;
}
