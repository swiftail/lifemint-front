import getRoutes from './assets/js/getRoutes.js'

export default {
  version: '0.0.1',
  components: true,
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },
  mode: 'universal',
  target: 'server',
  head: {
    htmlAttrs: {
      lang: 'ru-RU'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
      { src: `https://api-maps.yandex.ru/2.1/?apikey=${process.env.YMAPS_KEY}&lang=ru_RU` },
      { src: '/js/ie11.js', async: true },
      { src: '/js/fonts.js', async: true }
    ]
  },
  css: [
    'purecss/build/base-min.css',
    '@/assets/main.css',
    '@/assets/gap.css'
  ],
  plugins: [
    '~/plugins/api',
    '~/plugins/lazyImage',
    '~/plugins/iconify',
    '~/plugins/util',
    '~/plugins/appointmentModal',
    '~/plugins/notyf',
    { src: '~/plugins/clientInit', mode: 'client' }
  ],
  modules: [
    [
      "nuxt-social-meta",
      {
        url: "https://life-mint.ru",
        title: "Стоматологическая клиника Life Mint",
        site_name: "Life Mint",
        description: "Стоматология Life Mint в самом центре Ижевска. Качественное лечение и профилактика по приемлемым ценам.",
        img: "/logo.png",
        locale: "ru_RU"
      },
    ],
    '@nuxtjs/axios',
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    gzip: true,
    routes() {
      console.log(arguments)
      return getRoutes()
    }
  },
  buildModules: [
    '@aceforth/nuxt-optimized-images'
  ],
  optimizedImages: {
    optimizeImages: true
  },
  env: {
    API_URL: process.env.API_URL || 'http://localhost:1337',
    YMAPS_KEY: process.env.YMAPS_KEY
  },
  generate: {
    dir: 'build/dist'
  }
}
