<script setup>
import CustomButton from '@/components/CustomButton.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import { contactDetails } from '@/data/portfolio'
</script>

<template>
	<section id="contact" class="contact-section section-shell">
		<div class="contact-section__panel panel panel--neon-border">
			<SectionHeading
				title="Contacto"
				eyebrow="Disponible"
				description="Si te interesa mi perfil para una práctica, trainee o una oportunidad junior, conversemos."
			/>
			<div class="contact-section__content">
				<div>
					<p class="contact-section__label">Correo</p>
					<a class="contact-section__value" :href="`mailto:${contactDetails.email}`">{{ contactDetails.email }}</a>
				</div>
				<div>
					<p class="contact-section__label">Ubicación</p>
					<p class="contact-section__value">{{ contactDetails.location }}</p>
				</div>
			</div>
			<div class="contact-section__actions">
				<CustomButton
					label="Escríbeme"
					:href="`mailto:${contactDetails.email}`"
					icon="send"
					variant="primary"
					size="large"
					icon-size="large"
				/>
				<CustomButton
					label="Ver habilidades"
					href="#skills"
					icon="code-xml"
					variant="outline"
					size="large"
					icon-size="large"
				/>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.contact-section__panel {
	display: grid;
	gap: 1.5rem;
	padding: clamp(1.5rem, 3vw, 2rem);
}

.contact-section__content {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 1rem;
}

.contact-section__label {
	font-family: var(--font-caption);
	font-size: 1rem;
	letter-spacing: 0.12rem;
	color: var(--accent-strong);
}

.contact-section__value {
	color: var(--heading-strong);
}

.contact-section__actions {
	display: flex;
	flex-wrap: wrap;
	gap: 0.75rem;
}

@include respond-down(phone) {
	.contact-section__content {
		grid-template-columns: 1fr;
	}
}
</style>
