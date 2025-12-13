import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { ServicesSection } from '../components/ServicesSection';
import { NationwideMapSection } from '../components/NationwideMapSection';

const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <NationwideMapSection />
    </div>
  );
};

export default HomePage;

