<template>
  <div>
    <h2>Новый пользователь {{ id }}</h2>

    <div v-if="!user" class="alert alert-warning">
      Загрузка...
    </div>
    <template v-else>
      <!-- <user-form :user="user" @update="updateUser" /> -->
      <user-form v-model="user" />
      {{ user }}
      <hr />
      <button type="button" class="btn btn-primary" @click="save">
        Сохранить
      </button>
    </template>
  </div>
</template>

<script>
import axios from '@/axios.js'
// import UserForm from '@/components/UserForm.vue'
const emptyObj = {
  id: 0,
  isActive: false,
  balance: '',
  picture: 'http://placehold.it/36x36',
  age: 0,
  accessLevel: '',
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
    user: null,
    id: 0
  }),
    computed: {
    // id() {
    //   return this.$route.params.id
    // },
    urlUserId() {
      return '/users/' + this.id
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
            .patch(this.urlUserId, this.user)
            .then(() => this.$router.push('/users'))
            .catch(error => console.error(error))
        }
    }
}
</script>
