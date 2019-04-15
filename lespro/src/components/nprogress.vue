<template>
  <nprogress-container></nprogress-container>
</template>

<script>
import NProgress from 'vue-nprogress'
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'

const NProgressOptions = {
  latencyThreshold: 100,
  router: true,
  http: false
}
Vue.use(NProgress, NProgressOptions)
const nprogress = new NProgress({ parent: '.nprogress-container' })

export default {
  components: {
    NprogressContainer
  }
}
</script>
