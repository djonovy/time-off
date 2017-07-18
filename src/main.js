import Vue from 'vue';
import router from './router';
import store from './store';
import Toasted from 'vue-toasted';
import App from './App';

Vue.use(Toasted, {
    position: 'bottom-right',
    duration: 3000
});
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
