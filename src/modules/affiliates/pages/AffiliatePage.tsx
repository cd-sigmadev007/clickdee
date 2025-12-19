import React from 'react';
import { ContentGrid } from '@/components';
import {
  AffiliateHeroSection,
  AffiliateServicesCard,
  AffiliateAboutSection,
  AffiliateRevenueSection,
  AffiliateBenefitsChecklistSection,
  AffiliateAdvantagesSection,
  AffiliateFormSection,
  AffiliateCTASection,
} from '../components';
import affiliateImage from '@/assets/images/affliate-image.png';

const AffiliatePage: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <AffiliateHeroSection />

      {/* ContentGrid Section 1: About Clickdee + Services Card */}
      <ContentGrid
        left={<AffiliateAboutSection />}
        right={<AffiliateServicesCard />}
      />

      {/* ContentGrid Section 2: Image + Revenue Text */}
      <ContentGrid
        left={{
          src: affiliateImage,
          alt: 'Business professionals celebrating success',
          filter: 'blue',
        }}
        right={<AffiliateRevenueSection />}
      />

      {/* Benefits Checklist Section */}
      <AffiliateBenefitsChecklistSection />

      {/* Advantages Section */}
      <AffiliateAdvantagesSection />

      {/* Form Section */}
      <AffiliateFormSection />

      {/* CTA Section */}
      <AffiliateCTASection />
    </div>
  );
};

export default AffiliatePage;
