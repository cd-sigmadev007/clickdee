import React from 'react';
import usMapWithPins from '@/assets/images/us-map-with-pins.png';

export const HeroMap: React.FC = () => {
  return (
    <img 
      src={usMapWithPins} 
      alt="US Map with service pins" 
      className="w-full object-contain mx-auto z-[9999]" 
    />
  );
};

