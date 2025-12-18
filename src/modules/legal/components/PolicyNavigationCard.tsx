import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Typography } from '@/components';

export interface PolicyNavigationCardProps {
  className?: string;
}

export const PolicyNavigationCard: React.FC<PolicyNavigationCardProps> = ({ className = '' }) => {
  const location = useLocation();

  const links = [
    { path: '/privacy-policy', label: 'Privacy Policy' },
    { path: '/terms-and-conditions', label: 'Terms & Conditions' },
    { path: '/do-not-sell', label: 'Do Not Sell My Information' },
  ];

  return (
    <div className={`bg-white rounded-[20px] shadow-[0px_10px_25px_0px_rgba(0,0,0,0.05)] p-6 flex flex-col gap-4 w-full lg:w-auto ${className}`}>
      {links.map((link) => {
        const isActive = location.pathname === link.path;
        return (
          <Link
            key={link.path}
            to={link.path}
            className="flex items-center justify-between group transition-colors"
          >
            <Typography
              variant="p"
              weight="medium"
              className={isActive ? 'text-primary-500' : 'text-neutral-900 group-hover:text-primary-500'}
            >
              {link.label}
            </Typography>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={isActive ? 'text-primary-500' : 'text-neutral-500 group-hover:text-primary-500'}
            >
              <path
                d="M6 4L10 8L6 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        );
      })}
    </div>
  );
};
