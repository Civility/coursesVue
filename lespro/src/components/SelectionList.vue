<!-- Компонент выбора количества строк на страницу таблицы -->

<template>
  <div>
    <select class="custom-select" :value="value" @input="changed($event.target.value)">
      <option v-for="item in list" :key="item" :value="item">
        <span>{{ item }}</span>
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'RowsPerPage',
  props: {
    // Выбранное количество строк на страницу
    value: {
      type: Number,
      required: true
    },
    // Список вариантов количеств строк на страницу
    // т.к. возвращаем массив, то должны использовать функцию возвращающую массив
    list: {
      type: Array,
      default: () => [5, 10, 15, 20]
    }
  },
  methods: {
    // Выбор нового количества строк на страницу
    changed(value) {
      this.$emit('input', value)
    }
  }
}
</script>
