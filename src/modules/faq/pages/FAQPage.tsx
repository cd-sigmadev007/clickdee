import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@/components/Typography';
import { Button } from '@/components/Button';
import { FAQSection } from '@/modules/services/components/FAQSection';
import { CTASection } from '@/modules/home/components/CTASection';
import { fireRestorationFAQ } from '@/modules/services/data/faqData';
import chevronLeftIcon from '@/assets/icons/heroicons_chevron-left.svg';
import { HeroBackground } from '@/components/HeroBackground';

const FAQPage: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <HeroBackground>
        <div className="flex flex-col gap-8 lg:gap-[32px] items-center justify-center relative shrink-0 w-full z-10">
          <div className="flex flex-col gap-[5px] items-center justify-center w-full">
            <Typography variant="display" weight="bold" className="text-neutral-900 text-center">
              Questions?
            </Typography>
            <div className="bg-primary-100 flex items-center justify-center px-2.5 py-[5px] rounded-[10px]">
              <Typography variant="display" weight="bold" className="text-primary-500 text-center">
                We have your answers!
              </Typography>
            </div>
          </div>
          <Typography
            variant="s"
            weight="medium"
            className="text-neutral-500 text-center leading-[1.3] max-w-2xl"
          >
            <p className="mb-0">Check answers to the most common questions we receive about our services.</p>
            <p>If you have any further questions, please do not hesitate to contact us.</p>
          </Typography>
          <Link to="/contact">
            <Button
              variant="primary"
              icon={
                <img
                  src={chevronLeftIcon}
                  alt=""
                  className="w-4 h-4 rotate-180 brightness-0 invert"
                />
              }
              iconPosition="right"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </HeroBackground>

      {/* FAQ Section */}
      <FAQSection
        items={fireRestorationFAQ}
        title={undefined}
        description={undefined}
        showTitleSection={false}
        layout="top-bottom"
        className="bg-primary-100 rounded-tl-[40px] rounded-tr-[40px] px-4 py-12 sm:px-6 sm:py-12 lg:px-[180px] lg:py-12"
        defaultOpen={['quality']}
      />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default FAQPage;

