<template>
  <div>
    <h2>Список пользователей</h2>

    <div v-if="!lengthUsers" class="alert alert-warning">
      Загрузка...
    </div>
    <user-list v-else :users="users" />
  </div>
</template>

<script>
// import axios from 'axios'
import axios from '@/axios.js'
// import UserList from '@/components/UserList.vue'

export default {
  name: 'UsersListPage',
  components: {
    // 'user-list': UsersList
    'user-list': () => import('@/components/UsersList.vue')
  },
  data: () => ({
    // Список пользователей
    users: []
  }),
  computed: {
    lengthUsers() {
      return this.users.length > 0
    }
  },
  mounted() {
    // отжидание ответа с бд
    this.loadData()
  },
  methods: {
    loadData() {
      axios
        .get('/users')
        .then(response => (this.users = response.data))
        .catch(error => console.error(error))
    }
  }
}
</script>
