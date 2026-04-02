<script setup>
import { computed, ref } from 'vue'

import educationIllustration from '@/assets/images/education.png'

import CustomButton from '@/components/CustomButton.vue'
import EducationCard from '@/components/EducationCard.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import { educationItems } from '@/data/portfolio'

const visibleCount = 3
const startIndex = ref(0)
const slideTransitionName = ref('education-page-next')

const pageStartIndexes = computed(() => {
  const starts = []

  for (let i = 0; i < educationItems.length; i += visibleCount) {
    starts.push(i)
  }

  return starts
})
const visibleEducationItems = computed(() =>
  educationItems.slice(startIndex.value, startIndex.value + visibleCount)
)
const currentPageIndex = computed(() => pageStartIndexes.value.indexOf(startIndex.value))

const goPrev = () => {
  slideTransitionName.value = 'education-page-prev'

  const currentPageIndex = pageStartIndexes.value.indexOf(startIndex.value)
  const prevPageIndex =
    currentPageIndex <= 0 ? pageStartIndexes.value.length - 1 : currentPageIndex - 1

  startIndex.value = pageStartIndexes.value[prevPageIndex] ?? 0
}

const goNext = () => {
  slideTransitionName.value = 'education-page-next'

  const currentPageIndex = pageStartIndexes.value.indexOf(startIndex.value)
  const nextPageIndex =
    currentPageIndex >= pageStartIndexes.value.length - 1 ? 0 : currentPageIndex + 1

  startIndex.value = pageStartIndexes.value[nextPageIndex] ?? 0
}
</script>

<template>
  <section id="education" class="education-section section-shell">
    <div class="section-grid education-section__grid">
      <div class="section-visual education-section__visual">
        <SectionHeading title="Educación" />

        <img :src="educationIllustration" alt="Ilustración de Nicole saludando con íconos de tecnologías" />
      </div>

      <div class="section-copy education-section__copy">
        <div class="window-card panel education-section__panel">
          <div class="window-card__bar">
            <span class="window-card__dot"></span>
            <span class="window-card__dot"></span>
            <span class="window-card__dot"></span>
          </div>
          <div class="education-section__list">
            <Transition :name="slideTransitionName" mode="out-in">
              <div :key="startIndex" class="education-section__list-page">
                <EducationCard
                  v-for="item in visibleEducationItems"
                  :key="`${item.title}-${item.year}`"
                  :education-title="item.title"
                  :education-subtitle="item.institution"
                  :education-year="item.year"
                  :certificate-url="item.certificateUrl"
                />
              </div>
            </Transition>
          </div>
          <div class="education-section__controls">
            <CustomButton
              class="education-nav-btn"
              size="small"
              variant="icon"
              icon="arrow-big-left-dash"
              icon-size="small"
              @click="goPrev"
            />
            <ul class="education-section__indicator" aria-label="Indicador de avance de educación">
              <li
                v-for="(pageStart, pageIndex) in pageStartIndexes"
                :key="pageStart"
                class="education-section__indicator-dot"
                :class="{ 'education-section__indicator-dot--active': pageIndex === currentPageIndex }"
              ></li>
            </ul>
            <CustomButton
              class="education-nav-btn"
              size="small"
              variant="icon"
              icon="arrow-big-right-dash"
              icon-size="small"
              @click="goNext"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.education-section__grid {
  grid-template-columns: minmax(240px, 1fr) minmax(0, 1fr);
}

.education-section__panel {
  overflow: hidden;
}

.education-section__list {
  padding: 1.25rem;
  min-height: 22rem;
  overflow: hidden;
  position: relative;
}

.education-section__list-page {
  display: grid;
  gap: 0.95rem;
}

.education-page-next-enter-active,
.education-page-next-leave-active,
.education-page-prev-enter-active,
.education-page-prev-leave-active {
  will-change: transform, opacity, filter;
  transition:
    transform 300ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 240ms ease,
    filter 240ms ease;
}

.education-page-next-enter-active,
.education-page-next-leave-active {
  transform-origin: right center;
}

.education-page-prev-enter-active,
.education-page-prev-leave-active {
  transform-origin: left center;
}

.education-page-next-enter-from,
.education-page-prev-leave-to {
  transform: translateX(46px) scale(0.96) rotateY(-7deg);
  opacity: 0;
  filter: blur(2px);
}

.education-page-next-leave-to,
.education-page-prev-enter-from {
  transform: translateX(-46px) scale(0.96) rotateY(7deg);
  opacity: 0;
  filter: blur(2px);
}

.education-page-next-enter-to,
.education-page-next-leave-from,
.education-page-prev-enter-to,
.education-page-prev-leave-from {
  transform: translateX(0);
  opacity: 1;
  filter: blur(0);
}

@media (prefers-reduced-motion: reduce) {
  .education-page-next-enter-active,
  .education-page-next-leave-active,
  .education-page-prev-enter-active,
  .education-page-prev-leave-active {
    transition: opacity 180ms linear;
  }

  .education-page-next-enter-from,
  .education-page-prev-leave-to,
  .education-page-next-leave-to,
  .education-page-prev-enter-from {
    transform: none;
    filter: none;
  }
}

.education-section__controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0 1.25rem 1.25rem;
}

.education-section__indicator {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0.45rem;
}

.education-section__indicator-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 999px;
  background: color-mix(in srgb, var(--text-muted) 55%, transparent);
  transition:
    width 180ms ease,
    background-color 180ms ease;
}

.education-section__indicator-dot--active {
  width: 1.35rem;
  background: var(--accent-strong);
}

.education-section__controls :deep(.education-nav-btn) {
  --button-bg: color-mix(in srgb, var(--panel-raised) 80%, white);
  --button-fg: var(--heading-strong);
  --button-border: var(--panel-border-soft);
}

:global(.dark) .education-section__controls :deep(.education-nav-btn) {
  --button-fg: var(--heading-strong);
  --button-border: var(--mint-blue-300);
  --button-hover-border: var(--mint-blue-500);
}

@include respond-down(tablet) {
  .education-section__grid {
    grid-template-columns: 1fr;
  }
}
</style>