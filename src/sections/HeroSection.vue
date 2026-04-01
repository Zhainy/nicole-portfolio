<script setup>
import Send from '@/assets/icons/send.svg'
import heroIllustration from '@/assets/images/hero-section.png'

import CarrouselSubtitle from '@/components/CarrouselSubtitle.vue'
import CustomButton from '@/components/CustomButton.vue'
import ToggleThemeMode from '@/components/ToggleThemeMode.vue'
import { contactDetails, heroActions } from '@/data/portfolio'
</script>

<template>
  <header id="hero" class="hero-section section-shell">
    <ToggleThemeMode />
    <div class="section-grid hero-section__grid">
      <div class="section-copy hero-section__copy">
        <p class="hero-section__eyebrow">Portfolio creativo y front-end</p>
        <h1>Nicole <br />Fernández</h1>
        <CarrouselSubtitle />

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

        <CustomButton
          label="open to work"
          href="#contact"
          icon="briefcase-business"
          variant="primary"
          size="large"
          icon-size="large"
        />
      </div>

      <div class="section-visual hero-section__visual">
        <img
          class="hero-section__image"
          :src="heroIllustration"
          alt="Ilustración de Nicole celebrando con su notebook"
        />
        <div class="hero-section__contact panel">
          <div class="hero-section__mail">
            <Send class="hero-section__mail-icon" />
            <a :href="`mailto:${contactDetails.email}`">{{ contactDetails.email }}</a>
          </div>
          <p>{{ contactDetails.availability }}</p>
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
}

.hero-section__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
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
  margin-top: 1rem;
  position: relative;
  bottom: 10rem;
}

.hero-section__mail {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  color: var(--heading-strong);
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
  gap: 0.75rem;
}

.hero-section__image {
  position: relative;
  bottom: 10%;
  z-index: 1;
  width: min(100%, 32rem);
}

@include respond-down(tablet) {
  .hero-section__copy {
    max-width: none;
  }

  .hero-section__visual {
    order: -1;
    min-height: auto;
    justify-items: start;
  }

  .hero-section__contact {
    margin-top: 0.4rem;
  }
}
</style>
