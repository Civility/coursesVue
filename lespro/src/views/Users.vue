<template>
  <div>
    <h2>Список пользователей</h2>
    <div v-if="!lengthUsers" class="alert alert-warning">Загрузка...</div>
    <user-list v-else :users="users" />
  </div>
</template>

<script>
import axios from '@/axios.js'

export default {
  name: 'UsersList',
  components: {
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
        // .get('db.json')
        .then(response => (this.users = response.data))
        // .then(response => (this.users = response.data.users))
        .catch(error => console.error(error))
    }
  }
}
</script>
