import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './styles/global_styles.css';

import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faUserSecret,
  faBars,
  faChevronDown,
  faGears,
  faCode,
  faUserNinja,
} from '@fortawesome/free-solid-svg-icons';
library.add(
  faUserSecret,
  faBars,
  faChevronDown,
  faGears,
  faCode,
  faUserNinja
);

import router from './router/router.config';

const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
