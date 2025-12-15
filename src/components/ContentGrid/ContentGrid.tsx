import React from 'react';
import { Typography } from '@/components/Typography';
import gridResultBlack from '@/assets/images/grid-result-black.png';
import { TextSection, ImageSection, StatsSection, ContentGridProps } from './types';
import clsx from 'clsx';

const isTextSection = (item: any): item is TextSection => {
  return item && typeof item === 'object' && 'heading' in item && 'paragraph' in item;
};

const isStatsSection = (item: any): item is StatsSection => {
  return item && typeof item === 'object' && 'stats' in item && Array.isArray(item.stats);
};

const isImageSection = (item: any): item is ImageSection => {
  return item && typeof item === 'object' && 'src' in item && 'alt' in item;
};

const renderTextSection = (section: TextSection, className?: string) => {
  return (
    <div className={`bg-neutral-100 flex flex-col gap-4 items-start justify-start px-4 py-8 sm:px-6 sm:py-12 md:px-6 md:py-12 lg:px-[80px] lg:py-[88px] relative w-full h-full ${className || ''}`}>
      <Typography variant="h3" weight="bold" className="text-neutral-900 w-full md:text-h3 lg:text-h2">
        {section.heading}
      </Typography>
      {section.variant === 'bold-subtitle' && section.subtitle && (
        <div className="font-bold text-s text-neutral-500 w-full md:text-s lg:text-p">
          {section.subtitle.split('\n').map((line, index) => (
            <p key={index} className={index === 0 ? 'mb-0' : ''}>
              {line}
            </p>
          ))}
        </div>
      )}
      {section.variant === 'bold-subtitle' && (
        <div className="flex items-center justify-center relative w-full">
          <div className="h-px w-full bg-neutral-200"></div>
        </div>
      )}
      <Typography variant="p" weight="medium" className="text-neutral-500 w-full">
        {section.paragraph}
      </Typography>
    </div>
  );
};

const renderStatsSection = (section: StatsSection, className?: string) => {
  const gridBg = section.gridBackground || gridResultBlack;
  
  return (
    <div className={`bg-neutral-900 flex flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-12 md:px-[80px] md:py-12 lg:px-[80px] lg:py-[88px] relative w-full h-full overflow-hidden ${className || ''}`}>
      {/* Grid background */}
      <img 
        src={gridBg} 
        alt="" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[863px] h-[470px] opacity-90 pointer-events-none" 
      />
      
      {/* Stats Grid - 2x2 layout, supports 2 or 4 stats */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-0 items-center justify-center w-full relative z-10">
        {section.stats.map((stat) => (
          <div key={stat.id} className="flex flex-col h-[112px] items-center justify-center text-center text-white w-full px-4">
            <Typography variant="h2" weight="bold" className="text-white whitespace-nowrap md:text-h2 lg:text-display">
              {stat.value}
            </Typography>
            <Typography variant="s" weight="medium" className="text-white text-center">
              {stat.label}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

const renderImageSection = (section: ImageSection, className?: string) => {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className || ''}`}>
      <img 
        src={section.src} 
        alt={section.alt}
        className={clsx(`w-full h-full object-cover block`, section.className)}
      />
 
    </div>
  );
};

export const ContentGrid: React.FC<ContentGridProps> = ({
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center relative w-full bg-white ${className}`}>
      {/* Top Row - Mobile: Stack, Desktop/Tablet: Side by side */}
      <div className="flex flex-col md:flex-row items-stretch relative w-full">
        {/* Top Left */}
        <div className="w-full md:w-1/2 flex">
          {isTextSection(topLeft) ? (
            renderTextSection(topLeft)
          ) : isStatsSection(topLeft) ? (
            renderStatsSection(topLeft)
          ) : (
            <div className="w-full h-full">{topLeft}</div>
          )}
        </div>

        {/* Top Right */}
        <div className="w-full md:w-1/2 flex">
          {isStatsSection(topRight) ? (
            renderStatsSection(topRight)
          ) : isTextSection(topRight) ? (
            renderTextSection(topRight)
          ) : (
            <div className="w-full h-full">{topRight}</div>
          )}
        </div>
      </div>

      {/* Bottom Row - Mobile: Stack, Desktop/Tablet: Side by side */}
      <div className="flex flex-col md:flex-row items-stretch relative w-full">
        {/* Bottom Left */}
        <div className="w-full md:w-1/2 flex">
          {isImageSection(bottomLeft) ? (
            renderImageSection(bottomLeft)
          ) : isTextSection(bottomLeft) ? (
            renderTextSection(bottomLeft)
          ) : (
            <div className="w-full h-full">{bottomLeft}</div>
          )}
        </div>

        {/* Bottom Right */}
        <div className="w-full md:w-1/2 flex">
          {isTextSection(bottomRight) ? (
            renderTextSection(bottomRight)
          ) : (
            <div className="w-full h-full">{bottomRight}</div>
          )}
        </div>
      </div>
    </div>
  );
};
