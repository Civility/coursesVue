<template>
  <div>
    <h2>Телефонный справочник</h2>

    <div v-if="!lengthUsers" class="alert alert-warning">Загрузка...</div>
    <user-list v-else :users="users">
      <template v-slot:header>
        <button @click="testParent" class="my-3 p-3 border border-primary">Slots header</button>
      </template>

      <template v-slot:table-header>
        <th>#</th>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Телефон</th>
        <th>Активен</th>
      </template>

      <!-- <template slot="table-row" slot-scope="{ item }"> -->
      <template v-slot:table-row="{ item }">
        <td>
          <router-link :to="'/edit/' + item.id"># {{ item.id }}</router-link>
        </td>
        <td>{{ item.firstName }}</td>
        <td>{{ item.lastName }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.isActive }}</td>
      </template>

      <template v-slot:footer>
        <p class="alert alert-primary">Slots footer</p>
      </template>
    </user-list>
  </div>
</template>

<script>
// import axios from 'axios'
import axios from '@/axios.js'
// import UserList from '@/components/UserList.vue'

export default {
  name: 'UsersList',
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
      // axios('/users')
      // axios('/db.json')
      axios('db.json')
        // .then(response => (this.users = response.data))
        .then(response => (this.users = response.data.users))
        .catch(error => console.error(error))
    },
    testParent() {
      // только тестовый вариант
      alert('Всего пользователей:' + this.users.length)
    }
  }
}
</script>
