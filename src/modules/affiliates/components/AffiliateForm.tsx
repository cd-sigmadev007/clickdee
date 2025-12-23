import React, { useState, useMemo } from 'react';
import { MultiStepForm } from '@/modules/contact/components/MultiStepForm';
import { FormStep } from '@/modules/contact/types';
import { servicesData } from '@/modules/services/types/serviceData';
import { usStates } from '@/modules/home/utils/stateData';

// Simple city mapping
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

// Lead type options
const leadTypeOptions = [
  { value: 'form-leads', label: 'Form Leads' },
  { value: 'phone-calls', label: 'Phone Calls' },
  { value: 'traffic', label: 'Traffic' },
];

// Monthly lead volume options
const monthlyLeadVolumeOptions = [
  { value: '0', label: '0 leads per month' },
  { value: '0-10', label: '0-10 leads per month' },
  { value: '11-50', label: '11-50 leads per month' },
  { value: '50-100', label: '50-100 leads per month' },
  { value: '100-500', label: '100-500 leads per month' },
  { value: '500-1000', label: '500-1000 leads per month' },
  { value: '1000-5000', label: '1000-5000 leads per month' },
  { value: '5000+', label: '5000 or more leads per month' },
];

// Routing software options
const routingSoftwareOptions = [
  { value: 'boberdoo', label: 'Boberdoo' },
  { value: 'leadspedia', label: 'Leadspedia' },
  { value: 'phonexa', label: 'Phonexa' },
  { value: 'ringba', label: 'Ringba' },
  { value: 'other-licensed', label: 'Other Licensed Software' },
  { value: 'custom-built', label: 'Custom Built Software' },
  { value: 'no-software', label: 'No Software' },
];

// Traffic source options
const trafficSourceOptions = [
  { value: 'affiliate', label: 'Affiliate' },
  { value: 'call-center', label: 'Call Center' },
  { value: 'direct-mail', label: 'Direct Mail' },
  { value: 'display', label: 'Display' },
  { value: 'email', label: 'Email' },
  { value: 'organic-search', label: 'Organic Search' },
  { value: 'native', label: 'Native' },
  { value: 'paid-search', label: 'Paid Search' },
];

export interface AffiliateFormProps {
  onSubmit: (formData: Record<string, any>) => void;
  className?: string;
}

export const AffiliateForm: React.FC<AffiliateFormProps> = ({
  onSubmit,
  className = '',
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

  // Form steps configuration
  const steps: FormStep[] = useMemo(() => [
    {
      id: 'about-your-business',
      title: 'About your business',
      fields: [
        {
          type: 'multiselect',
          name: 'interestedLeads',
          label: 'Select the leads you are interested in:',
          placeholder: 'Select Services',
          required: true,
          options: serviceOptions,
        },
        {
          type: 'multiselect',
          name: 'leadTypes',
          label: 'What type(s) of leads are you generating?',
          placeholder: 'Select Type of Leads',
          required: true,
          options: leadTypeOptions,
        },
        {
          type: 'select',
          name: 'monthlyLeadVolume',
          label: 'What is your average monthly lead volume?',
          placeholder: 'Select a value',
          required: true,
          options: monthlyLeadVolumeOptions,
        },
        {
          type: 'multiselect',
          name: 'routingSoftware',
          label: 'Routing Software',
          placeholder: 'Select a value',
          required: true,
          options: routingSoftwareOptions,
          groupWith: ['routingSoftware', 'trafficSource'],
        },
        {
          type: 'multiselect',
          name: 'trafficSource',
          label: 'What is your traffic source(s)?',
          placeholder: 'Select a value',
          required: true,
          options: trafficSourceOptions,
          groupWith: ['routingSoftware', 'trafficSource'],
        },
      ],
    },
    {
      id: 'your-profile',
      title: 'Your Profile',
      fields: [
        {
          type: 'text',
          name: 'firstName',
          label: 'About you',
          placeholder: 'First Name',
          required: true,
          groupWith: ['firstName', 'lastName'],
        },
        {
          type: 'text',
          name: 'lastName',
          placeholder: 'Last Name',
          required: true,
          groupWith: ['firstName', 'lastName'],
        },
        {
          type: 'text',
          name: 'company',
          placeholder: 'Company',
          required: true,
        },
        {
          type: 'text',
          name: 'email',
          placeholder: 'Email',
          required: true,
          validation: (value: string) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value) ? null : 'Please enter a valid email address';
          },
          groupWith: ['email', 'phone'],
        },
        {
          type: 'phone',
          name: 'phone',
          placeholder: 'Phone',
          required: true,
          groupWith: ['email', 'phone'],
        },
        {
          type: 'select',
          name: 'country',
          label: 'Your Location',
          placeholder: 'Country',
          required: true,
          options: [{ value: 'us', label: 'United States' }],
          groupWith: ['country', 'state'],
        },
        {
          type: 'select',
          name: 'state',
          placeholder: 'State',
          required: true,
          options: stateOptions,
          groupWith: ['country', 'state'],
        },
        {
          type: 'select',
          name: 'city',
          placeholder: 'City',
          required: true,
          options: cityOptions,
          groupWith: ['city', 'zipCode'],
        },
        {
          type: 'text',
          name: 'zipCode',
          placeholder: 'Zip Code',
          required: true,
          groupWith: ['city', 'zipCode'],
        },
        {
          type: 'textarea',
          name: 'description',
          label: 'Explain the verticals you are currently generating volume in as well as the traffic generation strategy used to generate leads.',
          placeholder: 'Describe your current lead generation strategy as well as your traffic generation strategy.',
          required: false,
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
      className={className}
      fieldHeight={52}
    />
  );
};

