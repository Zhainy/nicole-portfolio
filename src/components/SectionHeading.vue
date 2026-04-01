<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  align: {
    type: String,
    default: 'left',
  },
  eyebrow: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <header class="section-heading" :class="`section-heading--${align}`">
    <p v-if="eyebrow" class="section-heading__eyebrow">{{ eyebrow }}</p>
    <h2 class="section-heading__title">
      <span class="section-heading__accent">&lt;</span>
      {{ title }}
      <span class="section-heading__accent">/&gt;</span>
    </h2>
    <p v-if="description" class="section-heading__description">{{ description }}</p>
  </header>
</template>