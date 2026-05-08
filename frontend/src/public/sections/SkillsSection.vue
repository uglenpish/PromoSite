<template lang="pug">
section#skills.skills
  .container.skills-container
    .skills__decor
      img.skills__decor-pic(:src="images.bag" alt="")
    .skills__content
      .skills__desc
        h2.skills__desc-title Чем я могу быть полезен вам
        .skills__desc-text
          p Этот сайт я сделал в рамках обучения в Школе онлайн образования LoftSchool. Чуть позже я освежу в нём свой контент. А пока посмотрите, как тут всё классно и красиво!
      .skills__values
        .skills__values-container
          ul.skills__list
            li.skills__row(v-for="category in skillsStore.skills" :key="category.title")
              .skills__row-items
                h3.skills__row-title {{ category.title }}
                ul.skills__row-list
                  li.skills__row-item(v-for="skill in category.skills" :key="skill.id")
                    SkillChart(:skill="skill")
</template>

<script setup>
import { onMounted } from "vue";
import SkillChart from "@/public/sections/SkillChart.vue";
import { images } from "@/public/data/assets";

import { useSkillsStore } from "../../stores/skillsStore";
const skillsStore = useSkillsStore();

onMounted(() => {
  skillsStore.loadSkills();
});
</script>
