import { defineStore } from "pinia";
import { ref } from "vue";
import { skillsApi } from "../api/modules/skills";

export const useSkillsStore = defineStore('skills', () => {

  const skills = ref([]);

  async function loadSkills() {
    const { data } = await skillsApi.getGroups();

    skills.value = data.items;
  }

  return {
    skills,
    loadSkills,
  };
});