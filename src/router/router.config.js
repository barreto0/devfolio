import { createRouter, createWebHistory } from 'vue-router'; // modulo de roteamento da aplicação
import { routes } from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

// autenticação de rota
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('token')) {
      next();
      return;
    }
    next({ path: '/' });
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (localStorage.getItem('token')) {
      next({ path: '/dashboard' });
      return;
    }
    next();
  } else {
    next();
  }
});

export default router;
