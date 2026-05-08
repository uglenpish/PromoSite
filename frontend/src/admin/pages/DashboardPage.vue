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
      <template #title>
        <h3>Секция «Обо мне»</h3>
      </template>

      <ProfileForm v-model:form="form" :loading="profileStore.loading" @submit="submitForm" />
    </AppCard>
  </section>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import AppCard from "@/admin/components/AppCard.vue";
import ProfileForm from "@/admin/components/ProfileForm.vue";
import { useProfileStore } from "@/stores/profileStore";

const profileStore = useProfileStore();
const form = reactive(getDefaultForm());

function getDefaultForm() {
  return {
    firstName: "",
    lastName: "",
    birthDate: "",
    bio: "",
    photo: null
  };
}

function fillForm(profile) {
  Object.assign(form, {
    firstName: profile?.firstName || "",
    lastName: profile?.lastName || "",
    birthDate: profile?.birthDate || "",
    bio: profile?.bio || "",
    photo: null
  });
}

function createPayload() {
  const payload = new FormData();
  payload.append("firstName", form.firstName);
  payload.append("lastName", form.lastName);
  payload.append("birthDate", form.birthDate);
  payload.append("bio", form.bio);

  if (form.photo instanceof File) {
    payload.append("photo", form.photo);
  }

  return payload;
}

async function submitForm() {
  try {
    const profile = await profileStore.updateProfile(createPayload());
    fillForm(profile);
  } catch (error) {
    console.error("Не удалось сохранить профиль", error);
  }
}

onMounted(async () => {
  const profile = await profileStore.loadAdminProfile();
  fillForm(profile);
});
</script>
