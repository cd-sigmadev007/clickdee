import React from 'react';
import { Typography } from '@/components';
import gridResultBlack from '@/assets/images/grid-result-black.png';
import fireRestorationIcon from '@/assets/icons/fire-damage-leads.svg';
import gridResultBlue from '@/assets/images/grid-result-blue.png';

export const ResultsSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center relative w-full bg-white" data-node-id="1:14682">
      {/* Top Row - Mobile: Stack, Desktop/Tablet: Side by side */}
      <div className="flex flex-col md:flex-row items-stretch relative w-full" data-node-id="1:14683">
        {/* Top Left - Dark background with stats */}
        <div className="bg-neutral-900 flex flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-12 md:px-[80px] md:py-12 lg:px-[80px] lg:py-[88px] relative w-full md:w-1/2 overflow-hidden" data-node-id="1:14684">
          {/* Grid background */}
          <img 
            src={gridResultBlack} 
            alt="" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[863px] h-[470px] opacity-90 pointer-events-none" 
            data-node-id="1:14685"
          />
          
          {/* Stats */}
          <div className="flex flex-col gap-0 items-center justify-center w-full relative z-10" data-node-id="1:14729">
            <div className="flex flex-col h-[112px] items-center justify-center text-center text-white w-full" data-node-id="1:14730">
              <Typography variant="h2" weight="bold" className="text-white whitespace-nowrap md:text-h2 lg:text-display" data-node-id="1:14730">
                248,535
              </Typography>
              <Typography variant="s" weight="medium" className="text-white text-center" data-node-id="1:14731">
                Total Generated Leads
              </Typography>
            </div>
            <div className="flex flex-col h-[112px] items-center justify-center text-center text-white w-full" data-node-id="1:14732">
              <Typography variant="h2" weight="bold" className="text-white whitespace-nowrap md:text-h2 lg:text-display" data-node-id="1:14733">
                $2,000+
              </Typography>
              <Typography variant="s" weight="medium" className="text-white text-center" data-node-id="1:14734">
                Renovation Contracts Signed Monthly
              </Typography>
            </div>
          </div>
        </div>

        {/* Top Right - Light background with text */}
        <div className="bg-neutral-100 flex flex-col gap-4 items-start justify-center px-4 py-8 sm:px-6 sm:py-12 md:px-6 md:py-12 lg:px-[80px] lg:py-[88px] relative w-full md:w-1/2" data-node-id="1:14735">
          <Typography variant="h3" weight="bold" className="text-neutral-900 w-full md:text-h3 lg:text-h2" data-node-id="1:14736">
            We guarantee high-quality, exclusive leads in your area
          </Typography>
          <div className="font-bold text-s text-neutral-500 w-full md:text-s lg:text-p" data-node-id="1:14737">
            <p className="mb-0">We Understand the Problem.</p>
            <p>Here's Your Solution</p>
          </div>
          <div className="flex items-center justify-center relative w-full" data-node-id="1:14738">
            <div className="h-px w-full bg-neutral-200"></div>
          </div>
          <Typography variant="p" weight="medium" className="text-neutral-500 w-full" data-node-id="1:14739">
            We know that when you succeed, we succeed, and that is why we only sell our leads to one company. This way, you never have to compete or bid for a lead - they are exclusive to you. In addition, our marketing experts are always working to optimize and improve our campaigns, so that you can receive the highest quality leads possible.
          </Typography>
        </div>
      </div>

      {/* Bottom Row - Mobile: Stack, Desktop/Tablet: Side by side */}
      <div className="flex flex-col md:flex-row items-stretch relative w-full" data-node-id="1:14740">
        {/* Bottom Left - Light background with text */}
        <div className="bg-neutral-100 flex flex-col gap-4 items-start justify-center px-4 py-8 sm:px-6 sm:py-12 md:px-6 md:py-12 lg:px-[80px] lg:py-[88px] relative w-full md:w-1/2" data-node-id="1:14741">
          <Typography variant="h3" weight="bold" className="text-neutral-900 w-full md:text-h3 lg:text-h2" data-node-id="1:14742">
            In the Business of Growing Your Business
          </Typography>
          <Typography variant="s" weight="bold" className="text-neutral-500 w-full md:text-s lg:text-p" data-node-id="1:14743">
            We have generated leads for our partners that turned into $350,000 and even $600,000 jobs
          </Typography>
          <div className="flex items-center justify-center relative w-full" data-node-id="1:14744">
            <div className="h-px w-full bg-neutral-200"></div>
          </div>
          <Typography variant="p" weight="medium" className="text-neutral-500 w-full" data-node-id="1:14745">
            We understand more than most that time is of the essence when it comes to home services, so we make sure that our leads are from homeowners or authorized decision makers who are actively seeking home services. This allows us to put you in touch with potential customers who are ready to take action, and we're confident in our ability to deliver results.
          </Typography>
        </div>

        {/* Bottom Right - Blue background with gradient card */}
        <div className="bg-primary-500 flex gap-6 md:gap-8 items-center justify-center px-4 py-8 sm:px-6 sm:py-12 md:px-[80px] md:py-[88px] lg:px-[80px] lg:py-[88px] relative w-full md:w-1/2 overflow-hidden" data-node-id="1:14746">
          {/* Grid background */}
          <img 
            src={gridResultBlue} 
            alt="" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[743px] h-[470px] opacity-90 pointer-events-none" 
            data-node-id="1:14748"
          />
          
          <div className="flex flex-col sm:flex-row gap-6 md:gap-6 lg:gap-10 items-center justify-center relative z-10 w-full" data-node-id="1:14791">
            {/* Gradient Card */}
            <div 
              className="fire-restoration-gradient border border-white flex flex-col gap-2.5 md:gap-3 items-center justify-center p-4 md:p-4 lg:p-6 relative rounded-[16px] md:rounded-[16px] lg:rounded-[20px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.05)] md:shadow-[0px_10px_15px_0px_rgba(0,0,0,0.05)] lg:shadow-[0px_10px_25px_0px_rgba(0,0,0,0.05)] shrink-0"
              data-node-id="1:14792"
            >
              <div className="relative w-12 h-12 md:w-12 md:h-12 lg:w-[68px] lg:h-[68px] flex items-center justify-center" data-node-id="1:14793">
                <img src={fireRestorationIcon} alt="Fire Restoration" className="w-full h-full object-contain" />
              </div>
              <Typography variant="p" weight="bold" className="text-white whitespace-nowrap md:text-p lg:text-h3" data-node-id="1:14797">
                Fire Restoration
              </Typography>
              <Typography variant="2xs" weight="medium" className="text-white whitespace-nowrap md:text-2xs lg:text-p" data-node-id="1:14798">
                Miami, FL
              </Typography>
              {/* Badge */}
              <div className="absolute -top-5 -right-3 md:-top-5 md:-right-3 lg:-top-6 lg:-right-4 rotate-[8.149deg]" data-node-id="1:14799">
                <div className="bg-primary-100 flex items-start justify-center px-2.5 py-1.5 md:px-2.5 md:py-1.5 lg:px-4 lg:py-2 rounded-[32px] shadow-[-11.175px_14.368px_19.157px_0px_rgba(255,255,255,0.15)] md:shadow-[-11.175px_14.368px_19.157px_0px_rgba(255,255,255,0.15)] lg:shadow-[-14px_18px_24px_0px_rgba(255,255,255,0.15)]">
                  <Typography variant="s" weight="bold" className="text-primary-500 whitespace-nowrap md:text-s lg:text-p" data-node-id="1:14800">
                    +1 New Lead
                  </Typography>
                </div>
              </div>
            </div>

            {/* Budget Info */}
            <div className="flex flex-col items-center justify-center text-center text-white" data-node-id="1:14801">
              <Typography variant="p" weight="medium" className="text-white" data-node-id="1:14802">
                Client Budget
              </Typography>
              <Typography variant="h2" weight="bold" className="text-white md:text-h2 lg:text-display" data-node-id="1:14803">
                $15,000
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

