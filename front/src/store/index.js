import Vue from 'vue';
import Vuex from 'vuex';

import meta from './modules/meta';
import mobile from './modules/mobile';
import modal from './modules/modal';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    modules: {
        meta,
        modal,
        mobile,
    },
    strict: process.env.NODE_ENV !== 'production',
});
