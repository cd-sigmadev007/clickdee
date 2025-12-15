import React from 'react';
import { Typography } from '@/components';
import { Testimonial } from '../types';
import starIcon from '@/assets/icons/ic_round-star-white.svg';
import dividerIcon from '@/assets/icons/testimonial-divider.svg';
import avatarAmyHahn from '@/assets/images/avatar-amy-hahn.png';
import avatarSherylBerge from '@/assets/images/avatar-sheryl-berge.png';
import avatarLelandKiehn from '@/assets/images/avatar-leland-kiehn.png';
import avatarPeterRenolds from '@/assets/images/avatar-peter-renolds.png';

const testimonials: Testimonial[] = [
  {
    id: '1',
    text: "When it comes to restoration lead sources, ClickDee stands out as our top choice.",
    authorName: 'Amy Hahn',
    authorTitle: 'Director at Velocity Industries',
    avatar: avatarAmyHahn,
  },
  {
    id: '2',
    text: "What truly sets ClickDee apart is their dedication to quality. They don't just generate leads and send them your way; they take the time to actively engage with each lead. By listening to phone calls and meticulously reviewing each lead, ClickDee ensures that only the most promising opportunities are passed along to you.",
    authorName: 'Sheryl Berge',
    authorTitle: 'CEO at Lynch LLC',
    avatar: avatarSherylBerge,
  },
  {
    id: '3',
    text: "Finally, a company that truly listens to our needs and delivers exceptional service.",
    authorName: 'Sheryl Berge',
    authorTitle: 'CEO at Lynch LLC',
    avatar: avatarSherylBerge,
  },
  {
    id: '4',
    text: "One of the most refreshing aspects of working with ClickDee is their transparent billing practices. Unlike other companies, they ensure fairness in every transaction, providing peace of mind to their clients.",
    authorName: 'Leland Kiehn',
    authorTitle: 'Founder of Kiehn and Sons',
    avatar: avatarLelandKiehn,
  },
  {
    id: '5',
    text: "At ABC Restoration, we've tried numerous lead providers, but none compare to the reliability and integrity of ClickDee. Working with them has been a game-changer. If you're seeking a partner that values honesty and fairness, look no further than ClickDee.",
    authorName: 'Amy Hahn',
    authorTitle: 'Director at Velocity Industries',
    avatar: avatarAmyHahn,
  },
  {
    id: '6',
    text: "What truly sets ClickDee apart is their dedication to quality. They don't just generate leads and send them your way; they take the time to actively engage with each lead. By listening to phone calls and meticulously reviewing each lead, ClickDee ensures that only the most promising opportunities are passed along to you.",
    authorName: 'Sheryl Berge',
    authorTitle: 'CEO at Lynch LLC',
    avatar: avatarSherylBerge,
  },
  {
    id: '7',
    text: "When it comes to restoration lead sources, ClickDee stands out as our top choice. Their commitment to fairness and integrity sets them apart in the industry.",
    authorName: 'Sheryl Berge',
    authorTitle: 'CEO at Lynch LLC',
    avatar: avatarSherylBerge,
  },
  {
    id: '8',
    text: "If you're in search of a partner that values fairness, honesty, and quality service, look no further than ClickDee. Experience the difference they can make for your restoration business today.",
    authorName: 'Peter Renolds',
    authorTitle: 'Founder of West Inc',
    avatar: avatarPeterRenolds,
  },
  {
    id: '9',
    text: "ClickDee has been instrumental in boosting our restoration business. Their transparent billing and attentive lead review process ensure that we only receive top-notch leads. ClickDee is the epitome of professionalism and reliability in the industry",
    authorName: 'Sheryl Berge',
    authorTitle: 'CEO at Lynch LLC',
    avatar: avatarSherylBerge,
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <div className="bg-primary-500 flex flex-col gap-[32px] items-center justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-[80px] lg:py-[88px] relative w-full" data-node-id="1:14804">
      {/* Header */}
      <div className="flex flex-wrap gap-[10px] items-center justify-center w-full" data-node-id="1:14805">
        <Typography variant="title" weight="bold" className="text-white whitespace-nowrap" data-node-id="1:14806">
          Look at what they
        </Typography>
        <div className="bg-primary-100 flex items-start justify-center px-[10px] py-[5px] rounded-[10px]" data-node-id="1:14807">
          <Typography variant="title" weight="bold" className="text-primary-500 whitespace-nowrap" data-node-id="1:14808">
            say about us.
          </Typography>
        </div>
      </div>

      {/* Subtitle */}
      <Typography variant="p" weight="medium" className="text-white text-center w-full" data-node-id="1:14809">
        By partnering directly with our clients, our lead generation services have helped scale their businesses
      </Typography>

      {/* Star Rating */}
      <div className="flex gap-4 items-center justify-center" data-node-id="1:14810">
        <div className="flex gap-[5px] items-start" data-node-id="1:14811">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="relative w-6 h-6" data-node-id={`1:${14812 + i * 2}`}>
              <img src={starIcon} alt="" className="w-full h-full" />
            </div>
          ))}
        </div>
        <Typography variant="p" weight="medium" className="text-white whitespace-nowrap" data-node-id="1:14822">
          Based on Top Reviews
        </Typography>
      </div>

      {/* Testimonials Grid - Using flex columns for even gaps */}
      <div className="flex flex-col md:flex-row gap-4 items-start justify-center w-full" data-node-id="1:14823">
        {/* Column 1 - Mobile: all 9, Tablet: first 3, Desktop: first 3 */}
        <div className="flex flex-col gap-4 flex-1 w-full" data-node-id="1:14824">
          {/* Mobile: show all testimonials in one column */}
          <div className="flex flex-col gap-4 md:hidden w-full">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white flex flex-col gap-4 items-start p-8 rounded-[20px] shadow-[0px_10px_25.2px_0px_rgba(0,0,0,0.1)] w-full h-fit"
                data-node-id={`1:${14824 + parseInt(testimonial.id)}`}
              >
                <Typography variant="p" weight="medium" className="text-neutral-500 w-full" data-node-id={`1:${14826 + parseInt(testimonial.id)}`}>
                  {testimonial.text}
                </Typography>
                <div className="flex items-center justify-center w-full" data-node-id={`1:${14827 + parseInt(testimonial.id)}`}>
                  <div className="flex-none rotate-180 w-full">
                    <div className="h-0 relative w-full">
                      <div className="absolute inset-[-1px_0_0_0]">
                        <img src={dividerIcon} alt="" className="block max-w-none w-full h-full" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full" data-node-id={`1:${14828 + parseInt(testimonial.id)}`}>
                  <div className="flex flex-col gap-[5px] items-start justify-center leading-[1.5] whitespace-nowrap">
                    <Typography variant="p" weight="bold" className="text-neutral-900" data-node-id={`1:${14830 + parseInt(testimonial.id)}`}>
                      {testimonial.authorName}
                    </Typography>
                    <Typography variant="s" weight="medium" className="text-neutral-500" data-node-id={`1:${14831 + parseInt(testimonial.id)}`}>
                      {testimonial.authorTitle}
                    </Typography>
                  </div>
                  <div className="relative w-8 h-8 shrink-0" data-node-id={`1:${14832 + parseInt(testimonial.id)}`}>
                    <img src={testimonial.avatar} alt={testimonial.authorName} className="w-full h-full rounded-full object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Tablet/Desktop: show first 3 */}
          {testimonials.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white flex flex-col gap-4 items-start p-8 rounded-[20px] shadow-[0px_10px_25.2px_0px_rgba(0,0,0,0.1)] w-full h-fit"
              data-node-id={`1:${14824 + parseInt(testimonial.id)}`}
            >
              {/* Testimonial Text */}
              <Typography variant="p" weight="medium" className="text-neutral-500 w-full" data-node-id={`1:${14826 + parseInt(testimonial.id)}`}>
                {testimonial.text}
              </Typography>

              {/* Divider */}
              <div className="flex items-center justify-center w-full" data-node-id={`1:${14827 + parseInt(testimonial.id)}`}>
                <div className="flex-none rotate-180 w-full">
                  <div className="h-0 relative w-full">
                    <div className="absolute inset-[-1px_0_0_0]">
                      <img src={dividerIcon} alt="" className="block max-w-none w-full h-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between w-full" data-node-id={`1:${14828 + parseInt(testimonial.id)}`}>
                <div className="flex flex-col gap-[5px] items-start justify-center leading-[1.5] whitespace-nowrap">
                  <Typography variant="p" weight="bold" className="text-neutral-900" data-node-id={`1:${14830 + parseInt(testimonial.id)}`}>
                    {testimonial.authorName}
                  </Typography>
                  <Typography variant="s" weight="medium" className="text-neutral-500" data-node-id={`1:${14831 + parseInt(testimonial.id)}`}>
                    {testimonial.authorTitle}
                  </Typography>
                </div>
                <div className="relative w-8 h-8 shrink-0" data-node-id={`1:${14832 + parseInt(testimonial.id)}`}>
                  <img src={testimonial.avatar} alt={testimonial.authorName} className="w-full h-full rounded-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Column 2 - Tablet: next 3, Desktop: next 3 */}
        <div className="hidden md:flex flex-col gap-4 flex-1 w-full" data-node-id="1:14849">
          {testimonials.slice(3, 6).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white flex flex-col gap-4 items-start p-8 rounded-[20px] shadow-[0px_10px_25.2px_0px_rgba(0,0,0,0.1)] w-full h-fit"
              data-node-id={`1:${14824 + parseInt(testimonial.id)}`}
            >
              {/* Testimonial Text */}
              <Typography variant="p" weight="medium" className="text-neutral-500 w-full" data-node-id={`1:${14826 + parseInt(testimonial.id)}`}>
                {testimonial.text}
              </Typography>

              {/* Divider */}
              <div className="flex items-center justify-center w-full" data-node-id={`1:${14827 + parseInt(testimonial.id)}`}>
                <div className="flex-none rotate-180 w-full">
                  <div className="h-0 relative w-full">
                    <div className="absolute inset-[-1px_0_0_0]">
                      <img src={dividerIcon} alt="" className="block max-w-none w-full h-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between w-full" data-node-id={`1:${14828 + parseInt(testimonial.id)}`}>
                <div className="flex flex-col gap-[5px] items-start justify-center leading-[1.5] whitespace-nowrap">
                  <Typography variant="p" weight="bold" className="text-neutral-900" data-node-id={`1:${14830 + parseInt(testimonial.id)}`}>
                    {testimonial.authorName}
                  </Typography>
                  <Typography variant="s" weight="medium" className="text-neutral-500" data-node-id={`1:${14831 + parseInt(testimonial.id)}`}>
                    {testimonial.authorTitle}
                  </Typography>
                </div>
                <div className="relative w-8 h-8 shrink-0" data-node-id={`1:${14832 + parseInt(testimonial.id)}`}>
                  <img src={testimonial.avatar} alt={testimonial.authorName} className="w-full h-full rounded-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Column 3 - Desktop only: last 3 */}
        <div className="hidden lg:flex flex-col gap-4 flex-1 w-full" data-node-id="1:14874">
          {testimonials.slice(6, 9).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white flex flex-col gap-4 items-start p-8 rounded-[20px] shadow-[0px_10px_25.2px_0px_rgba(0,0,0,0.1)] w-full h-fit"
              data-node-id={`1:${14824 + parseInt(testimonial.id)}`}
            >
              {/* Testimonial Text */}
              <Typography variant="p" weight="medium" className="text-neutral-500 w-full" data-node-id={`1:${14826 + parseInt(testimonial.id)}`}>
                {testimonial.text}
              </Typography>

              {/* Divider */}
              <div className="flex items-center justify-center w-full" data-node-id={`1:${14827 + parseInt(testimonial.id)}`}>
                <div className="flex-none rotate-180 w-full">
                  <div className="h-0 relative w-full">
                    <div className="absolute inset-[-1px_0_0_0]">
                      <img src={dividerIcon} alt="" className="block max-w-none w-full h-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between w-full" data-node-id={`1:${14828 + parseInt(testimonial.id)}`}>
                <div className="flex flex-col gap-[5px] items-start justify-center leading-[1.5] whitespace-nowrap">
                  <Typography variant="p" weight="bold" className="text-neutral-900" data-node-id={`1:${14830 + parseInt(testimonial.id)}`}>
                    {testimonial.authorName}
                  </Typography>
                  <Typography variant="s" weight="medium" className="text-neutral-500" data-node-id={`1:${14831 + parseInt(testimonial.id)}`}>
                    {testimonial.authorTitle}
                  </Typography>
                </div>
                <div className="relative w-8 h-8 shrink-0" data-node-id={`1:${14832 + parseInt(testimonial.id)}`}>
                  <img src={testimonial.avatar} alt={testimonial.authorName} className="w-full h-full rounded-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

