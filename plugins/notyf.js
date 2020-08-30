import 'notyf/notyf.min.css';
import Vue from 'vue'

if (process.client) {
  const { Notyf } = require('notyf')
  const notyf = new Notyf({
    position: {
      x: 'left',
      y: 'bottom',
    }
  });
  window.notyf = notyf;
  window.displayError = (str) => notyf.error({
    message: str,
    duration: 8000
  })
  Vue.prototype.$notyf = notyf;
}

