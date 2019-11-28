<template>
  <div>
    <!-- <pre>UserFORM.vue (debugging)---<mark>{{ localUser }}</mark></pre> -->
    <slot name="debugging" />
    <h2>
      Редактирование пользователя
      <strong>{{ title }}</strong>
    </h2>
    <form class="form-row">
      <div class="col-md-12 mb-5">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Имя и Фамилия</span>
          </div>
          <div class="firstNameUser flex-grow-1">
            <input
              type="text"
              aria-label="First name"
              class="form-control"
              v-model.trim="localUser.firstName"
              :class="{
                'is-invalid': $v.firstNameUser.$invalid,
                'is-valid': !$v.firstNameUser.$invalid
              }"
            />
            <span class="invalid-tooltip" v-if="$v.firstNameUser.$invalid">
              <template v-if="!$v.firstNameUser.minLength">
                Длина имени не должна быть не менее
                {{ $v.firstNameUser.$params.minLength.min }} символов
              </template>
              <template v-else-if="!$v.firstNameUser.maxLength">
                Длина имени не должна превышать
                {{ $v.firstNameUser.$params.maxLength.max }} символов
              </template>
              <template v-else-if="!$v.firstNameUser.alpha">Имя должно содержать только буквы</template>
              <template v-else>Имя обязательно для заполнения</template>
            </span>
          </div>
          <div class="lastNameUser flex-grow-1">
            <input
              type="text"
              aria-label="Last name"
              class="form-control"
              v-model.trim="localUser.lastName"
              :class="{
                'is-invalid': $v.lastNameUser.$invalid,
                'is-valid': !$v.lastNameUser.$invalid
              }"
              required
            />
            <span class="invalid-tooltip" v-if="$v.lastNameUser.$invalid">
              <template v-if="!$v.lastNameUser.minLength">
                Длина Фамилии не должна быть не менее
                {{ $v.lastNameUser.$params.minLength.min }} символов
              </template>
              <template v-else-if="!$v.lastNameUser.maxLength">
                Длина Фамилии не должна превышать
                {{ $v.lastNameUser.$params.maxLength.max }} символов
              </template>
              <template v-else-if="!$v.lastNameUser.alpha">Фамилия должна содержать только буквы</template>
              <template v-else>Фамилия обязательно для заполнения</template>
            </span>
          </div>
        </div>
      </div>

      <div class="col-md-6 mb-5">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Активность</span>

            <span class="input-group-text custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck1"
                v-model.trim="localUser.isActive"
                v-text="localUser.isActive"
              />
              <label class="custom-control-label ml-3" for="customCheck1"></label>
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Text input with checkbox"
            :value="!localUser.isActive ? 'Не активен' : 'Активен'"
            readonly
            :class="{ 'text-danger': !localUser.isActive, 'text-success': localUser.isActive }"
          />
        </div>
      </div>

      <div class="col-md-6 mb-5">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Дата</span>
          </div>
          <!-- <input type="text" class="form-control" v-model="localUser.registered" /> -->
          <datepicker v-model.trim="localUser.registered" />
        </div>
      </div>

      <div class="col-md-12">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Картинка</span>
          </div>
          <img :src="localUser.picture" alt="pictureUsers" class="img-fluid" />
        </div>
        <avatar-uploader v-model="localUser.picture" />
      </div>

      <div class="col-md-12 mb-5">
        <div class="input-group">
          <!-- <div class="input-group-prepend"> -->
          <span class="input-group-text">Заметки</span>
          <!-- </div> -->

          <modal-editor v-model="localUser.about" class="mb-5" />
        </div>
      </div>

      <div class="col-md-6 mb-5">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Баланс</span>
            <span class="input-group-text">$</span>
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Dollar amount"
            v-model.trim="localUser.balance"
          />
        </div>
      </div>

      <div class="col-md-6 mb-5">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Email</span>
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Email"
            v-model.trim="localUser.email"
            :class="{ 'is-invalid': $v.emailUser.$invalid, 'is-valid': !$v.emailUser.$invalid }"
          />
          <span class="valid-tooltip" v-if="!$v.emailUser.$invalid">Email проверен</span>
          <span class="invalid-tooltip" v-else>
            <template v-if="!$v.emailUser.email">email введен не верно</template>
            <template v-else>Email обязательно для заполнения</template>
          </span>
        </div>
      </div>

      <div class="col-md-6 mb-5">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Телефон</span>
          </div>
          <input
            type="text"
            class="form-control"
            v-model.trim="localUser.phone"
            aria-label="Телефон"
          />
        </div>
      </div>

      <div class="col-md-6 mb-5">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Адрес</span>
          </div>
          <input
            type="text"
            class="form-control"
            v-model.trim="localUser.address"
            aria-label="Адрес"
          />
        </div>
      </div>

      <div class="col-md-6 mb-5">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="addon-wrapping">Компания</span>
          </div>
          <select
            class="form-control"
            v-model.trim="localUser.company"
            placeholder="Компания"
            aria-label="Компания"
          >
            <option v-for="company in companyList" :key="company">{{ company }}</option>
          </select>
          <!-- <input
            type="text"
            class="form-control"
            placeholder="Компания"
            aria-label="Компания"
            aria-describedby="addon-wrapping"
            v-model.trim="localUser.company"
          />-->
        </div>
      </div>

      <slot name="buttons" :invalid="$v.$invalid" />
    </form>
  </div>
</template>

<script>
// валидация (для формы)
import Vue from 'vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'UserForm',
  //datepicker как сторонний плагин
  components: {
    Datepicker: () => import('@/components/datepicker.vue'),
    AvatarUploader: () => import('@/components/avatar-uploader.vue'),
    ModalEditor: () => import('@/components/modal-editor.vue')
  },
  model: {
    prop: 'user'
    // event: 'test' // создаем событие
  },
  props: {
    // Объект с данными пользователя
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      localUser: null,
      companyList: ['ERSUM', 'IZZBY', 'ELITA']
    }
  },
  computed: {
    firstNameUser() {
      return this.localUser.firstName
    },
    lastNameUser() {
      return this.localUser.lastName
    },
    emailUser() {
      return this.localUser.email
    },
    title() {
      return !this.localUser.firstName || !this.localUser.lastName
        ? 'Пользователь'
        : [this.localUser.firstName, this.localUser.lastName].join(' ')
    }
  },
  // Модель для валидации, которую Vuelidate превратит в computed-поле $v
  validations: {
    firstNameUser: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(60),
      alpha: val => /^[-а-яА-яa-zA-z\\s]*$/i.test(val)
    },
    lastNameUser: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(60),
      alpha: val => /^[-а-яА-яa-zA-z\\s]*$/i.test(val)
    },
    emailUser: {
      required,
      email
    }
  },
  watch: {
    // При изменении локального состояния
    // отправляем объект наверх
    localUser: {
      deep: true, // отследил в глубь
      handler() {
        // показал
        // this.$emit('update', Object.assign({}, this.localUser))
        this.$emit('input', this.localUser)
        // this.$emit('test', Object.assign({}, this.localUser)) // из model => prop =>  event - генерируем и вместо input -> test
      }
    }

    // что бы следить за самим user
    // user:{
    // deepEqual  - что бы не входить в цикл
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
</script>
