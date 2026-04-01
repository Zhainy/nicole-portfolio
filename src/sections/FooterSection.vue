<script setup>
import footerShape from '@/assets/images/footer-shape.png'

import CustomButton from '@/components/CustomButton.vue'
import { contactDetails } from '@/data/portfolio'
</script>

<template>
	<footer class="footer-section section-shell">
		<img class="footer-section__shape" :src="footerShape" alt="" aria-hidden="true" />
		<div class="footer-section__content">
			<div>
				<h3>Nicole Fernández <span class="footer-section__accent">| Front-End Developer Trainee</span></h3>
				<p class="footer-section__availability">{{ contactDetails.availability }}</p>
			</div>

			<div class="footer-section__actions">
				<CustomButton
					label="solicita mi cv"
					:href="`mailto:${contactDetails.email}?subject=Solicitud%20de%20CV`"
					icon="download"
					variant="outline"
					size="small"
					icon-size="small"
				/>
				<CustomButton
					label="contáctame"
					:href="`mailto:${contactDetails.email}`"
					icon="send"
					variant="outline"
					size="small"
					icon-size="small"
				/>
			</div>
            
			<div class="footer-section__meta">
				<p>© 2026 Diseñado y desarrollado por <span class="footer-section__accent">Nicole Fernández.</span></p>
				<p>{{ contactDetails.location }}</p>
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
.footer-section {
	position: relative;
	padding-bottom: 2.5rem;
}

.footer-section__shape {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 0;
	width: 100%;
	height: 100%;
	max-width: none;
	object-fit: cover;
	object-position: top;
	pointer-events: none;
	user-select: none;
    overflow: visible;
}

.footer-section__content {
	position: relative;
	z-index: 1;
	display: grid;
	gap: 1.25rem;
	padding: clamp(3rem, 7vw, 5rem) clamp(1.25rem, 3vw, 2rem) 1.5rem;
}

/* ------ Texto con contraste sobre fondo claro ------ */
.footer-section__content h3 {
	color: var(--royal-purple-400);
    font-family: var(--font-primary);
    font-style: italic;
    padding-bottom: .75rem;
}

.footer-section__accent {
	color: var(--french-rose-300);
	font-family: inherit;
	font-size: inherit;
	letter-spacing: 0;
}

.footer-section__meta {
	color: var(--royal-purple-300);
}

.footer-section__meta p {
    font-family: var(--font-primary);
    font-style: italic;
    font-weight: 600;
    font-size: 1rem;
}

.footer-section__availability {
	color: var(--royal-purple-300);
	font-weight: 600;
    letter-spacing: 0.05em;
    font-family: var(--font-caption);
}

.footer-section__actions {
	display: flex;
	flex-wrap: wrap;
	gap: 0.75rem;
}

/* Botones con contraste legible sobre el fondo rosa claro */
:deep(.button--outline) {
	--button-bg: transparent;
	--button-fg: var(--royal-purple-500);
	--button-border: var(--royal-purple-300);
	--button-hover-bg: var(--royal-purple-300);
	--button-hover-fg: var(--french-rose-100);
	--button-hover-border: var(--royal-purple-400);
}

/* En modo oscuro el shape sigue siendo rosa claro — asegurar texto oscuro */
:global(.dark) .footer-section__content {
	color: var(--royal-purple-500);
}

:global(.dark) .footer-section__accent {
	color: var(--french-rose-400);
}
</style>
