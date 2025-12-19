import React from 'react';
import { PolicyHeroSection, PolicyNavigationCard } from '../components';
import { Typography } from '@/components';

const TermsAndConditionsPage: React.FC = () => {
  return (
    <div className="w-full bg-neutral-10">
      <PolicyHeroSection
        title="Terms and Conditions"
        subtitle="Your guide to seamless interaction"
        lastUpdated="Last updated on 27 July 2023"
      />
      
      <div>
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12 bg-primary-100 rounded-tl-[40px] rounded-tr-[40px] px-4 sm:px-[40px] md:px-[24px] lg:px-[120px] py-12 sm:py-[16px] md:py-[40px] lg:py-[32px]">
          {/* Main Content */}
          <div className="flex-1">
            <div className="flex flex-col gap-8">
              {/* Description of Website */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Description of Website
                </Typography>
                <Typography variant="s" weight="regular" className="text-neutral-600 mb-4">
                  Clickdee provides a platform for connecting home service providers and insurance professionals with qualified leads. Our services include lead generation, distribution, and management tools designed to help businesses grow.
                </Typography>
              </section>

              {/* Contractor Listings */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Contractor Listings
                </Typography>
                <Typography variant="s" weight="regular" className="text-neutral-600 mb-4">
                  Contractors listed on our platform are independent service providers. Clickdee does not endorse, guarantee, or warrant the services provided by listed contractors. Users are responsible for verifying contractor credentials and qualifications.
                </Typography>
              </section>

              {/* Limited License; Permitted Uses */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Limited License; Permitted Uses
                </Typography>
                <Typography variant="s" weight="regular" className="text-neutral-600 mb-4">
                  You are granted a limited, non-exclusive, non-transferable license to access and use our website for personal or business purposes. Permitted uses include:
                </Typography>
                <ul className="list-disc list-outside space-y-2 mb-4 ml-5">
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      Viewing and accessing lead information
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      Contacting leads through our platform
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      Using our tools and services as intended
                    </Typography>
                  </li>
                </ul>
              </section>

              {/* Restrictions and Prohibitions on Use */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Restrictions and Prohibitions on Use
                </Typography>
                <Typography variant="s" weight="regular" className="text-neutral-600 mb-4">
                  You agree not to:
                </Typography>
                <ul className="list-disc list-outside space-y-2 mb-4 ml-5">
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      Copy, modify, or distribute any content from our website without permission
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      Use automated systems to scrape or harvest data
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      Attempt to gain unauthorized access to our systems
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      Use our services for any illegal or unauthorized purpose
                    </Typography>
                  </li>
                </ul>
              </section>

              {/* Policy on Unsolicited Commercial Email */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Policy on Unsolicited Commercial Email
                </Typography>
                <Typography variant="s" weight="regular" className="text-neutral-600 mb-4">
                  We prohibit the use of unsolicited commercial email (spam) in connection with our services. Users must comply with all applicable anti-spam laws and regulations, including the CAN-SPAM Act.
                </Typography>
              </section>

              {/* No Solicitation */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  No Solicitation
                </Typography>
                <Typography variant="s" weight="regular" className="text-neutral-600 mb-4">
                  Our website and services are not intended for unsolicited commercial communications. Users must respect the privacy and preferences of leads and contacts obtained through our platform.
                </Typography>
              </section>

              {/* Registration or Submission of Personally Identifiable Information */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Registration or Submission of Personally Identifiable Information
                </Typography>
                <Typography variant="s" weight="regular" className="text-neutral-600 mb-4">
                  When you register or submit personally identifiable information, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials.
                </Typography>
              </section>

              {/* License of Your Content to Provider */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  License of Your Content to Provider
                </Typography>
                <Typography variant="s" weight="regular" className="text-neutral-600 mb-4">
                  By submitting content to our platform, you grant Clickdee a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content for the purpose of providing our services.
                </Typography>
              </section>

              {/* Linking to the Website */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Linking to the Website
                </Typography>
                <Typography variant="s" weight="regular" className="text-neutral-600 mb-4">
                  You may link to our website, provided that the link does not imply endorsement or association with Clickdee without our written consent. We reserve the right to request removal of any link.
                </Typography>
              </section>

              {/* Third-Party Content */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Third-Party Content
                </Typography>
                <Typography variant="s" weight="regular" className="text-neutral-600 mb-4">
                  Our website may contain content provided by third parties. We do not endorse or assume responsibility for third-party content. Users access such content at their own risk.
                </Typography>
              </section>

              {/* Advertisers */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Advertisers
                </Typography>
                <Typography variant="s" weight="regular" className="text-neutral-600 mb-4">
                  Our website may display advertisements from third-party advertisers. We are not responsible for the content, products, or services offered by advertisers. Your interactions with advertisers are solely between you and the advertiser.
                </Typography>
              </section>

              {/* Refund Policy */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Refund Policy
                </Typography>
                <Typography variant="s" weight="regular" className="text-neutral-600 mb-4">
                  Refund requests are handled on a case-by-case basis. Please contact our support team to discuss any refund requests. Refunds, if approved, will be processed within 30 business days.
                </Typography>
              </section>

              {/* Digital Millennium Copyright Act */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Digital Millennium Copyright Act – Notification of Alleged Copyright Infringement
                </Typography>
                <Typography variant="s" weight="regular" className="text-neutral-600 mb-4">
                  If you believe that your copyrighted work has been infringed, please contact us with a written notice containing the information required by the DMCA. We will respond to valid DMCA notices in accordance with applicable law.
                </Typography>
              </section>

              {/* Representations and Warranties */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Representations and Warranties
                </Typography>
                <Typography variant="s" weight="regular" className="text-neutral-600 mb-4">
                  You represent and warrant that you have the legal right and authority to enter into these Terms and to use our services. You also warrant that all information you provide is accurate and truthful.
                </Typography>
              </section>

              {/* Errors, Corrections and Additions */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Errors, Corrections and Additions
                </Typography>
                <Typography variant="s" weight="regular" className="text-neutral-600 mb-4">
                  We reserve the right to correct any errors, inaccuracies, or omissions on our website at any time without prior notice. We may also make changes to our services, features, or content at our discretion.
                </Typography>
              </section>

              {/* Disclaimer */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Disclaimer
                </Typography>
                <Typography variant="s" weight="regular" className="text-neutral-600 mb-4">
                  Our services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, error-free, or secure.
                </Typography>
              </section>

              {/* Limitation of Liability and Damages */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Limitation of Liability and Damages
                </Typography>
                <Typography variant="s" weight="regular" className="text-neutral-600 mb-4">
                  To the maximum extent permitted by law, Clickdee shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
                </Typography>
              </section>

              {/* Waiver and Release */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Waiver and Release
                </Typography>
                <Typography variant="s" weight="regular" className="text-neutral-600 mb-4">
                  You waive and release Clickdee from any claims, damages, or liabilities arising from your use of our services, except as prohibited by applicable law.
                </Typography>
              </section>

              {/* Indemnification */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Indemnification
                </Typography>
                <Typography variant="s" weight="regular" className="text-neutral-600 mb-4">
                  You agree to indemnify and hold harmless Clickdee, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services or violation of these Terms.
                </Typography>
              </section>

              {/* Termination */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Termination
                </Typography>
                <Typography variant="s" weight="regular" className="text-neutral-600 mb-4">
                  We reserve the right to terminate or suspend your access to our services at any time, with or without cause or notice, for any reason including violation of these Terms.
                </Typography>
              </section>

              {/* Remedies for Violations */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Remedies for Violations
                </Typography>
                <Typography variant="s" weight="regular" className="text-neutral-600 mb-4">
                  We may take any action we deem necessary to address violations of these Terms, including but not limited to suspending accounts, removing content, or pursuing legal remedies.
                </Typography>
              </section>

              {/* Unlawful Activity */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Unlawful Activity
                </Typography>
                <Typography variant="s" weight="regular" className="text-neutral-600 mb-4">
                  We reserve the right to investigate complaints or reported violations of these Terms and to take any action we deem appropriate, including reporting suspected unlawful activity to law enforcement.
                </Typography>
              </section>

              {/* Dispute Resolution */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Dispute Resolution
                </Typography>
                <Typography variant="s" weight="regular" className="text-neutral-600 mb-4">
                  Any disputes arising from these Terms or your use of our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except where prohibited by law.
                </Typography>
              </section>

              {/* Class Action Waiver */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Class Action Waiver
                </Typography>
                <Typography variant="s" weight="regular" className="text-neutral-600 mb-4">
                  You agree that any disputes will be resolved on an individual basis and waive your right to participate in class action lawsuits or class-wide arbitrations.
                </Typography>
              </section>

              {/* Governing Law, Jurisdiction and Non-Where */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Governing Law, Jurisdiction and Non-Where
                </Typography>
                <Typography variant="s" weight="medium" className="text-neutral-500">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming, United States, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts of Sheridan, Wyoming.
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

export default TermsAndConditionsPage;
