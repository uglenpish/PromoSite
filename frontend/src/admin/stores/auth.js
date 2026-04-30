import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { authApi } from "@/api/modules/auth";

const TOKEN_KEY = "promo_admin_token";
const ADMIN_KEY = "promo_admin_profile";

export const useAuthStore = defineStore("auth", () => {
  const token = ref("");
  const admin = ref(null);
  const isHydrated = ref(false);
  const isLoading = ref(false);
  const error = ref("");

  const isAuthenticated = computed(() => Boolean(token.value));

  function hydrate() {
    if (isHydrated.value) {
      return;
    }

    token.value = localStorage.getItem(TOKEN_KEY) || "";
    const serializedAdmin = localStorage.getItem(ADMIN_KEY);
    admin.value = serializedAdmin ? JSON.parse(serializedAdmin) : null;
    isHydrated.value = true;
  }

  function persistSession(nextToken, nextAdmin) {
    token.value = nextToken;
    admin.value = nextAdmin;

    localStorage.setItem(TOKEN_KEY, nextToken);
    localStorage.setItem(ADMIN_KEY, JSON.stringify(nextAdmin));
  }

  function clearSession() {
    token.value = "";
    admin.value = null;
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(ADMIN_KEY);
  }

  async function login(payload) {
    isLoading.value = true;
    error.value = "";

    try {
      const { data } = await authApi.login(payload);
      persistSession(data.token, data.admin);
      return data;
    } catch (requestError) {
      error.value =
        requestError.response?.data?.error || "Не удалось выполнить вход";
      throw requestError;
    } finally {
      isLoading.value = false;
    }
  }

  async function loadProfile() {
    if (!token.value) {
      return null;
    }

    const { data } = await authApi.me();
    admin.value = data.admin;
    localStorage.setItem(ADMIN_KEY, JSON.stringify(data.admin));
    return data.admin;
  }

  function logout() {
    clearSession();
  }

  return {
    admin,
    error,
    isAuthenticated,
    isLoading,
    loadProfile,
    login,
    logout,
    hydrate,
    token
  };
});
