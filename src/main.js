import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import axios from 'axios';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.use(BootstrapVue);

Vue.config.productionTip = false;
Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
