<template>
  <div>
       <select class="form-control" v-model="size">
            <option>
              <p>{{ size }}</p>
            </option>
          </select>
          <br />
    <table class="table table-hover">
      <thead>
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
      </thead>
      <tbody>
        <tr v-for="item in paginUsers" :key="item.id">
          <td>
            <router-link :to="'/edit/' + item.id"> # {{ item.id }} </router-link>
          </td>
          <td>{{ item.name }}</td>
          <td>{{ item.lastName }}</td>
          <td>{{ item.isActive }}</td>
          <td>{{ item.balance }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.address }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="8">Всего пользователей: {{ total }}</th>
        </tr>
      </tfoot>
    </table>
    <button @click="prevPage" :disabled="pageNumber == 0">
      Назад
    </button>
    <!-- <button type="button" class="btn btn-sm btn-outline-secondary" 
      v-for="pageNumber in pages.slice(page-1, page+5)" 
      @click="page = pageNumber"> {{pageNumber}} 
    </button> -->
    <button @click="nextPage" :disabled="pageNumber >= pagecount - 1">
      Вперед
    </button>
    на страницу : {{ size }}
    всего страниц : {{pageCount}}
  </div>
</template>

<script>
export default {
  name: 'UsersList',
  data() {
    return {
      pageNumber: 0,
      size: 5,
    }
  },
  props: {
    // Список
    users: {
      type: Array,
      required: true
    }
    // size: {
    //   type: Number,
    //   required: false,
    //   default: 5
    // }
  },
  computed: {
    // Всего пользователей
    total() { 
      return this.users.length
    },
    pageCount() {
      let usersAll = this.users.length
      let sizePage = this.size
      return Math.ceil(usersAll / sizePage)
    },
    paginUsers() {
      const start = this.pageNumber * this.size
      const end = start + this.size
      return this.users.slice(start, end)
    }
  },
  methods: {
    nextPage() {
      this.pageNumber++
    },
    prevPage() {
      this.pageNumber--
    }
  }
}
// взято с примера github
</script>
