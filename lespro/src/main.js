import Vue from 'vue'

import App from '@/App.vue'
import router from '@/router.js'
import '@/registerServiceWorker.js'
import 'bootstrap/scss/bootstrap.scss'
import NProgress from 'vue-nprogress'

Vue.use(NProgress)

Vue.config.productionTip = false
const nprogress = new NProgress({ parent: '.nprogress-container' })

new Vue({
  nprogress,
  router,
  render: h => h(App)
}).$mount('#app')
