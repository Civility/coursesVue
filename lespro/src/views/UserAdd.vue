<template>
  <div>
    <h2>Новый пользователь {{ id }}</h2>

    <div v-if="!user" class="alert alert-warning">Загрузка...</div>
    <template v-else>
      <!-- <user-form :user="user" @update="updateUser" /> -->
      <user-form v-model="user" />

      <button type="button" class="my-3 btn btn-primary" @click="save">Сохранить</button>
    </template>
  </div>
</template>

<script>
import axios from '@/axios.js'

// import UserForm from '@/components/UserForm.vue'
const emptyObj = {
  id: 0,
  isActive: false,
  balance: 0,
  picture: 'http://placehold.it/100x100',
  age: 0,
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  address: '',
  about: '',
  registered: ''
}
export default {
  name: 'UserAdd',
  components: {
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
      return '/users/'
      // return 'db.json'
    }
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    loadUser() {
      this.user = Object.assign({}, emptyObj)
    },
    save() {
      axios
        .post(this.urlUserId, this.user)
        .then(() => this.$router.push('/users'))
        // .then(() => this.$router.push('db.json'))
        // .then(response => {})
        .catch(error => console.error(error))
    }
  }
}
</script>
