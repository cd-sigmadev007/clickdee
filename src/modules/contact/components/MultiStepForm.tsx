import React, { useEffect } from 'react';
import { Button } from '@/components/Button';
import { Typography } from '@/components/Typography';
import { Input } from '@/components/Input';
import { Select } from '@/components/Select';
import { Textarea } from '@/components/Textarea';
import { Checkbox } from '@/components/Checkbox';
import { FormStep, FormField } from '../types';
import { useMultiStepForm } from '../hooks/useMultiStepForm';
import gridResultBlack from '@/assets/images/grid-result-black.png';

export interface MultiStepFormProps {
  steps: FormStep[];
  initialData?: Record<string, any>;
  onSubmit: (formData: Record<string, any>) => void;
  onFormDataChange?: (formData: Record<string, any>) => void;
  className?: string;
  darkFooter?: boolean;
}

export const MultiStepForm: React.FC<MultiStepFormProps> = ({
  steps,
  initialData = {},
  onSubmit,
  onFormDataChange,
  className = '',
  darkFooter = false,
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
          />
        );

      case 'radio':
        return (
          <div key={field.name} className="flex flex-col gap-1">
            {field.label && (
              <label className="font-medium text-p text-neutral-900">
                {field.label}
              </label>
            )}
            <div className="flex gap-[14px] items-start">
              {field.options?.map((option) => {
                const isSelected = value === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleFieldChangeWithErrorClear(field.name, option.value)}
                    className={`
                      flex-1 bg-neutral-50 border border-neutral-200 flex gap-[10px] items-center px-[14px] py-[10px] rounded-[10px]
                      ${isSelected ? 'bg-primary-100' : ''}
                    `}
                  >
                    <div className="w-[18px] h-[18px] flex items-center justify-center shrink-0">
                      {isSelected ? (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="9" cy="9" r="8" fill="#0070FF"/>
                          <circle cx="9" cy="9" r="3" fill="white"/>
                        </svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="9" cy="9" r="8" stroke="#D4D4D8" strokeWidth="1.5"/>
                        </svg>
                      )}
                    </div>
                    <span className="font-medium text-s text-neutral-900">{option.label}</span>
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

  return (
    <div className={`bg-white border border-neutral-200 flex flex-col md:rounded-[16px] md:shadow-[0px_10px_16px_0px_rgba(0,0,0,0.05)] relative z-10 ${className}`} style={{ backgroundColor: '#FFFFFF' }}>
      {/* Step Header */}
      <div className="border-neutral-200 border-b flex items-center justify-between px-4 py-4 md:px-6">
        <Typography variant="s" weight="medium" className="text-neutral-500">
          {currentStepData.title}
        </Typography>
        <div className="flex gap-2 items-center">
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
          <div className="border-neutral-200 border-b flex flex-col gap-[14px] px-4 py-4 md:p-6  items-start relative overflow-x-hidden overflow-y-visible">
          {currentStepData.fields.map((field, index) => {
            // Check if this field is part of a group (like state/city/zip)
            const isGrouped = field.groupWith && field.groupWith.includes(field.name);
            const isFirstInGroup = field.groupWith && field.groupWith[0] === field.name;
            
            // Find all fields in this group
            const groupFields = field.groupWith 
              ? currentStepData.fields.filter(f => field.groupWith?.includes(f.name))
              : [field];

            // Render grouped fields in a row
            if (isFirstInGroup && field.groupWith) {
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
                    //spacer
                    <>
                    <div className="border-neutral-200 border-t w-full -mx-4 md:-mx-6 mt-[14px]" />
                    </>
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
                  <div className="border-neutral-200 border-b -mx-4 md:-mx-6 mt-[24px] mb-[10px]" />
                )}
              </div>
            );
          })}
      </div>

      {/* Footer with Navigation */}
      <div className={`flex flex-col px-4 py-4 md:p-6 ${darkFooter ? 'bg-neutral-900 relative overflow-hidden' : ''}`}>
        {darkFooter && (
          <img 
            src={gridResultBlack}
            alt="" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[863px] h-[470px] opacity-20 invert pointer-events-none" 
          />
        )}
        <div className={`flex items-center justify-between ${darkFooter ? 'relative z-10' : ''}`}>
          <div className="flex flex-col gap-1.5 items-start">
            <Typography variant="p" weight="medium" className={darkFooter ? 'text-white' : 'text-neutral-900'}>
              Call our Advertising Specialists
            </Typography>
            <Typography variant="s" weight="bold" className="text-primary-500">
              (855) 387-7272
            </Typography>
          </div>
          <div className="flex gap-4 items-center">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={isFirstStep}
              className={`px-6 py-[14px] ${isFirstStep ? 'opacity-20' : ''}`}
            >
              Back
            </Button>
            <Button
              variant="primary"
              onClick={handleNext}
              disabled={!isStepValid && !isLastStep}
              className={`px-6 py-[14px] ${!isStepValid && !isLastStep ? 'bg-neutral-300' : ''} ${isLastStep && darkFooter ? 'px-[24px]' : ''}`}
            >
              {isLastStep ? (darkFooter ? 'Apply Now' : 'Submit') : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
