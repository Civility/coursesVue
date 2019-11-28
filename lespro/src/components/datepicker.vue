<template>
  <span class="js-datepicker">
    <input
      type="text"
      ref="datepicker"
      class="form-control"
      aria-label="Data"
      :value="value"
      :placeholder="placeholder"
    />
  </span>
</template>

<script>
//https://flatpickr.js.org/events/#hooks

import flatpickr from 'flatpickr'
import { Russian } from 'flatpickr/dist/l10n/ru.js'
import 'flatpickr/dist/flatpickr.css'
import 'flatpickr/dist/themes/dark.css'

export default {
  name: 'Datepicker',
  props: {
    value: {
      type: String,
      required: true
    },
    // Подсказка для поля
    placeholder: {
      type: String,
      default: 'Выберите дату'
    }
  },

  data: () => ({
    // Экземпляр плагина
    fp: null
  }),

  watch: {
    value: 'updateDatepicker'
  },
  // хуки - если удалить плагин
  beforeDestroy() {
    if (this.fp) {
      this.fp.destroy()
    }
  },
  mounted() {
    this.initCalendar()
  },
  methods: {
    updateDatepicker() {
      if (this.fp) {
        this.fp.setDate(this.value)
      }
    },
    // обертка плагина можно использовать и jQuery плагины
    initCalendar() {
      //this.$refs.picker -- является ссылкой на дом элемент на конкретный элемент в шаблоне с компонентом (ref="datepicker")
      this.fp = flatpickr(this.$refs.datepicker, {
        locale: Russian,
        dateFormat: 'd.m.Y',
        theme: 'dark',
        // altFormat: 'j F, Y',
        // altInput: true,
        // enableTime: true,
        // altInput: false,
        // conjunction: ' & ',
        // mode: 'multiple',
        // mode: "range",
        // disable: ['29.09.2019', '28.09.2019', '27.09.2019'],
        // enable: ['2019-09-01', '2019-09-30', '2019-10-30', new Date(2019, 9, 9)],
        // minDate: 'today',
        // maxDate: '29.09.2019',
        // maxDate: new Date().fp_incr(14),
        //     enableTime: true,
        // noCalendar: true,
        // time_24hr: true,
        // inline: true
        onChange: (selectedDates, dateStr) => {
          this.$emit('input', dateStr)
        }
      })
    }
    // ловим входящие значения пользователя
  }
}
</script>
