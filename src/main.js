import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
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
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';
library.add(
  faUserSecret,
  faBars,
  faChevronDown,
  faGears,
  faCode,
  faUserNinja,
  faLinkedin,
  faGithub,
  faYoutube,
  faMedium
);

import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import router from './router/router.config';

const pinia = createPinia();

import { pt_BR } from '../src/locales/pt-BR.js';
import { en } from '../src/locales/en.js';

const messages = {
  pt_BR,
  en,
};
const i18n = createI18n({
  locale: 'pt_BR',
  fallbackLocale: 'pt_BR',
  messages,
});

createApp(App)
  .use(pinia)
  .use(router)
  .use(i18n)
  .use(Toast)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
