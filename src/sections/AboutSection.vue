<script setup>
import aboutArrow from '@/assets/images/about-me-arrow.png'
import aboutHearts from '@/assets/images/about-me-hearts.png'
import aboutIllustration from '@/assets/images/about-me.png'
import aboutShape from '@/assets/images/about-me-shape.png'

import SectionHeading from '@/components/SectionHeading.vue'
</script>

<template>
  <section id="about" class="about-section section-shell">
        <img class="about-section__shape" :src="aboutShape" alt="" aria-hidden="true" />
    <div class="section-grid about-section__grid">
      <div class="section-visual about-section__visual">
    
        <img
          class="about-section__image"
          :src="aboutIllustration"
          alt="Ilustración de Nicole trabajando en su notebook"
        />
        <img class="about-section__arrow" :src="aboutArrow" alt="Flecha decorativa" />
      </div>

      <div class="section-copy about-section__copy">
        <SectionHeading title="About Me" />
        <img class="about-section__hearts" :src="aboutHearts" alt="Decoración con corazones pixel" />

        <h4>Hola, soy <span class="about-section__highlight">Nicole Fernández</span>👋🏻.</h4>
        <p>
          Soy <span class="about-section__highlight">Diseñadora Gráfica e Ilustradora</span> reconvertida a <span class="about-section__highlight">Front-End Developer.</span>  Recientemente me desempeñé como <span class="about-section__highlight">Teaching Assistant</span>, donde consolidé mis conocimientos guiando a nuevos desarrolladores en el mundo del código
        </p>
        <p>
          Hoy combino mi criterio visual con una base técnica sólida en <span class="about-section__highlight">Vue.js y Java (Spring Boot).</span> Me apasiona construir interfaces que sean tan estéticas como funcionales y escalables.
        </p>
        <p>
          ¿Buscas a alguien con ojo para el diseño y manos para el código Full Stack? 
          <span class="about-section__highlight">Hablemos.</span>
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-section {
  position: relative;
  margin-bottom: 3.5rem;
}

.about-section__grid {
  grid-template-columns: minmax(280px, 0.9fr) minmax(0, 1.1fr);
}

.about-section__visual {
  min-height: 28rem;
  overflow: visible;
}

.about-section__shape {
  position: absolute;
  top: -35%;
  right: -3%;
  z-index: 0;
  width: 108%;
  height: auto;
  max-width: none;
  pointer-events: none;
  user-select: none;
}

.about-section__image {
  position: relative;
  z-index: 1;
  width: min(100%, 29rem);
}

.about-section__arrow {
  position: absolute;
  top: 3rem;
  right: -7%;
  width: min(7rem, 28vw);
  transform: rotate(8deg);
}

.about-section__copy {
  max-width: 32rem;
}

.about-section__copy h4 {
  margin: 1rem 0;
  color: var(--royal-purple-300);
}

.about-section__copy p {
  color: var(--royal-purple-300);
  font-size: 1rem;
}

.about-section__copy p + p {
  margin-top: 1rem;
}

.about-section__highlight {
  color: var(--accent-strong);
  font-family: var(--font-primary);
  font-weight: 700;
}

.about-section__hearts {
  width: 4.5rem;
  position: absolute;
  top: .5rem;
  right: .15rem;
  }

.about-section :deep(.section-heading__title) {
  color: var(--royal-purple-300);
}

.about-section :deep(.section-heading__accent) {
  color: var(--french-rose-300);
}

@include respond-down(tablet) {
  .about-section__grid {
    grid-template-columns: 1fr;
  }

  .about-section__copy {
    max-width: none;
  }

  .about-section__arrow {
    top: -0.4rem;
    right: 0;
  }
}

/* Highlights use accent pink in dark mode instead of mint-blue */
:global(.dark) .about-section__highlight {
  color: var(--french-rose-300);
}
</style>