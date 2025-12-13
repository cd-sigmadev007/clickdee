import React from 'react';

export interface LabelProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'error' | 'info';
  className?: string;
  onClick?: () => void;
}

const variantClasses = {
  default: 'bg-white border border-neutral-300 text-neutral-500',
  success: 'bg-success-100 text-success-200',
  error: 'bg-error-100 text-error-200',
  info: 'bg-primary-200 text-primary-500',
};

export const Label: React.FC<LabelProps> = ({
  children,
  variant = 'default',
  className = '',
  onClick,
}) => {
  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-1.25 rounded-label font-medium text-xs text-center
        ${variantClasses[variant]}
        ${onClick ? 'cursor-pointer hover:opacity-80' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

