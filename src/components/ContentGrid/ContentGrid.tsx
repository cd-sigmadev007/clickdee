import React from 'react';
import { Typography } from '@/components/Typography';
import gridResultBlack from '@/assets/images/grid-result-black.png';
import gridImage from '@/assets/images/image.png';
import gridLayers from '@/assets/images/Grid layers - v1.png';
import { TextSection, ImageSection, StatsSection, ContentGridProps, BenefitCard, ChecklistSection, IconHeadingSection } from './types';
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

const isChecklistSection = (item: any): item is ChecklistSection => {
  return item && typeof item === 'object' && 'items' in item && Array.isArray(item.items);
};

const isIconHeadingSection = (item: any): item is IconHeadingSection => {
  return item && typeof item === 'object' && 'heading' in item && !('items' in item) && !('src' in item) && !('stats' in item) && !('paragraph' in item);
};

const renderTextSection = (section: TextSection, className?: string) => {
  const bgColor = section.bgColor || 'bg-neutral-100';
  
  return (
    <div className={`${bgColor} flex flex-col gap-4 items-start justify-start px-4 py-8 sm:px-6 sm:py-12 md:px-6 md:py-12 lg:px-[80px] lg:py-[88px] relative w-full h-full overflow-hidden ${className || ''}`}>
      {/* Pattern Background */}
      {section.pattern && (
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v30H30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      )}
      
      <div className="relative z-10 w-full flex flex-col items-start justify-start gap-4">
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
      {section.filter === 'blue' && (
        <div className="absolute inset-0 bg-primary-500 opacity-40"></div>
      )}
    </div>
  );
};

const renderChecklistSection = (section: ChecklistSection, className?: string) => {
  const bgColor = section.bgColor || 'bg-neutral-100';
  const textColor = section.textColor || 'text-neutral-500';
  
  return (
    <div className={`${bgColor} flex flex-col gap-6 items-start justify-start px-6 py-12 relative w-full h-full ${className || ''}`}>
      {section.items.map((item, index) => (
        <div key={index} className="flex gap-[14px] items-start w-full">
          <div className="flex-shrink-0 w-[22px] h-[22px] flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="10" fill="#18181B"/>
              <path d="M7 11L10 14L15 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className={`font-satoshi not-italic text-s font-medium ${textColor} leading-[1.3] flex-1`}>
            {item.text.split('\n').map((line, i) => (
              <span key={i} className={i === 0 ? 'block' : 'block'}>{line || '\u00A0'}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const renderIconHeadingSection = (section: IconHeadingSection, className?: string) => {
  const bgColor = section.bgColor || 'bg-neutral-900';
  const textColor = section.textColor || 'text-white';
  const hasIcon = !!section.icon;
  const alignClass = hasIcon ? 'items-start' : 'items-center';
  const textAlignClass = hasIcon ? '' : 'text-center';
  
  return (
    <div className={`${bgColor} flex flex-col gap-6 ${alignClass} justify-center px-6 py-12 relative w-full h-full overflow-hidden ${className || ''}`}>
      {section.gridPattern && (
        <img 
          src={gridResultBlack} 
          alt="" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[863px] h-[470px] invert pointer-events-none scale-y-[-1]" 
        />
      )}
      <div className={`relative z-10 flex flex-col gap-6 w-full ${alignClass}`}>
        {section.icon && (
          <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
            <img src={section.icon} alt="" className="w-full h-full object-contain" />
          </div>
        )}
        <Typography variant="h2" weight="bold" className={`${textColor} ${textAlignClass}`}>
          {section.heading}
        </Typography>
      </div>
    </div>
  );
};

const renderBenefitCard = (card: BenefitCard) => {
  return (
    <div
      key={card.id}
      className={`
        ${card.bgColor} ${card.textColor}
        rounded-[20px] p-8
        flex flex-col
        h-[300px]
        relative overflow-hidden
        shadow-[0px_10px_25px_0px_rgba(0,0,0,0.05)]
      `}
    >
      {/* Grid Pattern Background for specific cards */}
      {(card.id === 'fire-restoration' || card.id === 'pay-per-lead') && (
        <img
          src={gridImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
        />
      )}

      {/* Pattern Background for spending-revenue */}
      {card.id === 'spending-revenue' && (
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v30H30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      )}

      {/* Fire Restoration Card - Special Layout */}
      {card.type === 'highlight' && (
        <>
          {/* Badge */}
          {card.badge && (
            <div className="absolute top-6 right-6 bg-primary-100 bg-opacity-80 backdrop-blur-sm px-4 py-2 rounded-[40px] z-10">
              <Typography variant="s" weight="bold" className="text-primary-500">
                {card.badge}
              </Typography>
            </div>
          )}
          {/* White Card Container */}
          <div className="bg-white rounded-[20px] p-6 flex flex-col items-center justify-center flex-1 shadow-lg relative z-10">
            {card.icon && (
              <img src={card.icon} alt="" className="w-12 h-12 mb-4 object-contain" />
            )}
            <Typography variant="h3" weight="bold" className="text-neutral-900 mb-2">
              {card.title}
            </Typography>
            {card.location && (
              <Typography variant="s" weight="medium" className="text-neutral-500">
                {card.location}
              </Typography>
            )}
          </div>
        </>
      )}

      {/* Pricing Card */}
      {card.type === 'pricing' && (
        <div className="flex flex-col items-center justify-center flex-1 relative z-10">
          {card.price && (
            <Typography variant="display" weight="bold" className="mb-2">
              {card.price}
            </Typography>
          )}
          {card.priceLabel && (
            <Typography variant="p" weight="medium" className="mb-6 opacity-80">
              {card.priceLabel}
            </Typography>
          )}
          <Typography variant="h2" weight="bold" className="mb-2">
            {card.title}
          </Typography>
          {card.description && (
            <Typography variant="p" weight="medium" className="opacity-80 text-center">
              {card.description}
            </Typography>
          )}
        </div>
      )}

      {/* Feature Cards */}
      {card.type === 'feature' && (
        <div className="flex flex-col flex-1 relative z-10">
          {card.icon && card.id === 'spending-revenue' && (
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                <img src={card.icon} alt="" className="w-12 h-12 object-contain" />
              </div>
            </div>
          )}
          <Typography variant="h2" weight="bold" className="mb-3">
            {card.title}
          </Typography>
          {card.subtitle && (
            <Typography variant="h4" weight="bold" className="mb-4 opacity-80">
              {card.subtitle}
            </Typography>
          )}
          {card.description && (
            <Typography variant="p" weight="medium" className="opacity-80 leading-[1.3]">
              {card.description}
            </Typography>
          )}
        </div>
      )}
    </div>
  );
};

const renderCardContent = (
  item: TextSection | StatsSection | ImageSection | ChecklistSection | IconHeadingSection | React.ReactNode | undefined
) => {
  if (!item) return null;
  
  if (isTextSection(item)) {
    return renderTextSection(item);
  } else if (isStatsSection(item)) {
    return renderStatsSection(item);
  } else if (isImageSection(item)) {
    return renderImageSection(item);
  } else if (isChecklistSection(item)) {
    return renderChecklistSection(item);
  } else if (isIconHeadingSection(item)) {
    return renderIconHeadingSection(item);
  } else {
    return <div className="w-full h-full">{item}</div>;
  }
};

export const ContentGrid: React.FC<ContentGridProps> = ({
  topLeft,
  topRight,
  middleLeft,
  middleRight,
  bottomLeft,
  bottomRight,
  left,
  right,
  cards,
  className = '',
}) => {
  // If cards array is provided, render grid layout
  if (cards && cards.length > 0) {
    return (
      <div className={`bg-neutral-100 flex flex-col gap-8 lg:gap-[32px] items-center justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-20 lg:py-22 w-full ${className}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-[16px] w-full max-w-7xl">
          {cards.map((card) => renderBenefitCard(card))}
        </div>
      </div>
    );
  }

  // 2-card layout (left/right)
  if (left !== undefined || right !== undefined) {
    return (
      <div className={`flex flex-col md:flex-row items-stretch relative w-full ${className}`}>
        {left && (
          <div className="w-full md:w-1/2 flex">
            {renderCardContent(left)}
          </div>
        )}
        {right && (
          <div className="w-full md:w-1/2 flex">
            {renderCardContent(right)}
          </div>
        )}
      </div>
    );
  }

  // Check if 6-card layout is being used
  const isSixCardLayout = middleLeft !== undefined || middleRight !== undefined;

  // 6-card layout (2x3 grid)
  if (isSixCardLayout) {
    return (
      <div className={`flex flex-col items-center relative w-full ${className}`}>
        {/* Top Row - Mobile: Stack, Desktop/Tablet: Side by side */}
        <div className="flex flex-col md:flex-row items-stretch relative w-full">
          {/* Top Left */}
          <div className="w-full md:w-1/2 flex">
            {renderCardContent(topLeft)}
          </div>

          {/* Top Right */}
          <div className="w-full md:w-1/2 flex">
            {renderCardContent(topRight)}
          </div>
        </div>

        {/* Middle Row - Mobile: Stack, Desktop/Tablet: Side by side */}
        <div className="flex flex-col md:flex-row items-stretch relative w-full">
          {/* Middle Left */}
          <div className="w-full md:w-1/2 flex">
            {renderCardContent(middleLeft)}
          </div>

          {/* Middle Right */}
          <div className="w-full md:w-1/2 flex">
            {renderCardContent(middleRight)}
          </div>
        </div>

        {/* Bottom Row - Mobile: Stack, Desktop/Tablet: Side by side */}
        <div className="flex flex-col md:flex-row items-stretch relative w-full">
          {/* Bottom Left */}
          <div className="w-full md:w-1/2 flex">
            {renderCardContent(bottomLeft)}
          </div>

          {/* Bottom Right */}
          <div className="w-full md:w-1/2 flex">
            {renderCardContent(bottomRight)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center relative w-full ${className}`}>
      {/* Top Row - Mobile: Stack, Desktop/Tablet: Side by side */}
      <div className="flex flex-col md:flex-row items-stretch relative w-full">
        {/* Top Left */}
        <div className="w-full md:w-1/2 flex">
          {renderCardContent(topLeft)}
        </div>

        {/* Top Right */}
        <div className="w-full md:w-1/2 flex">
          {renderCardContent(topRight)}
        </div>
      </div>

      {/* Bottom Row - Mobile: Stack, Desktop/Tablet: Side by side */}
      <div className="flex flex-col md:flex-row items-stretch relative w-full">
        {/* Bottom Left */}
        <div className="w-full md:w-1/2 flex">
          {renderCardContent(bottomLeft)}
        </div>

        {/* Bottom Right */}
        <div className="w-full md:w-1/2 flex">
          {renderCardContent(bottomRight)}
        </div>
      </div>
    </div>
  );
};
