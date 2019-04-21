<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link to="/" class="navbar-brand" exact>Logo</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/users" class="nav-item nav-link">Users </router-link>
            <router-link to="/add" class="nav-item nav-link">Add users </router-link>
            <router-link to="/about" class="nav-item nav-link">About </router-link>
          </div>
        </div>
      </div>
    </nav>
    <nprogress-container></nprogress-container>
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<script>
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'

export default {
  components: {
    NprogressContainer
  }
}
</script>

<style lang="scss">
#app {
  .active {
    color: #dd5454;
  }
}
.nprogress-container {
  width: 100%;
  height: 3px;
}
</style>
