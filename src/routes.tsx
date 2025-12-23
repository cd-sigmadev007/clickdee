import { RouteObject } from 'react-router-dom';
import { HomePage } from './modules/home';
import { AboutUsPage } from './modules/about';
import { PartnersPage } from './modules/partners';
import { ServicePage } from './modules/services';
import ServicesPage from './modules/services/pages/ServicesPage';
import { ArticlesPage } from './modules/articles';
import SingleArticlePage from './modules/articles/pages/SingleArticlePage';
import { ContactUsPage } from './modules/contact';
import { FAQPage } from './modules/faq';
import { CompanyValuesPage } from './modules/company-values';
import { PrivacyPolicyPage, TermsAndConditionsPage, DoNotSellPage, LeadBuyingGuidelinesPage, OnboardingInstructionsPage } from './modules/legal';
import AffiliatePage from './modules/affiliates/pages/AffiliatePage';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutUsPage />,
  },
  {
    path: '/partners',
    element: <PartnersPage />,
  },
  {
    path: '/services',
    element: <ServicesPage />,
  },
  {
    path: '/services/:slug',
    element: <ServicePage />,
  },
  {
    path: '/articles',
    element: <ArticlesPage />,
  },
  {
    path: '/articles/:slug',
    element: <SingleArticlePage />,
  },
  {
    path: '/contact',
    element: <ContactUsPage />,
  },
  {
    path: '/faq',
    element: <FAQPage />,
  },
  {
    path: '/company-values',
    element: <CompanyValuesPage />,
  },
  {
    path: '/affiliates',
    element: <AffiliatePage />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicyPage />,
  },
  {
    path: '/terms-and-conditions',
    element: <TermsAndConditionsPage />,
  },
  {
    path: '/do-not-sell',
    element: <DoNotSellPage />,
  },
  {
    path: '/lead-buying-guidelines',
    element: <LeadBuyingGuidelinesPage />,
  },
  {
    path: '/onboarding-instructions',
    element: <OnboardingInstructionsPage />,
  },
];
