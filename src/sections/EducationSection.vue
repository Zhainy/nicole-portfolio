<script setup>
import { computed, ref } from 'vue'

import educationIllustration from '@/assets/images/education.png'

import CustomButton from '@/components/CustomButton.vue'
import EducationCard from '@/components/EducationCard.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import { educationItems } from '@/data/portfolio'

const visibleCount = 3
const startIndex = ref(0)

const maxStartIndex = computed(() => Math.max(0, educationItems.length - visibleCount))
const visibleEducationItems = computed(() =>
  educationItems.slice(startIndex.value, startIndex.value + visibleCount)
)

const goPrev = () => {
  startIndex.value = startIndex.value === 0 ? maxStartIndex.value : startIndex.value - 1
}

const goNext = () => {
  startIndex.value = startIndex.value >= maxStartIndex.value ? 0 : startIndex.value + 1
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
            <EducationCard
              v-for="item in visibleEducationItems"
              :key="`${item.title}-${item.year}`"
              :education-title="item.title"
              :education-subtitle="item.institution"
              :education-year="item.year"
            />
          </div>
          <div class="education-section__controls">
            <CustomButton
              label="anterior"
              size="small"
              variant="outline"
              icon="mouse-pointer-click"
              icon-size="small"
              @click="goPrev"
            />
            <CustomButton
              label="siguiente"
              size="small"
              variant="outline"
              icon="mouse-pointer-click"
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
  display: grid;
  gap: 0.95rem;
  padding: 1.25rem;
  min-height: 22rem;
}

.education-section__controls {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  padding: 0 1.25rem 1.25rem;
}

.education-section__controls :deep(.button--outline) {
  --button-bg: color-mix(in srgb, var(--panel-raised) 80%, white);
  --button-fg: var(--royal-purple-500);
  --button-border: color-mix(in srgb, var(--royal-purple-300) 72%, var(--mint-blue-300));
}

@include respond-down(tablet) {
  .education-section__grid {
    grid-template-columns: 1fr;
  }
}
</style>