import React from 'react';
import { ContentGrid } from '@/components';
import {
  AffiliateHeroSection,
  AffiliateServicesCard,
  AffiliateAboutSection,
  AffiliateRevenueSection,
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
      <div className="max-w-7xl mx-auto px-4 sm:px-[40px] md:px-[24px] lg:px-[120px] py-12 sm:py-[16px] md:py-[40px] lg:py-[32px]">
        <ContentGrid
          topLeft={<AffiliateAboutSection />}
          topRight={<AffiliateServicesCard />}
        />
      </div>

      {/* ContentGrid Section 2: Image + Revenue Text */}
      <div className="max-w-7xl mx-auto px-4 sm:px-[40px] md:px-[24px] lg:px-[120px] py-12 sm:py-[16px] md:py-[40px] lg:py-[32px]">
        <ContentGrid
          bottomLeft={{
            src: affiliateImage,
            alt: 'Business professionals celebrating success',
            className: 'w-full h-full object-cover rounded-[20px]',
          }}
          bottomRight={<AffiliateRevenueSection />}
        />
      </div>

      {/* Benefits Section */}
      <div className="bg-neutral-900 flex items-center justify-center px-4 sm:px-[40px] md:px-[24px] lg:px-[120px] py-12 sm:py-16 lg:py-20 w-full">
        <h2 className="font-bold text-headline text-white text-center">
          Benefits for our Affiliates
        </h2>
      </div>

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
