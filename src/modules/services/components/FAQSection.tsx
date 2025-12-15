import React, { useState } from 'react';
import { Typography } from '@/components';
import heroiconsChevronUp from '@/assets/icons/heroicons_chevron-up.svg';

export interface FAQItem {
  question: string;
  answer: string;
  value: string;
}

export interface FAQSectionProps {
  title?: string;
  description?: string;
  items: FAQItem[];
  allowMultiple?: boolean;
  defaultOpen?: string[];
  className?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  title = 'Frequently Asked Questions',
  description = 'Here you will find answers to the most common questions we receive about our fire damage restoration services. If you have any further questions, please do not hesitate to contact us.',
  items,
  allowMultiple = false,
  defaultOpen = [],
  className = '',
}) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);

  const toggleItem = (value: string) => {
    setOpenItems((prev) => {
      if (allowMultiple) {
        return prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value];
      } else {
        return prev.includes(value) ? [] : [value];
      }
    });
  };

  return (
    <div className={`bg-neutral-900 flex flex-col lg:flex-row gap-8 lg:gap-[32px] items-start px-4 py-11 sm:px-6 sm:py-14 lg:px-[80px] lg:py-[56px] w-full ${className}`}>
      {/* Left Column - Title and Description */}
      <div className="flex flex-col gap-6 lg:gap-[24px] items-center lg:items-start w-full lg:w-[500px] lg:shrink-0">
        <Typography
          variant="title"
          weight="bold"
          className="text-white text-center lg:text-left"
        >
          {title}
        </Typography>
        <Typography
          variant="s"
          weight="medium"
          className="text-neutral-300 leading-[1.3] text-center lg:text-left"
        >
          {description}
        </Typography>
      </div>

      {/* Right Column - FAQ Accordion */}
      <div className="flex flex-col gap-4 lg:gap-[16px] items-start flex-1 w-full lg:w-auto">
        {items.map((item) => {
          const isOpen = openItems.includes(item.value);
          return (
            <div
              key={item.value}
              className={`border border-neutral-800 rounded-[20px] w-full overflow-hidden transition-colors duration-300 ${
                isOpen ? 'bg-neutral-800' : 'bg-transparent'
              }`}
            >
              <button
                onClick={() => toggleItem(item.value)}
                className="w-full flex items-start justify-end gap-6 lg:gap-[24px] p-6 lg:p-[24px]"
              >
                <div className="flex-1 text-center lg:text-left">
                  <Typography
                    variant="h4"
                    weight="medium"
                    className="text-white"
                  >
                    {item.question}
                  </Typography>
                </div>
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <img
                    src={heroiconsChevronUp}
                    alt=""
                    className={`w-6 h-6 transition-transform duration-300 ease-in-out brightness-0 invert ${
                      isOpen ? '' : 'scale-y-[-100%]'
                    }`}
                  />
                </div>
              </button>
              {/* Animated content area */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 lg:px-[24px] lg:pb-[24px] pt-0">
                    <Typography
                      variant="s"
                      weight="medium"
                      className="text-neutral-300 leading-[1.3] text-center lg:text-left"
                    >
                      {item.answer}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

