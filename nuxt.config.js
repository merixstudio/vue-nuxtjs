import colors from 'vuetify/es5/util/colors';

export default {
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
  ],
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Headers of the page
  */
  head: {
    link: [
      {
        href: '/favicon.ico',
        rel: 'icon',
        type: 'image/x-icon',
      },
      {
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
        rel: 'stylesheet',
      },
    ],
    meta: [
      { charset: 'utf-8' },
      {
        content: 'width=device-width, initial-scale=1',
        name: 'viewport',
      },
      {
        content: process.env.npm_package_description || '',
        hid: 'description',
        name: 'description',
      },
    ],
    title: process.env.npm_package_name || '',
    titleTemplate: '%s - ' + process.env.npm_package_name,
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  mode: 'universal',
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    font: true,
    theme: {
      dark: false,
      themes: {
        dark: {
          accent: colors.grey.darken3,
          error: colors.deepOrange.accent4,
          info: colors.teal.lighten1,
          primary: colors.blue.darken2,
          secondary: colors.amber.darken3,
          success: colors.green.accent3,
          warning: colors.amber.base,
        },
      },
    },
  },
};
