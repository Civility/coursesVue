<template>
  <div>
    <h2>Список пользователей</h2>

    <div v-if="!users.length" class="alert alert-warning">
      Загрузка...
    </div>
    <user-list v-else :users="users" />
  </div>
</template>

<script>
import axios from 'axios'
import UserList from '@/components/UserList.vue'
export default {
  name: 'UsersPage',
  components: {
    'user-list': UserList
  },
  data: () => ({
    // Список пользователей
    users: []
  }),
  mounted() {
    // отжидание ответа с бд
    this.loadData()
  },
  methods: {
    loadData() {
      axios.get('http://localhost:3000/users').then(({ data }) => {
        this.users = data.users.catch(error => console.log(error))
      })
    }
  }
}
</script>
