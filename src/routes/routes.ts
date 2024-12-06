import { HomePage } from '../components/Home';
import { AboutPage, ContactPage, CategoriesPage } from '../pages';

export const publicRoutes = [
  { path: '/home', Component: HomePage },
  { path: '/categories', Component: CategoriesPage },
  { path: '/about', Component: AboutPage },
  { path: '/contact', Component: ContactPage },
];
