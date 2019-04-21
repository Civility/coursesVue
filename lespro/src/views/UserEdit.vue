<template>
  <div>
    <h2>Редактирование пользователя {{ id }}</h2>

    <div v-if="!user" class="alert alert-warning">
      Загрузка...
    </div>
    <template v-else>
      <!-- <user-form :user="user" @update="updateUser" /> -->
      <user-form v-model="user" />
      {{ user }}
      <hr />
      <button type="button" class="btn btn-primary m-3" @click="save">Сохранить</button>
      <button type="button" class="btn btn-outline-danger m-3" @click="del">Удалить</button>
    </template>
  </div>
</template>

<script>
import axios from '@/axios.js'

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
    },
    del() {
      axios
        .delete(this.urlUserId, this.user)
        .then(() => this.$router.push('/users'))
        .catch(error => console.error(error))
    }
  }
}
</script>
