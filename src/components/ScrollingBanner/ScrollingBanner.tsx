import React from 'react';

export interface ScrollingBannerProps {
  text?: string;
  className?: string;
}

export const ScrollingBanner: React.FC<ScrollingBannerProps> = ({
  text = 'No setup fees. No contract required. Cancel at any time – no cancellation charges.',
  className = '',
}) => {
  return (
    <div className={`bg-neutral-900 overflow-hidden px-0 py-2 relative w-full ${className}`} data-node-id="1:14081">
      <div className="flex font-medium gap-6 items-center justify-start text-s whitespace-nowrap text-white animate-scroll">
        <span className="inline-block">{text}</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block">{text}</span>
      </div>
    </div>
  );
};

