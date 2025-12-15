import React from 'react';
import { Button } from '@/components';

export interface BannerProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  variant?: 'default' | 'gradient';
  className?: string;
}

export const Banner: React.FC<BannerProps> = ({
  title,
  description,
  icon,
  actionLabel = 'Contact Us',
  onAction,
  variant = 'default',
  className = '',
}) => {
  return (
    <div
      className={`
        bg-white border border-neutral-200 rounded-card p-8 min-h-[168px] flex flex-col sm:flex-row gap-8 items-center justify-between
        ${variant === 'gradient' ? 'bg-gradient-to-r from-primary-500 to-primary-600' : ''}
        ${className}
      `}
    >
      <div className="flex items-center gap-8 flex-col sm:flex-row flex-1 w-full sm:w-auto">
        {icon && (
          <div className="flex-shrink-0">
            {icon}
          </div>
        )}
        <div className="flex flex-col gap-[10px] flex-1">
          <h2 className="font-bold text-h2 max-lg:text-h3 text-neutral-900">
            {title}
          </h2>
          <p className="font-medium text-p text-neutral-500">
            {description}
          </p>
        </div>
      </div>
      {actionLabel && (
        <div className="flex-shrink-0 w-full sm:w-auto mt-4 sm:mt-0">
          <Button variant="primary" onClick={onAction} className="w-full sm:w-auto">
            {actionLabel}
          </Button>
        </div>
      )}
    </div>
  );
};

