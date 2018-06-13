import Vue from 'vue'
import App from './App'
import VueGtm from 'vue-gtm'
import router from './router'

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
