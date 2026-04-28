<template>
  <section class="app-card">
    <div class="app-card__head" v-if="$slots.title || $slots.actions">
      <div class="app-card__title">
        <slot name="title" />
      </div>
      <div class="app-card__actions" v-if="$slots.actions">
        <slot name="actions" />
      </div>
    </div>
    <div class="app-card__body">
      <slot />
    </div>
  </section>
</template>
