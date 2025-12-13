import React from 'react';

export interface HoveringPopupProps {
  amount: string;
  worth: string;
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
  className?: string;
}

export const HoveringPopup: React.FC<HoveringPopupProps> = ({
  amount,
  worth,
  title,
  subtitle,
  icon,
  className = '',
}) => {
  return (
    <div
      className={`
        flex flex-col gap-2.5 p-4 rounded-card shadow-popup w-[200px]
        bg-gradient-to-br from-[#0094FF] to-[#0070FF]
        ${className}
      `}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-baseline gap-1">
          <span className="font-bold text-h3 text-white">{amount}</span>
          <span className="font-medium text-s text-white">{worth}</span>
        </div>
        {icon && (
          <div className="flex-shrink-0 w-8 h-8">
            {icon}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="font-medium text-s text-white">{title}</p>
        <p className="font-medium text-s text-white">{subtitle}</p>
      </div>
    </div>
  );
};

