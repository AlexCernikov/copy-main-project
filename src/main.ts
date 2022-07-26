import { createApp } from 'vue';
import { BootstrapVue3 } from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App)
  .use(BootstrapVue3)
  .use(store)
  .use(router)
  .mount('#app');
