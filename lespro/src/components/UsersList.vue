<template>
  <div>
    <form>
      <div class="form-row">
        <div class="col">
          <label>С шагом</label>
          <selection-list v-model.number="rowsPerPage" />
        </div>
        <div class="col">
          <label>Любая страница</label>
          <input
            class="form-control"
            type="number"
            min="1"
            max="999"
            maxlength="100"
            v-model.number="rowsPerPage"
          />
        </div>
      </div>
    </form>

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
        <tr v-for="item in paginatedData" :key="item.id">
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
          <th colspan="8">{{ title }}: {{ totalUsers }}</th>
        </tr>
      </tfoot>
    </table>
    <strong>Выбрана страница {{ selectedPage }}</strong>
    <paginated-list 
      v-model.number="selectedPage" 
      :per-page="rowsPerPage" 
      :total="totalUsers" />
  </div>
</template>

<script>
export default {
  name: 'UsersList',
  components: {
    'selection-list': () => import('@/components/SelectionList.vue'),
    'paginated-list': () => import('@/components/PaginatedList.vue')
  },
  props: {
    users: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      default: 'Всего пользователей'
    }
  },
  data() {
    return {
      rowsPerPage: 5,
      selectedPage: 1
    }
  },
  computed: {
    // Всего пользователей
    totalUsers() {
      return this.users.length
    },
    // Отображаемые строки таблицы
    paginatedData() {
      const start = (this.selectedPage - 1) * this.rowsPerPage,
            end = start + this.rowsPerPage;
      return this.users.slice(start, end);

      // return this.users.filter((item, index) => {
      //   const start = (this.selectedPage - 1) * this.rowsPerPage
      //   const end = start + this.rowsPerPage
      //   return start <= index && index < end
      // })
    }
  },
  watch: {
    // При изменении количества элементов на страницу
    rowsPerPage() {
      this.selectedPage = 1
    }
  }
}
// взято с примера github
</script>
