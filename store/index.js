import Vue from 'vue'
import Vuex from 'vuex'
import {
  getServices,
  getAdvantages,
  getReviews,
  getExperts,
  getGallery
} from '~/assets/js/api'

Vue.use(Vuex);

export const state = () => ({
  services: [],
  advantages: [],
  reviews: [],
  experts: [],
  gallery: { photos: [] },
  delayedErrors: []
});

export const mutations = {
  SET_SERVICES(state, services) {
    state.services = services;
  },
  SET_ADVANTAGES(state, advantages) {
    state.advantages = advantages;
  },
  SET_REVIEWS(state, reviews) {
    state.reviews = reviews;
  },
  SET_EXPERTS(state, experts) {
    state.experts = experts;
  },
  SET_GALLERY(state, gallery) {
    state.gallery = gallery;
  },
  ADD_ERROR(state, error) {
    if (process.client) {
      window.displayError(error)
    } else {
      state.delayedErrors.push(error)
    }
  }
}

function commitOrError(store, commit, data, error) {
  if(data) {
    store.commit(commit, data)
  } else {
    store.commit('ADD_ERROR', error)
  }
}

export const actions = {
  nuxtServerInit: async (store, { req }) => {

    let [services, advantages, reviews, experts, gallery] = await Promise.all([
      getServices(),
      getAdvantages(),
      getReviews(),
      getExperts(),
      getGallery()
    ])

    commitOrError(store, 'SET_SERVICES', services, 'Не удалось выполнить запрос')
    commitOrError(store, 'SET_ADVANTAGES', advantages, 'Не удалось выполнить запрос')
    commitOrError(store, 'SET_REVIEWS', reviews, 'Не удалось выполнить запрос')
    commitOrError(store, 'SET_EXPERTS', experts, 'Не удалось выполнить запрос')
    commitOrError(store, 'SET_GALLERY', gallery, 'Не удалось выполнить запрос')

  }
}

export const getters = {
  getServiceBySlug: state => slug => state.services.find(i => i.slug == slug)
}
