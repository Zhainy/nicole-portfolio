<script setup>
import CustomButton from '@/components/CustomButton.vue'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="window-card project-card panel">
    <div class="window-card__bar">
      <span class="window-card__dot"></span>
      <span class="window-card__dot"></span>
      <span class="window-card__dot"></span>
    </div>
    <div class="project-card__body">
      <div class="project-card__preview">
        <img :src="project.image" :alt="`Vista previa de ${project.title}`" />
      </div>
      <div class="project-card__copy">
        <p class="project-card__category">{{ project.category }}</p>
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <ul class="project-card__tags">
          <li v-for="tag in project.tags" :key="tag" class="pixel-chip">{{ tag }}</li>
        </ul>
        <div class="project-card__actions">
          <CustomButton
            label="DEMO"
            :href="project.demoUrl || '#'"
            size="small"
            variant="outline"
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
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.project-card__body {
  display: grid;
  grid-template-columns: minmax(150px, 220px) minmax(0, 1fr);
  gap: 1.25rem;
  padding: 1.25rem;
}

.project-card__preview {
  display: grid;
  place-items: center;
  padding: 0.75rem;
  border-radius: 1.1rem;
  background: color-mix(in srgb, var(--panel-raised) 84%, white);
  border: 2px solid var(--panel-border-soft);
}

.project-card__preview img {
  width: 100%;
  max-width: 220px;
}

.project-card__copy {
  display: grid;
  align-content: start;
  gap: 0.75rem;
}

.project-card__category {
  font-family: var(--font-caption);
  font-size: 1.1rem;
  letter-spacing: 0.14rem;
  color: var(--accent-strong);
  text-transform: lowercase;
}

.project-card__copy h3 {
  color: var(--heading-strong);
}

.project-card__copy p {
  color: var(--text-muted);
}

.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  list-style: none;
}

.project-card__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 0.3rem;
}

.project-card__actions :deep(.button--outline) {
  --button-bg: color-mix(in srgb, var(--panel-raised) 82%, white);
  --button-fg: var(--royal-purple-500);
  --button-border: var(--french-rose-300);
  --button-hover-bg: var(--royal-purple-300);
  --button-hover-fg: var(--french-rose-100);
  --button-hover-border: var(--french-rose-300);
}

@include respond-down(tablet) {
  .project-card__body {
    grid-template-columns: 1fr;
  }
}
</style>