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

    <AppCard>
      <form action="">
        <FormField v-model="form.firestName" label="Email" type="text" placeholder="Имя" />
        <FormField v-model="form.lastName" label="Пароль" type="text" placeholder="Фамилия" />
        <FormField v-model="form.birthday" label="Пароль" type="text" placeholder="Дата рождения" />
      </form>
    </AppCard>
  </section>
</template>

<script setup>
  import AppCard from "@/admin/components/AppCard.vue";
  import FormField from "@/admin/components/FormField.vue";
  import { reactive } from "vue";

  const form = reactive({
    firestName: "",
    lastName: "",
    birthday: "",
  });
</script>
