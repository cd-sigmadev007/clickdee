import React from 'react';
// @ts-ignore - SVG import with space in filename
import HeroiconsChevronRight from '@/assets/icons/heroicons_chevron-right.svg';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: 'slash' | 'chevron' | 'arrow';
  className?: string;
}

const SeparatorIcon: React.FC<{ type: 'slash' | 'chevron' | 'arrow' }> = ({ type }) => {
  if (type === 'chevron') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none">
        <path d="M0.75 9.75L5.25 5.25L0.75 0.75" stroke="#9A9A9A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    );
  }
  if (type === 'arrow') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#9A9A9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <span className="text-[#9A9A9A]">/</span>
  );
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  separator = 'chevron',
  className = '',
}) => {
  return (
    <nav className={`flex items-center gap-0 ${className}`} aria-label="Breadcrumb">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <span className="flex items-center justify-center w-6 h-6 mx-1">
              <SeparatorIcon type={separator} />
            </span>
          )}
          {item.href && !item.isActive ? (
            <a
              href={item.href}
              className="font-lato font-normal text-p leading-[1.4] text-[#9A9A9A] hover:text-[#262626] transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span
              className={`font-lato font-normal text-p leading-[1.4] ${item.isActive ? 'text-[#262626]' : 'text-[#9A9A9A]'
                }`}
            >
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

