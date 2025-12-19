import React from 'react';
import { AboutUsHeroSection } from '../components/AboutUsHeroSection';
import { ValuesSection } from '../components/ValuesSection';
import { FoundersCarousel } from '../components/FoundersCarousel';
import { ContentGrid } from '@/components/ContentGrid';
import aboutStats from '@/assets/images/about-stats.png';

const AboutUsPage: React.FC = () => {
  const stats = [
    { id: 'year', value: '2013', label: 'Year we started generating mold remediation traffic' },
    { id: 'leads', value: '5000+', label: 'Remediation leads generated monthly' },
    { id: 'team', value: '10+', label: 'Members in our team' },
    { id: 'states', value: '50', label: 'States where we  generate leads' },
  ];

  return (
    <div className="w-full">
      <AboutUsHeroSection />
      <ContentGrid
        topLeft={{
          heading: 'Top-notch generation for Home Service & Insurance Leads',
          paragraph: 'Your ROI is our top priority. We work to ensure you are informed about where your leads are coming from.',
        }}
        topRight={{
          stats: stats,
        }}
        bottomLeft={{
          src: aboutStats,
          alt: 'Team member reviewing documents',
          className: 'w-full !h-[350px]',
        }}
        bottomRight={{
          heading: 'We are Focused on Results',
          paragraph: "With a wealth of experience in lead generation, Inquirly's founders are applying their knowledge towards being the most authentic, transparent lead company in the home services space.",
        }}
      />
      <ValuesSection />
      <FoundersCarousel />
    </div>
  );
};

export default AboutUsPage;
