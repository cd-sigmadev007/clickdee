import { RouteObject } from 'react-router-dom';
import { HomePage } from './modules/home';
import { AboutUsPage } from './modules/about';
import { PartnersPage } from './modules/partners';
import { ServicePage } from './modules/services';
import { ArticlesPage } from './modules/articles';
import SingleArticlePage from './modules/articles/pages/SingleArticlePage';
import { ContactUsPage } from './modules/contact';
import { PrivacyPolicyPage, TermsAndConditionsPage, DoNotSellPage } from './modules/legal';

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
];
