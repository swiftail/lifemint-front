import Vue from "vue"
import { API_URL } from "~/assets/js/api"
import get from 'lodash.get';

Vue.prototype.$api = (path) => `${API_URL}${path}`
Vue.prototype.$error = function (str) {
  this.$store.commit('ADD_ERROR', str)
}
Vue.prototype.$get = get

Vue.prototype.anchor = function (id) {
  return {
    'path': this.$route.path,
    'hash': id
  }
}

