import { RouteObject } from 'react-router-dom';
import { HomePage } from './modules/home';
import { AboutUsPage } from './modules/about';
import { PartnersPage } from './modules/partners';
import { ServicePage } from './modules/services';

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
];
