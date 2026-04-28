<template lang="pug">
section.hero
  .container.container__hero
    PublicHeader
    .hero__content
      .preview
        .preview__desc
          p.preview__desc-text Личный сайт
          p.preview__desc-text веб-разработчика
        .preview__username
          h1.preview__username-title Стерлин
          h1.preview__username-title Дмитрий
    .hero__scroll.scroll__btn
      RouterLink.scroll__btn-text(:to="{ name: 'home', hash: '#form' }") Скролл
      AppIcon(name="scroll" class-name="scroll__btn-icon")
</template>

<script setup>
import AppIcon from "@/public/components/AppIcon.vue";
import PublicHeader from "@/public/components/PublicHeader.vue";
</script>
