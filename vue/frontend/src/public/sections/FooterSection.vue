<template lang="pug">
footer.footer
  .container.footer__container
    .footer__column
      .footer__copyright © 2020
      .footer__title
        h1.footer__title-by-line
          span Стерлин
            span Дмитрий
        a.footer__title-link(href="#") Личный сайт
          br
          | веб-разработчика
    .footer__column.footer__column_flex-col
      .footer__nav
        nav.nav
          ul.nav__list
            li.nav__item(v-for="item in navigation" :key="item.label")
              RouterLink.nav__link(:to="item.to") {{ item.label }}
      .footer__row
        .footer__column
          .footer__text Этот сайт я сделал в рамках обучения в Школе онлайн образования Loftschool
            .footer__socials
              ul.socials__list
                li.socials__item(v-for="item in socialIcons" :key="item")
                  a.socials__link(href="#" @click.prevent)
                    AppIcon(:name="item" class-name="socials__icon")
        .footer__column.footer__column--modify
          .footer__text Всегда пишите код так, будто сопровождать его будет склонный к насилию психопат, который знает где вы живете
          .footer__text-sig Martin Galding
</template>

<script setup>
import { computed } from "vue";
import AppIcon from "@/public/components/AppIcon.vue";
import { socialIcons } from "@/public/data/assets";

const navigation = computed(() => [
  { label: "Главаная", to: { name: "home" } },
  { label: "Обо мне", to: { name: "home", hash: "#about" } },
  { label: "Навыки", to: { name: "home", hash: "#skills" } },
  { label: "Работы", to: { name: "public-works" } },
  { label: "Отзывы", to: { name: "public-reviews" } },
  { label: "Связаться", to: { name: "home", hash: "#form" } }
]);
</script>
