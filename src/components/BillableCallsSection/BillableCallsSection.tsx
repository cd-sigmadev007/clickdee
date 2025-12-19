import React from 'react';
import { Card, Typography } from '@/components';
import solarCalendarOutline from '@/assets/icons/solar_calendar-outline.svg';
import laExchangeAlt from '@/assets/icons/la_exchange-alt.svg';
import carbonTeamReference from '@/assets/icons/carbon_term-reference.svg';
import materialSymbolsLightVoicemail from '@/assets/icons/material-symbols-light_voicemail.svg';
import pricing from '@/assets/icons/pricing.svg';
import solarChatRoundCallOutline from '@/assets/icons/solar_chat-round-call-outline.svg';

export interface BillableCallCard {
  id: string;
  icon: string;
  description: string;
}

const billableCallCards: BillableCallCard[] = [
  {
    id: 'appointment',
    icon: solarCalendarOutline,
    description: 'An appointment is set',
  },
  {
    id: 'contact-exchange',
    icon: laExchangeAlt,
    description: 'Contact information is exchanged',
  },
  {
    id: 'referral',
    icon: carbonTeamReference,
    description: 'The caller is referred to another company',
  },
  {
    id: 'pricing',
    icon: pricing,
    description: 'A pricing estimate is given over the phone',
  },
  {
    id: 'voicemail',
    icon: materialSymbolsLightVoicemail,
    description: 'The call goes to voicemail',
  },
  {
    id: 'automated',
    icon: solarChatRoundCallOutline,
    description: 'An automated system answers the call',
  },
];

export const BillableCallsSection: React.FC = () => {
  return (
    <div className="bg-primary-500 flex flex-col gap-6 sm:gap-8 items-center justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-[80px] lg:py-[88px] relative w-full">
      {/* Title */}
      <div className="flex flex-col sm:flex-row gap-2.5 items-center justify-center w-full">
        <Typography variant="title" weight="bold" className="text-white text-center">
          What makes a call
        </Typography>
        <div className="bg-white flex items-start justify-center px-2.5 py-1.5 rounded-[10px]">
          <Typography variant="title" weight="bold" className="text-primary-500 text-center">
            Billable?
          </Typography>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-[1280px]">
        {billableCallCards.map((card) => (
          <Card key={card.id} variant="elevated" className="flex flex-col gap-4 items-center justify-center h-[200px] p-8">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <img src={card.icon} alt={card.description} className="w-full h-full object-contain" />
            </div>
            <Typography variant="p" weight="medium" className="text-neutral-500 text-center">
              {card.description}
            </Typography>
          </Card>
        ))}
      </div>

      {/* Footer Text */}
      <Typography variant="s" weight="medium" className="text-white text-center max-w-full">
        Clickdee is the premier lead provider for home service companies in the United States
      </Typography>
    </div>
  );
};

