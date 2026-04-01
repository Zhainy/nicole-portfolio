<script setup>
import { onMounted, ref } from 'vue'

import { svgIcons } from '@/utils/icons'

const isDark = ref(true)

const applyTheme = () => {
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  applyTheme()
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  isDark.value = savedTheme ? savedTheme === 'dark' : true
  applyTheme()
})
</script>

<template>
  <button
    class="theme-switch"
    :class="{ 'is-dark': isDark }"
    @click="toggleTheme"
    role="switch"
    :aria-checked="isDark"
    :aria-label="isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'"
  >
    <span class="seg seg--left">
      <component :is="svgIcons.sun" class="ico" />
    </span>
    <span class="seg seg--right">
      <component :is="svgIcons.moon" class="ico" />
    </span>
  </button>
</template>

<style scoped lang="scss">
.theme-switch {
  --w: 5.2rem;
  --h: 2.1rem;
  display: inline-flex;
  width: var(--w);
  height: var(--h);
  border: 2px solid var(--switch-border);
  border-radius: 0.95rem;
  overflow: hidden;
  background: color-mix(in srgb, var(--panel-bg) 65%, transparent);
  padding: 0;
  cursor: pointer;
  position: relative;
  box-shadow: var(--panel-shadow);
}

.seg {
  flex: 1 1 50%;
  display: grid;
  place-items: center;
  position: relative;
  color: var(--switch-inactive-icon);
  background: var(--switch-inactive-bg);
}

.seg--left::after {
  content: '';
  position: absolute;
  right: 0;
  top: 10%;
  bottom: 10%;
  width: 2px;
  border-right: 2px solid var(--switch-border);
  opacity: .7;
}

.ico {
  width: 1.25rem;
  height: 1.25rem;
  display: inline-block;
}

.theme-switch:not(.is-dark) .seg--left {
  background: var(--switch-active-bg);
  color: var(--switch-active-icon);
}

.theme-switch.is-dark .seg--right {
  background: var(--switch-active-bg);
  color: var(--switch-active-icon);
}

.theme-switch {
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;
  z-index: 50;
}

.theme-switch:focus-visible {
  outline: 3px solid var(--switch-active-bg);
  outline-offset: 2px;
}

@include respond-down(phone) {
  .theme-switch {
    top: 0.9rem;
    right: 0.9rem;
    transform: scale(0.92);
    transform-origin: top right;
  }
}
</style>