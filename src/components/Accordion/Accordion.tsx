import React, { useState } from 'react';

export interface AccordionItem {
  title: string;
  content: string;
  value: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: string[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
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
    <div className={`flex flex-col gap-[14px] ${className}`}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.value);
        return (
          <div
            key={item.value}
            className="bg-white border border-neutral-200 rounded-card shadow-[0px_10px_16px_0px_rgba(0,0,0,0.05)] overflow-hidden"
          >
            <button
              onClick={() => toggleItem(item.value)}
              className="w-full flex items-start justify-between gap-6 p-8"
            >
              <div className="flex-1 text-left">
                <h3 className="font-medium text-h4 text-neutral-900">
                  {item.title}
                </h3>
              </div>
              <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform duration-300 ease-in-out ${isOpen ? '' : 'rotate-180'}`}
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#18181B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
            {/* Animated content area */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-8 pb-8 pt-0">
                  <p className="font-medium text-s text-neutral-500 leading-[1.3]">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

