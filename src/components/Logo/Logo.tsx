import React from 'react';
import LogoIcon from '@/assets/Logo.svg';

export interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  width = 173, 
  height = 34 
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={LogoIcon} 
        alt="ClickDee" 
        width={width} 
        height={height}
      />
    </div>
  );
};

