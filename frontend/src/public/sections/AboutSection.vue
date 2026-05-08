<template lang="pug">
section#about.about
  .container.about__container
    .about-left
      .user.about__left-user
        .user__avatar.avatar
          img.avatar__pic(:src="avatarSrc" :alt="profile?.fullName || 'Фото профиля'")
        ul.user__desc
          li.user__desc-item(v-for="item in items" :key="item.label")
            span.user__key {{ item.label }}
            span.user__value {{ item.value }}
    .about-right
      h4.about__prolog Привет, меня зовут
      h2.about__title.title {{ profile?.fullName || "Имя пока не заполнено" }}
      .about__text
        p(v-for="paragraph in bioParagraphs" :key="paragraph") {{ paragraph }}
      .about__ps(v-if="!bioParagraphs.length")
        | Заполните секцию «Обо мне» в админке, чтобы текст появился на публичной странице.
</template>

<script setup>
import { computed, onMounted } from "vue";
import { resolveMediaUrl } from "@/api/helpers/media";
import { images } from "@/public/data/assets";
import { useProfileStore } from "@/stores/profileStore";

const profileStore = useProfileStore();
const profile = computed(() => profileStore.profile);

const avatarSrc = computed(() =>
  profile.value?.photoUrl ? resolveMediaUrl(profile.value.photoUrl) : images.user
);

const items = computed(() =>
  [
    profile.value?.email ? { label: "Email", value: profile.value.email } : null,
    profile.value?.age ? { label: "Возраст", value: `${profile.value.age}` } : null,
    profile.value?.birthDate
      ? { label: "Родился", value: formatBirthDate(profile.value.birthDate) }
      : null
  ].filter(Boolean)
);

const bioParagraphs = computed(() =>
  (profile.value?.bio || "")
    .split("\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
);

function formatBirthDate(value) {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(value));
}

onMounted(() => {
  profileStore.loadPublicProfile();
});
</script>
