import React from 'react';
import { ButtonVariant } from '@/design-system';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
}

// Spinner component
const Spinner: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    className={`animate-spin ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="16"
    height="16"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  disabled,
  loading = false,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center gap-[5px] px-6 py-[14px] rounded-button font-bold text-s transition-all duration-200 focus:outline-none';
  
  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-600',
    secondary: 'bg-primary-200 text-primary-500 hover:bg-primary-100 active:bg-primary-100',
    outline: 'border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white active:bg-neutral-900 active:text-white',
  };

  const disabledClasses = 'opacity-50 cursor-not-allowed';

  const isDisabled = disabled || loading;

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${isDisabled ? disabledClasses : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const iconElement = icon ? (
    <span className="flex items-center justify-center w-4 h-4">
      {icon}
    </span>
  ) : null;

  const spinnerElement = loading ? (
    <span className="flex items-center justify-center w-4 h-4 shrink-0">
      <Spinner />
    </span>
  ) : null;

  return (
    <button
      className={classes}
      disabled={isDisabled}
      {...props}
    >
      {loading && iconPosition === 'left' && spinnerElement}
      {!loading && iconPosition === 'left' && iconElement}
      {children}
      {loading && iconPosition === 'right' && spinnerElement}
      {!loading && iconPosition === 'right' && iconElement}
    </button>
  );
};

