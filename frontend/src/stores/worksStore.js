import { defineStore } from "pinia";
import { ref } from "vue";
import { worksApi } from "../api/modules/works";

export const useWorksStore = defineStore("works", () => {
  const works = ref([]);
  const loading = ref(false);
  const error = ref("");

  async function loadWorks() {
    loading.value = true;
    error.value = "";

    try {
      const { data } = await worksApi.getAll();
      works.value = data.items;
    } catch (requestError) {
      error.value = requestError.response?.data?.error || "Не удалось загрузить работы";
      throw requestError;
    } finally {
      loading.value = false;
    }
  }

  async function createWork(payload) {
    loading.value = true;
    error.value = "";

    try {
      await worksApi.create(payload);
      await loadWorks();
    } catch (requestError) {
      error.value = requestError.response?.data?.error || "Не удалось создать работу";
      throw requestError;
    } finally {
      loading.value = false;
    }
  }

  async function updateWork(id, payload) {
    loading.value = true;
    error.value = "";

    try {
      await worksApi.update(id, payload);
      await loadWorks();
    } catch (requestError) {
      error.value = requestError.response?.data?.error || "Не удалось обновить работу";
      throw requestError;
    } finally {
      loading.value = false;
    }
  }

  async function deleteWork(id) {
    loading.value = true;
    error.value = "";

    try {
      await worksApi.delete(id);
      works.value = works.value.filter((item) => item.id !== id);
    } catch (requestError) {
      error.value = requestError.response?.data?.error || "Не удалось удалить работу";
      throw requestError;
    } finally {
      loading.value = false;
    }
  }

  return {
    works,
    loading,
    error,
    loadWorks,
    createWork,
    updateWork,
    deleteWork
  };
});
