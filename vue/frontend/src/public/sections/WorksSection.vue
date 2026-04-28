<template lang="pug">
section#works.work
  .container
    h2.title.work__title Мои работы
    .work__content
      .work__slider(v-if="currentWork")
        .slider
          .slider__wrap.work__slider-wrap(:data-slide="currentIndex + 1")
            img.works__slider-pich(:src="currentWork.photo" :alt="currentWork.title")
            ul.slider__list
              li.slider__item(
                v-for="work in reverseWorks"
                :key="work.id"
                :class="{ active: currentWork.id === work.id }"
                @click.prevent="goToSlide(work.id)"
              )
                button.slider__btn(type="button")
                  img.slider__btn-img(:src="work.photo" :alt="work.title")
            .work__slider-buttons.slider__arrow
              button.slider__arrow-btn.slider__arrow-btn--prev(
                type="button"
                :disabled="currentIndex === works.length - 1"
                @click.prevent="changeSlide('next')"
              )
                AppIcon(name="arrow-down" class-name="slider__arrow-icon")
              button.slider__arrow-btn.slider__arrow-btn--next(
                type="button"
                :disabled="currentIndex === 0"
                @click.prevent="changeSlide('prev')"
              )
                AppIcon(name="arrow-down" class-name="slider__arrow-icon")
        .slider__card
          .card
            ul.card__list
              li.card__item(v-for="tag in tagsArr" :key="tag")
                .card__item-tag {{ tag }}
            h3.card__title {{ currentWork.title }}
            .card__description {{ currentWork.desc }}
            .card__btn
              a.card__btn-link(:href="currentWork.link" target="_blank" rel="noreferrer") Посмотреть сайт
      p(v-else) Работы пока не добавлены.
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { publicApi, resolveMediaUrl } from "@/api/public";
import AppIcon from "@/public/components/AppIcon.vue";
import { images } from "@/public/data/assets";

const works = ref([]);
const currentIndex = ref(0);

const currentWork = computed(() => works.value[currentIndex.value] || null);
const reverseWorks = computed(() => [...works.value].reverse());
const tagsArr = computed(() => currentWork.value?.tags || []);

function changeSlide(direction) {
  if (direction === "next" && currentIndex.value < works.value.length - 1) {
    currentIndex.value += 1;
  }

  if (direction === "prev" && currentIndex.value > 0) {
    currentIndex.value -= 1;
  }
}

function goToSlide(id) {
  const nextIndex = works.value.findIndex((item) => item.id === id);

  if (nextIndex >= 0) {
    currentIndex.value = nextIndex;
  }
}

async function loadWorks() {
  const { data } = await publicApi.getWorks();

  works.value = data.items.map((item, index) => ({
    ...item,
    desc: item.description,
    photo: item.imageUrl
      ? resolveMediaUrl(item.imageUrl)
      : images.worksFallback[index % images.worksFallback.length]
  }));

  currentIndex.value = 0;
}

onMounted(loadWorks);
</script>
