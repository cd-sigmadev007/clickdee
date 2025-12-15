import React from 'react';
import { Typography } from '@/components';
import { Button } from '@/components/Button';
import chevronUpIcon from '@/assets/icons/heroicons_chevron-up.svg';
import gridImage from '@/assets/images/image.png';
import baseMapImage from '@/assets/images/base-map.png';
import mapMarkerIcon from '@/assets/images/services-map-marker.svg';
import avatarAlbertFlores from '@/assets/images/avatar-peter-renolds.png'; // Using available avatar as placeholder

export interface LeadProfilesSectionProps {
  className?: string;
}

interface LeadDetail {
  label: string;
  value: string;
}

const leadDetails: LeadDetail[] = [
  { label: 'Project', value: 'Fire damage' },
  { label: 'Location Type', value: 'Residence' },
  { label: 'Homeowner', value: 'Yes' },
  { label: 'Rooms Affected', value: '2' },
  { label: 'Emergency', value: 'Yes' },
  { label: 'Timing', value: 'Immediate' },
  { label: 'Claim Insured', value: 'Yes' },
  { label: 'Address', value: '123 Main Street Omaha, NE (68007)' },
  { label: 'Contact', value: '(855) 387-7272 help@inquirly.com' },
  { label: 'Average Winning Cost Per Lead', value: '$350*' },
];

export const LeadProfilesSection: React.FC<LeadProfilesSectionProps> = ({ className = '' }) => {
  const ChevronIcon = () => (
    <img
      src={chevronUpIcon}
      alt=""
      className="w-4 h-4 rotate-[270deg] scale-y-[-100%] brightness-0 invert"
    />
  );

  return (
    <div className={`bg-primary-500 flex flex-col gap-6 sm:gap-8 lg:gap-[32px] items-center justify-center w-full relative overflow-hidden ${className}`}>
      {/* Grid Background Pattern */}
      <img
        src={gridImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none opacity-10"
      />

      {/* Header Section */}
      <div className="flex flex-col gap-[10px] items-center justify-center w-full relative z-10 px-4 pt-10 sm:px-6 sm:pt-10 lg:px-[80px] lg:pt-[56px]">
        <div className="flex flex-col sm:flex-row gap-[10px] items-center justify-center">
          <Typography
            variant="title"
            weight="bold"
            className="text-white text-center sm:text-left"
          >
            Visualizing your
          </Typography>
          <div className="bg-primary-100 px-[10px] py-[5px] rounded-[10px]">
            <Typography
              variant="title"
              weight="bold"
              className="text-primary-500 whitespace-nowrap"
            >
              Lead Profiles
            </Typography>
          </div>
        </div>
        <Typography
          variant="p"
          weight="medium"
          className="text-white text-center leading-[1.3] max-w-4xl"
        >
          We sell fire leads leads on a per-lead basis with no minimums and no monthly commitments.
        </Typography>
      </div>

      <div className="md:px-4 md:pb-10 sm:px-0 sm:pb-10 lg:px-[80px] lg:pb-[56px]">
        {/* Main Content Card */}
        <div className="bg-white rounded-none md:rounded-[24px] shadow-[0px_10px_25px_0px_rgba(0,0,0,0.05)] w-full overflow-hidden relative z-10">
          {/* Upper Section: Map and Lead Details */}
          <div className="flex flex-col lg:flex-row gap-0">
            {/* Left Column: Map Visualization */}
            <div className="w-full lg:w-1/2 relative bg-neutral-100">
              {/* Map Image */}
              <div className="w-full h-full relative overflow-hidden">
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
                    className="w-[180px] h-[180px] object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Lead Details */}
            <div className="w-full px-4 pb-10 sm:px-6 sm:pb-10 lg:px-[80px] lg:pb-[56px]">
              {/* Lead Details List */}
              <div className="flex flex-col gap-0">
                {leadDetails.map((detail, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 py-4 border-b border-neutral-200 last:border-b-0">
                    <Typography
                      variant="s"
                      weight="medium"
                      className="text-neutral-500 sm:w-[45%]"
                    >
                      {detail.label}
                    </Typography>
                    <Typography
                      variant="s"
                      weight="bold"
                      className="text-neutral-800 sm:w-[55%] sm:text-right break-words"
                    >
                      {detail.value}
                    </Typography>
                  </div>
                ))}
              </div>

              {/* Client Testimonial */}
              <div className="flex sm:flex-row flex-col gap-6 pt-6 lg:py-6 border-t border-neutral-200">
                <div className="flex items-center gap-3">
                  <img
                    src={avatarAlbertFlores}
                    alt="Albert Flores"
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex flex-col">
                    <Typography
                      variant="p"
                      weight="bold"
                      className="text-neutral-800"
                    >
                      Albert Flores
                    </Typography>
                    <Typography
                      variant="s"
                      weight="medium"
                      className="text-neutral-500"
                    >
                      Client
                    </Typography>
                  </div>
                </div>
                <Typography
                  variant="s"
                  weight="medium"
                  className="text-neutral-500 leading-[1.3]"
                >
                  &quot;Kitchen cabinets caught on fire. Need clean up services and smoke odor removal.&quot;
                </Typography>
              </div>
            </div>
          </div>

          {/* Lower Section: Lead Pricing and CTA */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 p-6 lg:p-8 border-t border-neutral-200">
            <div className="flex flex-col gap-3 flex-1">
              <Typography
                variant="h3"
                weight="bold"
                className="text-neutral-800"
              >
                Lead Pricing and Criteria
              </Typography>
              <Typography
                variant="p"
                weight="medium"
                className="text-neutral-500 leading-[1.3]"
              >
                We offer fire damage leads individually, without any minimum requirements or monthly commitments. Our pricing depends on the lead type: form leads range from $75 to $200 per lead, while calls range from $100 to $900 per call.
              </Typography>
            </div>
            <div className="flex-shrink-0 lg:self-center">
              <Button
                variant="primary"
                icon={<ChevronIcon />}
                iconPosition="right"
                className="px-6 py-[14px] gap-[5px] w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="flex flex-col gap-1 items-center justify-center w-full relative z-10">
        <Typography
          variant="s"
          weight="medium"
          className="text-white text-center leading-[1.3]"
        >
          *More competitive areas of the country command higher Lead prices.
        </Typography>
        <Typography
          variant="s"
          weight="medium"
          className="text-white text-center leading-[1.3]"
        >
          The statistics may vary according to the season and movements in consumption.
        </Typography>
      </div>
    </div>
  );
};
