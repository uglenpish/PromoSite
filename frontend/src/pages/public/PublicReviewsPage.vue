<template lang="pug">
.wrapper
  .welcome
    ParallaxMount
    HeroSection
  .main
    BuddhaParallax
    ReviewsSection
    ContactFormSection
  FooterSection
</template>

<script setup>
import BuddhaParallax from "@/public/sections/BuddhaParallax.vue";
import ContactFormSection from "@/public/sections/ContactFormSection.vue";
import FooterSection from "@/public/sections/FooterSection.vue";
import HeroSection from "@/public/sections/HeroSection.vue";
import ParallaxMount from "@/public/sections/ParallaxMount.vue";
import ReviewsSection from "@/public/sections/ReviewsSection.vue";
</script>
