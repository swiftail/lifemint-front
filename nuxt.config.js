export default {
  components: true,
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },
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
    htmlAttrs: {
      lang: 'ru-RU'
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },

      { name: 'msapplication-TileColor', content: '#00d5df' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://ajax.googleapis.com' },

      { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#00d5df' },
    ],
    script: [
      { src: '/js/modernizr.js' },
      { src: '/js/ie11.js', async: true },
      // { src: 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js' },
      { src: '/js/fonts.js', async: true }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'purecss/build/base-min.css',
    '@/assets/main.css',
    '@/assets/gap.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/lazyImage',
    '~/plugins/iconify',
    '~/plugins/util',
    '~/plugins/appointmentModal.js',
    '~/plugins/mask.js',
    '~/plugins/notyf.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@aceforth/nuxt-optimized-images'
  ],
  optimizedImages: {
    optimizeImages: true
  },
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
  build: {
    postcss: {
      plugins: {
      },
      preset: {
        autoprefixer: {
          // We don't support IE anyway?
          // grid: true
        }
      }
    },
    // vendor: [
    //   'micromodal/micromodal.min.js'
    // ]
  },
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
}
