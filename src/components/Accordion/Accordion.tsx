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
            className="bg-white border border-neutral-200 rounded-card p-8 shadow-[0px_10px_16px_0px_rgba(0,0,0,0.05)]"
          >
            <button
              onClick={() => toggleItem(item.value)}
              className="w-full flex items-start justify-between gap-6"
            >
              <div className="flex-1 text-left flex flex-col gap-5">
                <h3 className="font-medium text-h4 text-neutral-900">
                  {item.title}
                </h3>
                {isOpen && (
                  <p className="font-medium text-s text-neutral-500">
                    {item.content}
                  </p>
                )}
              </div>
              <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform duration-200 ${isOpen ? '' : 'rotate-180'}`}
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
          </div>
        );
      })}
    </div>
  );
};

