<template>
  <div>
    <h2>Тел</h2>

    <div v-if="!lengthUsers" class="alert alert-warning">
      Загрузка...
    </div>
    <user-list v-else :users="users">
      <template v-slot:header>
        <p>Phone header</p>
      </template>

      <p slot="footer">Phone footer</p>
      <template slot="table-header">
        <tr>
          <th>#</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Активен</th>
          <th>Баланс</th>
          <th>Email</th>
          <th>Телефон</th>
          <th>Адрес</th>
        </tr>
      </template>
      <template slot="table-row" slot-scope="{ item }">
        <td>
          <router-link :to="`/edit/${item.id}`"> # {{ item.id }} </router-link>
        </td>
        <td>{{ item.name }}</td>
        <td>{{ item.lastname }}</td>
        <td>{{ item.mail }}</td>
      </template>
    </user-list>
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
