import React from 'react';
import { PolicyHeroSection, PolicyNavigationCard } from '../components';
import { Typography } from '@/components';

const DoNotSellPage: React.FC = () => {
  return (
    <div className="w-full bg-neutral-10">
      <PolicyHeroSection
        title="Do Not Sell My Information"
        subtitle="Take Control of Your Data"
        lastUpdated="Last updated April 29, 2024"
      />
      
      <div>
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12 bg-primary-100 rounded-tl-[40px] rounded-tr-[40px] px-4 sm:px-[40px] md:px-[24px] lg:px-[120px] py-12 sm:py-[16px] md:py-[40px] lg:py-[32px]">
          {/* Main Content */}
          <div className="flex-1">
            <div className="flex flex-col gap-8">
              {/* Introductory Paragraph */}
              <section>
                <Typography variant="s" weight="regular" className="text-neutral-600 mb-4">
                  Under the California Consumer Privacy Act (CCPA), you have the right to know what personal information we collect, use, disclose, and sell. You also have the right to request that we do not sell your personal information to third parties. To exercise these rights, please contact us at support@clickdee.com with "CCPA Request" in the subject line.
                </Typography>
              </section>

              {/* Right to Know */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Right to Know
                </Typography>
                <Typography variant="s" weight="medium" className="text-neutral-500 mb-4">
                  You have the right to request that we disclose what personal information we collect, use, disclose, and sell. To make a request, please email us at support@clickdee.com with "CCPA Right to Know" in the subject line. We will respond to your request within 45 days.
                </Typography>
              </section>

              {/* Right to Request Deletion */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Right to Request Deletion
                </Typography>
                <Typography variant="s" weight="medium" className="text-neutral-500 mb-4">
                  You have the right to request that we delete your personal information. To make a request, please email us at support@clickdee.com with "CCPA Right to Delete" in the subject line. We will respond to your request within 45 days, subject to certain exceptions under the CCPA.
                </Typography>
              </section>

              {/* Right to Opt Out */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Right to Opt Out
                </Typography>
                <Typography variant="s" weight="medium" className="text-neutral-500 mb-4">
                  You have the right to opt out of the sale of your personal information to third parties. To exercise this right, please email us at support@clickdee.com with "CCPA Right to Opt Out" in the subject line. Once we receive your request, we will stop selling your personal information within 15 business days.
                </Typography>
              </section>

              {/* Right to Non-Discrimination */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Right to Non-Discrimination
                </Typography>
                <Typography variant="s" weight="medium" className="text-neutral-500 mb-4">
                  We will not discriminate against you for exercising your CCPA rights. We will not deny you goods or services, charge you different prices, or provide you with a different level or quality of services because you exercised your privacy rights.
                </Typography>
              </section>

              {/* Verification */}
              <section>
                <Typography variant="s" weight="medium" className="text-neutral-500">
                  For security purposes, we may need to verify your identity before processing your request. We may ask you to provide additional information to confirm your identity. If you are making a request on behalf of someone else, you must provide proof that you are authorized to act on their behalf, such as a power of attorney or written authorization signed by the person whose information is the subject of the request.
                </Typography>
              </section>
            </div>
          </div>

          {/* Navigation Card */}
          <div className="w-full lg:w-auto lg:sticky lg:top-8 lg:h-fit">
            <PolicyNavigationCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoNotSellPage;
