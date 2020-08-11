export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap', rel: 'stylesheet' },
      { href: 'https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css', rel: 'stylesheet' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'purecss/build/base-min.css',
    'purecss/build/grids-min.css',
    'purecss/build/grids-responsive-min.css',
    '@/assets/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/util'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/separate-env'
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {},
  env: {
    server: {
      API_URL: 'http://localhost:1337'
    },
    client: {
      API_URL: 'http://localhost:1337'
    }
  },
  generate: {
    subFolders: true,
    dir: 'build/dist'
  },
  router: {
    base: '/'
  }
}
