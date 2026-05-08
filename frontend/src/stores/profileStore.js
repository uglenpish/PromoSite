import { defineStore } from "pinia";
import { ref } from "vue";
import { profileApi } from "../api/modules/profile";

export const useProfileStore = defineStore("profile", () => {
  const profile = ref(null);
  const loading = ref(false);
  const error = ref("");

  async function loadPublicProfile() {
    loading.value = true;
    error.value = "";

    try {
      const { data } = await profileApi.getPublic();
      profile.value = data.profile;
      return data.profile;
    } catch (requestError) {
      error.value = requestError.response?.data?.error || "Не удалось загрузить профиль";
      throw requestError;
    } finally {
      loading.value = false;
    }
  }

  async function loadAdminProfile() {
    loading.value = true;
    error.value = "";

    try {
      const { data } = await profileApi.getAdmin();
      profile.value = data.profile;
      return data.profile;
    } catch (requestError) {
      error.value = requestError.response?.data?.error || "Не удалось загрузить профиль";
      throw requestError;
    } finally {
      loading.value = false;
    }
  }

  async function updateProfile(payload) {
    loading.value = true;
    error.value = "";

    try {
      const { data } = await profileApi.update(payload);
      profile.value = data.profile;
      return data.profile;
    } catch (requestError) {
      error.value = requestError.response?.data?.error || "Не удалось обновить профиль";
      throw requestError;
    } finally {
      loading.value = false;
    }
  }

  return {
    profile,
    loading,
    error,
    loadPublicProfile,
    loadAdminProfile,
    updateProfile
  };
});
