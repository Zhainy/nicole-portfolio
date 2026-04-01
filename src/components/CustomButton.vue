<script setup>
import { computed } from 'vue'

import { svgIcons } from '@/utils/icons.js'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: '',
  },
  href: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'outline',
  },
  size: {
    type: String,
    default: 'small',
  },
  iconSize: {
    type: String,
    default: 'small',
  },
  download: {
    type: Boolean,
    default: false,
  },
})

const tagName = computed(() => (props.href ? 'a' : 'button'))
const isExternal = computed(() => /^https?:\/\//.test(props.href))
const iconComponent = computed(() => (props.icon ? svgIcons[props.icon] : null))
</script>

<template>
  <component
    :is="tagName"
    :class="['button', `button--${size}`, `button--${variant}`]"
    :href="href || undefined"
    :download="download || undefined"
    :rel="isExternal ? 'noreferrer noopener' : undefined"
    :target="isExternal ? '_blank' : undefined"
    :type="tagName === 'button' ? 'button' : undefined"
  >
    <component
      :is="iconComponent"
      v-if="iconComponent"
      :class="['button__icon', `button__icon--${iconSize}`]"
    />
    <span class="button__label">{{ label }}</span>
  </component>
</template>

<style lang="scss" scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  border-radius: 0.8rem;
  border: 2px solid var(--button-border);
  background: var(--button-bg);
  color: var(--button-fg);
  box-shadow: 0 10px 24px color-mix(in srgb, var(--button-border) 22%, transparent);
  cursor: pointer;
  text-transform: lowercase;
  letter-spacing: 0.14rem;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease,
    color 180ms ease,
    box-shadow 180ms ease;
}

.button:hover,
.button:focus-visible {
  transform: translateY(-2px);
  background: var(--button-hover-bg);
  color: var(--button-hover-fg);
  border-color: var(--button-hover-border);
  box-shadow: 0 14px 28px color-mix(in srgb, var(--button-hover-border) 18%, transparent);
}

.button:focus-visible {
  outline: none;
}

.button--small {
  min-height: 2.45rem;
  padding: 0.45rem 1rem;
  font-size: 0.9rem;
}

.button--large {
  min-height: 3.3rem;
  padding: 0.65rem 1.4rem;
  font-size: 1.15rem;
}

.button--primary {
  --button-bg: var(--accent-strong);
  --button-fg: var(--accent-on-strong);
  --button-border: var(--accent-strong);
  --button-hover-bg: var(--royal-purple-300);
  --button-hover-fg: var(--french-rose-100);
  --button-hover-border: var(--royal-purple-400);
}

.button--outline {
  --button-bg: color-mix(in srgb, var(--panel-raised) 62%, transparent);
  --button-fg: var(--heading-strong);
  --button-border: var(--panel-border-soft);
  --button-hover-bg: var(--french-rose-300);
  --button-hover-fg: var(--french-rose-100);
  --button-hover-border: var(--french-rose-400);
}

:global(.dark) .button--outline.button--small:hover,
:global(.dark) .button--outline.button--small:focus-visible {
  --button-hover-bg: var(--mint-blue-300);
  --button-hover-fg: var(--royal-purple-500);
  --button-hover-border: var(--mint-blue-500);
}

.button__label {
  font-family: var(--font-caption);
  line-height: 1;
}

.button__icon {
  stroke: currentColor;
  fill: none;
}

.button__icon--small {
  width: 1rem;
  height: 1rem;
}

.button__icon--large {
  width: 1.2rem;
  height: 1.2rem;
}
</style>
