import React from 'react';
import { Typography } from '@/components';
import { Founder } from '../types';
import mdiLinkedin from '@/assets/icons/mdi-linkedin-white.svg';
import fa6BrandsXTwitter from '@/assets/icons/fa6-brands_x-twitter.svg';
import founder1 from '@/assets/images/founders/founder-1.png';
import founder2 from '@/assets/images/founders/founder-2.png';
import founder3 from '@/assets/images/founders/founder-3.png';
import founder4 from '@/assets/images/founders/founder-4.png';

// Founder data with actual images
const founders: Founder[] = [
  {
    id: '1',
    name: 'Founder 1',
    title: 'Co-Founder',
    image: founder1,
    linkedinUrl: '#',
    twitterUrl: '#',
  },
  {
    id: '2',
    name: 'Jordan Simkin',
    title: 'Co-Founder',
    image: founder2,
    linkedinUrl: '#',
    twitterUrl: '#',
  },
  {
    id: '3',
    name: 'Founder 3',
    title: 'Co-Founder',
    image: founder3,
    linkedinUrl: '#',
    twitterUrl: '#',
  },
  {
    id: '4',
    name: 'Founder 4',
    title: 'Co-Founder',
    image: founder4,
    linkedinUrl: '#',
    twitterUrl: '#',
  },
  {
    id: '5',
    name: 'Demo Founder',
    title: 'Co-Founder',
    image: founder1, // Using founder1 as demo image
    linkedinUrl: '#',
    twitterUrl: '#',
  },
];

export const FoundersCarousel: React.FC = () => {
  // Create cards with active state - Jordan Simkin (index 1) is active
  const cards = founders.map((founder, index) => ({
    ...founder,
    isActive: index === 1, // Jordan Simkin is the active card
  }));

  // Duplicate the cards array multiple times for seamless infinite scroll
  const duplicatedCards = [...cards, ...cards, ...cards];

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
          {duplicatedCards.map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className="flex-shrink-0"
              style={{ width: '300px', height: '300px' }} // Fixed size: 300px × 300px
            >
              {card.isActive ? (
                // Active Card - Blue background with details
                <div className="bg-primary-500 flex flex-col gap-4 items-start justify-between p-6 md:p-8 rounded-[20px] h-full">
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
                        className="w-6 h-6 hover:opacity-80 transition-opacity"
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
                        className="w-6 h-6 hover:opacity-80 transition-opacity"
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
              ) : (
                // Inactive Card - Image only
                <div className="bg-neutral-100 flex items-center justify-center rounded-[20px] h-full overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
