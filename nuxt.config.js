import colors from 'vuetify/es5/util/colors'
import { i18nOptions } from './locales/i18n'
const envPath = `config/.env.${process.env.STAGE_NAME || 'local'}`
require('dotenv').config({ path: envPath })

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - leave-management-app',
    title: 'leave-management-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    { path: '~/components/', pathPrefix: false },
    { path: '~/templates/', pathPrefix: false }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://composition-api.nuxtjs.org/
    '@nuxtjs/composition-api/module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://vite.nuxtjs.org/
    'nuxt-vite'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/dotenv'],
  i18n: i18nOptions,
  dotenv: { filename: envPath },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.lightBlue,
          info: colors.lightBlue,
          red: colors.red,
          green: '#6FCF97',
          orange: colors.amber.darken3,
          grey: colors.grey.lighten1,
          black: '#0A0A0A',
          secondary: '#6d6d6d'
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
