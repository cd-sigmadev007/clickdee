import React from 'react';
import { ContactHeroSection, HowItWorksSection, HowItWorksCarouselSection, GooglePartnerSection } from '../components';
import { ScrollingBanner } from '@/components/ScrollingBanner';
import { CTASection } from '@/modules/home/components/CTASection';

const ContactUsPage: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <ContactHeroSection />
      <ScrollingBanner />
      <HowItWorksSection />
      <HowItWorksCarouselSection />
      <GooglePartnerSection />
      <CTASection />
    </div>
  );
};

export default ContactUsPage;

