import React from 'react';
import { Tabs } from '@/components/Tabs';
import { ServiceCategory } from '../types';

interface ServiceCategoriesTabsProps {
  activeCategory: ServiceCategory;
  onChange: (category: ServiceCategory) => void;
}

export const ServiceCategoriesTabs: React.FC<ServiceCategoriesTabsProps> = ({
  activeCategory,
  onChange,
}) => {
  return (
    <Tabs
      items={[
        { label: 'Home Services', value: 'home-services' },
        { label: 'Insurance', value: 'insurance' },
      ]}
      value={activeCategory}
      onChange={(value) => onChange(value as ServiceCategory)}
      className="bg-neutral-200 border-neutral-300"
    />
  );
};

