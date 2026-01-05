import React, { useState, useMemo } from 'react';
import { MultiStepForm } from './MultiStepForm';
import { FormStep } from '../types';
import { servicesData } from '@/modules/services/types/serviceData';
import { useCountryOptions, useStateOptions, useCityOptions } from '@/hooks/useLocationData';
import clsx from 'clsx';
import {
  validatePhoneNumber,
  validateEmail,
  validateName,
  validateZipCode,
  validateCompanyName,
  validateAddress,
  validateServices,
  validateState,
  validateCity,
  validateBackgroundCheckConsent,
  validateTermsAccepted,
} from '../utils/validators';

export interface ContactFormProps {
  onSubmit: (formData: Record<string, any>) => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  className = '',
  disabled = false,
  loading = false,
}) => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const selectedCountry = formData.country;
  const selectedState = formData.state;

  // Service options from servicesData
  const serviceOptions = useMemo(() => {
    return servicesData.map(service => ({
      value: service.id,
      label: service.name,
    }));
  }, []);

  // Fetch location data from API
  const { data: countryOptions = [], isLoading: countriesLoading } = useCountryOptions();
  const { data: stateOptions = [], isLoading: statesLoading } = useStateOptions(selectedCountry);
  const { data: cityOptions = [], isLoading: citiesLoading } = useCityOptions(selectedCountry, selectedState);

  // Handle form data changes to update city options
  const handleFormDataChange = (data: Record<string, any>) => {
    // Reset state and city when country changes
    if (data.country !== formData.country) {
      data.state = '';
      data.city = '';
    }
    // Reset city when state changes
    if (data.state !== formData.state) {
      data.city = '';
    }
    setFormData(data);
  };

  // Form steps configuration - recreate when cityOptions change
  const steps: FormStep[] = useMemo(() => [
    {
      id: 'company-profile',
      title: 'Company Profile',
      fields: [
        {
          type: 'multiselect',
          name: 'services',
          label: 'Select the leads you are interested in:',
          placeholder: 'Select Services',
          required: true,
          options: serviceOptions,
          separatorAfter: true,
          validation: (value: string[]) => validateServices(value),
        },
        {
          type: 'text',
          name: 'companyName',
          label: 'Company Profile',
          placeholder: 'Company',
          required: true,
          validation: (value: string) => validateCompanyName(value),
        },
        {
          type: 'text',
          name: 'address',
          placeholder: 'Address',
          required: true,
          validation: (value: string) => validateAddress(value),
        },
        {
          type: 'select',
          name: 'country',
          placeholder: 'Country',
          required: true,
          options: countryOptions,
          groupWith: ['country', 'state'],
        },
        {
          type: 'select',
          name: 'state',
          placeholder: stateOptions.length > 0 ? (selectedCountry === 'US' ? 'State' : 'Province/State') : 'State/Province',
          required: stateOptions.length > 0,
          options: stateOptions,
          groupWith: ['country', 'state'],
          validation: (value: string) => validateState(value),
        },
        {
          type: 'select',
          name: 'city',
          placeholder: 'City',
          required: true,
          options: cityOptions,
          groupWith: ['city', 'zipCode'],
          validation: (value: string) => validateCity(value),
        },
        {
          type: 'text',
          name: 'zipCode',
          placeholder: selectedCountry === 'US' ? 'Zip Code' : 'Postal Code',
          required: true,
          groupWith: ['city', 'zipCode'],
          validation: (value: string) => validateZipCode(value),
        },
      ],
    },
    {
      id: 'comments',
      title: 'Comments',
      fields: [
        {
          type: 'textarea',
          name: 'comments',
          label: 'Explain services you offer and why you need new leads:',
          placeholder: 'Write your message',
          required: false,
        },
      ],
    },
    {
      id: 'reference-person',
      title: 'Reference Person',
      fields: [
        {
          type: 'text',
          name: 'firstName',
          label: 'About you',
          placeholder: 'First Name',
          required: true,
          groupWith: ['firstName', 'lastName'],
          validation: (value: string) => validateName(value, 'First Name'),
        },
        {
          type: 'text',
          name: 'lastName',
          placeholder: 'Last Name',
          required: true,
          groupWith: ['firstName', 'lastName'],
          validation: (value: string) => validateName(value, 'Last Name'),
        },
        {
          type: 'text',
          name: 'email',
          placeholder: 'Email',
          required: true,
          groupWith: ['email', 'phone'],
          validation: (value: string) => validateEmail(value),
        },
        {
          type: 'phone',
          name: 'phone',
          placeholder: '(555) 555-5555',
          required: true,
          groupWith: ['email', 'phone'],
          validation: (value: string) => validatePhoneNumber(value),
          separatorAfter: true,
        },
        {
          type: 'radio',
          name: 'backgroundCheckConsent',
          label: 'Do you consent to a background check?',
          required: true,
          options: [
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' },
          ],
          validation: (value: string) => validateBackgroundCheckConsent(value),
          separatorAfter: true,
        },
        {
          type: 'checkbox',
          name: 'termsAccepted',
          label: 'You agree to receive automated promotional messages. You also agree to the Terms of Service and Privacy Policy.\nThis agreement isn\'t a condition of any purchase. 4 Msgs/Month.\nMsg & Data rates may apply. Reply STOP to end or HELP for help.',
          required: true,
          validation: (value: boolean) => validateTermsAccepted(value),
        },
      ],
    },
  ], [serviceOptions, countryOptions, stateOptions, cityOptions, selectedCountry, countriesLoading, statesLoading, citiesLoading]);

  return (
    <MultiStepForm
      steps={steps}
      initialData={formData}
      onSubmit={onSubmit}
      onFormDataChange={handleFormDataChange}
      className={clsx('-mx-[24px] lg:mx-0 md:-mx-0', className)}
      disabled={disabled}
      loading={loading}
    />
  );
};

