import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'bordered' | 'elevated';
  className?: string;
  onClick?: () => void;
}

const variantClasses = {
  default: 'bg-white shadow-[0px_10px_25.2px_0px_rgba(0,0,0,0.1)]',
  bordered: 'bg-white border border-neutral-200',
  elevated: 'bg-white shadow-[0px_10px_25.2px_0px_rgba(0,0,0,0.1)]',
};

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  onClick,
}) => {
  return (
    <div
      className={`
        rounded-card p-8 flex flex-col gap-4 justify-between
        ${variantClasses[variant]}
        ${onClick ? 'cursor-pointer hover:shadow-lg transition-shadow' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

