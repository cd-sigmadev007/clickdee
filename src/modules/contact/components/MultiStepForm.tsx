import React, { useEffect } from 'react';
import { Button } from '@/components/Button';
import { Typography } from '@/components/Typography';
import { Input } from '@/components/Input';
import { Select } from '@/components/Select';
import { Textarea } from '@/components/Textarea';
import { Checkbox } from '@/components/Checkbox';
import { FormStep, FormField } from '../types';
import { useMultiStepForm } from '../hooks/useMultiStepForm';
import { formatPhoneNumber } from '../utils/validators';
import gridResultBlack from '@/assets/images/grid-result-black.png';
import fluentRadioButtonFilled from '@/assets/icons/fluent_radio-button-16-filled.svg';
import fluentRadioButtonRegular from '@/assets/icons/fluent_radio-button-16-regular.svg';
import ionCheckboxOutline from '@/assets/icons/ion_checkbox-outline.svg';

export interface MultiStepFormProps {
  steps: FormStep[];
  initialData?: Record<string, any>;
  onSubmit: (formData: Record<string, any>) => void;
  onFormDataChange?: (formData: Record<string, any>) => void;
  className?: string;
  darkFooter?: boolean;
  fieldHeight?: number; // Height for input and select fields, defaults to 44px
}

export const MultiStepForm: React.FC<MultiStepFormProps> = ({
  steps,
  initialData = {},
  onSubmit,
  onFormDataChange,
  className = '',
  darkFooter = false,
  fieldHeight = 44,
}) => {
  const {
    currentStep,
    formData,
    errors,
    isFirstStep,
    isLastStep,
    isStepValid,
    setFormData,
    setErrors,
    handleFieldChange,
    handleNext: handleNextStep,
    handleBack,
  } = useMultiStepForm({
    steps,
    initialData,
    onFormDataChange,
  });

  // Update formData when initialData changes
  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setFormData((prev: Record<string, any>) => ({ ...initialData, ...prev }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNext = () => {
    const canProceed = handleNextStep();
    if (canProceed && isLastStep) {
      onSubmit(formData);
    }
  };

  // Clear error for field when user starts typing
  const handleFieldChangeWithErrorClear = (name: string, value: any) => {
    handleFieldChange(name, value);
    if (errors[name]) {
      setErrors((prev: Record<string, string>) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const renderField = (field: FormField) => {
    const value = formData[field.name];
    const error = errors[field.name];
    const state = error ? 'error' : (value ? 'filled' : 'default');
    
    const fieldChangeHandler = (val: any) => handleFieldChangeWithErrorClear(field.name, val);

    switch (field.type) {
      case 'text':
        return (
          <Input
            key={field.name}
            label={field.label}
            placeholder={field.placeholder}
            value={value || ''}
            onChange={fieldChangeHandler}
            state={state}
            error={error}
            height={fieldHeight}
          />
        );

      case 'phone':
        const handlePhoneChange = (val: string) => {
          const formatted = formatPhoneNumber(val);
          fieldChangeHandler(formatted);
        };
        return (
          <Input
            key={field.name}
            label={field.label}
            placeholder={field.placeholder || '(555) 555-5555'}
            value={value || ''}
            onChange={handlePhoneChange}
            state={state}
            error={error}
            height={fieldHeight}
            type="tel"
            maxLength={14} // (XXX) XXX-XXXX format
          />
        );

      case 'textarea':
        return (
          <Textarea
            key={field.name}
            label={field.label}
            placeholder={field.placeholder}
            value={value || ''}
            onChange={fieldChangeHandler}
            state={state}
            error={error}
          />
        );

      case 'select':
        return (
          <Select
            key={field.name}
            label={field.label}
            placeholder={field.placeholder}
            options={field.options || []}
            value={value || ''}
            onChange={fieldChangeHandler}
            state={state}
            error={error}
            height={fieldHeight}
          />
        );

      case 'multiselect':
        return (
          <Select
            key={field.name}
            label={field.label}
            placeholder={field.placeholder}
            options={field.options || []}
            value={value || []}
            onChange={fieldChangeHandler}
            multiSelect={true}
            state={state}
            error={error}
            height={fieldHeight}
          />
        );

      case 'radio':
        return (
          <div key={field.name} className="flex flex-col gap-[14px]">
            {field.label && (
              <Typography variant="p" weight="medium" className="text-neutral-900">
                {field.label}
              </Typography>
            )}
            <div className="flex gap-[14px] items-start w-full">
              {field.options?.map((option) => {
                const isSelected = value === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleFieldChangeWithErrorClear(field.name, option.value)}
                    className="basis-0 bg-neutral-50 border border-neutral-200 flex gap-[10px] grow items-center min-h-0 min-w-0 overflow-clip px-[14px] py-[10px] rounded-[10px] shrink-0"
                  >
                    <div className="relative shrink-0 size-[18px]">
                      <img 
                        alt="" 
                        className="block max-w-none size-full" 
                        src={isSelected ? fluentRadioButtonFilled : fluentRadioButtonRegular}
                      />
                    </div>
                    <Typography variant="s" weight="medium" className="text-neutral-900 shrink-0 text-nowrap">
                      {option.label}
                    </Typography>
                  </button>
                );
              })}
            </div>
            {error && (
              <span className="text-xs text-error-200">{error}</span>
            )}
          </div>
        );

      case 'checkbox':
        // Handle multi-line checkbox labels for step 3
        const checkboxLabel = field.label || '';
        const labelLines = checkboxLabel.split('\n').filter(line => line.trim());
        const isStep3Checkbox = currentStepData.id === 'reference-person' && field.name === 'termsAccepted';
        
        if (isStep3Checkbox) {
          return (
            <div key={field.name} className="flex flex-col">
              <div className="flex gap-[10px] items-start w-full">
                <label className="relative shrink-0 size-[20px] cursor-pointer flex items-center justify-center">
                  <input
                    type="checkbox"
                    checked={value || false}
                    onChange={(e) => handleFieldChangeWithErrorClear(field.name, e.target.checked)}
                    className="sr-only"
                  />
                  {value ? (
                    <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-[20px]">
                      <path d="M25 3H7C5.93949 3.00116 4.92275 3.42296 4.17285 4.17285C3.42296 4.92275 3.00116 5.93949 3 7V25C3.00116 26.0605 3.42296 27.0773 4.17285 27.8271C4.92275 28.577 5.93949 28.9988 7 29H25C26.0605 28.9988 27.0773 28.577 27.8271 27.8271C28.577 27.0773 28.9988 26.0605 29 25V7C28.9988 5.93949 28.577 4.92275 27.8271 4.17285C27.0773 3.42296 26.0605 3.00116 25 3ZM22.7656 11.6431L14.3656 21.6431C14.2735 21.7529 14.1588 21.8415 14.0294 21.9031C13.9 21.9647 13.7589 21.9977 13.6156 22H13.5988C13.4586 21.9999 13.32 21.9704 13.192 21.9134C13.064 21.8563 12.9494 21.773 12.8556 21.6688L9.25562 17.6688C9.1642 17.5718 9.09308 17.4575 9.04644 17.3327C8.99981 17.2078 8.9786 17.0749 8.98407 16.9417C8.98953 16.8086 9.02156 16.6778 9.07827 16.5572C9.13498 16.4366 9.21523 16.3286 9.31429 16.2394C9.41336 16.1503 9.52925 16.0818 9.65515 16.0381C9.78105 15.9944 9.91442 15.9763 10.0474 15.9848C10.1804 15.9934 10.3104 16.0284 10.4296 16.0879C10.5489 16.1474 10.655 16.2301 10.7419 16.3312L13.5725 19.4762L21.2344 10.3569C21.4062 10.1582 21.6494 10.0351 21.9113 10.0142C22.1732 9.99335 22.4327 10.0764 22.6339 10.2454C22.8351 10.4143 22.9617 10.6557 22.9863 10.9172C23.0109 11.1788 22.9317 11.4395 22.7656 11.6431Z" fill="#0070FF"/>
                    </svg>
                  ) : (
                    <img alt="" className="block max-w-none size-full" src={ionCheckboxOutline} />
                  )}
                </label>
                <div className="basis-0 flex flex-col gap-[10px] grow min-h-0 min-w-0 shrink-0">
                  {labelLines.map((line, idx) => (
                    <Typography 
                      key={idx}
                      variant="xs" 
                      weight="medium" 
                      className="text-neutral-900 text-justify shrink-0 w-full"
                    >
                      {line}
                    </Typography>
                  ))}
                </div>
              </div>
              {error && (
                <span className="text-xs text-error-200">{error}</span>
              )}
            </div>
          );
        }
        
        return (
          <div key={field.name} className="flex flex-col gap-1">
            <Checkbox
              label={field.label}
              checked={value || false}
              onChange={(checked) => handleFieldChangeWithErrorClear(field.name, checked)}
            />
            {error && (
              <span className="text-xs text-error-200">{error}</span>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  const currentStepData = steps[currentStep];

  const isStep3 = currentStepData.id === 'reference-person';

  return (
    <div className={`bg-white border border-neutral-200 flex flex-col rounded-[16px] shadow-[0px_10px_16px_0px_rgba(0,0,0,0.05)] relative z-10 ${className}`}>
      {/* Step Header */}
      <div className={`border-neutral-200 border-b flex items-center justify-between ${isStep3 ? 'h-[50px] px-[24px] py-[16px]' : 'px-4 py-4 md:px-6'}`}>
        <Typography variant="s" weight="medium" className="text-neutral-500">
          {currentStepData.title}
        </Typography>
        <div className={`flex items-center justify-center ${isStep3 ? 'gap-[8px]' : 'gap-2'}`}>
          {steps.map((_, index) => (
            <div
              key={index}
              className={`size-[10px] rounded-full ${
                index <= currentStep
                  ? 'bg-primary-500'
                  : 'bg-white border border-neutral-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className={`border-neutral-200 border-b flex flex-col ${isStep3 ? 'gap-[14px] p-[24px]' : 'gap-[14px] px-4 py-4 md:p-6'} items-start relative overflow-x-hidden overflow-y-visible`}>
        {currentStepData.fields.map((field, index) => {
          // Check if this field is part of a group (like state/city/zip or firstName/lastName)
          const isGrouped = field.groupWith && field.groupWith.includes(field.name);
          const isFirstInGroup = field.groupWith && field.groupWith[0] === field.name;
          
          // Find all fields in this group
          const groupFields = field.groupWith 
            ? currentStepData.fields.filter(f => field.groupWith?.includes(f.name))
            : [field];

          // Special handling for step 3 "About you" section
          if (isStep3 && field.name === 'firstName' && field.label === 'About you') {
            return (
              <div key={`about-you-section`} className="w-full">
                <Typography variant="p" weight="medium" className="text-neutral-900 mb-[14px]">
                  {field.label}
                </Typography>
                <div className="flex flex-col md:flex-row gap-[14px] w-full">
                  {groupFields.map(groupField => {
                    // Remove label for grouped fields in step 3
                    const fieldWithoutLabel = { ...groupField, label: undefined };
                    return (
                      <div key={groupField.name} className="flex-1 w-full">
                        {renderField(fieldWithoutLabel)}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
          
          // Special handling for email/phone group in step 3
          if (isStep3 && field.name === 'email' && field.groupWith?.includes('email')) {
            return (
              <div key={`email-phone-group`} className="w-full">
                <div className="flex flex-col md:flex-row gap-[14px] w-full">
                  {groupFields.map(groupField => {
                    // Remove label for grouped fields
                    const fieldWithoutLabel = { ...groupField, label: undefined };
                    return (
                      <div key={groupField.name} className="flex-1 w-full">
                        {renderField(fieldWithoutLabel)}
                      </div>
                    );
                  })}
                </div>
                {field.separatorAfter && index < currentStepData.fields.length - 1 && (
                  <div className="border-neutral-200 border-b w-full mt-[14px]" />
                )}
              </div>
            );
          }

          // Render grouped fields in a row
          if (isFirstInGroup && field.groupWith && !(isStep3 && field.name === 'firstName')) {
            return (
              <div key={`group-${field.name}`} className="w-full">
                <div className="flex flex-col md:flex-row gap-[14px] w-full">
                  {groupFields.map(groupField => (
                    <div key={groupField.name} className="flex-1 w-full">
                      {renderField(groupField)}
                    </div>
                  ))}
                </div>
                {field.separatorAfter && index < currentStepData.fields.length - 1 && (
                  <div className={`border-neutral-200 border-b w-full ${isStep3 ? 'mt-[14px]' : '-mx-4 md:-mx-6 mt-[24px] mb-[10px]'}`} />
                )}
              </div>
            );
          }

            // Skip if already rendered as part of a group
            if (isGrouped && !isFirstInGroup) {
              return null;
            }

          // Render single field
          return (
            <div key={field.name} className="w-full">
              {renderField(field)}
              {field.separatorAfter && index < currentStepData.fields.length - 1 && (
                <div className={`border-neutral-200 border-b w-full ${isStep3 ? 'mt-[14px]' : '-mx-4 md:-mx-6 mt-[24px] mb-[10px]'}`} />
              )}
            </div>
          );
        })}
      </div>

      {/* Footer with Navigation */}
      <div className={`flex flex-col ${isStep3 ? 'p-[24px]' : 'px-4 py-4 md:p-6'} ${darkFooter ? 'bg-neutral-900 relative overflow-hidden' : ''}`}>
        {darkFooter && (
          <img 
            src={gridResultBlack}
            alt="" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[863px] h-[470px] opacity-20 invert pointer-events-none" 
          />
        )}
        <div className={`flex items-center justify-between ${darkFooter ? 'relative z-10' : ''}`}>
          <div className={`flex flex-col items-start justify-center ${isStep3 ? 'gap-[6px]' : 'gap-1.5'}`}>
            <Typography variant="p" weight="medium" className={darkFooter ? 'text-white' : 'text-neutral-900'}>
              Call our Advertising Specialists
            </Typography>
            <Typography variant="s" weight="bold" className="text-primary-500">
              (855) 387-7272
            </Typography>
          </div>
          <div className={`flex items-center ${isStep3 ? 'gap-[16px]' : 'gap-4'}`}>
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={isFirstStep}
              className={`${isStep3 ? 'px-[24px] py-[14px] border-neutral-800' : 'px-6 py-[14px]'} ${isFirstStep ? 'opacity-20' : ''}`}
            >
              Back
            </Button>
            <Button
              variant={isStep3 && !isStepValid ? 'primary' : 'primary'}
              onClick={handleNext}
              disabled={!isStepValid && !isLastStep}
              className={`${isStep3 ? 'px-[24px] py-[14px]' : 'px-6 py-[14px]'} ${!isStepValid && !isLastStep ? (isStep3 ? 'bg-neutral-300 text-white' : 'bg-neutral-300') : ''} ${isLastStep && darkFooter ? 'px-[24px]' : ''}`}
            >
              {isLastStep ? (darkFooter ? 'Apply Now' : 'Submit') : 'Next'}
            </Button>
          </div>
        </div>
      </div>

      {/* Step 3 Bottom Disclaimer */}
      {isStep3 && (
        <div className="border-neutral-200 border-t flex flex-col items-start p-[24px] shrink-0 w-full">
          <Typography variant="xs" weight="medium" className="text-neutral-500 text-justify w-full">
            By clicking "Send Request", I am providing my electronic signature expressly authorizing Inquirly to contact me by email, phone or text (including an automatic dialing system or artificial/pre-recorded voice) at the phone number above. I understand I am not required to sign/agree to this as a condition to purchase.
          </Typography>
        </div>
      )}
    </div>
  );
};
