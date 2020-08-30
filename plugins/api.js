import { createApi } from '~/assets/js/api'

export default ({ $axios }, inject) => {
  inject('repo', createApi($axios))
}
