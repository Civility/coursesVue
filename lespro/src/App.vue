<template>
  <div id="app" v-cloak>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link to="/" class="navbar-brand" exact>
          <a @click="show=false">VueCli</a>
        </router-link>
        <!-- {{ vuexTitle }} -->
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          aria-label="Toggle navigation"
          @click="show=!show"
          :class="{collapsed: show}"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <transition name="fade">
          <div class="navbar-collapse" v-show="show" :class="{active: show}">
            <ul class="navbar-nav">
              <router-link to="/users" tag="li" active-class="active">
                <a @click="show=false">Список 1</a>
              </router-link>
              <router-link to="/add" tag="li">
                <a @click="show=false">Добавить</a>
              </router-link>
              <router-link to="/slots" tag="li">
                <a @click="show=false">Список 2</a>
              </router-link>
              <router-link to="/about" tag="li">
                <a @click="show=false">Страница</a>
              </router-link>
            </ul>
          </div>
        </transition>
      </div>
    </nav>

    <nprogress-container></nprogress-container>
    <main class="main">
      <div class="container">
        <router-view />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
import Footer from '@/components/footer/footer.vue'
export default {
  data: () => ({
    show: false
  }),
  components: {
    NprogressContainer,
    Footer
  },
  computed: {
    vuexTitle() {
      return this.$store.state.vuexTitle
    }
  }
}
</script>

<style lang="scss">
@import 'bootstrap/scss/bootstrap.scss';
body {
  @extend .vh-100;
}
main {
  @extend .mt-5;
  @extend .pt-3;
}
#app {
  @extend .d-flex;
  @extend .flex-column;
  @extend .h-100;

  [v-cloak] {
    @extend .d-none;
  }
  main {
    @extend .flex-grow-1;
    @extend .bg-light;
  }
  .navbar-nav {
    li {
      @extend .nav-item;
    }
    a {
      @extend .nav-link;
    }
    .active {
      a {
        @extend .text-primary;
      }
    }
  }
  .nprogress-container {
    @extend .w-100;
    height: 3px;
  }
}

.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.5s;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
    transition: opacity 0.5s;
  }
}

// .fade {
//   &-fade-enter-active {
//     transition: all 0.3s ease;
//   }
//   &-fade-leave-active {
//     transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
//   }
//   &-fade-enter,
//   &-fade-leave-to {
//     transform: translateX(10px);
//     opacity: 0;
//   }
// }
</style>
