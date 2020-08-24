import Vue from "vue"
import { API_URL } from "~/assets/js/api"

Vue.prototype.$api = (path) => `${API_URL}${path}`
Vue.prototype.$error = function(str) {
  this.$store.commit('ADD_ERROR', str)
}
