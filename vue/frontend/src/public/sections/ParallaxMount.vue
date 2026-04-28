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
const factors = [350, 250, 150, 60, 250, 250, 300];

function handleScroll() {
  const scrollTop = window.pageYOffset;
  const layers = Array.from(root.value?.children || []);

  layers.forEach((layer, index) => {
    if (!layer) {
      return;
    }

    const offset = `${scrollTop / -factors[index]}%`;
    layer.style.top = offset;
    layer.style.transform = `translate3d(0, ${offset}, 0)`;
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
