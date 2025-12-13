import React from 'react';
import { Logo } from '@/components/Logo';
import mdiLinkedin from '@/assets/icons/mdi_linkedin.svg';
import fa6BrandsXTwitter from '@/assets/icons/fa6-brands_x-twitter.svg';

export interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`bg-white ${className}`}>
      {/* Footer Content - Matching Figma node-id=1-14905 exactly */}
      {/* Desktop: px-[80px] py-[88px], Mobile: responsive padding */}
      <div className="flex flex-col gap-[40px] px-6 py-12 lg:px-[80px] lg:py-[88px]">
        {/* Logo - 172px width, 34px height on desktop, smaller on mobile */}
        <div className="h-[34px] w-[172px]">
          <Logo width={172} height={34} />
        </div>

        {/* Main Content Row - gap-[32px] between sections, stacks on mobile */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[32px]">
          {/* Left Section - Company Info - gap-[24px] */}
          <div className="flex flex-col gap-[24px]">
            {/* Tagline - 2 lines, font-medium text-s text-neutral-500, leading-[1.5] */}
            <div className="font-medium text-s text-neutral-500 leading-[1.5]">
              <p className="mb-0">High Quality Home Service &</p>
              <p>Insurance Leads Drive Results & Fuel Growth</p>
            </div>

            {/* Copyright - font-medium text-s text-neutral-500, leading-[1.5] */}
            <p className="font-medium text-s text-neutral-500 leading-[1.5] whitespace-nowrap">
              © 2024 All Rights Reserved, Clickdee
            </p>

            {/* Social Icons - gap-[10px], 24px size */}
            <div className="flex items-center gap-[10px]">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
                aria-label="LinkedIn"
              >
                <img src={mdiLinkedin} alt="LinkedIn" className="w-full h-full" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
                aria-label="Twitter"
              >
                <img src={fa6BrandsXTwitter} alt="Twitter" className="w-full h-full" />
              </a>
            </div>
          </div>

          {/* Middle Section - Addresses - gap-[16px] between address sections */}
          <div className="flex flex-col gap-[16px] h-[138px] justify-center">
            {/* Our HQ - gap-[7px] between heading and address */}
            <div className="flex flex-col gap-[7px] leading-[1.5] text-s">
              <p className="font-bold text-neutral-900">Our HQ</p>
              <p className="font-medium text-neutral-500">
                Clickdee Mediashare OÜ
                <br />
                6 Sepapaja, Harijumma, Tallinn, Estonia-15551
              </p>
            </div>

            {/* US Office - gap-[7px] between heading and address */}
            <div className="flex flex-col gap-[7px] leading-[1.5] text-s">
              <p className="font-bold text-neutral-900">US Office</p>
              <p className="font-medium text-neutral-500">
                Clickdee LLC
                <br />
                30 N Gould St Ste R Sheridan Wyoming-82801
              </p>
            </div>
          </div>

          {/* Right Section - Navigation Columns - gap-[32px] between columns, stacks on mobile */}
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-[32px] justify-end w-full lg:w-auto">
            {/* First Navigation Column - gap-[16px] between items */}
            <div className="flex flex-col gap-[16px] font-medium text-s text-neutral-500 leading-[1.5]">
              <a href="#home" className="hover:text-primary-500 transition-colors whitespace-nowrap">
                Home
              </a>
              <a href="#how-it-works" className="hover:text-primary-500 transition-colors whitespace-nowrap">
                How it Works?
              </a>
              <a href="#articles" className="hover:text-primary-500 transition-colors whitespace-nowrap">
                Articles
              </a>
              <a href="#contact" className="hover:text-primary-500 transition-colors whitespace-nowrap">
                Contact Us
              </a>
              <a href="#lead-guidelines" className="hover:text-primary-500 transition-colors whitespace-nowrap">
                Lead Buying Guidelines
              </a>
            </div>

            {/* Second Navigation Column - gap-[16px] between items */}
            <div className="flex flex-col gap-[16px] font-medium text-s text-neutral-500 leading-[1.5]">
              <a href="#affiliates" className="hover:text-primary-500 transition-colors whitespace-nowrap">
                Affiliates
              </a>
              <a href="#company-values" className="hover:text-primary-500 transition-colors whitespace-nowrap">
                Company Values
              </a>
              <a href="#privacy" className="hover:text-primary-500 transition-colors whitespace-nowrap">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-primary-500 transition-colors whitespace-nowrap">
                Terms and Conditions
              </a>
              <a href="#do-not-sell" className="hover:text-primary-500 transition-colors whitespace-nowrap">
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

