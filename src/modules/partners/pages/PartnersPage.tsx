import React from 'react';
import { PartnersHeroSection } from '../components/PartnersHeroSection';
import { BillableCallsSection } from '@/components/BillableCallsSection';
import { PartnerSupportOnboardingSection } from '../components';


const PartnersPage: React.FC = () => {
  return (
    <div className="w-full">
      <PartnersHeroSection />
      <PartnerSupportOnboardingSection />
      <BillableCallsSection />
    </div>
  );
};

export default PartnersPage;
