import React from 'react';
import { Typography } from '@/components/Typography';
import { Card } from '@/components/Card';
import hugeiconsCustomerSupport from '@/assets/icons/hugeicons_customer-support.svg';
import streamlinePayment10 from '@/assets/icons/streamline_payment-10.svg';
import solarBillListOutline from '@/assets/icons/solar_bill-list-outline.svg';
import mageLocation from '@/assets/icons/mage_location.svg';
import solarGraphUpOutline from '@/assets/icons/solar_graph-up-outline.svg';

interface AdvantageCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const advantages: AdvantageCard[] = [
  {
    id: 'transparent-platform',
    title: 'Transparent Platform',
    description: '24/7 access to your account center, performance reports, activity and APIs.',
    icon: solarGraphUpOutline, // Using analytics icon as placeholder for dashboard
  },
  {
    id: 'top-payouts',
    title: 'Top Payouts',
    description: 'We offer one of the highest payouts in the industry and issue payments each month.',
    icon: streamlinePayment10,
  },
  {
    id: 'high-converting-creatives',
    title: 'High Converting Creatives',
    description: 'An extensive library of responsive banners, forms and quote tools are ready to make monetizing your site and campaign easy.',
    icon: solarBillListOutline,
  },
  {
    id: 'vertically-focused',
    title: 'Vertically Focused',
    description: 'Exclusive access to comparison tools that ensure your campaigns are optimized for maximum monetization.',
    icon: mageLocation,
  },
  {
    id: 'support-team',
    title: 'Support Team',
    description: 'Our support team is tirelessly expanding our coverage and are always just an email or call away.',
    icon: hugeiconsCustomerSupport,
  },
  {
    id: 'real-time-analytics',
    title: 'Real Time Analytics',
    description: 'The reporting dashboard will give you an up to the minute view into how your traffic is converting and what advertisers are paying for your customers.',
    icon: solarGraphUpOutline,
  },
];

// Split advantages into two rows
const row1 = advantages.slice(0, 3);
const row2 = advantages.slice(3, 6);

// Duplicate items for seamless infinite scroll
const duplicatedRow1 = [...row1, ...row1, ...row1];
const duplicatedRow2 = [...row2, ...row2, ...row2];

export const AffiliateAdvantagesSection: React.FC = () => {
  return (
    <div className="bg-neutral-100 flex flex-col gap-8 lg:gap-[32px] items-center justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-[80px] lg:py-[88px] w-full overflow-hidden">
      {/* Title */}
      <div className="flex flex-col sm:flex-row gap-[10px] items-center justify-center">
        <Typography variant="h1" weight="bold" className="text-neutral-900 text-center sm:text-left">
          Advantages of being an
        </Typography>
        <div className="bg-primary-200 px-[10px] py-[5px] rounded-[10px]">
          <Typography variant="h1" weight="bold" className="text-primary-500">
            Affiliate
          </Typography>
        </div>
      </div>

      {/* Description */}
      <Typography variant="s" weight="medium" className="text-neutral-500 text-center max-w-4xl">
        Discover how partnering with Clickdee can drive revenue, expand your reach,
        <br />
        and streamline your business growth effortlessly.
      </Typography>

      {/* Carousel Container */}
      <div className="w-full max-w-7xl flex flex-col gap-4 lg:gap-[16px] overflow-hidden">
        {/* Row 1 - Moving Left */}
        <div className="relative overflow-hidden">
          <div className="flex gap-4 lg:gap-[16px] animate-scroll-left">
            {duplicatedRow1.map((advantage, index) => (
              <div key={`${advantage.id}-${index}`} className="flex-shrink-0 w-[calc((100%-32px)/3)] md:w-[calc((100%-32px)/3)] lg:w-[calc((100%-32px)/3)]">
                <Card
                  variant="bordered"
                  className="flex flex-col gap-6 justify-between p-8 h-full"
                >
                  {/* Header with Title and Icon */}
                  <div className="flex items-start justify-between w-full">
                    <Typography
                      variant="h3"
                      weight="bold"
                      className="text-neutral-900 flex-1"
                    >
                      {advantage.title}
                    </Typography>
                    <img
                      src={advantage.icon}
                      alt=""
                      className="w-8 h-8 flex-shrink-0 ml-4"
                    />
                  </div>

                  {/* Description */}
                  <Typography
                    variant="s"
                    weight="medium"
                    className="text-neutral-500 leading-[1.3]"
                  >
                    {advantage.description}
                  </Typography>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Moving Right */}
        <div className="relative overflow-hidden">
          <div className="flex gap-4 lg:gap-[16px] animate-scroll-right">
            {duplicatedRow2.map((advantage, index) => (
              <div key={`${advantage.id}-${index}`} className="flex-shrink-0 w-[calc((100%-32px)/3)] md:w-[calc((100%-32px)/3)] lg:w-[calc((100%-32px)/3)]">
                <Card
                  variant="bordered"
                  className="flex flex-col gap-6 justify-between p-8 h-full"
                >
                  {/* Header with Title and Icon */}
                  <div className="flex items-start justify-between w-full">
                    <Typography
                      variant="h3"
                      weight="bold"
                      className="text-neutral-900 flex-1"
                    >
                      {advantage.title}
                    </Typography>
                    <img
                      src={advantage.icon}
                      alt=""
                      className="w-8 h-8 flex-shrink-0 ml-4"
                    />
                  </div>

                  {/* Description */}
                  <Typography
                    variant="s"
                    weight="medium"
                    className="text-neutral-500 leading-[1.3]"
                  >
                    {advantage.description}
                  </Typography>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

