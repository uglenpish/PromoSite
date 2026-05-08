<template lang="pug">
section#reviews.review
  .container
    .review__container
      .review__row
        h2.review__title.title Что обо мне говорят
        .review__btn
          button.slider__arrow-btn.slider__arrow-btn--prev(
            @click="previous"
            :disabled="currentIndex === 0"
          )
            AppIcon(name="arrow-down" class-name="slider__arrow-icon")
          button.slider__arrow-btn.slider__arrow-btn--next(
            @click="next"
            :disabled="currentIndex === reviews.length - 1 || reviews.length === 0"
          )
            AppIcon(name="arrow-down" class-name="slider__arrow-icon")
      .review__slider
        .review__slider-item(v-for="item in visibleReviews" :key="item.id")
          .rewievs
            .reviews__content
              .reviews__description
                p {{ item.massege }}
              .reviews__info
                .reviews__ava
                  .avatar.reviews__avatar
                    img.avatar__img(:src="item.avatar" :alt="item.name")
                .reviews__data
                  .reviews__data-name {{ item.name }}
                  .reviews__data-subtitle {{ item.rang }}
      p(v-if="!reviews.length") Отзывы пока не добавлены.
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { resolveMediaUrl } from "@/api/helpers/media";
import AppIcon from "@/public/components/AppIcon.vue";
import { images } from "@/public/data/assets";
import { useReviewsStore } from "@/stores/reviewsStore";

const reviewsStore = useReviewsStore();
const currentIndex = ref(0);
const reviews = computed(() =>
  reviewsStore.reviews.map((item) => ({
    ...item,
    avatar: item.avatarUrl ? resolveMediaUrl(item.avatarUrl) : images.user,
    massege: item.message,
    rang: item.role
  }))
);

const visibleReviews = computed(() => {
  const currentReview = reviews.value[currentIndex.value];
  return currentReview ? [currentReview] : [];
});

function next() {
  if (currentIndex.value < reviews.value.length - 1) {
    currentIndex.value += 1;
  }
}

function previous() {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1;
  }
}

async function loadReviews() {
  await reviewsStore.loadReviews();
  currentIndex.value = 0;
}

onMounted(loadReviews);
</script>
