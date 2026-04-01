<template>
  <div class="subtitle-wrapper">
    <div class="subtitle-track">
      <h2 v-for="(line, index) in lines" :key="index">{{ line }}</h2>
    </div>
  </div>
</template>

<script setup>
const lines = [
  'FRONT-END',
  'DEVELOPER TRAINEE',
  'UI DESIGN',
  'BRANDING',
  'CREATIVE CODE',
  'VISUAL THINKING'
]
</script>



<style lang="scss" scoped>
.subtitle-wrapper {
  height: 7.5rem;
  overflow: hidden;
  position: relative;
  text-transform: uppercase;
}

.subtitle-track h2 {
  background-image: linear-gradient(
    135deg,
    var(--french-rose-300) 0%,
    var(--royal-purple-300) 52%,
    var(--salmon-pink-300) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: var(--french-rose-300);
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.subtitle-track {
  display: flex;
  flex-direction: column;
  animation: rollUp 8s ease-in-out infinite;
}

@keyframes rollUp {
  0%, 10% { transform: translateY(0); }
  15%, 25% { transform: translateY(-4rem); }
  30%, 40% { transform: translateY(-8rem); }
  45%, 55% { transform: translateY(-12rem); }
  60%, 70% { transform: translateY(-16rem); }
  75%, 100% { transform: translateY(0); }
}

@include respond-down(phone) {
  .subtitle-wrapper {
    height: 5.8rem;
  }

  .subtitle-track h2 {
    line-height: 2.9rem;
  }
}


</style>
