import React, { useState, useMemo } from 'react';
import { MultiStepForm } from './MultiStepForm';
import { FormStep } from '../types';
import { servicesData } from '@/modules/services/types/serviceData';
import { usStates } from '@/modules/home/utils/stateData';
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

// Simple city mapping - in production this would come from an API or comprehensive data
const citiesByState: Record<string, string[]> = {
  'Alabama': ['Birmingham', 'Montgomery', 'Mobile', 'Huntsville'],
  'Alaska': ['Anchorage', 'Fairbanks', 'Juneau'],
  'Arizona': ['Phoenix', 'Tucson', 'Mesa', 'Scottsdale'],
  'Arkansas': ['Little Rock', 'Fayetteville', 'Fort Smith'],
  'California': ['Los Angeles', 'San Francisco', 'San Diego', 'Sacramento', 'San Jose'],
  'Colorado': ['Denver', 'Colorado Springs', 'Boulder'],
  'Connecticut': ['Hartford', 'New Haven', 'Stamford'],
  'Delaware': ['Wilmington', 'Dover', 'Newark'],
  'Florida': ['Miami', 'Orlando', 'Tampa', 'Jacksonville'],
  'Georgia': ['Atlanta', 'Augusta', 'Savannah'],
  'Hawaii': ['Honolulu', 'Hilo', 'Kailua'],
  'Idaho': ['Boise', 'Nampa', 'Meridian'],
  'Illinois': ['Chicago', 'Aurora', 'Naperville'],
  'Indiana': ['Indianapolis', 'Fort Wayne', 'Evansville'],
  'Iowa': ['Des Moines', 'Cedar Rapids', 'Davenport'],
  'Kansas': ['Wichita', 'Overland Park', 'Kansas City'],
  'Kentucky': ['Louisville', 'Lexington', 'Bowling Green'],
  'Louisiana': ['New Orleans', 'Baton Rouge', 'Shreveport'],
  'Maine': ['Portland', 'Lewiston', 'Bangor'],
  'Maryland': ['Baltimore', 'Annapolis', 'Frederick'],
  'Massachusetts': ['Boston', 'Worcester', 'Springfield'],
  'Michigan': ['Detroit', 'Grand Rapids', 'Warren'],
  'Minnesota': ['Minneapolis', 'St. Paul', 'Rochester'],
  'Mississippi': ['Jackson', 'Gulfport', 'Southaven'],
  'Missouri': ['Kansas City', 'St. Louis', 'Springfield'],
  'Montana': ['Billings', 'Missoula', 'Great Falls'],
  'Nebraska': ['Omaha', 'Lincoln', 'Bellevue'],
  'Nevada': ['Las Vegas', 'Reno', 'Henderson'],
  'New Hampshire': ['Manchester', 'Nashua', 'Concord'],
  'New Jersey': ['Newark', 'Jersey City', 'Paterson'],
  'New Mexico': ['Albuquerque', 'Las Cruces', 'Rio Rancho'],
  'New York': ['New York', 'Buffalo', 'Rochester', 'Albany'],
  'North Carolina': ['Charlotte', 'Raleigh', 'Greensboro'],
  'North Dakota': ['Fargo', 'Bismarck', 'Grand Forks'],
  'Ohio': ['Columbus', 'Cleveland', 'Cincinnati'],
  'Oklahoma': ['Oklahoma City', 'Tulsa', 'Norman'],
  'Oregon': ['Portland', 'Eugene', 'Salem'],
  'Pennsylvania': ['Philadelphia', 'Pittsburgh', 'Allentown'],
  'Rhode Island': ['Providence', 'Warwick', 'Cranston'],
  'South Carolina': ['Charleston', 'Columbia', 'Greenville'],
  'South Dakota': ['Sioux Falls', 'Rapid City', 'Aberdeen'],
  'Tennessee': ['Nashville', 'Memphis', 'Knoxville'],
  'Texas': ['Houston', 'Dallas', 'Austin', 'San Antonio'],
  'Utah': ['Salt Lake City', 'West Valley City', 'Provo'],
  'Vermont': ['Burlington', 'Essex', 'South Burlington'],
  'Virginia': ['Virginia Beach', 'Norfolk', 'Richmond'],
  'Washington': ['Seattle', 'Spokane', 'Tacoma'],
  'West Virginia': ['Charleston', 'Huntington', 'Parkersburg'],
  'Wisconsin': ['Milwaukee', 'Madison', 'Green Bay'],
  'Wyoming': ['Cheyenne', 'Casper', 'Laramie'],
};

export interface ContactFormProps {
  onSubmit: (formData: Record<string, any>) => void;
  className?: string;
  disabled?: boolean;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  className = '',
  disabled = false,
}) => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const selectedState = formData.state || '';

  // Service options from servicesData
  const serviceOptions = useMemo(() => {
    return servicesData.map(service => ({
      value: service.id,
      label: service.name,
    }));
  }, []);

  // State options from usStates
  const stateOptions = useMemo(() => {
    return usStates.map(state => ({
      value: state.name,
      label: state.name,
    }));
  }, []);

  // City options based on selected state
  const cityOptions = useMemo(() => {
    if (!selectedState) return [];
    const cities = citiesByState[selectedState] || [];
    return cities.map(city => ({
      value: city,
      label: city,
    }));
  }, [selectedState]);

  // Handle form data changes to update city options
  const handleFormDataChange = (data: Record<string, any>) => {
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
          name: 'state',
          placeholder: 'State',
          required: true,
          options: stateOptions,
          groupWith: ['state', 'city', 'zipCode'],
          validation: (value: string) => validateState(value),
        },
        {
          type: 'select',
          name: 'city',
          placeholder: 'City',
          required: true,
          options: cityOptions,
          groupWith: ['state', 'city', 'zipCode'],
          validation: (value: string) => validateCity(value),
        },
        {
          type: 'text',
          name: 'zipCode',
          placeholder: 'Zip Code',
          required: true,
          groupWith: ['state', 'city', 'zipCode'],
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
  ], [serviceOptions, stateOptions, cityOptions]);

  return (
    <MultiStepForm
      steps={steps}
      initialData={formData}
      onSubmit={onSubmit}
      onFormDataChange={handleFormDataChange}
      className={clsx('-mx-[24px] lg:mx-0 md:-mx-0', className)}
      disabled={disabled}
    />
  );
};

