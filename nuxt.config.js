import { directive } from 'v-aspect-ratio/dist/v-aspect-ratio.ssr.esm'

export default {
  server: { host: process.env.HOST, port: process.env.PORT },

  // target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | AnastasiTarget',
    title: 'AnastasiTarget',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        property: 'og:site_name',
        content: 'Эксперт таргетолог в Instagram | Facebook',
      },
      { property: 'og:locale', content: 'ru_RU' },
      { property: 'og:type', content: 'website' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/animation.css',
    '~/assets/slider.scss',
    '~/assets/v-tooltip.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/intersection-polyfill.js', mode: 'client' },
    { src: '~/plugins/v-tooltip' },
    { src: '~/plugins/vue2-smooth-scroll', mode: 'client' },
    { src: '~/plugins/vue-awesome-swiper', mode: 'client' },
    { src: '~/plugins/aspect-ratio', mode: 'client' },
    { src: '~/plugins/vue-intersect-component', mode: 'client' },
    { src: '~/plugins/notifications-client', mode: 'client' },
    { src: '~/plugins/notifications-ssr', mode: 'server' },
    { src: '~/plugins/vue-ellipse-progress', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt-hero-icons/outline/nuxt',
    '@nuxt-hero-icons/solid/nuxt',
    '@nuxtjs/device',
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    [
      'nuxt-lazy-load',
      {
        directiveOnly: true,
        loadingClass: 'opacity-0',
        loadedClass: 'opacity-100',
        appendClass: 'transition-opacity',
      },
    ],
  ],

  render: {
    bundleRenderer: {
      directives: {
        'aspect-ratio': directive,
      },
    },
  },

  tailwindcss: {
    cssPath: '~/assets/tailwind.css',
    configPath: '~/tailwind.config.js',
  },

  loading: {
    color: 'blue',
    height: '5px',
    throttle: 0,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    loaders: {
      vue: {
        prettify: false,
      },
    },
  },

  publicRuntimeConfig: {
    screen: process.client ? window.innerWidth : 1025,
    API_URL: process.env.API_URL,
    CDN_URL: process.env.CDN_URL
  },
}
