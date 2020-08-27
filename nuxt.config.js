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
  css: [
    'purecss/build/base-min.css',
    '@/assets/main.css',
    '@/assets/gap.css'
  ],
  plugins: [
    '~/plugins/lazyImage',
    '~/plugins/iconify',
    '~/plugins/util',
    '~/plugins/appointmentModal.js',
    '~/plugins/notyf.js'
  ],
  modules: [
    'nuxt-ssr-cache',
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    gzip: true,
    hostname: 'https://life-mint.u'
  },
  cache: {
    useHostPrefix: false,
    pages: ['/'],
    store: {
      type: 'memory',
      max: 100,
      ttl: 60,
    },
  },
  buildModules: [
    '@aceforth/nuxt-optimized-images'
  ],
  optimizedImages: {
    optimizeImages: true
  },
  env: {
    // API_URL: 'http://localhost:1337',
    API_URL: 'http://45.153.231.118/api'
  },
  generate: {
    dir: 'build/dist'
  }
}
