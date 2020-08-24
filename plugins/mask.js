import Vue from 'vue'

if (process.client) {
  const VueInputMask = require('vue-inputmask').default
  Vue.use(VueInputMask)
}
