<template>
  <div class="subtitle-wrapper">
    <div class="subtitle-track" :style="trackStyle">
      <h2 v-for="(line, index) in animatedLines" :key="`${line.full}-${index}`">
        <span class="subtitle-track__primary">
          {{ line.primary }}
          <span v-if="!line.secondary" class="subtitle-track__cursor" aria-hidden="true">▍</span>
        </span>
        <span v-if="line.secondary" class="subtitle-track__secondary">
          {{ line.secondary }}
          <span class="subtitle-track__cursor" aria-hidden="true">▍</span>
        </span>
      </h2>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const lines = [
  'FULL-STACK DEVELOPER',
  'JAVA & SPRING BOOT',
  'VUE.JS',
  'CLOUD SOLUTIONS < AWS - OCI >',
  'CREATIVE PROGRAMMER',
]

const splitLine = (text) => {
  const words = text.trim().split(/\s+/)

  if (words.length === 1) {
    return {
      full: text,
      primary: text,
      secondary: '',
    }
  }

  let splitIndex = 1

  if (words.length > 2) {
    const targetLength = Math.ceil(text.length * 0.55)
    let accumulatedLength = 0

    for (let index = 0; index < words.length - 1; index += 1) {
      accumulatedLength += words[index].length + 1

      if (accumulatedLength >= targetLength) {
        splitIndex = index + 1
        break
      }
    }
  }

  return {
    full: text,
    primary: words.slice(0, splitIndex).join(' '),
    secondary: words.slice(splitIndex).join(' '),
  }
}

const formattedLines = computed(() => lines.map(splitLine))

const animatedLines = computed(() => {
  if (!formattedLines.value.length) {
    return []
  }

  return [...formattedLines.value, formattedLines.value[0]]
})

const trackStyle = computed(() => ({
  '--subtitle-items': lines.length,
  '--subtitle-duration': `${Math.max(lines.length * 2.2, 8)}s`,
}))
</script>



<style lang="scss" scoped>
.subtitle-wrapper {
  --subtitle-gradient: linear-gradient(
    135deg,
    var(--french-rose-300) 0%,
    var(--royal-purple-300) 52%,
    var(--salmon-pink-300) 100%
  );
  --subtitle-glitch-shift: 1.5px;
  --subtitle-glow-offset-y: 4px;
  --subtitle-glow-blur: 10px;
  --subtitle-row-height: 9.4rem;
  width: 100%;
  height: var(--subtitle-row-height);
  overflow: hidden;
  position: relative;
  text-transform: uppercase;
}

.subtitle-track h2 {
  min-height: var(--subtitle-row-height);
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  max-width: min(100%, 22ch);
  padding-inline: 0.4rem;
  padding-block: 0.35rem;
  line-height: 1;
  text-align: left;
  white-space: normal;
  background-image: var(--subtitle-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  color: var(--french-rose-300);
  -webkit-text-fill-color: transparent;
  filter:
    drop-shadow(calc(var(--subtitle-glitch-shift) * -1) 0 0 var(--subtitle-glitch-left))
    drop-shadow(var(--subtitle-glitch-shift) 0 0 var(--subtitle-glitch-right))
    drop-shadow(0 var(--subtitle-glow-offset-y) var(--subtitle-glow-blur) var(--subtitle-glitch-glow));
}

.subtitle-track__primary,
.subtitle-track__secondary {
  display: block;
  max-width: 100%;
  text-wrap: balance;
  overflow-wrap: anywhere;
}

.subtitle-track__primary {
  font-size: clamp(1.5rem, 4.95vw, 3.6rem);
  font-weight: 700;
  letter-spacing: clamp(0.05rem, 0.4vw, 0.18rem);
  line-height: 0.95;
}

.subtitle-track__secondary {
  margin-top: 0.2rem;
  font-size: clamp(1.3rem, 4.15vw, 2.58rem);
  font-weight: 900;
  letter-spacing: clamp(0.16rem, 0.9vw, 0.34rem);
  line-height: 1.05;
}

.subtitle-track__cursor {
  display: inline-block;
  margin-left: 0.16em;
  font-size: 0.75em;
  transform: translateY(-0.08em);
  background-image: var(--subtitle-gradient);
  background-size: 300% 100%;
  background-position: 100% 50%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  animation: subtitleCursorBlink 0.9s steps(1) infinite;
}

.subtitle-track {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  will-change: transform;
  animation: rollUp var(--subtitle-duration) steps(var(--subtitle-items)) infinite;
}

@keyframes rollUp {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(calc(var(--subtitle-row-height) * -1 * var(--subtitle-items)));
  }
}

@keyframes subtitleCursorBlink {
  0%,
  48% {
    opacity: 1;
  }

  49%,
  100% {
    opacity: 0;
  }
}

@include respond-down(phone) {
  .subtitle-wrapper {
    --subtitle-glitch-shift: 1px;
    --subtitle-glow-offset-y: 3px;
    --subtitle-glow-blur: 7px;
    --subtitle-row-height: 6.6rem;
    width: min(100%, 92vw);
  }

  .subtitle-track h2 {
    width: 100%;
    max-width: none;
    padding-inline: 0;
    padding-block: 0.1rem;
  }

  .subtitle-track__primary,
  .subtitle-track__secondary {
    width: 100%;
  }

  .subtitle-track__primary {
    font-size: clamp(1.65rem, 9.2vw, 2.5rem);
    letter-spacing: 0.055rem;
    line-height: 0.9;
  }

  .subtitle-track__secondary {
    margin-top: 0.08rem;
    font-size: clamp(1.36rem, 7.1vw, 1.95rem);
    font-weight: 800;
    letter-spacing: 0.12rem;
    line-height: 0.95;
  }
}

@media (prefers-reduced-motion: reduce) {
  .subtitle-track {
    animation: none;
  }
}
</style>
