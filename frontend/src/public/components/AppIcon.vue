<template>
  <span class="app-icon" v-html="iconMarkup"></span>
</template>

<script setup>
import { computed } from "vue";
import arrowDown from "@/images/icons/arrow-down.svg?raw";
import envelope from "@/images/icons/envelope.svg?raw";
import github from "@/images/icons/github.svg?raw";
import insta from "@/images/icons/insta.svg?raw";
import menu from "@/images/icons/menu.svg?raw";
import message from "@/images/icons/message.svg?raw";
import remove from "@/images/icons/remove.svg?raw";
import scroll from "@/images/icons/scroll.svg?raw";
import user from "@/images/icons/user.svg?raw";
import vk from "@/images/icons/vk.svg?raw";

const props = defineProps({
  className: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    required: true
  }
});

const iconMap = {
  "arrow-down": arrowDown,
  envelope,
  github,
  insta,
  menu,
  message,
  remove,
  scroll,
  user,
  vk
};

const iconMarkup = computed(() => {
  const svg = iconMap[props.name] || "";

  if (!svg) {
    return "";
  }

  const normalizedSvg = svg
    .replace(/<\?xml[\s\S]*?\?>/gi, "")
    .replace(/<!DOCTYPE[\s\S]*?>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .trim();

  if (normalizedSvg.includes('class="')) {
    return normalizedSvg.replace(/class="[^"]*"/, `class="${props.className}"`);
  }

  return normalizedSvg.replace("<svg", `<svg class="${props.className}"`);
});
</script>

<style scoped>
.app-icon {
  display: inline-flex;
}
</style>
