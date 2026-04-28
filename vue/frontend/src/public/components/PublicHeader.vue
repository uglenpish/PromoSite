<template lang="pug">
header.heder
  .heder__logo
    .logo СД
  .heder__menu
    nav.nav
      ul.nav__list
        li.nav__item(v-for="item in navigation" :key="item.label")
          RouterLink.nav__link(:to="item.to" @click="closeMenu") {{ item.label }}
  .heder__socials
    ul.socials__list
      li.socials__item(v-for="item in socialIcons" :key="item")
        a.socials__link(href="#" @click.prevent)
          AppIcon(:name="item" class-name="socials__icon")
    button.nav__btn(type="button" @click="toggleMenu")
      AppIcon(name="menu" class-name="nav__gam-icon")
  .header__gam-menu(:class="{ 'header__gam-menu--opend': isMenuOpen }")
    button.nav__close.gam-menu__close(type="button" @click="toggleMenu")
      AppIcon(name="remove" class-name="nav__close-icon")
    .gam__menu-nav
      nav.nav
        ul.nav__list
          li.nav__item(v-for="item in navigation" :key="`${item.label}-mobile`")
            RouterLink.nav__link(:to="item.to" @click="closeMenu") {{ item.label }}
      ul.socials__list
        li.socials__item(v-for="item in socialIcons" :key="`${item}-mobile`")
          a.socials__link(href="#" @click.prevent)
            AppIcon(:name="item" class-name="socials__icon")
</template>

<script setup>
import { computed, onBeforeUnmount, ref, watch } from "vue";
import { useRoute } from "vue-router";
import AppIcon from "@/public/components/AppIcon.vue";
import { socialIcons } from "@/public/data/assets";

const route = useRoute();
const isMenuOpen = ref(false);

const navigation = computed(() => [
  { label: "Главная", to: { name: "home" } },
  { label: "Обо мне", to: { name: "home", hash: "#about" } },
  { label: "Навыки", to: { name: "home", hash: "#skills" } },
  { label: "Работы", to: { name: "public-works" } },
  { label: "Отзывы", to: { name: "public-reviews" } },
  { label: "Связаться", to: { name: "home", hash: "#form" } }
]);

function syncBodyState() {
  document.body.classList.toggle("body--activ", isMenuOpen.value);
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}

watch(isMenuOpen, syncBodyState);
watch(
  () => route.fullPath,
  () => {
    closeMenu();
  }
);

onBeforeUnmount(() => {
  document.body.classList.remove("body--activ");
});
</script>
