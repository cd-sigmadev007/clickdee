import React from 'react';
import gridLayers from '@/assets/images/Grid layers - v1.png';

export interface HeroBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({ 
  children, 
  className = '',
  ...props
}) => {
  return (
    <div 
      className={`bg-white relative flex flex-col items-center justify-center w-full overflow-hidden rounded-t-[20px] ${className}`}
      {...props}
    >
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[32px] items-center justify-center px-4 py-6 sm:px-6 sm:py-8 lg:px-[80px] lg:py-[56px] relative w-full z-0">
        {children}
        <img 
          src={gridLayers} 
          alt="" 
          className="absolute top-0 bottom-0 w-[90%] h-full opacity-30 lg:opacity-100 pointer-events-none z-0" 
        />
      </div>
    </div>
  );
};
