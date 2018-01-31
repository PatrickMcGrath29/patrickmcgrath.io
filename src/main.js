// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

if (location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
  location.href = 'https:' + window.location.href.substring(window.location.protocol.length)
}
