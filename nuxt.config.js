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
    htmlAttrs: {
      lang: 'ru-RU'
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://ajax.googleapis.com' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // These are now loaded via webfontloader;
      // // Sans serif font
      // {
      //   rel: 'stylesheet',
      //   href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap'
      // },
      // // Serif font
      // {
      //   rel: 'stylesheet',
      //   href: 'https://fonts.googleapis.com/css2?family=Lora&display=swap'
      // }
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
    'purecss/build/grids-min.css',
    'purecss/build/grids-responsive-min.css',
    '@/assets/main.css',
    '@/assets/gap.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/lazyImage',
    '~/plugins/swiper',
    '~/plugins/iconify'
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
          grid: true
        }
      }
    }
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
  router: {
    base: '/'
  }
}
