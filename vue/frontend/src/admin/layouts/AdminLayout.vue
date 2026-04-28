<template>
  <div class="admin-app">
    <div class="admin-shell">
      <aside class="admin-sidebar">
        <div class="admin-sidebar__brand">
          <p class="admin-sidebar__eyebrow">Portfolio</p>
          <h1>Admin</h1>
        </div>

        <nav class="admin-nav">
          <RouterLink :to="{ name: 'dashboard' }" class="admin-nav__link">Главная</RouterLink>
          <RouterLink :to="{ name: 'skills' }" class="admin-nav__link">Навыки</RouterLink>
          <RouterLink :to="{ name: 'works' }" class="admin-nav__link">Работы</RouterLink>
          <RouterLink :to="{ name: 'reviews' }" class="admin-nav__link">Отзывы</RouterLink>
        </nav>

        <button class="button button--ghost admin-sidebar__logout" @click="handleLogout">
          Выйти
        </button>
      </aside>

      <main class="admin-content">
        <header class="admin-header">
          <div>
            <p class="admin-header__eyebrow">Панель управления</p>
            <h2>{{ pageTitle }}</h2>
          </div>

          <div class="admin-header__profile" v-if="authStore.admin">
            <span>{{ authStore.admin.email }}</span>
          </div>
        </header>

        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "@/admin/stores/auth";

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();

const titles = {
  dashboard: "Обзор",
  skills: "Навыки",
  works: "Работы",
  reviews: "Отзывы"
};

const pageTitle = computed(() => titles[route.name] || "Админ-панель");

onMounted(async () => {
  try {
    await authStore.loadProfile();
  } catch (error) {
    authStore.logout();
    router.push({ name: "login" });
  }
});

function handleLogout() {
  authStore.logout();
  router.push({ name: "login" });
}
</script>
