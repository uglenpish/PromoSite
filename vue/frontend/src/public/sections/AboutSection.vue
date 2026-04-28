<template lang="pug">
section#about.about
  .container.about__container
    .about-left
      .user.about__left-user
        .user__avatar.avatar
          img.avatar__pic(:src="images.user" alt="Дмитрий Стерлин")
        ul.user__desc
          li.user__desc-item(v-for="item in items" :key="item.label")
            span.user__key {{ item.label }}
            span.user__value {{ item.value }}
    .about-right
      h4.about__prolog Привет, меня зовут
      h2.about__title.title Дмитрий Стерлин
      .about__text
        p Я занимаюсь разработкой современных сайтов и приложений.
        p Мне нравится делать интересные и современные проекты.
      .about__ps Этот сайт я сделал в рамках обучения в Школе онлайн образования LoftShool. Чуть позже я освежу в нем свой контент. А пока посмотрите, как тут все классно и красиво!
</template>

<script setup>
import { images } from "@/public/data/assets";

const items = [
  { label: "Проживаю", value: "Воронеж" },
  { label: "Возраст", value: "34" },
  { label: "Родился", value: "25 февраля 1986" }
];
</script>
