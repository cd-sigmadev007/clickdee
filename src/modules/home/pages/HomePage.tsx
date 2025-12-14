import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { ServicesSection } from '../components/ServicesSection';
import { NationwideMapSection } from '../components/NationwideMapSection';
import { ResultsSection } from '../components/ResultsSection';

const HomePage: React.FC = () => {
  return (
    <div className="w-full bg-primary-500">
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <NationwideMapSection />
      <ResultsSection />
    </div>
  );
};

export default HomePage;

