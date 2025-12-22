/**
 * Home Module Types
 */

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'home-services' | 'insurance';
  large?: boolean;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface MapPin {
  id: string;
  coordinates: [number, number];
  service: string;
  state: string;
  worth: string;
  icon?: string;
}

export interface StateData {
  id: string;
  name: string;
  abbreviation: string;
  coordinates: [number, number];
  leads?: {
    service: string;
    worth: string;
    count?: number;
    icon?: string;
  };
}

export interface StatCard {
  id: string;
  value: string;
  label: string;
}

export interface Testimonial {
  id: string;
  text: string;
  authorName: string;
  authorTitle: string;
  avatar: string;
}

export type ServiceCategory = 'home-services' | 'insurance';

