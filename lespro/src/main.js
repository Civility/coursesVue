import Vue from 'vue'

import App from '@/App.vue'
import router from '@/router'
// import store from '@/store'

// import '@/registerServiceWorker'
// import 'bootstrap/scss/bootstrap.scss' // можно глобально прописать
import NProgress from 'vue-nprogress'

Vue.use(NProgress)

Vue.config.productionTip = false
const nprogress = new NProgress({
  parent: '.nprogress-container'
})

new Vue({
  nprogress,
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
