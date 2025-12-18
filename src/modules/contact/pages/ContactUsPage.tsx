import React from 'react';
import { ContactHeroSection, HowItWorksSection } from '../components';
import { ScrollingBanner } from '@/components/ScrollingBanner';

const ContactUsPage: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <ContactHeroSection />
      <ScrollingBanner />
      <HowItWorksSection />
    </div>
  );
};

export default ContactUsPage;

