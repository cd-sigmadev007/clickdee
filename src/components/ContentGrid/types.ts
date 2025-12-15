import { StatCard } from '@/modules/home/types';

export interface TextSection {
  heading: string;
  paragraph: string;
  variant?: 'default' | 'bold-subtitle';
  subtitle?: string;
  className?: string;
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

export interface ContentGridProps {
  topLeft?: TextSection | StatsSection | React.ReactNode;
  topRight?: StatsSection | TextSection | React.ReactNode;
  bottomLeft?: ImageSection | TextSection | React.ReactNode;
  bottomRight?: TextSection | React.ReactNode;
  className?: string;
}
