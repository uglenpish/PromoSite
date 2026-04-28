<template>
  <label class="field">
    <span class="field__label">{{ label }}</span>
    <input class="field__input" type="file" :accept="accept" @change="handleChange" />
    <span class="field__hint" v-if="modelValue">{{ modelValue.name }}</span>
    <span class="field__hint" v-else-if="placeholder">{{ placeholder }}</span>
  </label>
</template>

<script setup>
function handleChange(event) {
  const file = event.target.files?.[0] || null;
  emit("update:modelValue", file);
}

const emit = defineEmits(["update:modelValue"]);

defineProps({
  accept: {
    type: String,
    default: "image/*"
  },
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: [File, Object, null],
    default: null
  },
  placeholder: {
    type: String,
    default: ""
  }
});
</script>
