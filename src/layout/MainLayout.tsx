import React from 'react';
import Header from './Header';
import Footer from './Footer';

export interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * MainLayout Component
 * 
 * Wraps page content with Header and Footer components.
 * Follows the architecture pattern from ringba/client project.
 */
export const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`min-h-screen w-full flex flex-col bg-neutral-100 overflow-x-hidden ${className}`}>
      <Header />
      <main className="w-full flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

