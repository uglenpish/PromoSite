<template>
  <div class="stack">
    <AppCard>
      <template #title>
        <h3>{{ editingId ? "Редактировать отзыв" : "Добавить отзыв" }}</h3>
      </template>

      <form class="grid-form" @submit.prevent="submitForm">
        <FormField v-model="form.name" label="Имя автора" placeholder="Дмитрий" />
        <FormField v-model="form.role" label="Должность" placeholder="Frontend developer" />
        <FormField v-model="form.message" label="Текст отзыва" multiline placeholder="Текст отзыва" />
        <FileField
          v-model="form.avatar"
          label="Аватар"
          placeholder="Выберите JPG/PNG/WebP"
        />
        <div class="form-actions">
          <button class="button" type="submit">
            {{ editingId ? "Сохранить изменения" : "Создать отзыв" }}
          </button>
          <button v-if="editingId" class="button button--ghost" type="button" @click="resetForm">
            Отмена
          </button>
        </div>
      </form>
    </AppCard>

    <AppCard>
      <template #title>
        <h3>Список отзывов</h3>
      </template>

      <EmptyState
        v-if="!items.length"
        title="Отзывы не найдены"
        description="После добавления отзыва он появится в этом списке."
      />

      <div v-else class="entity-stack">
        <article class="entity-card entity-card--media" v-for="item in items" :key="item.id">
          <img
            v-if="item.avatarUrl"
            class="entity-card__avatar"
            :src="resolveMediaUrl(item.avatarUrl)"
            :alt="item.name"
          />

          <div class="entity-card__body">
            <div class="entity-card__head">
              <div>
                <h4>{{ item.name }}</h4>
                <p>{{ item.role }}</p>
              </div>
              <div class="table-actions">
                <button class="button button--ghost" @click="startEdit(item)">Править</button>
                <button class="button button--ghost" @click="removeItem(item.id)">Удалить</button>
              </div>
            </div>

            <p>{{ item.message }}</p>
          </div>
        </article>
      </div>
    </AppCard>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import AppCard from "@/admin/components/AppCard.vue";
import EmptyState from "@/admin/components/EmptyState.vue";
import FileField from "@/admin/components/FileField.vue";
import FormField from "@/admin/components/FormField.vue";
import { reviewsApi } from "@/admin/api/reviews";

const API_ORIGIN = (import.meta.env.VITE_API_ORIGIN || "http://localhost:3000").replace(/\/$/, "");

const items = ref([]);
const editingId = ref(null);
const form = reactive(getDefaultForm());

function getDefaultForm() {
  return {
    name: "",
    role: "",
    message: "",
    avatar: null
  };
}

function resetForm() {
  Object.assign(form, getDefaultForm());
  editingId.value = null;
}

function createPayload() {
  const payload = new FormData();
  payload.append("name", form.name);
  payload.append("role", form.role);
  payload.append("message", form.message);

  if (form.avatar instanceof File) {
    payload.append("avatar", form.avatar);
  }

  return payload;
}

function resolveMediaUrl(path) {
  return `${API_ORIGIN}${path}`;
}

async function loadItems() {
  const { data } = await reviewsApi.getAll();
  items.value = data.items;
}

async function submitForm() {
  const payload = createPayload();

  if (editingId.value) {
    await reviewsApi.update(editingId.value, payload);
  } else {
    await reviewsApi.create(payload);
  }

  resetForm();
  await loadItems();
}

function startEdit(item) {
  editingId.value = item.id;
  form.name = item.name;
  form.role = item.role;
  form.message = item.message;
  form.avatar = null;
}

async function removeItem(id) {
  await reviewsApi.delete(id);
  if (editingId.value === id) {
    resetForm();
  }
  await loadItems();
}

onMounted(loadItems);
</script>
