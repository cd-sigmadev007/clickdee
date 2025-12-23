import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Typography, TestimonialsSection } from '@/components';
import { ServiceHeroSection, CommitmentSection, FAQSection, ProcessSection, LeadProfilesSection, BenefitsSection } from '../components';
import { getServiceBySlug, getPageSectionsData, convertToServicePageData } from '../data/servicesDataLoader';

const ServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/" replace />;
  }

  const service = getServiceBySlug(slug);

  if (!service) {
    // Service not found - could show 404 page or redirect
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <Typography variant="h2" weight="bold" className="text-neutral-900 mb-4">
          Service Not Found
        </Typography>
        <Typography variant="p" weight="medium" className="text-neutral-500 mb-6">
          The service you're looking for doesn't exist.
        </Typography>
        <a href="/" className="text-primary-500 hover:text-primary-600">
          Go back to home
        </a>
      </div>
    );
  }

  // Get page-specific sections data for this service
  const pageData = getPageSectionsData(slug);

  // Convert ServiceData to ServicePageData format
  const servicePageData = convertToServicePageData(service);

  return (
    <div className="w-full bg-primary-500">
      <ServiceHeroSection service={servicePageData} />
      
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

      {/* FAQ Section */}
      {pageData.faq && (
        <FAQSection 
          title={pageData.faq.title}
          items={pageData.faq.items} 
          defaultOpen={pageData.faq.defaultOpen} 
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

      <TestimonialsSection />
    </div>
  );
};

export default ServicePage;
