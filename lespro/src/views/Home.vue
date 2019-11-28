<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" class="image" />
    <Default msg="Welcome" />
  </div>
</template>

<script>
import Default from '@/components/home/home.vue'

export default {
  name: 'Home',
  components: {
    Default
  }
}
</script>

<style src="@/components/home/home.scss" lang="scss" scoped></style>