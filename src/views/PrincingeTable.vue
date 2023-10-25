<script setup>
import CommonBanner from '../elements/CommonBanner.vue'
import bgImg from '../assets/images/banner/bnr3.jpg'
import HomeOurPrincing from '../components/HomeOurPrincing.vue'
import ClientLogo from '../elements/ClientLogo.vue'
</script>

<template>
  <CommonBanner
    :image="bgImg"
    title="Our Pricing"
  />
  <HomeOurPrincing />
  <ClientLogo />
</template>
