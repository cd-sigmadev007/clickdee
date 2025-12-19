import React from 'react';
import { CompanyValuesHeroSection } from './CompanyValuesHeroSection';
import { CoreValuesSection } from './CoreValuesSection';
import { WhyWorkWithUsSection } from './WhyWorkWithUsSection';
import { CompanyHistorySection } from './CompanyHistorySection';
import { MilestoneSection } from './MilestoneSection';
import { CTASection } from '@/modules/home/components/CTASection';

export const CompanyValuesSection: React.FC = () => {
  return (
    <div className="w-full">
      <CompanyValuesHeroSection />
      <CoreValuesSection />
      <WhyWorkWithUsSection />
      <CompanyHistorySection />
      <MilestoneSection />
      <CTASection />
    </div>
  );
};

