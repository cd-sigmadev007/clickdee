import React from 'react';
import { PolicyHeroSection, PolicyNavigationCard } from '../components';
import { Typography } from '@/components';
import { BillableCallsSection } from '@/components/BillableCallsSection';

const LeadBuyingGuidelinesPage: React.FC = () => {
  return (
    <div className="w-full bg-neutral-10">
      <PolicyHeroSection
        title="We've crafted"
        subtitle="Your essential lead buying guide"
        lastUpdated=""
      />
      
      <div>
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10  bg-primary-100 rounded-tl-[40px] rounded-tr-[40px]  px-4 sm:px-[40px] md:px-[24px] lg:px-[120px] py-12 sm:py-[16px] md:py-[40px] lg:py-[32px]">
          {/* Main Content */}
          <div className="flex-1">
            <div className="flex flex-col gap-8">
              {/* Title Section */}
              <section>
                <Typography variant="h2" weight="bold" className="text-primary-500 mb-4">
                  Billable & Return Policy
                </Typography>
                <Typography variant="s" weight="medium" className="text-neutral-500">
                  Our goal is to provide our customers with top-quality leads that turn into paying clients. While not every lead will become a job, we strive for fair, transparent pricing and to only charge you for billable leads and calls.
                </Typography>
              </section>

              <div className="border-t border-neutral-200 my-4"></div>

              {/* Definition of a Billable Lead/Call */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Definition of a Billable Lead/Call
                </Typography>
                <Typography variant="s" weight="medium" className="text-neutral-500 mb-4">
                  A billable lead/call means that the customer is:
                </Typography>
                <ul className="list-disc list-outside space-y-2 mb-4 ml-5">
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      The decision maker and can authorize the work
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      Within the geographic territory that you signed up for
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      Asking for a service that matches the lead type you signed up for
                    </Typography>
                  </li>
                </ul>
                <Typography variant="s" weight="medium" className="text-neutral-500 mb-4">
                  For phone calls, the call audit team individually assigns a disposition category and billable status to every call. Billable calls meet all of the criteria above, or one or more of the following criteria:
                </Typography>
                <ul className="list-disc list-outside space-y-2 mb-4 ml-5">
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      Contact information is exchanged
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      An appointment is set
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      You don't have availability to perform the service
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      You refer the customer to another company
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      The call is missed
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      A voicemail or IVR answers the phone
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      Pricing or an estimate is provided
                    </Typography>
                  </li>
                </ul>
              </section>

              <div className="border-t border-neutral-200 my-4"></div>

              {/* Things to Remember */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Things to Remember
                </Typography>
                <ul className="list-disc list-outside space-y-2 mb-4 ml-5">
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      Not every billable lead will turn into a job – it is up to the partner to close the job and show the value of their service to potential customers
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      If a call goes unanswered, goes to voicemail, is answered by an IVR, or is handled inadequately, the call is considered billable
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      Always call missed calls back as quickly as possible – we will send the caller's number to you via text and email immediately after the call is missed
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      If the caller asks for a different company, let them know you are a different company but offer the same services
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      If a valid lead in need of your services is denied service due to lack of availability, you will be billed. Always turn the account status to paused if you are unable to take on additional leads.
                    </Typography>
                  </li>
                </ul>
              </section>

              <div className="border-t border-neutral-200 my-4"></div>

              {/* Account Quality Score */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Account Quality Score
                </Typography>
                <Typography variant="s" weight="medium" className="text-neutral-500 mb-4">
                  We use account quality score as a metric to evaluate and determine which accounts are most suitable for receiving leads. This score involves several factors and can directly impact the number of leads an account receives. A higher quality score indicates that an account is more likely to convert leads successfully, while a lower score can result in fewer leads being directed to that account.
                </Typography>
                <Typography variant="s" weight="medium" className="text-neutral-500 mb-4">
                  Things that can negatively affect your quality score include:
                </Typography>
                <ul className="list-disc list-outside space-y-2 mb-4 ml-5">
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      A high refund rate on billable leads
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      Excessive missed calls
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      Poor handling of calls
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      Pausing the account for extended periods of time
                    </Typography>
                  </li>
                </ul>
              </section>

              <div className="border-t border-neutral-200 my-4"></div>

              {/* Returns */}
              <section>
                <Typography variant="h3" weight="bold" className="text-neutral-900 mb-4">
                  Returns
                </Typography>
                <Typography variant="s" weight="medium" className="text-neutral-500 mb-4">
                  We do allow buyers to return leads or calls under certain scenarios. Returns must be made within 7 days of receiving the lead. Leads and calls can be returned via the portal for the following reasons:
                </Typography>
                <ul className="list-disc list-outside space-y-2 mb-4 ml-5">
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      Disconnected or Wrong Phone Number
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      Wrong category – Not a restoration lead
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      Obvious spam
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      Customer denies making request
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      Duplicate call after a lead
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="s" weight="medium" className="text-neutral-500">
                      When a user submits a lead and then calls in through our confirmation page phone, we bill for the call and credit the lead
                    </Typography>
                  </li>
                </ul>
              </section>

              <div className="border-t border-neutral-200 my-4"></div>

              {/* Form Leads Note */}
              <section>
                <Typography variant="s" weight="medium" className="text-neutral-500">
                  ** For form leads, not being able to contact a lead is NOT a valid reason for return. Generally, contact rate for form leads is around 75%. For this reason the leads are less expensive than phone calls.
                </Typography>
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

export default LeadBuyingGuidelinesPage;

