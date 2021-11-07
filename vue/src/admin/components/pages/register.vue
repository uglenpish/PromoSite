<template lang="pug">
  section.login#section-login
    .login__container
      .login__content
        .login__title Регистрация
        form(
          @submit.prevent="register"
        ).login__form
          label.login__label
            input(
              type="text"
              name="login-login"
              required=""
              v-model="user.name"
            ).login__input
            .login__form-title Логин
            .login__icon-wrap
              .login__icon
          label.login__label
            input(
              type="password"
              name="login-password"
              required=""
              v-model="user.password"
            ).login__input
            .login__form-title Пароль
            .login__icon-wrap
              .login__icon.login__icon-key
          label.login__label
            input(
              type="email"
              name="login-email"
              required=""
              v-model="user.email"
            ).login__input
            .login__form-title Email
            .login__icon-wrap
              .login__icon
          date-picker(
            id="date_to"
            v-model="user.birthday"
            value-type="YYYY-MM-DD"
            format="YYYY-MM-DD"
            type="datetime"
            input-class ="login__input"
            popup-class="login__time"
            open=false
          )
          router-link(
              to="/login"
            ) Уже есть аккаунт
          .login__btn-wrap
            button(
              type="submit"
            ).login__btn-login Отправить
</template>

<script>
import DatePicker from 'vue2-datepicker';
import { REGISTER } from "../../store/action.type";
import { mapState } from "vuex";

export default {
  name: "register",
  components:{
    DatePicker,
  },
  data() {
    return {
      user: {
        password: '',
        email: '',
        name: '',
        birthday: '',
        access_token: '1234qwerty12345ccdd'
      }
    }
  },
  methods: {
    register() {
      this.$store.dispatch(REGISTER, {
        email: this.user.email,
        password: this.user.password,
        username: this.user.name,
        birthday: this.user.birthday,
        access_token: this.user.access_token
      });
    }
  }
}
</script>

<style scoped>
.login__container{
  height: 100%;
}

.login__time{
  background: #1d2124;
  color: #9fcdff;
}

.mx-icon__calendar{
  display: none;
}
</style>