import React from 'react';
import { Typography } from '@/components';
import marketeqCall from '@/assets/icons/marketeq_call.svg';
import hugeiconsSearchArea from '@/assets/icons/hugeicons_search-area.svg';
import iconoirUserStar from '@/assets/icons/iconoir_user-star-1.svg';

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  steps?: ProcessStep[];
  className?: string;
}

const defaultSteps: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Call tracking',
    description: 'This initial step involves monitoring every interaction with potential customers in real-time, ensuring a comprehensive understanding of their preferences. It establishes a solid foundation for the subsequent lead generation process.',
    icon: marketeqCall,
  },
  {
    stepNumber: '02',
    title: 'Verification',
    description: 'We rigorously validate each lead to ensure authenticity and quality, confirming accurate contact details and the relevance of customer inquiries. Clickdee guarantees only genuine, actionable leads are forwarded for further engagement',
    icon: hugeiconsSearchArea,
  },
  {
    stepNumber: '03',
    title: 'Delivery of leads',
    description: 'Each verified lead is promptly delivered to you, ensuring immediate access to fresh opportunities for swift engagement and higher conversion rates. Clickdee empowers clients to capitalize on new business prospects effectively and efficiently.',
    icon: iconoirUserStar,
  },
];

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  title = 'Our Process :',
  subtitle = 'Delivering Fire Damage Leads',
  description = 'Clickdee excels in real-time lead delivery, ensuring immediate access to potential customers for swift engagement. Each lead is sent directly to you upon generation, opening doors to new opportunities.',
  steps = defaultSteps,
  className = '',
}) => {
  return (
    <div className={`bg-primary-500 flex flex-col gap-8 lg:gap-[32px] items-center justify-center px-0 py-10 sm:px-6 sm:py-10 lg:px-[80px] lg:py-[88px] w-full ${className}`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-[10px] items-center justify-center px-4 sm:px-0 w-full">
        <div className="bg-primary-100 px-[10px] py-[5px] rounded-[10px]">
          <Typography
            variant="title"
            weight="bold"
            className="text-primary-500"
          >
            {title}
          </Typography>
        </div>
        <Typography
          variant="title"
          weight="bold"
          className="text-white text-center sm:text-left"
        >
          {subtitle}
        </Typography>
      </div>

      {/* Description */}
      <div className="px-4 sm:px-0 w-full">
        <Typography
          variant="p"
          weight="medium"
          className="text-white text-center leading-[1.3]"
        >
          {description}
        </Typography>
      </div>

      {/* Steps Container */}
      <div className="bg-white rounded-none sm:rounded-[20px] shadow-[0px_10px_25.2px_0px_rgba(0,0,0,0.1)] w-full overflow-hidden mx-4 sm:mx-0">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[24px] px-4 py-6 sm:p-6 lg:p-[48px]">
          {steps.map((step, index) => (
            <React.Fragment key={step.stepNumber}>
              {/* Step Content */}
              <div className="flex gap-3 lg:gap-[12px] items-stretch flex-1 relative">
                {/* Icon Column */}
                <div className="flex flex-col items-center shrink-0">
                  {/* Icon - Fixed size 30x30 including blue background on all screens, centered */}
                  <div className="bg-primary-500 rounded-[32px] flex items-center justify-center shrink-0 w-[30px] h-[30px]">
                    <img
                      src={step.icon}
                      alt=""
                      className={`w-5 h-5 ${index === 2 ? 'brightness-0 invert' : ''}`}
                    />
                  </div>
                  
                  {/* Connecting Line - Desktop: Vertical dotted line after each step (including 3rd), extends to end of paragraph */}
                  {index < steps.length && (
                    <div className="hidden lg:flex items-start justify-center flex-1 mt-4" style={{ width: '2px' }}>
                      <svg
                        width="2"
                        height="100%"
                        viewBox="0 0 2 100"
                        preserveAspectRatio="none"
                        className="h-full"
                      >
                        <line
                          x1="1"
                          y1="0"
                          x2="1"
                          y2="100"
                          stroke="#E4E4E7"
                          strokeWidth="1"
                          strokeDasharray="8 4"
                        />
                      </svg>
                    </div>
                  )}
                  
                  {/* Connecting Line - Mobile/Tablet: Vertical dotted line below icon (including 3rd), extends to end of paragraph */}
                  {index < steps.length && (
                    <div className="lg:hidden flex items-start justify-center flex-1 mt-4" style={{ width: '2px' }}>
                      <svg
                        width="2"
                        height="100%"
                        viewBox="0 0 2 100"
                        preserveAspectRatio="none"
                        className="h-full"
                      >
                        <line
                          x1="1"
                          y1="0"
                          x2="1"
                          y2="100"
                          stroke="#E4E4E7"
                          strokeWidth="1"
                          strokeDasharray="8 4"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Content Column */}
                <div className="flex flex-col gap-3.5 lg:gap-[14px] flex-1">
                  <Typography
                    variant="p"
                    weight="medium"
                    className="text-neutral-500"
                  >
                    Step {step.stepNumber}
                  </Typography>
                  <Typography
                    variant="h3"
                    weight="bold"
                    className="text-neutral-800"
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    variant="s"
                    weight="medium"
                    className="text-neutral-500 leading-[1.3]"
                  >
                    {step.description}
                  </Typography>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

