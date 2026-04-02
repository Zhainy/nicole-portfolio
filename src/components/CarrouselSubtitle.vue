<template>
  <div class="subtitle-wrapper">
    <div class="subtitle-track">
      <h2 v-for="(line, index) in lines" :key="index">{{ line }}</h2>
    </div>
  </div>
</template>

<script setup>
const lines = [
  'FRONT-END DEVELOPER',
  'FULL STACK JAVA',
  'UI/UX DESIGNER',
  'SPRING BOOT & VUE',
  'CREATIVE PROGRAMMER',
  'WEB DESIGNER'
]
</script>



<style lang="scss" scoped>
.subtitle-wrapper {
  height: 4rem;
  overflow: hidden;
  position: relative;
  text-transform: uppercase;
}

.subtitle-track h2 {
  line-height: 4rem;
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
  animation: rollUp 10s ease-in-out infinite;
}

@keyframes rollUp {
  0%,   8%  { transform: translateY(0); }
  13%,  21% { transform: translateY(-4rem); }
  26%,  34% { transform: translateY(-8rem); }
  39%,  47% { transform: translateY(-12rem); }
  52%,  60% { transform: translateY(-16rem); }
  65%,  73% { transform: translateY(-20rem); }
  78%, 100% { transform: translateY(0); }
}

@include respond-down(phone) {
  .subtitle-wrapper {
    height: 2.9rem;
  }

  .subtitle-track h2 {
    line-height: 2.9rem;
  }
}


</style>
