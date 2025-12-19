import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Typography } from '@/components';
import arrowRightLegal from '@/assets/icons/arrow-right-legal.svg';

export interface PolicyNavigationLink {
  path: string;
  label: string;
}

export interface PolicyNavigationCardProps {
  className?: string;
  links?: PolicyNavigationLink[];
  title?: string;
}

export const PolicyNavigationCard: React.FC<PolicyNavigationCardProps> = ({ className = '', links, title }) => {
  const location = useLocation();

  const defaultLinks: PolicyNavigationLink[] = [
    { path: '/privacy-policy', label: 'Privacy Policy' },
    { path: '/terms-and-conditions', label: 'Terms & Conditions' },
    { path: '/do-not-sell', label: 'Do Not Sell My Information' },
  ];

  const navigationLinks = links || defaultLinks;

  return (
    <div className={`bg-white border border-neutral-200 rounded-[20px] shadow-[0px_10px_16px_0px_rgba(0,0,0,0.05)] p-6 flex flex-col gap-6 w-full lg:w-auto ${className}`}>
      {title && (
        <Typography variant="xs" weight="medium" className="text-neutral-500">
          {title}
        </Typography>
      )}
      {navigationLinks.map((link) => {
        const isActive = location.pathname === link.path;
        return (
          <Link
            key={link.path}
            to={link.path}
            className="flex items-center gap-2.5 group transition-colors"
          >
            <img
              src={arrowRightLegal}
              alt=""
              className="w-5 h-5 flex-shrink-0"
            />
            <Typography
              variant="xs"
              weight="medium"
              className={isActive ? 'text-primary-500' : 'text-neutral-900 group-hover:text-primary-500'}
            >
              {link.label}
            </Typography>
          </Link>
        );
      })}
    </div>
  );
};
