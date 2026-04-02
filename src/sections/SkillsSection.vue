<script setup>
import skillsIllustration from '@/assets/images/skills.png'

import SectionHeading from '@/components/SectionHeading.vue'
import { skillItems } from '@/data/portfolio'
</script>

<template>
	<section id="skills" class="skills-section section-shell">
		<div class="section-grid skills-section__grid">
			<div class="section-copy skills-section__copy">
				<div class="skills-section__panel panel">
                    <SectionHeading title="Skills" />
					<ul class="skills-section__list">
						<li v-for="skill in skillItems" :key="skill.name" class="skills-section__item">
							<img :src="skill.image" :alt="`Logo de ${skill.name}`" />
							<span>{{ skill.name }}</span>
						</li>
					</ul>
					<div class="section-visual skills-section__visual">
						<img :src="skillsIllustration" alt="Ilustración de Nicole leyendo con íconos flotantes" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.skills-section__grid {
	grid-template-columns: 1fr;
}

.skills-section__panel {
	position: relative;
	padding: 2.5rem;
	padding-bottom: 8.8rem;
    margin-top: 2rem;
}

.skills-section__list {
	margin: 2rem 0 0;
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));
	grid-auto-rows: 1fr;
	align-items: stretch;
	gap: 2rem;
	list-style: none;
	padding: 0 2.5rem;
}

.skills-section__item {
	display: grid;
	justify-items: center;
	align-content: start;
	gap: 0.5rem;
	padding: 0.9rem 0.6rem;
	height: 100%;
	border-radius: 1rem;
	border: 2px solid var(--panel-border-soft);
	background: color-mix(in srgb, var(--panel-raised) 90%, var(--french-rose-300));
	cursor: default;
	transition:
		transform 180ms ease,
		box-shadow 180ms ease,
		border-color 180ms ease;
}

.skills-section__item:hover {
	transform: scale(1.1) translateY(-3px);
	border-color: var(--accent-strong);
	box-shadow: 0 10px 22px color-mix(in srgb, var(--accent-strong) 22%, transparent);
}

.skills-section__item:hover img {
	animation: skillPop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes skillPop {
	0%   { transform: scale(1); }
	50%  { transform: scale(1.18); }
	100% { transform: scale(1); }
}

.skills-section__item img {
	width: 3.4rem;
	height: 3.4rem;
	object-fit: contain;
}

.skills-section__item span {
	font-family: var(--font-caption);
	font-size: 1rem;
	letter-spacing: 0.08rem;
	line-height: 1.1;
	text-align: center;
	color: var(--heading-strong);
	font-weight: 500;
}

.skills-section__visual {
	position: absolute;
    padding-right: 3.5rem;
	right: 0;
	bottom: 0;
	z-index: 1;
	justify-items: end;
	pointer-events: none;
}

.skills-section__visual img {
	width: min(34vw, 24rem);
	display: block;
}

@include respond-down(tablet) {
	.skills-section__list {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	.skills-section__panel {
		padding-bottom: 8rem;
	}

	.skills-section__visual img {
		width: min(46vw, 12rem);
	}
}

@include respond-down(phone) {
	.skills-section__list {
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1rem;
		padding: 0 0.5rem;
	}

	.skills-section__panel {
		padding: 1.4rem 1rem;
		margin-top: 1.2rem;
	}

	.skills-section__item {
		gap: 0.4rem;
		padding: 0.75rem 0.45rem;
	}

	.skills-section__item img {
		width: 2.8rem;
		height: 2.8rem;
	}

	.skills-section__item span {
		font-size: 0.9rem;
		letter-spacing: 0.06rem;
	}

	.skills-section__visual {
		position: static;
		padding-top: 1rem;
		padding-right: 0;
		justify-items: center;
	}

	.skills-section__visual img {
		width: 100%;
		max-width: none;
	}
}

@include phone-xs {
	.skills-section__panel {
		padding-inline: 0.75rem;
	}

	.skills-section__list {
		gap: 0.75rem;
		padding: 0;
	}

	.skills-section__item {
		padding: 0.65rem 0.35rem;
	}

	.skills-section__item img {
		width: 2.5rem;
		height: 2.5rem;
	}
}
</style>
