import { defineStore } from "pinia";
import { ref } from "vue";
import { reviewsApi } from "../api/modules/reviews";

export const useReviewsStore = defineStore("reviews", () => {
  const reviews = ref([]);
  const loading = ref(false);
  const error = ref("");

  async function loadReviews() {
    loading.value = true;
    error.value = "";

    try {
      const { data } = await reviewsApi.getAll();
      reviews.value = data.items;
    } catch (requestError) {
      error.value = requestError.response?.data?.error || "Не удалось загрузить отзывы";
      throw requestError;
    } finally {
      loading.value = false;
    }
  }

  async function createReview(payload) {
    loading.value = true;
    error.value = "";

    try {
      await reviewsApi.create(payload);
      await loadReviews();
    } catch (requestError) {
      error.value = requestError.response?.data?.error || "Не удалось создать отзыв";
      throw requestError;
    } finally {
      loading.value = false;
    }
  }

  async function updateReview(id, payload) {
    loading.value = true;
    error.value = "";

    try {
      await reviewsApi.update(id, payload);
      await loadReviews();
    } catch (requestError) {
      error.value = requestError.response?.data?.error || "Не удалось обновить отзыв";
      throw requestError;
    } finally {
      loading.value = false;
    }
  }

  async function deleteReview(id) {
    loading.value = true;
    error.value = "";

    try {
      await reviewsApi.delete(id);
      reviews.value = reviews.value.filter((item) => item.id !== id);
    } catch (requestError) {
      error.value = requestError.response?.data?.error || "Не удалось удалить отзыв";
      throw requestError;
    } finally {
      loading.value = false;
    }
  }

  return {
    reviews,
    loading,
    error,
    loadReviews,
    createReview,
    updateReview,
    deleteReview
  };
});
