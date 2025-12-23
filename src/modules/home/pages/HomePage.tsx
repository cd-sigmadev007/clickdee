import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { ServicesSection } from '../components/ServicesSection';
import { NationwideMapSection } from '../components/NationwideMapSection';
import { ResultsSection } from '../components/ResultsSection';
import { BlogsSection } from '../components/BlogsSection';
import { TestimonialsSection } from '@/components';
import { CTASection } from '../components/CTASection';

const HomePage: React.FC = () => {
  return (
    <div className="w-full bg-primary-500">
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <NationwideMapSection />
      <ResultsSection />
      <BlogsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;

