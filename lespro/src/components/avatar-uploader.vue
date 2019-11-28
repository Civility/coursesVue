<template>
  <span class="input-group mb-3">
    <input type="text" class="form-control" v-model.trim="value" placeholder="Путь до фаила" />
    <input type="file" ref="file" @change="upload" class="d-none" />
    <div class="input-group-append">
      <button
        class="btn btn-outline-primary mb-3"
        type="button"
        @click.prevent="selectFile"
      >Выбрать фаил</button>
    </div>
  </span>
</template>

<script>
import axios from '@/axios.js'

export default {
  name: 'Uploader',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    // к dom элементам черезе ref
    selectFile() {
      this.$refs.file.click()
    },
    upload() {
      const url = 'https://api.imgur.com/3/image'
      const data = new FormData()
      data.append('image', this.$refs.file.files[0])
      // Добавляем ключ от IMGUR
      // https://api.imgur.com/oauth2/addclient
      // const config = 586564426797192
      // {
      // headers: {
      //   Authorization: 'Client-ID 3bef0b8892d4b04'
      // }
      // }
      const config = {
        headers: {
          Authorization: 'Client-ID 3bef0b8892d4b04'
        }
      }
      axios
        .post(url, data, config) // post  запрос на api по url, data мой фаил, дополнительный конфиг для заголовка Client-ID
        .then(response => response.data)
        .then(response => {
          console.log(response) // посмотреть, что приходит в ответе
          this.$emit('input', response.data.link)
          this.$refs.file.value = ''
        })
    }
  }
}
</script>
