import React from 'react';
import { Typography } from '@/components';
import { Button } from '@/components/Button';
import chevronUpIcon from '@/assets/icons/heroicons_chevron-up.svg';
import gridImage from '@/assets/images/image.png';
import baseMapImage from '@/assets/images/base-map.png';
import mapMarkerIcon from '@/assets/images/services-map-marker.svg';
import avatarAlbertFlores from '@/assets/images/avatar-peter-renolds.png'; // Using available avatar as placeholder

export interface LeadDetail {
  label: string;
  value: string;
  centerAlign?: boolean;
}

export interface LeadProfilesSectionProps {
  className?: string;
  title?: string;
  highlightedTitle?: string;
  description?: string;
  leadDetails?: {
    firstGroup: LeadDetail[];
    secondGroup: LeadDetail[];
  };
  testimonial?: {
    name: string;
    role: string;
    text: string;
  };
  pricing?: {
    title: string;
    description: string;
    ctaText: string;
  };
}

const defaultFirstGroupDetails: LeadDetail[] = [
  { label: 'Project', value: 'Fire damage', centerAlign: true },
  { label: 'Location Type', value: 'Residence', centerAlign: true },
  { label: 'Homeowner', value: 'Yes', centerAlign: true },
  { label: 'Rooms Affected', value: '2', centerAlign: true },
  { label: 'Emergency', value: 'Yes', centerAlign: true },
  { label: 'Timing', value: 'Immediate', centerAlign: true },
  { label: 'Claim Insured', value: 'Yes', centerAlign: true },
];

const defaultSecondGroupDetails: LeadDetail[] = [
  { label: 'Address', value: '123 Main Street Omaha, NE (68007)', centerAlign: false },
  { label: 'Contact', value: '(855) 387-7272 help@clickdee.com', centerAlign: true },
  { label: 'Average Winning Cost Per Lead', value: '$350*', centerAlign: true },
];

// Divider component matching Figma design
const Divider = () => (
  <div className="h-0 relative w-full shrink-0">
    <div className="absolute inset-[-1px_0_0_0]">
      <svg preserveAspectRatio="none" width="100%" height="1" viewBox="0 0 352 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="0.5" x2="352" y2="0.5" stroke="#E4E4E7" strokeWidth="1"/>
      </svg>
    </div>
  </div>
);

// Helper function to render contact value with clickable phone and email
const renderContactValue = (value: string) => {
  // Match phone number pattern: (XXX) XXX-XXXX
  const phoneRegex = /\((\d{3})\)\s*(\d{3})-(\d{4})/;
  const phoneMatch = value.match(phoneRegex);
  
  if (phoneMatch) {
    const phoneNumber = phoneMatch[0];
    const telLink = `tel:+1${phoneMatch[1]}${phoneMatch[2]}${phoneMatch[3]}`;
    const restOfText = value.replace(phoneRegex, '').trim();
    
    return (
      <>
        <a href={telLink} className="text-primary-500 hover:text-primary-600 transition-colors">
          {phoneNumber}
        </a>
        {restOfText && ` ${restOfText}`}
      </>
    );
  }
  
  return value;
};

export const LeadProfilesSection: React.FC<LeadProfilesSectionProps> = ({ 
  className = '',
  title = 'Visualizing your',
  highlightedTitle = 'Lead Profiles',
  description = 'We sell restoration leads on a per-lead basis with no minimums and no monthly commitments.',
  leadDetails,
  testimonial,
  pricing,
}) => {
  const ChevronIcon = () => (
    <img
      src={chevronUpIcon}
      alt=""
      className="w-4 h-4 rotate-[270deg] scale-y-[-100%] brightness-0 invert"
    />
  );

  const firstGroupDetails = leadDetails?.firstGroup || defaultFirstGroupDetails;
  const secondGroupDetails = leadDetails?.secondGroup || defaultSecondGroupDetails;

  return (
    <div className={`bg-primary-500 flex flex-col gap-6 sm:gap-8 lg:gap-[32px] items-center justify-center w-full relative overflow-hidden ${className}`}>
      {/* Grid Background Pattern */}
      <img
        src={gridImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none opacity-10"
      />

      {/* Header Section */}
      <div className="flex flex-col gap-[10px] items-center justify-center w-full relative z-10 px-4 py-10 sm:px-6 sm:py-10 lg:px-[80px] lg:py-[56px]">
        <div className="flex flex-col sm:flex-row gap-[10px] items-center justify-center">
          <Typography
            variant="title"
            weight="bold"
            className="text-white text-center sm:text-left"
          >
            {title}
          </Typography>
          <div className="bg-primary-100 px-[10px] py-[5px] rounded-[10px]">
            <Typography
              variant="title"
              weight="bold"
              className="text-primary-500 whitespace-nowrap"
            >
              {highlightedTitle}
            </Typography>
          </div>
        </div>
        <Typography
          variant="p"
          weight="medium"
          className="text-white text-center leading-[1.3] max-w-4xl"
        >
          {description}
        </Typography>
      </div>

      <div className="md:px-4 md:py-10 max-md:px-0 py-10 lg:px-[80px] lg:py-[56px]">
        {/* Main Content Card */}
        <div className="bg-white shadow-[0px_10px_25px_0px_rgba(0,0,0,0.1)] max-md:rounded-none rounded-[20px] w-full overflow-hidden relative z-10">
          {/* Upper Section: Map and Lead Details */}
          <div className="bg-white border-b border-neutral-300 flex flex-col lg:flex-row gap-0 rounded-tl-[20px] rounded-tr-[20px]">
            {/* Left Column: Map Visualization */}
            <div className="w-full lg:w-[60%] lg:flex-shrink-0 relative overflow-hidden">
              <div className="w-full relative">
                <img
                  src={baseMapImage}
                  alt="Map showing lead location"
                  className="w-full h-full object-cover object-center"
                />
                {/* Map Marker Icon - Centered on map */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20">
                  <img
                    src={mapMarkerIcon}
                    alt="Lead location marker"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Lead Details */}
            <div className="basis-0 flex flex-col grow min-w-0 p-4 sm:p-6 lg:p-[32px] justify-between">
              {/* First Group of Details */}
              <div className="flex flex-col gap-[12px] w-full shrink-0">
                {firstGroupDetails.map((detail, index) => (
                  <React.Fragment key={index}>
                    <div className="flex items-center justify-between leading-[1.3] not-italic rounded-[20px] shrink-0 w-full">
                      <Typography
                        variant="xs"
                        weight="medium"
                        className="text-neutral-500 shrink-0 text-nowrap"
                      >
                        {detail.label}
                      </Typography>
                      <Typography
                        variant="s"
                        weight="bold"
                        className={`text-neutral-800 shrink-0 ${detail.centerAlign ? 'text-center' : ''} text-nowrap`}
                      >
                        {detail.value}
                      </Typography>
                    </div>
                    {index < firstGroupDetails.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </div>

              {/* Second Group of Details */}
              <div className="flex flex-col gap-[12px] w-full shrink-0">
                {secondGroupDetails.map((detail, index) => (
                  <React.Fragment key={index}>
                    <div className={`flex items-center justify-between leading-[1.3] not-italic rounded-[20px] shrink-0 w-full ${index === 0 ? 'overflow-clip' : 'text-nowrap'}`}>
                      <Typography
                        variant="xs"
                        weight="medium"
                        className="text-neutral-500 shrink-0 text-nowrap"
                      >
                        {detail.label}
                      </Typography>
                      <Typography
                        variant="s"
                        weight="bold"
                        className={`text-neutral-800 shrink-0 ${detail.centerAlign ? 'text-center text-nowrap' : ''}`}
                      >
                        {detail.label === 'Contact' ? renderContactValue(detail.value) : detail.value}
                      </Typography>
                    </div>
                    {index < secondGroupDetails.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </div>

              {/* Client Testimonial */}
              {testimonial && (
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-[40px] items-start sm:items-center px-0 py-[14px] rounded-[20px] shrink-0 w-full">
                  <div className="flex gap-[10px] items-center shrink-0">
                    <div className="shrink-0 w-12 h-12">
                      <img
                        src={avatarAlbertFlores}
                        alt={testimonial.name}
                        className="w-12 h-12 object-cover rounded-full"
                      />
                    </div>
                    <div className="flex flex-col gap-[4px] items-start justify-center leading-[1.3] not-italic shrink-0 text-s text-center text-nowrap">
                      <Typography
                        variant="s"
                        weight="bold"
                        className="text-neutral-800 shrink-0"
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="s"
                        weight="medium"
                        className="text-neutral-500 shrink-0"
                      >
                        {testimonial.role}
                      </Typography>
                    </div>
                  </div>
                  <Typography
                    variant="xs"
                    weight="medium"
                    className="basis-0 grow min-w-0 shrink-0 text-neutral-500 leading-[1.3]"
                  >
                    {testimonial.text}
                  </Typography>
                </div>
              )}
            </div>
          </div>

          {/* Lower Section: Lead Pricing and CTA */}
          {pricing && (
            <div className="bg-white flex flex-col lg:flex-row gap-4 lg:gap-[32px] items-start lg:items-center overflow-hidden px-4 sm:px-6 lg:px-[32px] py-4 sm:py-6 lg:py-[24px] rounded-bl-[20px] rounded-br-[20px] shrink-0 w-full">
              <Typography
                variant="p"
                weight="bold"
                className="text-neutral-900 leading-[1.3] shrink-0 text-nowrap"
              >
                {pricing.title}
              </Typography>
              <Typography
                variant="xs"
                weight="medium"
                className="basis-0 grow min-w-0 shrink-0 text-neutral-500 leading-[1.3]"
              >
                {pricing.description}
              </Typography>
              <Button
                variant="primary"
                icon={<ChevronIcon />}
                iconPosition="right"
                className="px-[24px] py-[14px] gap-[5px] shrink-0 w-full lg:w-auto"
              >
                {pricing.ctaText}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
