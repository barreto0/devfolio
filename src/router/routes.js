import Home from '../components/Landing/Home.vue';
import NotFound from '../components/errors/NotFound.vue';
import ContactPage from '../components/Contact/ContactPage.vue';

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
    path: '/:pathMatch(.*)*',
    component: NotFound,
    title: 'Not Found',
    meta: { guest: true },
  },
];
