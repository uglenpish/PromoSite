<template>
  <section class="dashboard-grid">
    <AppCard>
      <template #title>
        <h3>Состояние проекта</h3>
      </template>
      <p>
        Новая админ-панель работает на Vue 3 и использует backend API для управления
        контентом сайта.
      </p>
    </AppCard>

    <AppCard>
      <template #title>
        <h3>Быстрые ссылки</h3>
      </template>
      <div class="dashboard-links">
        <RouterLink class="button button--ghost" :to="{ name: 'skills' }">Навыки</RouterLink>
        <RouterLink class="button button--ghost" :to="{ name: 'works' }">Работы</RouterLink>
        <RouterLink class="button button--ghost" :to="{ name: 'reviews' }">Отзывы</RouterLink>
      </div>
    </AppCard>
  </section>
</template>

<script setup>
import AppCard from "@/admin/components/AppCard.vue";
</script>
