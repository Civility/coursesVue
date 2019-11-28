<template>
  <div>
    <form>
      <div class="form-row">
        <div class="col">
          <label>{{ titleStep }}</label>
          <selection-list v-model.number="rowsPerPage" />
        </div>
        <div class="col">
          <label>{{ titleAnyStep }}</label>
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

    <slot name="header">
      <p class="my-3 alert alert-primary">UserLists Slots header</p>
    </slot>

    <br />
    <table class="table table-hover">
      <thead>
        <tr>
          <slot name="table-header">
            <th></th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Вкл</th>
            <th>Баланс</th>
            <th>Email</th>
            <th>Телефон</th>
            <th>Адрес</th>
          </slot>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in paginatedData" :key="item.id">
          <slot name="table-row" :item="item">
            <router-link :to="'/edit/' + item.id">
              <td>#{{ item.id }}</td>
            </router-link>
            <td>{{ item.firstName }}</td>
            <td>{{ item.lastName }}</td>
            <td>{{ item.isActive }}</td>
            <td>{{ item.balance }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.address }}</td>
          </slot>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="8">{{ titleTotalUsers }}: {{ totalUsers }}</th>
        </tr>
      </tfoot>
    </table>

    <slot name="footer">
      <p class="alert alert-primary">UserLists Slots footer</p>
    </slot>

    <strong>Выбрана страница {{ selectedPage }}</strong>
    <paginated-list v-model.number="selectedPage" :per-page="rowsPerPage" :total="totalUsers" />
  </div>
</template>

<script>
export default {
  name: 'UsersList',
  components: {
    'selection-list': () => import('@/components/SelectionList.vue'),
    'paginated-list': () => import('@/components/PaginatedList.vue')
  },
  timeout: 3000,
  error: 'Ошибка приложения',
  //
  props: {
    //
    users: {
      type: Array,
      required: true
    },
    titleTotalUsers: {
      type: String,
      default: 'Всего пользователей'
    },
    titleStep: {
      type: String,
      default: 'С шагом'
    },
    titleAnyStep: {
      type: String,
      default: 'С любым шагом'
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
        end = start + this.rowsPerPage
      return this.users.slice(start, end)
    }
  },
  watch: {
    // При изменении количества элементов на страницу
    rowsPerPage() {
      this.selectedPage = 1
    }
  }
}
</script>
