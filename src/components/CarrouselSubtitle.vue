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
  'GRAPHIC',
  'DESIGNER',
  'DIGITAL',
  'ILLUSTRATOR'
]
</script>



<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/global' as *;

.subtitle-wrapper {
  height: 8rem; /* altura de 2 líneas */
  width: 50%;
  overflow: hidden;
  position: relative;
  text-transform: uppercase; 
}
.subtitle-track h2 {
  background-image: var(--gradient-linear);
  background-clip: text;
  -webkit-background-clip: text;
  color: var(--mint-blue-300); // fallback visible
  -webkit-text-fill-color: transparent;
  display: inline-block
}


.subtitle-track {
  display: flex;
  flex-direction: column;
  
  animation: rollUp 8s ease-in-out infinite;
}

@keyframes rollUp {
  0%, 10%   { transform: translateY(0); }
  15%, 25%  { transform: translateY(-4rem); }
  30%, 40%  { transform: translateY(-8rem); }
  45%, 55%  { transform: translateY(-12rem); }
  60%, 70%  { transform: translateY(-16rem); }
  75%, 100% { transform: translateY(0); }
}


</style>
