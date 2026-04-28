<template lang="pug">
section#form.contacts
  .container
    h2.contacts__title.title Связаться со мной
    form.form(name="connectForm" @submit.prevent="submitForm")
      .form__row
        label.form__block(:class="{ error: !state.nameValid }")
          .form__block-label Введите ваше имя
          .form__block-wrap
            AppIcon(name="user" class-name="form__block-icon")
            .form__block-field
              input#input-username.form__block-input(
                v-model="state.username"
                placeholder="Иванов Иван"
                type="text"
                name="username"
                autocomplete="off"
                @input="validateName"
                @focus="clearPlaceholder"
              )
          .error-tooltip {{ state.nameError }}
        label.form__block(:class="{ error: !state.emailValid }")
          .form__block-label Введите ваше email
          .form__block-wrap
            AppIcon(name="envelope" class-name="form__block-icon")
            .form__block-field
              input#input-email.form__block-input(
                v-model="state.email"
                placeholder="example@mail.com"
                type="email"
                name="email"
                autocomplete="off"
                @input="validateEmail"
                @focus="clearPlaceholder"
              )
          .error-tooltip {{ state.emailError }}
      .form__row.form__row--more-margin
        label.form__block(:class="{ error: !state.commentValid }")
          .form__block-label Сообщение к письму
          .form__block-wrap.form__block-wrap--align-top
            AppIcon(name="message" class-name="form__block-icon")
            .form__block-field
              textarea.form__block-input.form__block-textarea(
                v-model="state.comment"
                placeholder="Требуется ваша помощь в создании сайта. \nИнтересуют сроки и цена вопроса"
                rows="3"
                name="comment"
                @input="validateComment"
                @focus="clearPlaceholder"
              )
          .error-tooltip {{ state.commentError }}
      .form__row
        .form__buttons
          button.custom-btn(type="submit" name="btn-submit") Отправить
  .overlay(:class="{ disabled: state.overlayHidden }" @click="hideOverlay")
    .overlay__container
      .overlay__content
        .overlay__title {{ state.overlayMessage }}
        .overlay__btn-wrap
          .overlay__btn(@click.stop="hideOverlay") Закрыть
</template>

<script setup>
import { reactive } from "vue";
import AppIcon from "@/public/components/AppIcon.vue";

const state = reactive({
  comment: "",
  commentError: "",
  commentValid: true,
  email: "",
  emailError: "",
  emailValid: true,
  nameError: "",
  nameValid: true,
  overlayHidden: true,
  overlayMessage: "",
  username: ""
});

function clearPlaceholder(event) {
  event.target.placeholder = "";
}

function validateName() {
  if (state.username.length < 3) {
    state.nameValid = false;
    state.nameError = "Слишком короткое имя";
    return false;
  }

  state.nameValid = true;
  state.nameError = "";
  return true;
}

function validateEmail() {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

  if (state.email.length < 8) {
    state.emailValid = false;
    state.emailError = "Короткий email";
    return false;
  }

  if (!regex.test(state.email)) {
    state.emailValid = false;
    state.emailError = "Неверный email";
    return false;
  }

  state.emailValid = true;
  state.emailError = "";
  return true;
}

function validateComment() {
  if (state.comment.length < 20) {
    state.commentValid = false;
    state.commentError = "Слишком короткое сообщение";
    return false;
  }

  state.commentValid = true;
  state.commentError = "";
  return true;
}

function hideOverlay() {
  state.overlayHidden = true;
}

function submitForm() {
  const isValid = validateName() && validateEmail() && validateComment();

  if (!isValid) {
    return;
  }

  state.overlayMessage = "Сообщение отправлено!";
  state.overlayHidden = false;
  window.setTimeout(hideOverlay, 5000);
}
</script>
