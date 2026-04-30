<template>
  <div class="stack">
    <AppCard>
      <template #title>
        <h3>{{ editingId ? "Редактировать работу" : "Добавить работу" }}</h3>
      </template>

      <form class="grid-form" @submit.prevent="submitForm">
        <FormField v-model="form.title" label="Название" placeholder="Сайт школы онлайн образования" />
        <FormField v-model="form.link" label="Ссылка" placeholder="https://example.com" />
        <FormField v-model="form.skills" label="Теги" placeholder="Vue 3, SCSS, Express" />
        <FormField
          v-model="form.description"
          label="Описание"
          multiline
          placeholder="Краткое описание проекта"
        />
        <FileField
          v-model="form.image"
          label="Изображение"
          placeholder="Выберите JPG/PNG/WebP"
        />
        <div class="form-actions">
          <button class="button" type="submit">
            {{ editingId ? "Сохранить изменения" : "Создать работу" }}
          </button>
          <button v-if="editingId" class="button button--ghost" type="button" @click="resetForm">
            Отмена
          </button>
        </div>
      </form>
    </AppCard>

    <AppCard>
      <template #title>
        <h3>Список работ</h3>
      </template>

      <EmptyState
        v-if="!items.length"
        title="Работы не найдены"
        description="После добавления работы она появится в этом списке."
      />

      <div v-else class="entity-stack">
        <article class="entity-card entity-card--media" v-for="item in items" :key="item.id">
          <img
            v-if="item.imageUrl"
            class="entity-card__preview"
            :src="resolveMediaUrl(item.imageUrl)"
            :alt="item.title"
          />

          <div class="entity-card__body">
            <div class="entity-card__head">
              <div>
                <h4>{{ item.title }}</h4>
                <a :href="item.link" target="_blank" rel="noreferrer">{{ item.link }}</a>
              </div>
              <div class="table-actions">
                <button class="button button--ghost" @click="startEdit(item)">Править</button>
                <button class="button button--ghost" @click="removeItem(item.id)">Удалить</button>
              </div>
            </div>

            <p>{{ item.description }}</p>
            <ul class="inline-list">
              <li class="pill" v-for="tag in item.tags" :key="tag">{{ tag }}</li>
            </ul>
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
import { resolveMediaUrl } from "@/api/helpers/media";
import { worksApi } from "@/api/modules/works";

const items = ref([]);
const editingId = ref(null);
const form = reactive(getDefaultForm());

function getDefaultForm() {
  return {
    title: "",
    link: "",
    skills: "",
    description: "",
    image: null
  };
}

function resetForm() {
  Object.assign(form, getDefaultForm());
  editingId.value = null;
}

function createPayload() {
  const payload = new FormData();
  payload.append("title", form.title);
  payload.append("link", form.link);
  payload.append("description", form.description);
  payload.append("tags", form.skills);

  if (form.image instanceof File) {
    payload.append("image", form.image);
  }

  return payload;
}

async function loadItems() {
  const { data } = await worksApi.getAll();
  items.value = data.items;
}

async function submitForm() {
  const payload = createPayload();

  if (editingId.value) {
    await worksApi.update(editingId.value, payload);
  } else {
    await worksApi.create(payload);
  }

  resetForm();
  await loadItems();
}

function startEdit(item) {
  editingId.value = item.id;
  form.title = item.title;
  form.link = item.link;
  form.skills = item.tags.join(", ");
  form.description = item.description;
  form.image = null;
}

async function removeItem(id) {
  await worksApi.delete(id);
  if (editingId.value === id) {
    resetForm();
  }
  await loadItems();
}

onMounted(loadItems);
</script>
