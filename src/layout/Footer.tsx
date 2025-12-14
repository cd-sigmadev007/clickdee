import React from 'react';
import { Logo } from '@/components/Logo';
import { Typography } from '@/components/Typography';
import mdiLinkedin from '@/assets/icons/mdi_linkedin.svg';
import fa6BrandsXTwitter from '@/assets/icons/fa6-brands_x-twitter.svg';

export interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`bg-neutral-10 border-t border-neutral-200 ${className}`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-20 py-12 lg:py-16">
        {/* Logo - Outside flex container */}
        <Logo className="mb-8 lg:mb-12" />

        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="flex flex-row gap-8 lg:gap-12">
            {/* Branding Section */}
            <div className="flex flex-col gap-[24px] flex-1 min-w-0">
              <Typography
                variant="s"
                weight="medium"
                className="text-neutral-500 max-w-[280px]"
              >
                High Quality Home Service & Insurance Leads Drive Results & Fuel Growth
              </Typography>
              <Typography
                variant="s"
                weight="regular"
                className="text-neutral-500"
              >
                © 2024 All Rights Reserved, Clickdee
              </Typography>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <img src={mdiLinkedin} alt="LinkedIn" className="w-6 h-6" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                  aria-label="X (Twitter)"
                >
                  <img src={fa6BrandsXTwitter} alt="X (Twitter)" className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Office Locations Section */}
            <div className="flex flex-col space-y-6 flex-1 min-w-0">
              <div>
                <Typography
                  variant="s"
                  weight="bold"
                  className="text-neutral-900 mb-3"
                >
                  Our HQ
                </Typography>
                <address className="not-italic">
                  <Typography
                    variant="s"
                    weight="medium"
                    className="text-neutral-500"
                  >
                    Clickdee Mediashare OÜ<br />
                    6 Sepapaja, Harijumma<br />
                    Tallinn, Estonia-15551
                  </Typography>
                </address>
              </div>
              <div>
                <Typography
                  variant="s"
                  weight="bold"
                  className="text-neutral-900 mb-3"
                >
                  US Office
                </Typography>
                <address className="not-italic">
                  <Typography
                    variant="s"
                    weight="medium"
                    className="text-neutral-500"
                  >
                    Clickdee LLC<br />
                    30 N Gould St Ste R<br />
                    Sheridan Wyoming-82801
                  </Typography>
                </address>
              </div>
            </div>

            {/* Navigation Links Container */}
          </div>

          <div className="flex flex-col lg:flex-row gap-6 flex-1  min-w-0">
            {/* Navigation Links Column 1 */}
            <nav className="flex lg:flex-col flex-wrap gap-3" aria-label="Footer navigation">
              <a href="/" className="group transition-colors">
                <Typography
                  variant="s"
                  weight="medium"
                  className="text-neutral-500 group-hover:text-primary-500"
                >
                  Home
                </Typography>
              </a>
              <a href="/how-it-works" className="group transition-colors">
                <Typography
                  variant="s"
                  weight="medium"
                  className="text-neutral-500 group-hover:text-primary-500"
                >
                  How it Works?
                </Typography>
              </a>
              <a href="/articles" className="group transition-colors">
                <Typography
                  variant="s"
                  weight="medium"
                  className="text-neutral-500 group-hover:text-primary-500"
                >
                  Articles
                </Typography>
              </a>
              <a href="/contact" className="group transition-colors">
                <Typography
                  variant="s"
                  weight="medium"
                  className="text-neutral-500 group-hover:text-primary-500"
                >
                  Contact Us
                </Typography>
              </a>
              <a href="/lead-buying-guidelines" className="group transition-colors">
                <Typography
                  variant="s"
                  weight="medium"
                  className="text-neutral-500 group-hover:text-primary-500"
                >
                  Lead Buying Guidelines
                </Typography>
              </a>
            </nav>

            {/* Navigation Links Column 2 */}
            <nav className="flex lg:flex-col flex-wrap gap-3" aria-label="Footer navigation">
              <a href="/affiliates" className="group transition-colors">
                <Typography
                  variant="s"
                  weight="medium"
                  className="text-neutral-500 group-hover:text-primary-500"
                >
                  Affiliates
                </Typography>
              </a>
              <a href="/company-values" className="group transition-colors">
                <Typography
                  variant="s"
                  weight="medium"
                  className="text-neutral-500 group-hover:text-primary-500"
                >
                  Company Values
                </Typography>
              </a>
              <a href="/privacy-policy" className="group transition-colors">
                <Typography
                  variant="s"
                  weight="medium"
                  className="text-neutral-500 group-hover:text-primary-500"
                >
                  Privacy Policy
                </Typography>
              </a>
              <a href="/terms-and-conditions" className="group transition-colors">
                <Typography
                  variant="s"
                  weight="medium"
                  className="text-neutral-500 group-hover:text-primary-500"
                >
                  Terms and Conditions
                </Typography>
              </a>
              <a href="/do-not-sell" className="group transition-colors">
                <Typography
                  variant="s"
                  weight="medium"
                  className="text-neutral-500 group-hover:text-primary-500"
                >
                  Do Not Sell My Information
                </Typography>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

