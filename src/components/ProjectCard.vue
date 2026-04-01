<script setup>
import { ref } from 'vue'

import CustomButton from '@/components/CustomButton.vue'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const isExpanded = ref(true)

const toggleCard = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
  <article class="window-card project-card panel">
    <div class="window-card__bar">
      <div class="window-card__meta">
        <p class="window-card__meta-item">{{ project.category }}</p>
        <p class="window-card__meta-item">{{ project.title }}</p>
      </div>
      <button
        type="button"
        class="project-card__toggle"
        :aria-expanded="isExpanded"
        :aria-label="`${isExpanded ? 'Ocultar' : 'Mostrar'} ${project.title}`"
        @click="toggleCard"
      >
        <CustomButton
          label=""
          size="small"
          variant="icon"
          icon="arrow-big-down"
          icon-size="small"
        />
      </button>
      
    </div>
    <div v-if="isExpanded" class="project-card__body">
      <div class="project-card__preview">
        <img :src="project.image" :alt="`Vista previa de ${project.title}`" />
      </div>
      <div class="project-card__details">
        <p>{{ project.description }}</p>
        <div class="project-card__footer-row">
          <div class="project-card__actions">
            <CustomButton
              label="DEMO"
              :href="project.demoUrl || '#'"
              size="small"
              variant="outline"
              icon="app-window"
              icon-size="small"
            />
            <CustomButton
              label="VER REPO"
              :href="project.repoUrl || '#'"
              size="small"
              variant="outline"
              icon="github"
              icon-size="small"
            />
          </div>
          <ul class="project-card__tags">
            <li v-for="tag in project.tags" :key="tag" class="pixel-chip">{{ tag }}</li>
          </ul>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.window-card__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.project-card__toggle {
  border: 0;
  background: transparent;
  padding: 0;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.project-card__toggle :deep(.button) {
  min-height: 2rem;
  width: 2rem;
}

.project-card__toggle :deep(.button__icon) {
  transition: transform 200ms ease;
}

.project-card__toggle[aria-expanded='true'] :deep(.button__icon) {
  transform: rotate(180deg);
}

.window-card__meta {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.7rem;
  text-align: right;
}

.window-card__meta-item {
  margin: 0;
  color: var(--heading-strong);
  font-family: var(--font-caption);
  font-size: 1.05rem;
  letter-spacing: 0.12rem;
  line-height: 1;
  text-transform: lowercase;
}
.project-card__body {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.9rem;
  padding: 1rem;
}

.project-card__preview {
  display: grid;
  place-items: stretch;
  padding: 0.45rem;
  border-radius: 0.95rem;
  background: color-mix(in srgb, var(--panel-raised) 84%, white);
  border: 2px solid var(--panel-border-soft);
}

.project-card__preview img {
  width: 100%;
  aspect-ratio: 16 / 7;
  object-fit: cover;
  object-position: center;
  border-radius: 0.7rem;
}

.project-card__details {
  display: grid;
  align-content: start;
  gap: 0.75rem;
}

.project-card__details p {
  color: var(--text-muted);
  font-size: 1rem;
}

.project-card__footer-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
}

.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  list-style: none;
  justify-content: flex-end;
}

.project-card__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  font-weight: 600;
  text-shadow: 1px 1px 0 var(--french-rose-400);
}

.project-card__actions :deep(.button--outline) {
  --button-bg: color-mix(in srgb, var(--mint-500) 90%, white);
  --button-fg: var(--french-rose-200);
  --button-border: var(--royal-purple-100);
  --button-hover-bg: var(--royal-purple-300);
  --button-hover-fg: var(--french-rose-100);
  --button-hover-border: var(--french-rose-300);
}

@include respond-down(tablet) {
  .window-card__meta {
    gap: 0.45rem;
  }

  .window-card__meta-item {
    font-size: 0.95rem;
  }

  .project-card__preview img {
    aspect-ratio: 16 / 8;
  }

  .project-card__footer-row {
    flex-direction: column;
    align-items: stretch;
  }

  .project-card__tags {
    justify-content: flex-start;
  }
}
</style>