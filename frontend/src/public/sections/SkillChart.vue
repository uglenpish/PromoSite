<template lang="pug">
.skill
  svg.skill__shape(viewBox="0 0 100 100")
    circle.skill__circle.skill__circle--under(r="40" cx="50" cy="50")
    circle.skill__circle.skill__circle--above(ref="circle" r="40" cx="50" cy="50" stroke="url(#gradients)")
    linearGradient#gradients(x1="0%" y1="0%" x2="100%" y2="0")
      stop(offset="0%" stop-color="#9300e8")
      stop(offset="100%" stop-color="#4a00ed")
  .skill__title {{ skill.title }}
</template>

<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  skill: {
    type: Object,
    required: true
  }
});

const circle = ref(null);

onMounted(() => {
  const element = circle.value;
  const dashArray = parseInt(getComputedStyle(element).getPropertyValue("stroke-dasharray"), 10);
  const percent = (dashArray / 100) * (100 - props.skill.percent);
  element.style.strokeDashoffset = percent;
});
</script>
