<template>
  <div>
    <div class="form-group">
      <label>Имя</label>
      <input type="text" class="form-control" v-model="localUser.firstName" />
    </div>

    <div class="form-group">
      <label>Фамилия</label>
      <input type="text" class="form-control" v-model="localUser.lastName" />
    </div>

    <div class="form-group">
      <label>Баланс</label>
      <input type="text" class="form-control" v-model="localUser.balance" />
    </div>

    <div class="form-group">
      <label>Телефон</label>
      <input type="text" class="form-control" v-model="localUser.phone" />
    </div>

    <div class="form-group">
      <label>Адрес</label>
      <input type="text" class="form-control" v-model="localUser.address" />
    </div>

    <div class="form-group">
      <label>Компания</label>
      <input type="text" class="form-control" v-model="localUser.company" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  props: {
    // Объект с данными пользователя
    user: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    // Локальный изменяемый объект пользователя
    localUser: null
  }),
  watch: {
    // При изменении локального состояния
    // отправляем объект наверх
    localUser: {
      deep: true,
      handler() {
        this.$emit('input', this.localUser)
      }
    }
  },
  created() {
    // Копируем пользователя в локальное состояние
    this.localUser = Object.assign({}, this.user)
  }
}
//все взято с примера github
</script>
