import React from 'react';
import { Typography } from '@/components';
import mdiLinkedin from '@/assets/icons/mdi-linkedin-white.svg';
import fa6BrandsXTwitter from '@/assets/icons/fa6-brands_x-twitter.svg';
import { foundersData } from '../data/foundersData';

export const FoundersCarousel: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  // Duplicate the cards array multiple times for seamless infinite scroll
  const duplicatedCards = [...foundersData, ...foundersData, ...foundersData];

  return (
    <div className="bg-neutral-100 flex flex-col gap-6 sm:gap-8 items-center justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-[80px] lg:py-[88px] relative w-full">
      {/* Title Section */}
      <div className="flex flex-col sm:flex-row gap-2.5 items-center justify-center w-full">
        <Typography variant="title" weight="bold" className="text-neutral-900 text-center">
          The trailblazers behind
        </Typography>
        <Typography variant="title" weight="bold" className="text-primary-500 text-center">
          the Clicks
        </Typography>
      </div>

      {/* Description */}
      <Typography 
        variant="p" 
        weight="medium" 
        className="text-neutral-500 text-center max-w-3xl"
      >
        Clickdee's rise in Home Service & Insurance Leads generation stems from its visionary founders. Combining industry expertise with innovative thinking, they built Clickdee from scratch into a major player.
      </Typography>

      {/* Infinite Auto-Scrolling Carousel */}
      <div className="w-full overflow-hidden relative">
        <div className="flex gap-4 items-center justify-start animate-founders-scroll">
          {duplicatedCards.map((card, index) => {
            const isActive = hoveredIndex === index;
            return (
            <div
              key={`${card.id}-${index}`}
              className="flex-shrink-0 cursor-pointer"
              style={{ 
                width: '300px', 
                height: '300px',
                perspective: '1000px'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className="relative w-full h-full transition-transform duration-500 ease-in-out"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isActive ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* Front Card - Image only */}
                <div 
                  className="bg-neutral-100 flex items-center justify-center rounded-[20px] h-full w-full overflow-hidden absolute inset-0"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                >
                  <img 
                    src={card.image} 
                    alt={card.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Back Card - Blue background with details */}
                <div 
                  className="bg-primary-500 flex flex-col gap-4 items-start justify-between p-6 md:p-8 rounded-[20px] h-full w-full absolute inset-0"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <div className="flex flex-col gap-2 w-full">
                    <Typography variant="h3" weight="bold" className="text-white">
                      {card.name}
                    </Typography>
                    <Typography variant="p" weight="regular" className="text-white">
                      {card.title}
                    </Typography>
                  </div>
                  
                  {/* Social Icons */}
                  <div className="flex gap-4 items-center">
                    {card.linkedinUrl && (
                      <a 
                        href={card.linkedinUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-6 h-6 hover:opacity-80 transition-all duration-200 hover:scale-110"
                      >
                        <img 
                          src={mdiLinkedin} 
                          alt="LinkedIn" 
                          className="w-full h-full"
                        />
                      </a>
                    )}
                    {card.twitterUrl && (
                      <a 
                        href={card.twitterUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-6 h-6 hover:opacity-80 transition-all duration-200 hover:scale-110"
                      >
                        <img 
                          src={fa6BrandsXTwitter} 
                          alt="X (Twitter)" 
                          className="w-full h-full brightness-0 invert"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
