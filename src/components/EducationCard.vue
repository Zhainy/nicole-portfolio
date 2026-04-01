<script setup>
defineProps({
    educationTitle: {
        type: String,
        required: true,
    },
    educationSubtitle: {
        type: String,
        required: true,
    },
    educationYear: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <article class="education-card pixel-panel">
        <h3 class="education-card__title">{{ educationTitle }}</h3>
        <p class="education-card__subtitle">{{ educationSubtitle }}</p>
        <p class="education-card__year">{{ educationYear }}</p>
    </article>
</template>

<style lang="scss" scoped>
.education-card {
    display: grid;
    gap: 0.4rem;
    padding: 1rem 1.1rem;
    position: relative;
    overflow: hidden;
    border-radius: 1rem;
    border: 2px solid var(--panel-border-soft);
    background: color-mix(in srgb, var(--panel-raised) 88%, white);
}

.education-card::after {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(
      120deg,
      transparent 0%,
      transparent 32%,
      color-mix(in srgb, var(--accent-strong) 70%, var(--mint-blue-300)) 50%,
      transparent 68%,
      transparent 100%
    );
    transform: translateX(-135%);
    transition: transform 560ms ease;
    pointer-events: none;
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
}

.education-card:hover::after {
    transform: translateX(135%);
}

.education-card__title {
    color: var(--heading-strong);
}

.education-card__subtitle,
.education-card__year {
    font-family: var(--font-caption);
    letter-spacing: 0.12rem;
}

.education-card__subtitle {
    color: var(--text-muted);
    font-size: 1.15rem;
}

.education-card__year {
    color: var(--accent-strong);
    font-size: 1rem;
}
</style>