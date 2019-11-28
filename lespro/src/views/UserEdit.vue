<template>
  <div>
    <div v-if="!user" class="alert alert-warning">Загрузка...</div>
    <template v-else>
      <!-- <user-form :user="user" @update="updateUser" /> -->
      <user-form v-model="user">
        <!-- <user-form v-model="user[id]"> -->
        <!-- <template #debugging>
          <pre>UserEdit.vue (debugging)---<mark>{{ id }}</mark></pre>
        </template>-->
        <template #buttons="$v">
          <div class="btn-group w-100" role="group">
            <template v-if="!$v.invalid">
              <button type="button" class="btn btn-primary" @click="saveExit">Сохранить и Закрыть</button>
              <button type="button" class="btn btn-outline-success" @click="save">Сохранить</button>
            </template>
            <button type="button" class="btn btn-outline-danger" @click="del">Удалить</button>
            <button type="button" class="btn btn-outline-warning" @click="cancel">Закрыть</button>
          </div>
        </template>
      </user-form>
      <hr />
    </template>
  </div>
</template>

<script>
import axios from '@/axios.js'

export default {
  name: 'UserEdit',
  components: {
    UserForm: () => import('@/components/UserForm.vue')
  },
  data: () => ({
    //локальные данные которые передаются
    user: null
  }),

  timeout: 3000,
  error: 'Ошибка приложения',
  computed: {
    id() {
      return this.$route.params.id
    },
    urlUserId() {
      // const db = 'db.json'
      // return db
      return '/users/' + this.id
    }
  },
  // watch: {
  // Обновление данных при изменениях маршрута
  //   $route: 'loadUser'
  // },
  //локальные данные которые загружаются
  mounted() {
    this.loadUser()
  },
  methods: {
    loadUser() {
      axios(this.urlUserId) // .get is a default value
        // .then(response => (this.user = response.data.users))
        .then(response => (this.user = response.data))
        .catch(error => console.error(error))

      // .finally(() => this.user != true)
    },
    cancel() {
      axios(this.user, this.user)
        // axios(this.user[this.id])
        .then(() => this.$router.push('/users'))
        .catch(error => console.error(error))
    },
    saveExit() {
      axios
        .patch(this.urlUserId, this.user)
        // .post(this.urlUserId, this.user[this.id])
        .then(() => this.$router.push('/users'))
        .catch(error => console.error(error))
    },
    save() {
      // let invalid = $v.$invalid
      // if (invalid) {
      //   alert('ERROR FORM')
      //   return
      // }

      axios
        .patch(this.urlUserId, this.user)
        .then(() => this.urlUserId, this.user)
        // .post(this.urlUserId, this.user[this.id])
        // .then(() => this.urlUserId, this.user[this.id])
        .catch(error => console.error(error))
    },
    del() {
      axios
        .delete(this.urlUserId, this.user)
        // .delete(this.urlUserId, this.user[this.id])
        .then(() => this.$router.push('/users'))
        .catch(error => console.error(error))
    }
  }
}
</script>
