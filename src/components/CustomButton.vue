<script setup>
import { svgIcons } from '@/utils/icons.js'

const props = defineProps({
  buttonName: String,
  icon: String,
  size: {
    type: String,
    default: 'small' // controla el botón
  },
  iconSize: {
    type: String,
    default: 'small' // controla el ícono
  }
})

</script>

<template>
  <button :class="['button', `button__${size}`]">
    <component
      v-if="icon && svgIcons[icon]"
      :is="svgIcons[icon]"
      :class="[`icon__${iconSize}`]"
    />
    {{ buttonName }}
  </button>

</template>

<style lang="scss">
@use '@/assets/styles/variables' as *;

.button {
  color: var(--french-rose-100);
  background-color: var(--royal-purple-300);
  border: 2px solid var(--royal-purple-100);
  font-family: $font-caption;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  transition: all .2s ease-in-out;
  letter-spacing: .2rem;
  text-transform: lowercase;
  justify-content: center;

  &__large {
    padding: .3rem 5rem;
    font-size: 1.5rem;
    border-radius: .8rem;
  }

  &__small {
    padding: .3rem 1.5rem;
    font-size: 0.8rem;
    border-radius: .5rem;
  }

  &:hover {
    color: var(--french-rose-300);
    background-color: var(--french-rose-100);
    border: 2px solid var(--french-rose-300);
    transform: translateY(-2px);
  }

  &:visited {
    color: var(--mint-blue-300);
    border: 2px solid var(--mint-blue-300);
  }
}

.icon__small {
  width: 16px;
  height: 16px;
  stroke: currentColor;
  fill:none;
}

.icon__large {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  fill:none;
}
</style>
