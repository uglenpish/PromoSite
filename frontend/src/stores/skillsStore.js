import { defineStore } from "pinia";
import { ref } from "vue";
import { skillsApi } from "../api/modules/skills";

export const useSkillsStore = defineStore('skills', () => {

  const skills = ref([]);
  const loading = ref(false);
  const error = ref(null);  

  async function loadSkills() {
    loading.value = true;
    error.value = null;

    try {
      const { data } = await skillsApi.getGroups();
      skills.value = data.items;
    } catch (err) {
      error.value = err.message || 'Ошибка загрузки';
    } finally {
      loading.value = false;
    }
  }

  async function createGroup(title) {
    loading.value = true;
    error.value = null;

    try {
      await skillsApi.createGroup({ title: title });
      await loadSkills();
    } catch(err) {
      error.value = err.message || 'Ошибка создания группы';
      throw err;
    } finally {
      loading.value = false;
    }
  }

  async function deleteGroup(id) {
    loading.value = true;

    try {
      await skillsApi.deleteGroup(id);
      await loadSkills();
    } catch (err) {
      error.value = err.message || 'Ошибка удаления группы';
      throw err;
    } finally {
      loading.value = false;
    }
  }

  async function createSkill(groupId, title, percent) {
    loading.value = true;
    try {
      await skillsApi.createSkill(groupId, { title, percent: Number(percent) });
      await loadSkills();
    } catch (err) {
      error.value = err.message || 'Ошибка создания навыка';
      throw err;
    } finally {
      loading.value = false;
    }
  }

  // Удалить навык
  async function deleteSkill(id) {
    loading.value = true;
    try {
      await skillsApi.deleteSkill(id);
      await loadSkills();
    } catch (err) {
      error.value = err.message || 'Ошибка удаления навыка';
      throw err;
    } finally {
      loading.value = false;
    }
  }

  return {
    skills,
    loading,
    error,
    loadSkills,
    createGroup,
    deleteGroup,
    createSkill,
    deleteSkill,
  };
});
