<script setup>
import aboutArrow from '@/assets/images/about-me-arrow.png'
import aboutHearts from '@/assets/images/about-me-hearts.png'
import aboutIllustration from '@/assets/images/about-me.png'
import aboutShape from '@/assets/images/about-me-shape.png'

import SectionHeading from '@/components/SectionHeading.vue'
</script>

<template>
  <section id="about" class="about-section section-shell">
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
        <img class="about-section__shape" :src="aboutShape" alt="" aria-hidden="true" />
        <SectionHeading title="About Me" />
        <img class="about-section__hearts" :src="aboutHearts" alt="Decoración con corazones pixel" />

        <h4>Hola, soy <span class="about-section__highlight">Nicole Fernández</span>👋🏻.</h4>
        <p>
          Soy una <span class="about-section__highlight">Diseñadora Gráfica e Ilustradora</span> que dio el salto al <span class="about-section__highlight">desarrollo Full Stack.</span>  Mi camino profesional en el código comenzó con un desafío importante: desempeñarme como<span class="about-section__highlight"> Teaching Assistant</span>, en bootcamps de <span class="about-section__highlight">Front-End,</span>  donde hoy guío a nuevos desarrolladores y aseguro la calidad técnica de sus proyectos.
        </p>
        <p>
          Actualmente, combino mi criterio visual con una base robusta en <span class="about-section__highlight">Vue.js y Java (Spring Boot).</span> mientras me especializo en <span class="about-section__highlight">Oracle Cloud Infrastructure (OCI)</span>  a través del programa Tech Advanced de ONE. Mi objetivo es unir la precisión del diseño con arquitecturas de software escalables y soluciones en la nube.
        </p>
        <p>
          ¿Buscas un perfil híbrido que domine desde el píxel hasta la lógica del servidor?
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
  z-index: 2;
}

.about-section__shape {
  position: absolute;
  top: -40%;
  right: -20%;
  z-index: 0;
  width: min(230%, 120rem);
  height: auto;
  max-width: none;
  pointer-events: none;
  user-select: none;
  transform: rotate(5deg);

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
  position: relative;
  z-index: 1;
}

.about-section__copy :deep(.section-heading) {
  position: relative;
  z-index: 2;
}

.about-section__copy h4,
.about-section__copy p,
.about-section__hearts {
  position: relative;
  z-index: 2;
}

.about-section__copy h4 {
  margin: 1rem 0;
  color: var(--royal-purple-300);
}

.about-section__copy p {
  color: var(--royal-purple-300);
  font-size: 0.85rem;
  max-width: 29rem;
}

.about-section__copy p + p {
  margin-top: 1rem;
}

.about-section__highlight {
  color: var(--french-rose-300);
  font-weight: 700;
}

.about-section__hearts {
  width: 4.5rem;
  position: absolute;
  top: .5rem;
  right: -2rem;
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
    padding: clamp(1.2rem, 3.8vw, 1.8rem);
    border-radius: 1.2rem;
    border: 2px solid var(--panel-border);
    background: var(--salmon-pink-100);
    box-shadow: var(--panel-shadow);
    backdrop-filter: blur(8px);
  }

  .about-section__arrow {
    top: -0.4rem;
    right: 0;
  }

  .about-section__shape {
    display: none;
  }

  .about-section__copy p {
    max-width: none;
  }

  .about-section__hearts {
    width: 3.8rem;
    right: 0.6rem;
    top: 0.45rem;
  }
}

:global(.dark) .about-section__copy {
  background: var(--salmon-pink-200);
}

/* Highlights use accent pink in dark mode instead of mint-blue */
:global(.dark) .about-section__highlight {
  color: var(--french-rose-300);
}
</style>