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
    <div className={`min-h-screen flex flex-col bg-neutral-100 ${className}`}>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

