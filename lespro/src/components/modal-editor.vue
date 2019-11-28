<template>
  <!-- <vue-editor v-model="content" :editor-toolbar="customToolbar" /> -->
  <vue-editor v-model="content" />
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
  name: 'ModalEditor',
  components: {
    VueEditor
  },
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data: () => ({
    content: '<h1>Html For Editor</h1>',
    customToolbar: [
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['image', 'code-block']
    ]
  }),
  watch: {
    // При изменении локального состояния
    // отправляем наверх
    content() {
      this.$emit('input', this.content)
    }
  },
  created() {
    // Копируем в локальное состояние
    this.content = this.value
  }
}
</script>

<style scoped lang="scss">
// @import '~vue2-editor/dist/vue2-editor.css';

// /* Import the Quill styles you want */
// @import '~quill/dist/quill.core.css';
// @import '~quill/dist/quill.bubble.css';
// @import '~quill/dist/quill.snow.css';
</style>
