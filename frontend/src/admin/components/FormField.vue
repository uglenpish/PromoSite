<template>
  <label class="field">
    <span class="field__label">{{ label }}</span>
    <component
      :is="multiline ? 'textarea' : 'input'"
      class="field__input"
      :value="modelValue"
      :type="type"
      :min="min"
      :max="max"
      :step="step"
      :placeholder="placeholder"
      rows="5"
      @input="emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>

<script setup>
const emit = defineEmits(["update:modelValue"]);

defineProps({
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: [String, Number],
    default: ""
  },
  multiline: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: "text"
  },
  placeholder: {
    type: String,
    default: ""
  },
  min: {
    type: [String, Number],
    default: undefined
  },
  max: {
    type: [String, Number],
    default: undefined
  },
  step: {
    type: [String, Number],
    default: undefined
  }
});
</script>
