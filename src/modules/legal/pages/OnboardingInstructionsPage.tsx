import React from 'react';
import { PolicyHeroSection, PolicyNavigationCard } from '../components';
import { Typography } from '@/components';
import { BillableCallsSection } from '@/components/BillableCallsSection';

const OnboardingInstructionsPage: React.FC = () => {
  return (
    <div className="w-full bg-neutral-10">
      <PolicyHeroSection
        title="We've crafted"
        subtitle="Your essential lead buying guide"
        lastUpdated=""
      />
      
      <div>
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 bg-primary-100 rounded-tl-[40px] rounded-tr-[40px] px-4 sm:px-[40px] md:px-[24px] lg:px-[120px] py-12 sm:py-[16px] md:py-[40px] lg:py-[32px]">
          {/* Main Content */}
          <div className="flex-1">
            <div className="flex flex-col gap-8">
              {/* Title Section */}
              <section>
                <Typography variant="h2" weight="bold" className="text-primary-500 mb-4">
                  Onboarding Instructions
                </Typography>
                <Typography variant="s" weight="medium" className="text-neutral-500">
                  To access your lead portal, go to https://app.inquirly.com/res_partners/brpage.php and login using your personal username and password. You may login here any time to access billing info, leads history, calls history, transaction reports, and much more.
                </Typography>
              </section>

              <div className="border-t border-neutral-200 my-4"></div>

              {/* Instructions to Fund Your Account */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Instructions to Fund Your Account:
                </Typography>
                <ol className="list-decimal list-outside space-y-2 mb-4 ml-5">
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      Login to the portal
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      Enter card via "Add Funds" → Authorize.net CIM → Click button on right "Add Card/Bank Account" and enter billing details
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      Once a card is entered, a screen will appear under Add funds →{' '}
                      <a 
                        href="http://authorize.net/" 
                        className="underline text-primary-500 hover:text-primary-600"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        authorize.net
                      </a>
                      {' '}CIM → enter amount
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      To activate or pause, toggle the button at top that currently says "Status: Active"/"Status: Temporarily Stopped" – Once active, you will receive leads & calls as long as the account has positive funds
                    </Typography>
                  </li>
                </ol>
              </section>

              <div className="border-t border-neutral-200 my-4"></div>

              {/* Pause / Activate Your Account */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Pause / Activate Your Account
                </Typography>
                <Typography variant="s" weight="medium" className="text-neutral-500 mb-4">
                  Accounts are often set to Pause during onboarding. One final step new buyers is to toggle the Active/Paused setting to Active to enable your account to receive leads and calls.
                </Typography>
                <ol className="list-decimal list-outside space-y-2 mb-4 ml-5">
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      Login to the portal
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      To activate or pause, toggle the button at top that currently says "Status: Active"/"Status: Temporarily Stopped" – Once active, you will receive leads & calls as long as the account has positive funds
                    </Typography>
                  </li>
                </ol>
              </section>
            </div>
          </div>

          {/* Navigation Card */}
          <div className="w-full lg:w-auto lg:sticky lg:top-8 lg:h-fit">
            <PolicyNavigationCard
              title="Lead Buying Guidelines"
              links={[
                { path: '/onboarding-instructions', label: 'Onboarding Instructions' },
                { path: '/lead-buying-guidelines', label: 'Billable Leads & Returns' },
              ]}
            />
          </div>
        </div>
      </div>

      {/* What makes a call Billable Section */}
      <BillableCallsSection />
    </div>
  );
};

export default OnboardingInstructionsPage;

