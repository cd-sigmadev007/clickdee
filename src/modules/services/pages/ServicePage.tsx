import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Typography } from '@/components';
import { ServiceHeroSection } from '../components';
import { getServiceBySlug } from '../types/serviceData';

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

  return (
    <div className="w-full">
      <ServiceHeroSection service={service} />
      {/* Future sections will be added here */}
    </div>
  );
};

export default ServicePage;
