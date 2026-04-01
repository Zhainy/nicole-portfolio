<script setup>
import AboutSection from '@/sections/AboutSection.vue'
import ContactSection from '@/sections/ContactSection.vue'
import EducationSection from '@/sections/EducationSection.vue'
import FooterSection from '@/sections/FooterSection.vue'
import HeroSection from '@/sections/HeroSection.vue'
import ProyectsSection from '@/sections/ProyectsSection.vue'
import ScrollProgress from '@/components/ScrollProgress.vue'
import SkillsSection from '@/sections/SkillsSection.vue'
</script>

<template>
    <main class="portfolio-page page-shell">
        <ScrollProgress />
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ProyectsSection />
        <SkillsSection />
        <ContactSection />
        <FooterSection />
    </main>
</template>

<style lang="scss" scoped>
.portfolio-page {
    position: relative;
    isolation: isolate;
}
</style>