import React, { useState, useRef, useEffect } from 'react';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/Button';
import heroiconsChevronUp from '@/assets/icons/heroicons_chevron-up.svg';
import heroiconsChevronDown from '@/assets/icons/heroicons_chevron-down.svg';

// Service icons - importing all downloaded icons
import applianceRepairIcon from '@/assets/icons/appliance-repair.svg';
import asbestosRemovalIcon from '@/assets/icons/asbestos-removal.svg';
import bathroomRemodelLeadsIcon from '@/assets/icons/bathroom-remodel-leads.svg';
import biohazardLeadsIcon from '@/assets/icons/biohazard-leads.svg';
import electricianLeadsIcon from '@/assets/icons/electrician-leads.svg';
import fireDamageLeadsIcon from '@/assets/icons/fire-damage-leads.svg';
import flooringLeadsIcon from '@/assets/icons/flooring-leads.svg';
import gutterLeadsIcon from '@/assets/icons/gutter-leads.svg';
import hvacLeadsIcon from '@/assets/icons/hvac-leads.svg';
import locksmithLeadsIcon from '@/assets/icons/locksmith-leads.svg';
import moldRemovalLeadsIcon from '@/assets/icons/mold-removal-leads.svg';
import pestControlLeadsIcon from '@/assets/icons/pest-control-leads.svg';
import plumbingLeadsIcon from '@/assets/icons/plumbing-leads.svg';
import roofingLeadsIcon from '@/assets/icons/roofing-leads.svg';
import sidingLeadsIcon from '@/assets/icons/siding-leads.svg';
import treeServicesLeadsIcon from '@/assets/icons/tree-services-leads.svg';
import waterDamageLeadsIcon from '@/assets/icons/water-damage-leads.svg';

const serviceIcons: Record<string, string | null> = {
  'Appliance Repair': applianceRepairIcon,
  'Asbestos Removal': asbestosRemovalIcon,
  'Bathroom Remodel Leads': bathroomRemodelLeadsIcon,
  'Biohazard Leads': biohazardLeadsIcon,
  'Electrician Leads': electricianLeadsIcon,
  'Fire Damage Leads': fireDamageLeadsIcon,
  'Flooring Leads': flooringLeadsIcon,
  'Gutter Leads': gutterLeadsIcon,
  'HVAC Leads': hvacLeadsIcon,
  'Locksmith Leads': locksmithLeadsIcon,
  'Mold Removal Leads': moldRemovalLeadsIcon,
  'Pest Control Leads': pestControlLeadsIcon,
  'Plumbing Leads': plumbingLeadsIcon,
  'Roofing Leads': roofingLeadsIcon,
  'Siding Leads': sidingLeadsIcon,
  'Tree Services Leads': treeServicesLeadsIcon,
  'Water Damage Leads': waterDamageLeadsIcon,
};

// Services array matching Figma design order (3 columns, 6 rows)
const services = [
  { name: 'Appliance Repair', icon: serviceIcons['Appliance Repair'], active: true },
  { name: 'Asbestos Removal', icon: serviceIcons['Asbestos Removal'] },
  { name: 'Bathroom Remodel Leads', icon: serviceIcons['Bathroom Remodel Leads'] },
  { name: 'Biohazard Leads', icon: serviceIcons['Biohazard Leads'] },
  { name: 'Electrician Leads', icon: serviceIcons['Electrician Leads'] },
  { name: 'Gutter Leads', icon: serviceIcons['Gutter Leads'] },
  { name: 'Fire Damage Leads', icon: serviceIcons['Fire Damage Leads'] },
  { name: 'HVAC Leads', icon: serviceIcons['HVAC Leads'] },
  { name: 'Flooring Leads', icon: serviceIcons['Flooring Leads'] },
  { name: 'Locksmith Leads', icon: serviceIcons['Locksmith Leads'] },
  { name: 'Mold Removal Leads', icon: serviceIcons['Mold Removal Leads'] },
  { name: 'Pest Control Leads', icon: serviceIcons['Pest Control Leads'] },
  { name: 'Plumbing Leads', icon: serviceIcons['Plumbing Leads'] },
  { name: 'Roofing Leads', icon: serviceIcons['Roofing Leads'] },
  { name: 'Siding Leads', icon: serviceIcons['Siding Leads'] },
  { name: 'Tree Services Leads', icon: serviceIcons['Tree Services Leads'] },
  { name: 'Water Damage Leads', icon: serviceIcons['Water Damage Leads'] },
];

export interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        // Don't close if clicking the hamburger button
        const target = event.target as HTMLElement;
        if (!target.closest('[data-mobile-menu-button]')) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* Desktop Header - Matching Figma node-id=1-7648 exactly */}
      <header
        className={`hidden lg:flex items-center justify-between bg-white border-b border-neutral-200 px-20 py-[14px] sticky top-0 z-50 ${className}`}
      >
        {/* Logo - 120px width, 24px height */}
        <Logo width={120} height={24} />

        {/* Navigation - gap-8 (32px) between items */}
        <nav className="flex items-center gap-8">
          {/* Services Dropdown */}
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center gap-[5px] font-medium text-s transition-colors"
            >
              <span className={isServicesOpen ? 'text-primary-500' : 'text-neutral-900'}>
                Services
              </span>
              <img
                src={isServicesOpen ? heroiconsChevronUp : heroiconsChevronDown}
                alt=""
                className="w-3.5 h-3.5"
                style={{
                  filter: isServicesOpen
                    ? 'brightness(0) saturate(100%) invert(28%) sepia(100%) saturate(7500%) hue-rotate(200deg) brightness(100%) contrast(100%)'
                    : 'brightness(0) saturate(100%) invert(8%) sepia(4%) saturate(2000%) hue-rotate(200deg) brightness(95%) contrast(95%)',
                }}
              />
            </button>

            {/* Services Dropdown Menu - Exact Figma specs: 802px width, centered on screen */}
            {isServicesOpen && (
              <div className="fixed top-[52px] left-1/2 -translate-x-1/2 bg-white border border-neutral-200 rounded-[10px] shadow-[0px_10px_16px_0px_rgba(0,0,0,0.05)] p-[14px] w-[802px] z-50">
                <div className="grid grid-cols-3 gap-0">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      className={`flex items-center gap-[10px] px-[14px] py-2 rounded-[10px] transition-colors ${
                        service.active
                          ? 'bg-primary-100 text-primary-500'
                          : 'hover:bg-neutral-50 text-neutral-900'
                      }`}
                    >
                      {service.icon ? (
                        <img src={service.icon} alt="" className="w-8 h-8 flex-shrink-0" />
                      ) : (
                        <div className="w-8 h-8 bg-neutral-200 rounded flex-shrink-0"></div>
                      )}
                      <span className="font-medium text-s whitespace-nowrap">{service.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Other Navigation Links - font-medium text-s text-neutral-900 */}
          <a
            href="#about"
            className="font-medium text-s text-neutral-900 hover:text-primary-500 transition-colors whitespace-nowrap"
          >
            About Us
          </a>
          <a
            href="#articles"
            className="font-medium text-s text-neutral-900 hover:text-primary-500 transition-colors whitespace-nowrap"
          >
            Articles
          </a>
          <a
            href="#support"
            className="font-medium text-s text-neutral-900 hover:text-primary-500 transition-colors whitespace-nowrap"
          >
            Partner Support
          </a>
        </nav>

        {/* Contact Button - Primary variant, px-6 py-[14px] */}
        <Button variant="primary" className="px-6 py-[14px]">
          Contact
        </Button>
      </header>

      {/* Mobile Header - Matching Figma node-ids=1-9476, 1-12279 exactly */}
      <header
        className={`lg:hidden flex items-center justify-between bg-white border-b border-neutral-200 px-6 py-[14px] sticky top-0 z-50 ${className}`}
      >
        {/* Hamburger Menu & Logo - gap-[14px] */}
        <div className="flex items-center gap-[14px]">
          <button
            data-mobile-menu-button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-6 h-6 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="#18181B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {/* Logo: 91px width, 18px height for mobile */}
          <Logo width={91} height={18} />
        </div>

        {/* Contact Button - px-6 py-[10px] for mobile */}
        <Button variant="primary" className="px-6 py-[10px]">
          Contact
        </Button>

        {/* Mobile Menu Overlay - Fixed position, width 430px mobile / 768px tablet */}
        {isMobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div
              ref={mobileMenuRef}
              className="fixed top-[66px] left-0 bg-white w-[430px] md:w-[768px] max-w-[90vw] h-[calc(100vh-66px)] px-6 py-8 shadow-lg z-50 overflow-y-auto"
            >
              <div className="flex flex-col gap-[10px]">
                {/* Services with Dropdown - font-medium text-h4 */}
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full flex items-center justify-between px-[14px] py-2 rounded-[10px] font-medium text-h4 text-neutral-900"
                  >
                    <span>Services</span>
                    <img
                      src={isServicesOpen ? heroiconsChevronUp : heroiconsChevronDown}
                      alt=""
                      className="w-3.5 h-3.5"
                      style={{
                        transform: isServicesOpen ? 'scale-y-[-1]' : 'none',
                      }}
                    />
                  </button>

                  {/* Mobile Services Dropdown - Matching Figma node-id=1-9579 */}
                  {isServicesOpen && (
                    <div className="mt-[10px] flex flex-col gap-0">
                      {services.map((service, index) => (
                        <button
                          key={index}
                          className={`flex items-center gap-[10px] px-[14px] py-2 rounded-[10px] transition-colors ${
                            service.active
                              ? 'bg-primary-100 text-primary-500'
                              : 'text-neutral-900 hover:bg-neutral-50'
                          }`}
                        >
                          {service.icon ? (
                            <img src={service.icon} alt="" className="w-8 h-8 flex-shrink-0" />
                          ) : (
                            <div className="w-8 h-8 bg-neutral-200 rounded flex-shrink-0"></div>
                          )}
                          <span className="font-medium text-s">{service.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Other Navigation Links - font-medium text-h4 */}
                <a
                  href="#about"
                  className="px-[14px] py-2 rounded-[10px] font-medium text-h4 text-neutral-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </a>
                <a
                  href="#articles"
                  className="px-[14px] py-2 rounded-[10px] font-medium text-h4 text-neutral-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Articles
                </a>
                <a
                  href="#support"
                  className="px-[14px] py-2 rounded-[10px] font-medium text-h4 text-neutral-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Partner Support
                </a>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default Header;

