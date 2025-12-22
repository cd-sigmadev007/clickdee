import React, { useState } from 'react';
import { Typography } from '@/components/Typography';
import { HeroBackground } from '@/components/HeroBackground';
import { ContactForm } from './ContactForm';
import callIcon from '@/assets/icons/marketeq_call.svg';
import tickWithGola from '@/assets/images/tick-with-gola.svg';
import { Button } from '@/components/Button';

export const ContactHeroSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (formData: Record<string, any>) => {
    // Handle form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // In production, this would send data to an API
  };
  
  if (isSubmitted) {
    return (
      <HeroBackground className='flex items-center justify-center' style={{ height: 'calc(100vh - 75px)' }}>
        <div className="flex flex-col gap-8 items-center justify-center relative shrink-0 w-full">
          <div className="w-[100px] h-[100px] flex items-center justify-center flex-shrink-0">
            <img src={tickWithGola} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="flex gap-[5px] items-center justify-center flex-wrap">
            <Typography variant="display" weight="bold" className="text-neutral-900 text-center whitespace-nowrap">
              We will contact you
            </Typography>
            <div className="bg-primary-100 flex items-center justify-center px-2.5 py-[5px] rounded-[10px]">
              <Typography variant="display" weight="bold" className="text-primary-500 whitespace-nowrap">
                shortly!
              </Typography>
            </div>
          </div>
          <Typography variant="s" weight="medium" className="text-neutral-500 text-center">
            <p className="mb-0">One of our advertising consultants will contact you to discuss</p>
            <p>how we can help you grow your restoration business.</p>
          </Typography>
          <Button variant="primary" className="flex items-center gap-[10px] px-6 py-[14px]">
            <img src={callIcon} alt="" className="w-6 h-6" />
            <Typography variant="p" weight="bold" className="text-white whitespace-nowrap">
              (855) 387-7272
            </Typography>
          </Button>
        </div>
      </HeroBackground>
    );
  }
  
  return (
    <HeroBackground className='flex items-center justify-center' style={{ height: 'calc(100vh - 75px)' }}>
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

