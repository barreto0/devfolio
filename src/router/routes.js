import Home from '../components/Landing/Home.vue';
import NotFound from '../components/errors/NotFound.vue';
import ContactPage from '../components/Contact/ContactPage.vue';
import PortfolioPage from '../components/Portfolio/PortfolioPage.vue';

export const routes = [
  {
    path: '/',
    component: Home,
    title: 'Home',
    meta: { guest: true },
  },
  //   {
  //     path: '/register-quote',
  //     component: RegisterQuoteSuggestion,
  //     title: 'RegisterQuoteSuggestion',
  //     meta: { requiresAuth: true },
  //   },
  {
    path: '/contact',
    component: ContactPage,
    title: 'Contact',
    meta: { guest: true },
  },
  {
    path: '/portfolio',
    component: PortfolioPage,
    title: 'PortfolioPage',
    meta: { guest: true },
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    title: 'Not Found',
    meta: { guest: true },
  },
];
