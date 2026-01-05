import React from 'react';
import { Button } from '@/components/Button';
import { Typography } from '@/components/Typography';
import chevronLeftIcon from '@/assets/icons/heroicons_chevron-left.svg';

export const CTASection: React.FC = () => {
  return (
    <section className="bg-neutral-900 w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-20 py-8 lg:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
          {/* Text Content */}
          <Typography 
            variant="subtitle" 
            weight="medium" 
            className="text-white text-left flex-1"
          >
            Ready to take your home service business to new heights? Reach out to our dedicated advertising specialists today!
          </Typography>
          
          {/* Button */}
          <div className="w-full md:w-auto">
            <a href="tel:+18553877272">
              <Button 
                variant="secondary" 
                className="w-full md:w-auto !text-neutral-900 bg-white border-white hover:bg-neutral-50"
                icon={
                  <img 
                    src={chevronLeftIcon} 
                    alt="" 
                    className="w-4 h-4 rotate-180 brightness-0" 
                  />
                }
                iconPosition="right"
              >
                (855) 387-7272
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
