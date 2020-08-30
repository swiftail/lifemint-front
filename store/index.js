import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const state = () => ({
  services: [],
  advantages: [],
  reviews: [],
  experts: [],
  gallery: { photos: [] },
  delayedErrors: [],
  promotions: [],
  pricelistLink: ''
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
  SET_PROMOTIONS(state, promotions) {
    state.promotions = promotions
  },
  SET_PRICELIST_LINK(state, pricelist) {
    state.pricelistLink = pricelist.file.url
  },
  ADD_ERROR(state, error) {
    if (process.client) {
      window.displayError(error)
    } else {
      state.delayedErrors.push(error)
    }
  },
  SET_CLIENT(state) {
    state.client = true
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
  nuxtServerInit: async (store, { $repo }) => {

    const {
      getServices,
      getAdvantages,
      getReviews,
      getExperts,
      getGallery,
      getPromotions,
      getPricelist
    } = $repo

    let [services, advantages, reviews, experts, gallery, promotions, pricelist] = await Promise.all([
      getServices(),
      getAdvantages(),
      getReviews(),
      getExperts(),
      getGallery(),
      getPromotions(),
      getPricelist()
    ])

    commitOrError(store, 'SET_SERVICES', services, 'Не удалось выполнить запрос')
    commitOrError(store, 'SET_ADVANTAGES', advantages, 'Не удалось выполнить запрос')
    commitOrError(store, 'SET_REVIEWS', reviews, 'Не удалось выполнить запрос')
    commitOrError(store, 'SET_EXPERTS', experts, 'Не удалось выполнить запрос')
    commitOrError(store, 'SET_GALLERY', gallery, 'Не удалось выполнить запрос')
    commitOrError(store, 'SET_PROMOTIONS', promotions, 'Не удалось выполнить запрос')
    commitOrError(store, 'SET_PRICELIST_LINK', pricelist, 'Не удалось выполнить запрос')

  },
  nuxtClientInit: async (store) => {
    store.commit('SET_CLIENT')
  }
}

export const getters = {
  getServiceBySlug: state => slug => state.services.find(i => i.slug == slug)
}
