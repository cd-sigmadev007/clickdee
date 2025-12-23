import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, TestimonialsSection } from '@/components';
import { 
  CommitmentSection, 
  FAQSection, 
  ProcessSection, 
  LeadProfilesSection, 
  BenefitsSection 
} from '../components';
import { getPageSectionsData, getServicesByCategory } from '../data/servicesDataLoader';
import { ServiceCard } from '@/modules/home/components/ServiceCard';
import { ServiceCategoriesTabs } from '@/modules/home/components/ServiceCategoriesTabs';
import { ServiceCategory } from '@/modules/home/types';
import { isLargeCardPosition } from '@/modules/home/utils/cardSizeCalculator';
import type { Service } from '@/modules/home/types';

const ServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('home-services');
  const navigate = useNavigate();
  const pageData = getPageSectionsData('servicesPage');

  // Get services for the active category
  const servicesData = getServicesByCategory(activeCategory);
  
  // Convert to Service type with large property
  const services: Service[] = servicesData.map((service, index) => ({
    id: service.id,
    name: service.name,
    description: service.description,
    icon: service.icon,
    category: service.category as ServiceCategory,
    large: isLargeCardPosition(index + 1),
  }));

  const handleServiceClick = (service: Service) => {
    const serviceData = servicesData.find(s => s.name === service.name);
    if (serviceData) {
      navigate(`/services/${serviceData.slug}`);
    }
  };

  return (
    <div className="w-full bg-primary-500">
      {/* Hero Section */}
      <div className="bg-white flex flex-col items-center justify-center px-4 py-10 sm:px-6 sm:py-10 lg:px-[80px] lg:py-[88px] w-full">
        <div className="flex flex-wrap lg:flex-nowrap gap-[5px] items-center justify-center w-full max-w-full">
          <Typography variant="title" weight="bold" className="text-neutral-900">
            {pageData.page?.subtitle || 'We deliver the leads, You get the solutions!'}
          </Typography>
        </div>
        <Typography 
          variant="s" 
          weight="medium" 
          className="text-neutral-500 text-center mt-4 max-w-2xl"
        >
          {pageData.page?.description || 'Explore our comprehensive range of lead generation services'}
        </Typography>
      </div>

      {/* Services Section */}
      <div className="bg-neutral-100 flex flex-col z-[1] gap-8 items-center justify-center px-4 py-10 sm:px-6 sm:py-10 lg:px-[80px] lg:py-[88px] relative w-full">
        {/* Tabs */}
        <ServiceCategoriesTabs
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />
        
        {/* Services Grid */}
        <div className="w-full max-w-full">
          {/* Mobile: Stack all cards vertically */}
          <div className="flex flex-col gap-4 md:hidden w-full">
            {services.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onClick={() => handleServiceClick(service)} 
              />
            ))}
          </div>
          
          {/* Tablet: Nested flex with 2 cards per row */}
          <div className="hidden md:flex lg:hidden flex-col gap-[16px] w-full">
            {/* First Row - 2 cards */}
            <div className="flex gap-[16px] w-full">
              {/* Left Column - stacked cards */}
              <div className="flex flex-col gap-[16px] flex-1">
                {services.slice(0, Math.ceil(services.length / 2)).map((service) => (
                  <ServiceCard 
                    key={service.id} 
                    service={service} 
                    onClick={() => handleServiceClick(service)} 
                  />
                ))}
              </div>
              {/* Right Column - stacked cards */}
              <div className="flex flex-col gap-[16px] flex-1">
                {services.slice(Math.ceil(services.length / 2)).map((service) => (
                  <ServiceCard 
                    key={service.id} 
                    service={service} 
                    onClick={() => handleServiceClick(service)} 
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Desktop: Complex grid layout */}
          <div className="hidden lg:grid grid-cols-3 gap-[16px] w-full">
            {services.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onClick={() => handleServiceClick(service)} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Commitment Section */}
      {pageData.commitment && (
        <CommitmentSection 
          title={pageData.commitment.title}
          highlightedTitle={pageData.commitment.highlightedTitle}
          description={pageData.commitment.description}
          features={pageData.commitment.features}
          banner={pageData.commitment.banner}
        />
      )}

      {/* Process Section */}
      {pageData.process && (
        <ProcessSection
          title={pageData.process.title}
          subtitle={pageData.process.subtitle}
          description={pageData.process.description}
          steps={pageData.process.steps}
        />
      )}

      {/* Lead Profiles Section */}
      {pageData.leadProfiles && (
        <LeadProfilesSection
          title={pageData.leadProfiles.title}
          highlightedTitle={pageData.leadProfiles.highlightedTitle}
          description={pageData.leadProfiles.description}
          leadDetails={pageData.leadProfiles.leadDetails}
          testimonial={pageData.leadProfiles.testimonial}
          pricing={pageData.leadProfiles.pricing}
        />
      )}

      {/* Benefits Section */}
      {pageData.benefits && (
        <BenefitsSection
          fireRestorationCard={pageData.benefits.fireRestorationCard}
          payPerLeadCard={pageData.benefits.payPerLeadCard}
          spendingRevenueCard={pageData.benefits.spendingRevenueCard}
          shareInterestsCard={pageData.benefits.shareInterestsCard}
          avoidWastingCard={pageData.benefits.avoidWastingCard}
          trackROICard={pageData.benefits.trackROICard}
        />
      )}

      {/* FAQ Section */}
      {pageData.faq && (
        <FAQSection
          title={pageData.faq.title}
          items={pageData.faq.items}
          defaultOpen={pageData.faq.defaultOpen}
          className="bg-neutral-900"
        />
      )}

      {/* Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
};

export default ServicesPage;

