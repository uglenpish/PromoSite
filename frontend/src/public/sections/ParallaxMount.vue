<template lang="pug">
.parallax-mount(ref="root")
  .parallax-mount__layer.parallax-mount__layer--1
  .parallax-mount__layer.parallax-mount__layer--2
  .parallax-mount__layer.parallax-mount__layer--3
  .parallax-mount__layer.parallax-mount__layer--4
  .parallax-mount__layer.parallax-mount__layer--5
  .parallax-mount__layer.parallax-mount__layer--6
  .parallax-mount__layer.parallax-mount__layer--7
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const root = ref(null);
const speeds = [0.12, 0.2, 0.38, 0.58, 0.26, 0.18, 0.3];

function handleScroll() {
  const scrollTop = window.pageYOffset;
  const layers = Array.from(root.value?.children || []);

  layers.forEach((layer, index) => {
    if (!layer) {
      return;
    }

    const offset = scrollTop * speeds[index];
    layer.style.transform = `translate3d(0, ${-offset}px, 0)`;
  });
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
