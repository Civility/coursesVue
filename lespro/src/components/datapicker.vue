<template>
  <div>
    <input type="text" ref="picker" class="form-control" :value="value" />
  </div>
</template>

<script>
//https://flatpickr.js.org/events/#hooks
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'

export default {
  name: 'Datepicker',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data: () => ({
    fp: null
  }),
  watch: {
    value: 'updateDatepicker'
  },
  mounted() {
    this.initDatapicker()
  },
  beforeDestroy() {
    if (this.fp) {
      this.fp.destroy
    }
  },
  mothods: {
    initDatapicker() {
      this.fp = flatpickr(this.$refs.picker, {
        dateFormat: 'd.m.Y',
        onChange: (selectedDates, dateStr) => {
          this.$emit('input', dateStr)
        }
      })
    },
    updateDatepicker() {
      if (this.fp) {
        this.fp.setDate(this.value)
      }
    }
  }
}
</script>
