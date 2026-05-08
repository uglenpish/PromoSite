<template>
  <form class="grid-form" @submit.prevent="emit('submit')">
    <FormField v-model="localForm.firstName" label="Имя" placeholder="Дмитрий" />
    <FormField v-model="localForm.lastName" label="Фамилия" placeholder="Стерлин" />
    <FormField v-model="localForm.birthDate" label="Дата рождения" type="date" />
    <FormField
      v-model="localForm.bio"
      label="Описание"
      multiline
      placeholder="Коротко расскажите о себе"
    />
    <FileField
      v-model="localForm.photo"
      label="Фото"
      placeholder="Выберите JPG/PNG/WebP"
    />
    <div class="form-actions">
      <button class="button" type="submit" :disabled="loading">Сохранить профиль</button>
    </div>
  </form>
</template>

<script setup>
import { reactive, watch } from "vue";
import FileField from "@/admin/components/FileField.vue";
import FormField from "@/admin/components/FormField.vue";

const props = defineProps({
  form: {
    type: Object,
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(["submit", "update:form"]);

const localForm = reactive({
  firstName: "",
  lastName: "",
  birthDate: "",
  bio: "",
  photo: null
});

watch(
  () => props.form,
  (nextForm) => {
    Object.assign(localForm, nextForm);
  },
  { deep: true, immediate: true }
);

watch(
  localForm,
  (nextForm) => {
    emit("update:form", { ...nextForm });
  },
  { deep: true }
);
</script>
