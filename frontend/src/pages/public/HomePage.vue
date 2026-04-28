<template lang="pug">
.wrapper
  .welcome
    ParallaxMount
    HeroSection
    AboutSection
    .triangles.triangles--section
      svg.triangles__item.arrow(viewBox="0 0 1000 100" preserveAspectRatio="none")
        polygon(points="0,0 0,100 1000,100")
      svg.triangles__item.arrow(viewBox="0 0 1000 100" preserveAspectRatio="none")
        polygon(points="1000,0 1000,100 0,100")
  SkillsSection
  WorksSection
  .main
    .triangles.triangles--rotate
      svg.triangles__item.arrow(viewBox="0 0 1000 100" preserveAspectRatio="none")
        polygon(points="1000,0 1000,100 0,100")
      svg.triangles__item.arrow(viewBox="0 0 1000 100" preserveAspectRatio="none")
        polygon(points="0,0 0,100 1000,100")
    BuddhaParallax
    ReviewsSection
    ContactFormSection
  FooterSection
</template>

<script setup>
import AboutSection from "@/public/sections/AboutSection.vue";
import BuddhaParallax from "@/public/sections/BuddhaParallax.vue";
import ContactFormSection from "@/public/sections/ContactFormSection.vue";
import FooterSection from "@/public/sections/FooterSection.vue";
import HeroSection from "@/public/sections/HeroSection.vue";
import ParallaxMount from "@/public/sections/ParallaxMount.vue";
import ReviewsSection from "@/public/sections/ReviewsSection.vue";
import SkillsSection from "@/public/sections/SkillsSection.vue";
import WorksSection from "@/public/sections/WorksSection.vue";
</script>
