// require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import VueAxios from 'vue-axios';
import axios from 'axios';
import store from './store'
import App from './components/App.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const app = new Vue({
  store,
  router: routes,
  axios: axios,
  render: h => h(App)
}).$mount('#app')

