<template lang="pug">
.parallax-buddha
  .parallax__image(ref="parallaxRoot")
    .parallax__layer(data-speed="0")
      img.parallax__bg(:src="images.buddhaBackground" alt="")
    .parallax__layer(data-speed="0.15")
      img.parallax__mount(:src="images.buddhaMount" alt="")
    .parallax__layer(data-speed="0.15")
      img.parallax__buddha(:src="images.buddha" alt="")
    .parallax__layer(data-speed="0.15")
      img.parallax__cloud(:src="images.cloudFront" alt="")
    .parallax__layer(data-speed="0.12")
      img.parallax__cloudmid(:src="images.cloudMiddle" alt="")
    .parallax__layer(data-speed="0.15")
      img.parallax__cloudback(:src="images.cloudBack" alt="")
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { images } from "@/public/data/assets";

const parallaxRoot = ref(null);

function handleScroll() {
  const layers = Array.from(parallaxRoot.value?.children || []);
  const scrollTop = window.pageYOffset;

  layers.forEach((layer) => {
    const speed = Number(layer.dataset.speed || 0);
    const strafe = (scrollTop * speed) / 10;
    layer.style.transform = `translateY(-${strafe}%)`;
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
