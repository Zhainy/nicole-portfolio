<script setup>
import heroIllustration from '@/assets/images/hero-section.png'

import CarrouselSubtitle from '@/components/CarrouselSubtitle.vue'
import CustomButton from '@/components/CustomButton.vue'
import ToggleThemeMode from '@/components/ToggleThemeMode.vue'
import { contactDetails, heroActions } from '@/data/portfolio'
import { svgIcons } from '@/utils/icons.js'
</script>

<template>
  <header id="hero" class="hero-section section-shell">
    <ToggleThemeMode />
    <div class="section-grid hero-section__grid">
      <div class="section-copy hero-section__copy">
        <p class="hero-section__eyebrow">Portfolio creativo y front-end</p>
        <h1>Nicole <br />Fernández</h1>
        <CarrouselSubtitle />

        <div class="hero-section__contact panel panel--neon-border">
          <div class="hero-section__mail">
            <component :is="svgIcons['send']" class="hero-section__mail-icon" />
            <a :href="`mailto:${contactDetails.email}`">{{ contactDetails.email }}</a>
          </div>
          <p>{{ contactDetails.availability }}</p>
          <CustomButton
          label="open to work_"
          href="#contact"
          icon="briefcase-business"
          variant="primary"
          size="large"
          icon-size="large"
        />
        </div>
      </div>

      <div class="section-visual hero-section__visual">
        <img
          class="hero-section__image"
          :src="heroIllustration"
          alt="Ilustración de Nicole celebrando con su notebook"
        />
        <div class="hero-section__actions">
          <CustomButton
            v-for="action in heroActions"
            :key="action.label"
            :label="action.label"
            :href="action.href"
            :icon="action.icon"
            variant="outline"
            size="small"
            icon-size="small"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.hero-section {
  padding-top: clamp(4rem, 5vw, 2rem);
}

.hero-section__grid {
  align-items: start;
  transform: translateY(-5%);
}

.hero-section__copy {
  display: grid;
  gap: 1.4rem;
  max-width: 35rem;
}

.hero-section__eyebrow {
  font-family: var(--font-caption);
  font-size: 1.1rem;
  letter-spacing: 0.18rem;
  text-transform: lowercase;
  color: var(--accent-strong);
  font-weight: 500;
}

.hero-section__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.15rem;
}

:global(.dark) .hero-section :deep(.button--outline:hover),
:global(.dark) .hero-section :deep(.button--outline:focus-visible) {
  --button-hover-bg: var(--french-rose-300);
  --button-hover-fg: var(--french-rose-100);
  --button-hover-border: var(--french-rose-400);
}

:global(.dark) .hero-section :deep(.button--primary:hover),
:global(.dark) .hero-section :deep(.button--primary:focus-visible) {
  --button-hover-bg: var(--mint-blue-300);
  --button-hover-fg: var(--royal-purple-500);
  --button-hover-border: var(--mint-blue-500);
}

.hero-section__contact {
  display: grid;
  gap: 0.8rem;
  padding: 1rem 1.15rem;
  width: min(100%, 30rem);
  margin-top: 1.1rem;
}

.hero-section__mail {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  color: var(--accent-strong);
  font-family: var(--font-caption);
  font-size: 1.2rem;
  letter-spacing: 0.12rem;
}

.hero-section__mail-icon {
  width: 1.1rem;
  height: 1.1rem;
  stroke: currentColor;
}

.hero-section__contact p {
  color: var(--text-muted);
}

.hero-section__visual {
  min-height: 26rem;
  justify-items: center;
  align-content: start;
  gap: 0.25rem;
  margin-top: -1.5rem;
}

.hero-section__image {
  position: relative;
  top: 0;
  z-index: 1;
  width: min(100%, 32rem);
  filter: drop-shadow(0 14px 24px color-mix(in srgb, var(--royal-purple-500) 30%, transparent));
}

:global(.dark) .hero-section__image {
  filter: none;
}

@include respond-down(tablet) {
  .hero-section__copy {
    max-width: none;
  }

  .hero-section__visual {
    order: -1;
    min-height: auto;
    justify-items: start;
    margin-top: 0;
  }

  .hero-section__grid {
    transform: none;
  }

  .hero-section__contact {
    margin-top: 0.4rem;
  }
}

@include respond-down(phone) {
  .hero-section__copy {
    order: -1;
  }

  .hero-section__visual {
    order: 0;
  }
}
</style>
