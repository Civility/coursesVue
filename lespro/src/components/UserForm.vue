<template>
  <div>
    <div class="form-group">
      <label>Имя</label>
      <input type="text" class="form-control" v-model="localUser.name" />
    </div>

    <div class="form-group">
      <label>Фамилия</label>
      <input type="text" class="form-control" v-model="localUser.lastName" />
    </div>

    <div class="form-group">
      <label>Картинка</label>
      <img :src="localUser.picture" alt="img-fluid" />
      <input type="text" class="form-control" v-model="localUser.picture" />
    </div>

    <div class="form-group">
      <label>registered</label>
      <input type="text" class="form-control" v-model="localUser.registered" />
    </div>

    <div class="form-group">
      <label>Активность</label>
      <div class="checkbox-inline"><input type="checkbox" v-model="localUser.isActive" v-text="localUser.isActive"/></div>
    </div>

    <!-- <div class="form-group">
      <label>Доступ</label>
      <select class="form-control" v-model="localUser.accessLevel">
        <option v-for="item in accessList" :key="item">
          {{ item }}
        </option>
      </select>
    </div> -->

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
    <pre>{{ localUser }}</pre>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  // переопределение
  model: {
    prop: 'user'
    // event: 'test' // создаем событие
  },
  props: {
    // Объект с данными пользователя
    //user: {
    user: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    // Локальный изменяемый объект пользователя
    localUser: null
    // accessList: ['guest', 'user', 'admin']
  }),
  watch: {
    // При изменении локального состояния
    // отправляем объект наверх
    localUser: {
      deep: true, // отследил в глубь
      handler() {
        // показал
        // this.$emit('update', Object.assign({}, this.localUser))
        this.$emit('input', Object.assign({}, this.localUser))
        // this.$emit('test', Object.assign({}, this.localUser))
      }
    }
    // user:{
    //   deep: true,
    //   handler(){
    //     this.localUser = Object.assign({}, this.user) // this.$emit('input', this.user)
    //   }
    // }
  },
  created() {
    // Копируем пользователя в локальное состояние из model - prop
    this.localUser = Object.assign({}, this.user)
  }
}
// взято с примера github
</script>
