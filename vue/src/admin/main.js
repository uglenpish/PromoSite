import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ApiService from "./common/api.service";

ApiService.init();

new Vue({
  el: "#app-root",
  render: h => h(App),
  router,
  store,
});