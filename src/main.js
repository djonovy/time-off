import Vue from 'vue';
import router from './router';
import store from './store';
import firebase from 'firebase/app';
import VeeValidate from 'vee-validate';
import Toasted from 'vue-toasted';
import * as svgicon from 'vue-svgicon';
import App from './App';
import {config} from './firebase-config';

Vue.use(VeeValidate);
Vue.use(Toasted, {
  position: 'bottom-right',
  duration: 3000
});
Vue.use(svgicon, {
  tagName: 'svgicon'
});
Vue.config.productionTip = false;

/* eslint no-new: [0] */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp(config);
  }
});
