<template lang="pug">
.wrapper
  .welcome
    ParallaxMount
    HeroSection
  WorksSection
  FooterSection
</template>

<script setup>
import FooterSection from "@/public/sections/FooterSection.vue";
import HeroSection from "@/public/sections/HeroSection.vue";
import ParallaxMount from "@/public/sections/ParallaxMount.vue";
import WorksSection from "@/public/sections/WorksSection.vue";
</script>
