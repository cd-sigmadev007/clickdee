import React, { useState, useEffect } from 'react';
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
  layout?: 'left-right' | 'top-bottom';
  showTitleSection?: boolean;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  title = 'Frequently Asked Questions',
  description = 'Here you will find answers to the most common questions we receive about our fire damage restoration services. If you have any further questions, please do not hesitate to contact us.',
  items,
  allowMultiple = false,
  defaultOpen = [],
  className = 'bg-neutral-900',
  layout = 'left-right',
  showTitleSection = true,
}) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);

  // Handle anchor links on mount
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && items.length > 0) {
      const item = items.find((item) => item.value === hash);
      if (item) {
        setOpenItems((prev) => {
          if (prev.includes(hash)) return prev;
          return allowMultiple ? [hash, ...prev] : [hash];
        });
        // Smooth scroll to the item
        setTimeout(() => {
          const element = document.getElementById(`faq-${hash}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const hasTitleSection = showTitleSection && (title || description);
  const isTopBottomLayout = layout === 'top-bottom';

  return (
    <div className={`flex ${isTopBottomLayout ? 'flex-col' : 'flex-col lg:flex-row'} gap-8 lg:gap-[32px] items-start px-4 py-11 sm:px-6 sm:py-14 lg:px-[80px] lg:py-[56px] w-full ${className}`}>
      {/* Title Section - Only show if title or description provided */}
      {hasTitleSection && (
        <div className={`flex flex-col gap-6 lg:gap-[24px] items-center ${isTopBottomLayout ? 'w-full' : 'lg:w-[500px] lg:shrink-0'} ${isTopBottomLayout ? 'lg:items-center' : 'lg:items-start'}`}>
          {title && (
            <Typography
              variant={isTopBottomLayout ? 'display' : 'title'}
              weight="bold"
              className={`${className.includes('bg-neutral-900') || className.includes('bg-primary') ? 'text-white' : 'text-neutral-900'} text-center ${isTopBottomLayout ? '' : 'lg:text-left'}`}
            >
              {title}
            </Typography>
          )}
          {description && (
            <Typography
              variant="s"
              weight="medium"
              className={`${className.includes('bg-neutral-900') || className.includes('bg-primary') ? 'text-neutral-300' : 'text-neutral-500'} leading-[1.3] text-center ${isTopBottomLayout ? '' : 'lg:text-left'}`}
            >
              {description}
            </Typography>
          )}
        </div>
      )}

      {/* FAQ Accordion */}
      <div className={`flex flex-col gap-4 lg:gap-4 items-start ${isTopBottomLayout ? 'w-full' : 'flex-1 w-full lg:w-auto'}`}>
        {items.map((item) => {
          const isOpen = openItems.includes(item.value);
          const isDarkBackground = className.includes('bg-neutral-900') || (className.includes('bg-primary') && !className.includes('bg-primary-100'));
          
          return (
            <div
              key={item.value}
              id={`faq-${item.value}`}
              className={`${isDarkBackground ? 'border border-neutral-800' : 'border border-neutral-200'} ${isDarkBackground ? (isOpen ? 'bg-neutral-800' : 'bg-transparent') : 'bg-white'} rounded-[20px] w-full overflow-hidden transition-colors duration-300 ${isDarkBackground ? '' : 'shadow-[0px_10px_16px_0px_rgba(0,0,0,0.05)]'}`}
            >
              <button
                onClick={() => toggleItem(item.value)}
                className={`w-full flex items-start justify-end gap-6 ${isDarkBackground ? 'p-6 lg:p-[24px]' : 'p-8'}`}
              >
                <div className="flex-1 text-left">
                  <Typography
                    variant="h4"
                    weight="medium"
                    className={isDarkBackground ? 'text-white' : 'text-neutral-900'}
                  >
                    {item.question}
                  </Typography>
                </div>
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <img
                    src={heroiconsChevronUp}
                    alt=""
                    className={`w-6 h-6 transition-transform duration-300 ease-in-out ${isDarkBackground ? 'brightness-0 invert' : ''} ${
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
                  <div className={`${isDarkBackground ? 'px-6 pb-6 lg:px-8 lg:pb-8' : 'px-8 pb-8'} pt-0`}>
                    <Typography
                      variant="s"
                      weight="medium"
                      className={`${isDarkBackground ? 'text-neutral-300' : 'text-neutral-500'} leading-[1.3] text-left`}
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

