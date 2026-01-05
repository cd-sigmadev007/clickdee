import React, { useState } from 'react';
import { Typography } from '@/components/Typography';
import { AffiliateForm } from './AffiliateForm';
import clsx from 'clsx';
import { submitAffiliateForm } from '@/utils/api';

export const AffiliateFormSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (formData: Record<string, any>) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const result = await submitAffiliateForm(formData);
      
      if (result.success) {
        console.log('Affiliate form submitted successfully');
        // You can add success handling here (e.g., show success message, redirect, etc.)
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

  return (
    <div className="bg-white flex flex-col lg:flex-row gap-8 items-start px-4 py-8 sm:px-6 sm:py-12 lg:px-[80px] lg:py-[56px] w-full">
      {/* Left: Title */}
      <div className="flex flex-col gap-[5px] items-start justify-center lg:flex-1">
        <Typography variant="title" weight="bold" className="text-neutral-900">
          Apply for our
        </Typography>
        <div className="bg-primary-100 flex items-center px-[10px] py-[5px] rounded-[10px]">
          <Typography variant="title" weight="bold" className="text-primary-500">
            Affiliate Program Now!
          </Typography>
        </div>
      </div>

      {/* Right: Form */}
      <div className="w-full lg:flex-1">
        {submitError && (
          <div className="mb-4 p-4 bg-error-50 border border-error-200 rounded-[10px]">
            <Typography variant="s" weight="medium" className="text-error-500">
              {submitError}
            </Typography>
          </div>
        )}
        <AffiliateForm 
          onSubmit={handleSubmit}
          className={clsx('-mx-4 md:-mx-6 lg:mx-0')}
          disabled={isSubmitting}
        />
      </div>
    </div>
  );
};

