<script setup>

import { svgIcons } from '@/utils/icons.js'

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
    certificateUrl: {
        type: String,
        default: '',
    },
})

const GraduationCapIcon = svgIcons['graduation-cap']
const FileBadgeIcon = svgIcons['file-badge']
</script>

<template>
    <article class="education-card pixel-panel">
        <div class="education-card__content">
            <h3 class="education-card__title">{{ educationTitle }}</h3>
            <p class="education-card__subtitle">{{ educationSubtitle }}</p>
            <p class="education-card__year">{{ educationYear }}</p>
        </div>
        <div class="education-card__side-icons">
            <component :is="GraduationCapIcon" class="education-card__grad-icon" aria-hidden="true" />
            <a
                v-if="certificateUrl"
                :href="certificateUrl"
                target="_blank"
                rel="noreferrer noopener"
                class="education-card__cert-link"
                :aria-label="`Ver certificado de ${educationTitle}`"
            >
                <component :is="FileBadgeIcon" class="education-card__cert-icon" aria-hidden="true" />
            </a>
        </div>
    </article>
</template>

<style lang="scss" scoped>
.education-card {
    display: grid;
    grid-template-columns: 1fr auto;
    --education-year-bg: var(--panel-bg);
    --education-year-border: var(--french-rose-300);
    --education-year-fg: var(--accent-strong);
    gap: 0.4rem 0.75rem;
    padding: 1rem 1.1rem;
    position: relative;
    overflow: hidden;
    border-radius: 1rem;
    border: 2px solid var(--panel-border-soft);
    background: color-mix(in srgb, var(--panel-raised) 88%, white);
    transition:
      transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 220ms ease,
      border-color 220ms ease;
}

.education-card:hover,
.education-card:focus-within {
    transform: scale(1.008);
    border-color: color-mix(in srgb, var(--accent-strong) 45%, var(--panel-border-soft));
    box-shadow: 0 8px 16px color-mix(in srgb, var(--accent-strong) 14%, transparent);
    animation: education-card-bounce 360ms ease;
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

.education-card__content {
    display: grid;
    gap: 0.4rem;
}

.education-card__title {
    color: var(--heading-strong);
}

.education-card__side-icons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.1rem;
    padding-bottom: 0.12rem;
    flex-shrink: 0;
}

.education-card__grad-icon {
    width: 1.25em;
    height: 1.25em;
    display: block;
    overflow: visible;
    stroke: currentColor;
    color: var(--accent-strong);
    font-size: var(--h3-size, 1.17rem);
}

.education-card__cert-link {
    display: flex;
    color: var(--text-muted);
    transition: color 180ms ease;

    &:hover,
    &:focus-visible {
        color: var(--accent-strong);
        outline: none;
    }
}

.education-card__cert-icon {
    width: 1.15rem;
    height: 1.15rem;
    display: block;
    overflow: visible;
    stroke: currentColor;
    fill: none;
}

.education-card__subtitle,
.education-card__year {
    font-family: var(--font-caption);
    letter-spacing: 0.12rem;
    font-weight: 500;
}
.education-card__subtitle {
    color: var(--text-muted);
    font-size: 1.15rem;
}

.education-card__year {
    color: var(--education-year-fg);
    background-color: var(--education-year-bg);
    font-size: 1rem;
    padding: .1rem 0.6rem;
    border: 1px solid var(--education-year-border);
    border-radius: 0.6rem;
    width: max-content;
}

:global(.dark) .education-card {
    --education-year-bg: var(--royal-purple-300);
    --education-year-border: var(--mint-blue-300);
    --education-year-fg: var(--salmon-pink-100);
}

@keyframes education-card-bounce {
    0% {
        transform: scale(1);
    }
    55% {
        transform: scale(1.012);
    }
    100% {
        transform: scale(1.008);
    }
}

</style>