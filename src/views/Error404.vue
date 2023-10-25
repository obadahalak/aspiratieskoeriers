<script setup>
import { RouterLink } from 'vue-router'
import backgroundimg from '../assets/images/background/bg1.png'
import bgimg from '../assets/images/banner/bnr1.jpg'
import CommonBanner2 from '../elements/CommonBanner2.vue'
</script>

<template>
  <div class="page-content bg-white">
    <CommonBanner2
      :image="bgimg"
      title="404"
      title2="404"
    />
    <div
      class="section-full"
      :style="`background-image: url(${backgroundimg});`"
    >
      <div class="container">
        <div class="error-page text-center">
          <div class="dlab_error">
            404
          </div>
          <h2 class="error-head">
            We are sorry. But the page you are looking for cannot be found.
          </h2>
          <RouterLink
            to="/"
            class="btn btn-primary radius-no"
          >
            <span class="p-lr15">Back to Homepage</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
