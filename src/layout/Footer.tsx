import React from 'react';
import { Logo } from '@/components/Logo';
import mdiLinkedin from '@/assets/icons/mdi_linkedin.svg';
import fa6BrandsXTwitter from '@/assets/icons/fa6-brands_x-twitter.svg';

export interface FooterProps {
  className?: string;
}


export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`bg-white ${className}`} data-node-id="1:14905">
      {/* Footer Content - Matching Figma node-id=1-14905 exactly */}
      {/* Desktop: px-[80px] py-[88px], Mobile: responsive padding */}
      <div className="flex flex-col gap-[40px] items-start justify-center px-6 py-12 lg:px-[80px] lg:py-[88px] relative w-full">
        {/* Logo - 172px width, 34px height on desktop */}
        <div className="h-[34px] relative shrink-0 w-[172px]" data-node-id="1:14906">
          <Logo width={172} height={34} />
        </div>

        {/* Main Content Row - gap-[32px] between sections, stacks on mobile */}
        <div className="flex flex-col lg:flex-row items-start relative shrink-0 w-full" data-node-id="1:14907">
          {/* Left Section - Company Info with Logo/Tagline/Copyright/Social - gap-[24px] */}
          <div className="flex flex-col gap-[24px] items-start relative shrink-0" data-node-id="1:14909">
            {/* Tagline - 2 lines, font-medium text-s text-neutral-500, leading-[1.5] */}
            <div className="font-medium text-s text-neutral-500 leading-[1.5]" data-node-id="1:14910">
              <p className="mb-0">High Quality Home Service &</p>
              <p>Insurance Leads Drive Results & Fuel Growth</p>
            </div>

            {/* Copyright - font-medium text-s text-neutral-500, leading-[1.5] */}
            <p className="font-medium text-s text-neutral-500 leading-[1.5] whitespace-nowrap" data-node-id="1:14911">
              © 2024 All Rights Reserved, Clickdee
            </p>

            {/* Social Icons - gap-[10px], 24px size */}
            <div className="flex gap-[10px] items-center relative shrink-0" data-node-id="1:14912">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative shrink-0 w-6 h-6 hover:opacity-70 transition-opacity"
                aria-label="LinkedIn"
                data-node-id="1:14913"
              >
                <img src={mdiLinkedin} alt="LinkedIn" className="block w-full h-full" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative shrink-0 w-6 h-6 hover:opacity-70 transition-opacity"
                aria-label="Twitter"
                data-node-id="1:14915"
              >
                <img src={fa6BrandsXTwitter} alt="Twitter" className="block w-full h-full" />
              </a>
            </div>
          </div>

          {/* Middle Section - Addresses - gap-[16px] between address sections, h-[138px] */}
          <div className="flex flex-col gap-[16px] grow h-[138px] items-start justify-center min-h-0 min-w-0 relative shrink-0 lg:basis-0" data-node-id="1:14917">
            {/* Our HQ - gap-[7px] between heading and address */}
            <div className="flex flex-col gap-[7px] items-start justify-center leading-[1.5] text-s relative shrink-0 whitespace-nowrap" data-node-id="1:14918">
              <p className="font-bold text-neutral-900 relative shrink-0" data-node-id="1:14919">
                Our HQ
              </p>
              <p className="font-medium text-neutral-500 relative shrink-0 whitespace-normal" data-node-id="1:14920">
                Clickdee Mediashare OÜ
                <br aria-hidden="true" />
                6 Sepapaja, Harijumma, Tallinn, Estonia-15551
              </p>
            </div>

            {/* US Office - gap-[7px] between heading and address */}
            <div className="flex flex-col gap-[7px] items-start justify-center leading-[1.5] text-s relative shrink-0 whitespace-nowrap" data-node-id="1:14921">
              <p className="font-bold text-neutral-900 relative shrink-0" data-node-id="1:14922">
                US Office
              </p>
              <p className="font-medium text-neutral-500 relative shrink-0 whitespace-normal" data-node-id="1:14923">
                Clickdee LLC
                <br aria-hidden="true" />
                30 N Gould St Ste R Sheridan Wyoming-82801
              </p>
            </div>
          </div>

          {/* Right Section - Navigation Columns - gap-[32px] between columns, justify-end */}
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-[32px] grow items-start justify-end min-h-0 min-w-0 relative shrink-0 lg:basis-0" data-node-id="1:14924">
            {/* First Navigation Column - gap-[16px] between items */}
            <div className="flex flex-col font-medium gap-[16px] items-start justify-center leading-[1.5] text-s text-neutral-500 relative shrink-0 whitespace-nowrap" data-node-id="1:14925">
              <a href="#home" className="relative shrink-0 hover:text-primary-500 transition-colors" data-node-id="1:14926">
                Home
              </a>
              <a href="#how-it-works" className="relative shrink-0 hover:text-primary-500 transition-colors" data-node-id="1:14927">
                How it Works?
              </a>
              <a href="#articles" className="relative shrink-0 hover:text-primary-500 transition-colors" data-node-id="1:14928">
                Articles
              </a>
              <a href="#contact" className="relative shrink-0 hover:text-primary-500 transition-colors" data-node-id="1:14929">
                Contact Us
              </a>
              <a href="#lead-guidelines" className="relative shrink-0 hover:text-primary-500 transition-colors" data-node-id="1:14930">
                Lead Buying Guidelines
              </a>
            </div>

            {/* Second Navigation Column - gap-[16px] between items */}
            <div className="flex flex-col font-medium gap-[16px] items-start justify-center leading-[1.5] text-s text-neutral-500 relative shrink-0 whitespace-nowrap" data-node-id="1:14931">
              <a href="#affiliates" className="relative shrink-0 hover:text-primary-500 transition-colors" data-node-id="1:14932">
                Affiliates
              </a>
              <a href="#company-values" className="relative shrink-0 hover:text-primary-500 transition-colors" data-node-id="1:14933">
                Company Values
              </a>
              <a href="#privacy" className="relative shrink-0 hover:text-primary-500 transition-colors" data-node-id="1:14934">
                Privacy Policy
              </a>
              <a href="#terms" className="relative shrink-0 hover:text-primary-500 transition-colors" data-node-id="1:14935">
                Terms and Conditions
              </a>
              <a href="#do-not-sell" className="relative shrink-0 hover:text-primary-500 transition-colors" data-node-id="1:14936">
                Do Not Sell My Information
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

