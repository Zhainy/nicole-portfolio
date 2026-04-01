<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const progress = ref(0)

const onScroll = () => {
  const el = document.documentElement
  const max = el.scrollHeight - el.clientHeight
  progress.value = max > 0 ? (el.scrollTop / max) * 100 : 0
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <div class="scroll-progress" aria-hidden="true">
    <div class="scroll-progress__track">
      <div class="scroll-progress__fill" :style="{ height: `${progress}%` }"></div>
      <div class="scroll-progress__dot" :style="{ top: `${progress}%` }"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scroll-progress {
  position: fixed;
  top: 0;
  left: 1.5rem;
  bottom: 0;
  z-index: 40;
  pointer-events: none;
  display: flex;
  align-items: stretch;
  padding: 1.5rem 0;

  @include respond-down(tablet) {
    display: none;
  }
}

.scroll-progress__track {
  width: 0.35rem;
  position: relative;
  background: color-mix(in srgb, var(--royal-purple-200) 35%, transparent);
  border-radius: 999px;
}

.scroll-progress__fill {
  width: 100%;
  background: linear-gradient(
    180deg,
    var(--salmon-pink-300) 0%,
    var(--royal-purple-300) 55%,
    var(--mint-blue-400) 100%
  );
  border-radius: 999px;
  transition: height 80ms linear;
}

.scroll-progress__dot {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: var(--salmon-pink-300);
  border: 2px solid var(--royal-purple-300);
  box-shadow:
    0 0 0 3px color-mix(in srgb, var(--salmon-pink-200) 55%, transparent),
    0 2px 8px color-mix(in srgb, var(--royal-purple-300) 40%, transparent);
  transition: top 80ms linear;
}
</style>
