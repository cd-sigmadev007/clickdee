import React from 'react';
import { Typography } from '@/components/Typography';
import { HeroBackground } from '@/components/HeroBackground';
import { ContactForm } from './ContactForm';

export const ContactHeroSection: React.FC = () => {
  const handleSubmit = (formData: Record<string, any>) => {
    // Handle form submission
    console.log('Form submitted:', formData);
    // In production, this would send data to an API
  };
  
  return (
    <HeroBackground className='flex items-center justify-center'>
      <div className="flex flex-col lg:flex-row gap-8 items-center justify-between relative shrink-0 w-full">
        <div className="flex flex-col gap-[5px] items-center lg:items-start justify-center lg:justify-start lg:flex-1 relative shrink-0 lg:max-w-[50%] w-full">
          <Typography variant="headline" weight="bold" className="text-neutral-900 lg:text-left text-center">
            Local leads waiting
          </Typography>
          <div className="bg-primary-100 flex items-center justify-center px-2.5 py-[5px] rounded-[10px]">
            <Typography variant="headline" weight="bold" className="text-primary-500 lg:text-left text-center">
              Are you ready to respond?
            </Typography>
          </div>
          <Typography
            variant="s"
            weight="medium"
            className="text-neutral-500 lg:text-left text-center mt-0 w-full mt-[32px]"
          >
            <p className="mb-0">Become part of our network and start</p>
            <p>growing your revenue now!</p>
          </Typography>
        </div>

        <div className="w-full lg:flex-shrink-0 relative z-10 lg:max-w-[50%]">
          <ContactForm onSubmit={handleSubmit} />
        </div>
      </div>
    </HeroBackground>
  );
};

