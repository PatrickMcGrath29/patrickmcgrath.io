import Vue from 'vue'
import App from './App'
import VueGtm from 'vue-gtm'
import router from './router'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.use(VueGtm, {
  enabled: true,
  debug: false,
  vueRouter: router
})

Vue.use(Vuetify);
