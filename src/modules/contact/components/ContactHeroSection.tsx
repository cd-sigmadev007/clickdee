import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typography } from '@/components/Typography';
import { HeroBackground } from '@/components/HeroBackground';
import { ContactForm } from './ContactForm';
import callIcon from '@/assets/icons/marketeq_call.svg';
import tickWithGola from '@/assets/images/tick-with-gola.svg';
import { Button } from '@/components/Button';
import { submitContactForm } from '@/utils/api';

export const ContactHeroSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (formData: Record<string, any>) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const result = await submitContactForm(formData);
      
      if (result.success) {
        console.log('Contact form submitted successfully');
        setIsSubmitted(true);
      } else {
        setSubmitError(result.error || 'Failed to submit form');
        console.error('Form submission error:', result.error);
      }
    } catch (error) {
      setSubmitError('An unexpected error occurred. Please try again.');
      console.error('Unexpected error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants for form view
  const formVariants = {
    initial: { opacity: 1, scale: 1 },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  // Animation variants for success view
  const successVariants = {
    initial: { opacity: 0, scale: 0.8, y: 20 },
    animate: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0, 0, 0.2, 1] as const
      }
    }
  };

  // Animation variants for success icon
  const iconVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.4,
        type: 'spring' as const,
        stiffness: 200,
        damping: 15
      }
    }
  };

  // Animation variants for success text
  const textVariants = {
    initial: { opacity: 0, y: 10 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + (i * 0.1),
        duration: 0.4,
        ease: [0, 0, 0.2, 1] as const
      }
    })
  };
  
  return (
    <HeroBackground className='flex items-center justify-center overflow-hidden' style={{ height: 'calc(100vh - 75px)' }}>
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form-view"
            variants={formVariants}
            initial="initial"
            exit="exit"
            className="flex flex-col lg:flex-row gap-8 items-center justify-between relative shrink-0 w-full"
          >
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
              {submitError && (
                <div className="mb-4 p-4 bg-error-50 border border-error-200 rounded-[10px]">
                  <Typography variant="s" weight="medium" className="text-error-500">
                    {submitError}
                  </Typography>
                </div>
              )}
              <ContactForm onSubmit={handleSubmit} disabled={isSubmitting} loading={isSubmitting} />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="success-view"
            variants={successVariants}
            initial="initial"
            animate="animate"
            className="flex flex-col gap-8 items-center justify-center relative shrink-0 w-full"
          >
            <motion.div 
              variants={iconVariants}
              initial="initial"
              animate="animate"
              className="w-[100px] h-[100px] flex items-center justify-center flex-shrink-0"
            >
              <img src={tickWithGola} alt="" className="w-full h-full object-contain" />
            </motion.div>
            <motion.div 
              custom={0}
              variants={textVariants}
              initial="initial"
              animate="animate"
              className="flex gap-[5px] items-center justify-center flex-wrap"
            >
              <Typography variant="display" weight="bold" className="text-neutral-900 text-center whitespace-nowrap">
                We will contact you
              </Typography>
              <div className="bg-primary-100 flex items-center justify-center px-2.5 py-[5px] rounded-[10px]">
                <Typography variant="display" weight="bold" className="text-primary-500 whitespace-nowrap">
                  shortly!
                </Typography>
              </div>
            </motion.div>
            <motion.div
              custom={1}
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              <Typography variant="s" weight="medium" className="text-neutral-500 text-center">
                <p className="mb-0">One of our advertising consultants will contact you to discuss</p>
                <p>how we can help you grow your restoration business.</p>
              </Typography>
            </motion.div>
            <motion.div
              custom={2}
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              <a href="tel:+18553877272">
                <Button variant="primary" className="flex items-center gap-[10px] px-6 py-[14px]">
                  <img src={callIcon} alt="" className="w-6 h-6" />
                  <Typography variant="p" weight="bold" className="text-white whitespace-nowrap">
                    (855) 387-7272
                  </Typography>
                </Button>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </HeroBackground>
  );
};

