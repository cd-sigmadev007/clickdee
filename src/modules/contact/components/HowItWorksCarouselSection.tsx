import React from 'react';
import { Typography } from '@/components/Typography';
import { Carousel } from '@/components/Carousel';

interface HowItWorksCard {
  number: string;
  title: string;
  description: string | string[];
}

const howItWorksSteps: HowItWorksCard[] = [
  {
    number: '01',
    title: 'Complete the Service Form',
    description: 'Enter your contact information and describe your business needs. We just need some basic information to put you in touch with the appropriate contact.',
  },
  {
    number: '02',
    title: 'Wait for your Qualification',
    description: 'Shortly after, our lead generation experts will contact you to discuss your company goals and how we can help you reach them.',
  },
  {
    number: '03',
    title: 'Onboarding',
    description: [
      'We will set up your personalized account according to your specifications, goals, locations, and budget. ',
      'You will also have an onboarding meeting with your account manager who will help you get started and explain everything you need to know.',
    ],
  },
  {
    number: '04',
    title: 'Receive your first Lead',
    description: 'You are now eligible to receive leads! Our system will route the lead to you as soon as a user requests service in your territory.',
  },
];

const HowItWorksCard: React.FC<{ card: HowItWorksCard }> = ({ card }) => {
  const descriptionArray = Array.isArray(card.description) ? card.description : [card.description];

  return (
    <div className="bg-white flex flex-col h-[450px] items-start justify-between p-8 rounded-[20px] w-[400px]">
      <Typography variant="h2" weight="bold" className="text-primary-500">
        {card.number}
      </Typography>
      <div className="flex flex-col gap-4 items-start w-full">
        <Typography variant="h2" weight="bold" className="text-primary-500">
          {card.title}
        </Typography>
        <div className="flex flex-col gap-0">
          {descriptionArray.map((desc, index) => (
            <Typography key={index} variant="s" weight="medium" className="text-neutral-500">
              {desc}
            </Typography>
          ))}
        </div>
      </div>
    </div>
  );
};

export const HowItWorksCarouselSection: React.FC = () => {
  return (
    <div className="bg-primary-500 flex flex-col gap-8 items-center justify-center px-4 py-12 sm:px-6 sm:py-14 lg:px-[120px] lg:py-16 w-full">
      <Typography variant="title" weight="bold" className="text-white whitespace-nowrap">
        How does it work?
      </Typography>
      <Carousel autoPlay={false} gap={24} className="w-full">
        {howItWorksSteps.map((step, index) => (
          <HowItWorksCard key={index} card={step} />
        ))}
      </Carousel>
    </div>
  );
};

