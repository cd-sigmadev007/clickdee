import React from 'react';
import { ButtonVariant } from '@/design-system';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center gap-[5px] px-6 py-[14px] rounded-button font-bold text-s transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-600',
    secondary: 'bg-primary-200 text-primary-500 hover:bg-primary-100 active:bg-primary-100',
    outline: 'border border-neutral-900 text-neutral-900 hover:bg-neutral-50 active:bg-neutral-50',
  };

  const disabledClasses = 'opacity-50 cursor-not-allowed';

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${disabled ? disabledClasses : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const iconElement = icon ? (
    <span className="flex items-center justify-center w-4 h-4">
      {icon}
    </span>
  ) : null;

  return (
    <button
      className={classes}
      disabled={disabled}
      {...props}
    >
      {iconPosition === 'left' && iconElement}
      {children}
      {iconPosition === 'right' && iconElement}
    </button>
  );
};

