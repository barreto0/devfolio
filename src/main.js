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

import { pt_BR } from '../src/locales/pt-BR.js';
import { en } from '../src/locales/en.js';
import { ja } from '../src/locales/ja.js';

const messages = {
  pt_BR,
  en,
  ja,
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
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
