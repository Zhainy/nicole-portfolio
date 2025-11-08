<script setup>
import CarrouselSubtitle from "@/components/CarrouselSubtitle.vue";
import CustomButton from "@/components/CustomButton.vue";
</script>

<template>
  <header id="hero-section" class="hero-section">
    <h1>Nicole Fernández</h1>
    <CarrouselSubtitle />
    <div class="grid">
      <CustomButton
      buttonName="GitHub"
      icon="github"
      iconSize="small"
      size="small"
    />
    <CustomButton
      buttonName="Linkedin"
      icon="linkedin"
      iconSize="small"
      size="small"
    />
    <CustomButton
      buttonName="Download CV"
      icon="download"
      iconSize="small"
      size="small"
    />
    </div>
    <div class="info">
      <svgIcons send="Send"> </svgIcons> <span>ni.ferng@gmail.com</span>
    <h3>Contáctame para oportunidades laborales</h3>
    </div>
    <CustomButton
      buttonName="open to work _"
      icon="briefcase-business"
      iconSize="large"
      size="large"
    />
  </header>
</template>

<style lang="scss">
@use "@/assets/styles/variables" as *;
.hero-section {
  width: 100vw;
  padding: 10rem 6% 0 6%;

}
.info {
  margin: 1rem 0;  
}
h3 {
  margin-top: 2rem;

}
.grid {
display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    gap: 1rem;
    margin-top: 2rem;
    align-content: center;
    justify-content: flex-start;
}
</style>
