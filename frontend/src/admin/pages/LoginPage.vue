<template>
  <div class="admin-app auth-page">
    <form class="auth-card" @submit.prevent="handleSubmit">
      <p class="auth-card__eyebrow">Portfolio Admin</p>
      <h1>Вход</h1>

      <FormField v-model="form.email" label="Email" type="email" placeholder="admin@example.com" />
      <FormField v-model="form.password" label="Пароль" type="password" placeholder="Введите пароль" />

      <p class="form-error" v-if="authStore.error">{{ authStore.error }}</p>

      <button class="button" type="submit" :disabled="authStore.isLoading">
        {{ authStore.isLoading ? "Входим..." : "Войти" }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import FormField from "@/admin/components/FormField.vue";
import { useAuthStore } from "@/admin/stores/auth";

const router = useRouter();
const authStore = useAuthStore();

const form = reactive({
  email: "admin@example.com",
  password: "admin12345"
});

async function handleSubmit() {
  try {
    await authStore.login(form);
    router.push({ name: "dashboard" });
  } catch (error) {
    // Ошибка уже отражается в store.
  }
}
</script>
