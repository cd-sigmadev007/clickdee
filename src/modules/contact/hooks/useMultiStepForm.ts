import { useState, useCallback, useMemo } from 'react';
import { FormStep } from '../types';

export interface UseMultiStepFormOptions {
  steps: FormStep[];
  initialData?: Record<string, any>;
  onFormDataChange?: (formData: Record<string, any>) => void;
}

export interface UseMultiStepFormReturn {
  currentStep: number;
  formData: Record<string, any>;
  errors: Record<string, string>;
  isFirstStep: boolean;
  isLastStep: boolean;
  isStepValid: boolean;
  setCurrentStep: (step: number) => void;
  setFormData: (data: Record<string, any> | ((prev: Record<string, any>) => Record<string, any>)) => void;
  setErrors: (errors: Record<string, string> | ((prev: Record<string, string>) => Record<string, string>)) => void;
  handleFieldChange: (name: string, value: any) => void;
  handleNext: () => boolean;
  handleBack: () => void;
  validateStep: (stepIndex: number, setErrorState?: boolean) => boolean;
}

export const useMultiStepForm = ({
  steps,
  initialData = {},
  onFormDataChange,
}: UseMultiStepFormOptions): UseMultiStepFormReturn => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormDataState] = useState<Record<string, any>>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const setFormData = useCallback((updater: Record<string, any> | ((prev: Record<string, any>) => Record<string, any>)) => {
    setFormDataState((prev: Record<string, any>) => {
      const newData = typeof updater === 'function' ? updater(prev) : updater;
      onFormDataChange?.(newData);
      return newData;
    });
  }, [onFormDataChange]);

  const validateStep = useCallback((stepIndex: number, setErrorState = true): boolean => {
    const step = steps[stepIndex];
    if (!step) return false;

    const stepErrors: Record<string, string> = {};

    step.fields.forEach((field) => {
      const value = formData[field.name];
      
      // Run custom validation first (it may handle required check)
      if (field.validation) {
        const error = field.validation(value);
        if (error) {
          stepErrors[field.name] = error;
          return; // Don't run required check if validation already failed
        }
      }
      
      // Check required fields (only if no custom validation or validation passed)
      if (field.required && (!value || (Array.isArray(value) && value.length === 0) || value === false)) {
        stepErrors[field.name] = `${field.label || field.name} is required`;
      }
    });

    if (setErrorState) {
      setErrors(stepErrors);
    }
    return Object.keys(stepErrors).length === 0;
  }, [steps, formData]);

  const handleFieldChange = useCallback((name: string, value: any) => {
    setFormData((prev: Record<string, any>) => ({ ...prev, [name]: value }));
  }, [setFormData]);

  const handleNext = useCallback((): boolean => {
    if (validateStep(currentStep, true)) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
        return true;
      }
      return true;
    }
    return false;
  }, [currentStep, steps.length, validateStep]);

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setErrors({});
    }
  }, [currentStep]);

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;
  
  const isStepValid = useMemo(() => {
    return validateStep(currentStep, false);
  }, [currentStep, validateStep]);

  const setErrorsCallback = useCallback((updater: Record<string, string> | ((prev: Record<string, string>) => Record<string, string>)) => {
    setErrors((prev: Record<string, string>) => {
      return typeof updater === 'function' ? updater(prev) : updater;
    });
  }, []);

  return {
    currentStep,
    formData,
    errors,
    isFirstStep,
    isLastStep,
    isStepValid,
    setCurrentStep,
    setFormData,
    setErrors: setErrorsCallback,
    handleFieldChange,
    handleNext,
    handleBack,
    validateStep,
  };
};

