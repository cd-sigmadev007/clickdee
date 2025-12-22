import React from 'react';
import { Typography } from '@/components';
import { Feature } from '@/modules/home/types';

import hugeiconsCustomerSupportBlob from '@/assets/icons/hugeIconsCustomerSupportBlob.svg';
import hugeiconsMessageUser02Blob from '@/assets/icons/hugeiconsMessageUser02Blob.svg';

export interface PartnerSupportOnboardingSectionProps {
  className?: string;
}

const partnerFeatures: Feature[] = [
  {
    id: 'support-call',
    title: 'Schedule a support call',
    description:
      'Request a call with our support team to get assistance with any issues or questions you may have.',
    icon: hugeiconsCustomerSupportBlob,
  },
  {
    id: 'partner-onboarding',
    title: 'Schedule new partner onboarding',
    description:
      'Set up a session to get your team onboarded and trained on using our platform to generate high-quality leads.',
    icon: hugeiconsMessageUser02Blob,
  },
];

export const PartnerSupportOnboardingSection: React.FC<
  PartnerSupportOnboardingSectionProps
> = ({ className = '' }) => {
  return (
    <section
      className={`
        bg-primary-100
        rounded-t-[40px]
        flex flex-col md:flex-row
        gap-4
        py-[32px] px-[16px]
        md:py-[32px] md:px-[24px]
        lg:py-[48px] lg:px-[80px]
        ${className}
      `}
    >
      {partnerFeatures.map((feature) => (
        <div key={feature.id} className="w-full md:w-1/2">
          {/* Card */}
          <div
            className="
              bg-white
              border border-neutral-200
              rounded-[20px]
              p-8
              h-full
              flex flex-col
            "
          >
            {/* Main Content */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Icon (full width on column) */}
              <div className="flex-shrink-0 w-full lg:w-auto">
                <div
                  className="
                    w-full
                    lg:w-[180px]
                    h-[180px]
                    rounded-[16px]
                    bg-primary-200
                    grid place-items-center
                  "
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-[132px] h-[132px] object-contain block"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-3 flex-1 min-w-0 justify-between">
                <div className="flex flex-col gap-2">
                <Typography
                  variant="h4"
                  weight="bold"
                  className="text-neutral-900"
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="p"
                  weight="regular"
                  className="text-neutral-500"
                >
                  {feature.description}
                </Typography>
                </div>
                <div className="flex justify-end">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 15L15 5M15 5H5M15 5V15"
                      stroke="#71717A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      ))}
    </section>
  );
};
