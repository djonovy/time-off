import Vue from 'vue';
import Vuex from 'vuex';
import Employees from '../store/Employees';

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
    modules: {
        Employees
    },
});

export default store;
