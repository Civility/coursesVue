<template>
  <div>
    <h2>Редактирование пользователя {{ id }}</h2>

    <div v-if="!user" class="alert alert-warning">
      Загрузка...
    </div>
    <template v-else>
      <!-- <user-form :user="user" @update="updateUser" /> -->
      <user-form v-model="user"/>
      {{ user }}
      <hr />
      <button type="button" class="btn btn-primary" @click="save">
        Сохранить
      </button>
    </template>
  </div>
</template>

<script>
// import axios from 'axios'
import axios from '@/axios.js'
// import UserForm from '@/components/UserForm.vue'

export default {
  name: 'UserEdit',
  components: {
    // UserForm
    UserForm: () => import('@/components/UserForm.vue')
  },
  data: () => ({
    //локальные данные которые передаются
    user: null
  }),
  computed: {
    id() {
      return this.$route.params.id
    },
    urlUserId() {
      return '/users/' + this.id
    }
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    // т.к. поменяли на v-model, : user="user" @update='updateUser' - можно удалять
    // updateUser(newUser) {
    //   this.user = newUser
    // },
    loadUser() {
      axios
        .get(this.urlUserId)
        .then(response => (this.user = response.data))
        .catch(error => console.error(error))
    },
    save() {
      axios
        .patch(this.urlUserId, this.user)
        .then(() => this.$router.push('/users'))
        .catch(error => console.error(error))
    }
  }
}
</script>
