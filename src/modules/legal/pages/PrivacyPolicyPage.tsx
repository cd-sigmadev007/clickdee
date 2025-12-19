import React from 'react';
import { PolicyHeroSection, PolicyNavigationCard } from '../components';
import { Typography } from '@/components';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="w-full bg-neutral-10">
      <PolicyHeroSection
        title="Privacy Policy"
        subtitle="Guarding your digital footprint"
        lastUpdated="Last updated April 29, 2024"
      />
      
      <div>
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12 bg-primary-100 rounded-tl-[40px] rounded-tr-[40px] px-4 sm:px-[40px] md:px-[24px] lg:px-[120px] py-12 sm:py-[16px] md:py-[40px] lg:py-[32px]">
          {/* Main Content */}
          <div className="flex-1">
            <div className="flex flex-col gap-8">
              {/* Children Section */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Children
                </Typography>
                <Typography variant="s" weight="medium" className="text-neutral-500 mb-4">
                  Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately.
                </Typography>
              </section>

              {/* What personal information we collect */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  What personal information we collect and why we collect it
                </Typography>
                <Typography variant="s" weight="medium" className="text-neutral-500 mb-4">
                  We collect information that you provide directly to us, including:
                </Typography>
                <ul className="list-disc list-outside space-y-2 mb-4 ml-5">
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      Name, email address, phone number, and mailing address
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      Business information and professional details
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      Payment information and billing details
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      Information you provide when contacting us or using our services
                    </Typography>
                  </li>
                </ul>
                <Typography variant="s" weight="medium" className="text-neutral-500">
                  We use this information to provide, maintain, and improve our services, process transactions, and communicate with you.
                </Typography>
              </section>

              {/* Safeguarding your information */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Safeguarding your information
                </Typography>
                <Typography variant="s" weight="medium" className="text-neutral-500 mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </Typography>
              </section>

              {/* Data retention policy */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Data retention policy
                </Typography>
                <Typography variant="s" weight="medium" className="text-neutral-500 mb-4">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </Typography>
              </section>

              {/* TrustedForm Script */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  TrustedForm Script
                </Typography>
                <Typography variant="s" weight="medium" className="text-neutral-500 mb-4">
                  We use TrustedForm to provide proof of consent for form submissions. TrustedForm may collect information about your device and browsing activity to verify form submissions.
                </Typography>
              </section>

              {/* Google Ads remarketing */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Google Ads remarketing
                </Typography>
                <Typography variant="s" weight="medium" className="text-neutral-500 mb-4">
                  We use Google Ads remarketing to show you relevant advertisements based on your previous visits to our website. You can opt out of Google's use of cookies by visiting Google's Ads Settings.
                </Typography>
              </section>

              {/* Links */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Links
                </Typography>
                <Typography variant="s" weight="medium" className="text-neutral-500 mb-4">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </Typography>
              </section>

              {/* California Privacy Rights */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  California Privacy Rights
                </Typography>
                <Typography variant="s" weight="medium" className="text-neutral-500 mb-4">
                  If you are a California resident, you have certain rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete personal information, and the right to opt-out of the sale of personal information.
                </Typography>
              </section>

              {/* Contacting us */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Contacting us
                </Typography>
                <Typography variant="s" weight="medium" className="text-neutral-500 mb-4">
                  If you have any questions about this Privacy Policy, please contact us at support@clickdee.com or through our contact form.
                </Typography>
              </section>

              {/* Updates to Privacy Statement */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Updates to Privacy Statement
                </Typography>
                <Typography variant="s" weight="medium" className="text-neutral-500">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
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

export default PrivacyPolicyPage;
