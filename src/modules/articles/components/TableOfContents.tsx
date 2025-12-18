import React, { useState } from 'react';
import { TableOfContentsItem } from '../types/articleData';
import { Typography } from '@/components/Typography';

export interface TableOfContentsProps {
  items: TableOfContentsItem[];
  onItemClick?: (itemId: string) => void;
  className?: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  items,
  onItemClick,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (itemId: string) => {
    onItemClick?.(itemId);

    const element = document.getElementById(itemId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`flex flex-col gap-4 items-start relative shrink-0 ${className}`}>
      {/* Dropdown button (mobile / tablet) */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="lg:hidden bg-neutral-50 flex items-center justify-between p-4 rounded-[10px] w-full"
      >
        <Typography
          variant="p"
          weight="bold"
          className="text-primary-500 uppercase font-lato"
        >
          In this article
        </Typography>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 32 32"
          fill="none"
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path
            d="M21.5 13.5L16 19L10.5 13.5"
            stroke="#18181B"
            strokeWidth="1.83333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Title (desktop only) */}
      <Typography
        variant="s"
        weight="medium"
        className="hidden lg:block text-neutral-500"
      >
        In this article
      </Typography>

      {/* TOC Items */}
      <ul
        className={`w-full space-y-2 ${
          isOpen ? '' : 'hidden'
        } lg:block`}
      >
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleItemClick(item.id)}
              className="flex items-start gap-2 text-left hover:opacity-70 transition-opacity"
            >
              {/* Custom bullet */}
              <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-black shrink-0" />

              <Typography
                variant="xs"
                weight="medium"
                className="text-primary-600"
              >
                {item.label}
              </Typography>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
