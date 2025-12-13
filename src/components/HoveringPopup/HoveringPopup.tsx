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
      <div className="flex items-start justify-between w-full" data-node-id="1:14662">
        <div className="flex items-baseline gap-1">
          <span className="font-bold text-h3 text-white leading-[1.3]">$</span>
          <span className="font-bold text-h3 text-white leading-[1.3]">{amount.replace('$', '')}</span>
          <span className="font-medium text-s text-white leading-[1.5]">{worth}</span>
        </div>
        {icon && (
          <div className="relative flex-shrink-0 w-8 h-8" data-node-id="1:14664">
            {icon}
          </div>
        )}
      </div>
      <div className="flex flex-col font-medium gap-0.5 items-start text-s text-white leading-[1.5]" data-node-id="1:14668">
        <p className="relative" data-node-id="1:14669">{title}</p>
        <p className="relative" data-node-id="1:14670">{subtitle}</p>
      </div>
    </div>
  );
};

