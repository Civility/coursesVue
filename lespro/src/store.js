import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios.js'

Vue.use(Vuex)

// в консоле все можно получить через $vm0.$store.getters.titleCount
// изменить состояние можно через $vm0.$store.commit('vuexTitle', 'NewText')
// изменить состояние можно через $vm0.$store.dispatch('loadUsers')
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', // в режиме разработке будет true
  state: {
    // объект для статики
    vuexTitle: 'VUEX +',
    users: []
  },
  mutations: {
    // для всех изменений
    // 2 параметра state - исходное состояние ,  payload - мутация (передаем данные ), кроме синхронной логики
    changeTitle: (state, payload) => (state.vuexTitle = payload),
    clearTitle: state => (state.vuexTitle = ''),
    setUsers: (state, payload) => (state.users = payload)
  },
  getters: {
    // что и computed
    titleCount: state => state.vuexTitle.length
  },
  actions: {
    // действие - синхронная логика
    loadUsers({
      commit // commit - запускает мутацию. dispach - вызывает мутацию
    }) {
      axios
        .get('/users')
        //   .then(response => (this.users = response.data)) // если в Users.vue
        .then(response => commit('setUsers', response.data))
        .catch(error => console.error(error))
    }
  }
})

export default store
