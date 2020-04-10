export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Patrick McGrath | Home',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Patrick McGraths Personal Website'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Environment Variables
   */
  env: {
    baseUrl: process.env.BASE_URL || 'https://urls.patrickmcgrath.io'
  },
  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css', '@/assets/styles/styles.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/element-ui'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/gtm-module
    '@nuxtjs/gtm'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-svg-loader',
    'nuxt-logrocket',
    [
      'nuxt-social-meta',
      {
        url: 'https://patrickmcgrath.io',
        title: 'Patrick McGrath | Home',
        description: 'Patrick McGraths Personal Website',
        img: 'patrickmcgrath.jpg',
        locale: 'en_US',
        themeColor: '#ffb316'
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** LogRocket Configuration
   */
  logRocket: {
    logRocketId: process.env.LOGROCKET_ID,
    devModeAllowed: false
  },
  /*
   ** Google Tag Manager ID
   */
  gtm: {
    id: 'GTM-MK9XB6N'
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
