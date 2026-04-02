<script setup>
import { computed, nextTick, ref } from 'vue'

import CustomButton from '@/components/CustomButton.vue'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const isExpanded = ref(false)
const isHovered = ref(false)
const shouldLoadVideo = ref(false)
const videoFailed = ref(false)
const demoVideoRef = ref(null)

const hasVideo = computed(() => Boolean(props.project.video))
const hasDemoLink = computed(() => {
  const demoUrl = props.project.demoUrl?.trim()
  return Boolean(demoUrl && demoUrl !== '#')
})

const toggleCard = () => {
  isExpanded.value = !isExpanded.value
}

const handlePreviewEnter = async () => {
  if (!hasVideo.value) {
    return
  }

  isHovered.value = true

  if (!shouldLoadVideo.value) {
    shouldLoadVideo.value = true
    await nextTick()
  }

  if (demoVideoRef.value && !videoFailed.value) {
    try {
      await demoVideoRef.value.play()
    } catch {
      // Autoplay might be blocked by browser policies despite muted.
    }
  }
}

const handlePreviewLeave = () => {
  isHovered.value = false

  if (demoVideoRef.value) {
    demoVideoRef.value.pause()
    demoVideoRef.value.currentTime = 0
  }
}

const handleVideoError = () => {
  videoFailed.value = true
}

const handlePreviewKeydown = (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()

    if (isHovered.value) {
      handlePreviewLeave()
    } else {
      void handlePreviewEnter()
    }
  }
}
</script>

<template>
  <article class="window-card project-card panel">
    <div class="window-card__bar">
      <div class="window-card__meta">
        <p class="window-card__meta-item">{{ project.category }} | </p>
        <p class="window-card__meta-item__strong">{{ project.title }}</p>
      </div>
      <CustomButton
        class="project-card__toggle"
        label=""
        size="small"
        variant="icon"
        icon="arrow-big-down"
        icon-size="small"
        :aria-expanded="isExpanded"
        :aria-label="`${isExpanded ? 'Ocultar' : 'Mostrar'} ${project.title}`"
        @click="toggleCard"
      />
      
    </div>
    <Transition name="project-card-expand">
      <div v-if="isExpanded" class="project-card__body">
        <div
          class="project-card__preview"
          :class="{ 'project-card__preview--flipped': hasVideo && isHovered && !videoFailed }"
          @mouseenter="handlePreviewEnter"
          @mouseleave="handlePreviewLeave"
          @focusin="handlePreviewEnter"
          @focusout="handlePreviewLeave"
          @keydown="handlePreviewKeydown"
          tabindex="0"
          :aria-label="`Vista previa interactiva de ${project.title}`"
        >
          <div class="project-card__preview-inner">
            <div class="project-card__preview-face project-card__preview-face--front">
              <img :src="project.image" :alt="`Vista previa de ${project.title}`" />
            </div>
            <div class="project-card__preview-face project-card__preview-face--back">
              <video
                v-if="hasVideo && shouldLoadVideo && !videoFailed"
                ref="demoVideoRef"
                :src="project.video"
                muted
                loop
                playsinline
                preload="none"
                @error="handleVideoError"
              ></video>
              <img
                v-else
                :src="project.image"
                :alt="`Vista previa de ${project.title}`"
              />
            </div>
          </div>
        </div>
        <div class="project-card__details">
          <p>{{ project.description }}</p>
          <div class="project-card__footer-row">
            <div class="project-card__actions">
              <CustomButton
                v-if="hasDemoLink"
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
    </Transition>
  </article>
</template>

<style lang="scss" scoped>
.window-card__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  font-weight: 600;
  &__strong {
    color: var(--accent-strong);
    font-weight: 700;
    font-family: var(--font-caption);
    letter-spacing: 0.12rem;
  }

}
.project-card__body {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.9rem;
  padding: 1rem;
}

.project-card-expand-enter-active,
.project-card-expand-leave-active {
  overflow: hidden;
  will-change: max-height, opacity;
}

.project-card-expand-enter-active {
  transition:
    max-height 260ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 200ms ease;
}

.project-card-expand-leave-active {
  transition:
    max-height 180ms cubic-bezier(0.4, 0, 1, 1),
    opacity 140ms ease;
}

.project-card-expand-enter-from,
.project-card-expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.project-card-expand-enter-to,
.project-card-expand-leave-from {
  max-height: 900px;
  opacity: 1;
}

.project-card__preview {
  padding: 0.45rem;
  border-radius: 0.95rem;
  background: color-mix(in srgb, var(--panel-raised) 84%, white);
  border: 2px solid var(--panel-border-soft);
  perspective: 1200px;
}

.project-card__preview-inner {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 7;
  transform-style: preserve-3d;
  transition: transform 420ms ease;
}

.project-card__preview--flipped .project-card__preview-inner {
  transform: rotateY(180deg);
}

.project-card__preview-face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  border-radius: 0.7rem;
  overflow: hidden;
}

.project-card__preview-face--back {
  transform: rotateY(180deg);
}

.project-card__preview img,
.project-card__preview video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.project-card__details {
  display: grid;
  align-content: start;
  gap: 0.75rem;
}

.project-card__details p {
  color: var(--text-muted);
  padding: 0.5rem 1.5rem;
  font-size: 0.85rem;
  font-style: italic;
  font-weight: 500;
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

.project-card__tags .pixel-chip {
  background: color-mix(in srgb, var(--salmon-pink-100) 90%, white);
  color: var(--royal-purple-300);
  font-weight: 500;
  border-color: color-mix(in srgb, var(--royal-purple-300) 45%, var(--panel-border-soft));
  text-shadow: none;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    border-color 180ms ease;
}

.project-card__tags .pixel-chip:hover,
.project-card__tags .pixel-chip:focus-visible {
  transform: translateY(-2px) scale(1.03);
  border-color: var(--royal-purple-300);
  box-shadow: 0 6px 12px color-mix(in srgb, var(--royal-purple-300) 20%, transparent);
}

:global(.dark) .project-card__tags .pixel-chip {
  background: color-mix(in srgb, var(--royal-purple-400) 80%, black);
  color: var(--mint-blue-300);
  border-color: var(--mint-blue-500);
}

:global(.dark) .project-card__tags .pixel-chip:hover,
:global(.dark) .project-card__tags .pixel-chip:focus-visible {
  border-color: var(--mint-blue-300);
  box-shadow: 0 6px 12px color-mix(in srgb, var(--mint-blue-300) 20%, transparent);
}

.project-card__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  font-weight: 600;
  text-shadow: 1px 1px 0 var(--french-rose-300);
}

.project-card__actions :deep(.button--outline) {
  --button-bg: var(--french-rose-100);
  --button-fg: var(--french-rose-300);
  --button-border: var(--french-rose-300);
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
    aspect-ratio: auto;
  }

  .project-card__preview-inner {
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