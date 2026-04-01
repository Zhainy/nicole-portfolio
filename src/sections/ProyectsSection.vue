<script setup>
import proyectsShape from '@/assets/images/proyects-shape.png'
import projectsIllustration from '@/assets/images/proyects.png'

import ProjectCard from '@/components/ProjectCard.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import { projectItems } from '@/data/portfolio'
</script>

<template>
	<section id="projects" class="projects-section section-shell">
		<div class="section-grid projects-section__grid">
			<div class="section-copy projects-section__copy">
				<div class="projects-section__stack">
					<ProjectCard v-for="project in projectItems" :key="project.title" :project="project" />
				</div>
			</div>

			<div class="section-visual projects-section__visual">
				<img class="projects-section__shape" :src="proyectsShape" alt="" aria-hidden="true" />
				<SectionHeading title="Mis Proyectos" align="right" />
				<img :src="projectsIllustration" alt="Ilustración de Nicole trabajando en un escritorio" />
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.projects-section__grid {
	align-items: center;
	grid-template-columns: minmax(0, 1.5fr) minmax(280px, 1fr);
}

.projects-section__shape {
	position: absolute;
	top: -34%;
	right: -18%;
	z-index: 0;
	width: clamp(78rem, 135vw, 108rem);
	height: auto;
	max-width: none;
	pointer-events: none;
	user-select: none;
    overflow: visible;
	transform: rotate(10deg);
}

.projects-section__visual {
	position: relative;
	overflow: visible;
	z-index: 1;
}

.projects-section__visual :deep(.section-heading) {
	position: relative;
	z-index: 2;
}

.projects-section__visual img:last-child {
	position: relative;
	z-index: 2;
}

.projects-section__stack {
	display: grid;
	gap: 1rem;
}

.projects-section__copy {
	width: 100%;
	position: relative;
	z-index: 2;
}

.projects-section__visual {
	align-content: center;
	gap: 1rem;
	justify-items: end;
}

.projects-section__visual img:last-child {
	width: min(100%, 28rem);
}

.projects-section__visual :deep(.section-heading) {
	width: 100%;
}

.projects-section :deep(.section-heading__title) {
	color: var(--royal-purple-300);
	text-align: left;
}

.projects-section :deep(.section-heading__accent) {
	color: var(--french-rose-300);
}

@include respond-down(tablet) {
	.projects-section__visual {
		justify-items: center;
	}

	.projects-section__shape {
		top: -24%;
		right: -94%;
		width: clamp(62rem, 175vw, 92rem);
	}

	.projects-section__grid {
		grid-template-columns: 1fr;
	}
}
</style>
