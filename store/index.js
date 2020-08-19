import Vue from 'vue'
import Vuex from 'vuex'
import { getService, getServices } from '~/assets/js/api'

Vue.use(Vuex);

export const state = () => ({
    services: {}
});

export const mutations = {
    SET_SERVICES(state, services) {
        console.log(services)
        state.services = services;
    }
}

export const actions = {
    nuxtServerInit: async (store, { req }) => {
        store.commit('SET_SERVICES', await getServices() || []);
    }
}

// export const getters = {
//     services: (state) => state.services
// }