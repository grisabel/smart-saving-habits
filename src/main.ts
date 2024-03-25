import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n';

const app = createApp(App);
app.use(i18n);
app.mount('#app');

let lang = window.sessionStorage.getItem('Language') || 'es';
// @ts-ignore
i18n.global.locale.value = lang;
