<script setup>
import { RouterLink } from 'vue-router'
import { onMounted } from 'vue'
import HomeAboutBlog from '../components/HomeAboutBlog.vue'
import HomeBlog from '../components/HomeBlog.vue'
import HomeCounter from '../components/HomeCounter.vue'
import HomeOurPrincing from '../components/HomeOurPrincing.vue'
import HomePortfolio from '../components/HomePortfolio.vue'
import Testymonial from '../components/Testymonial.vue'
import OurLatestBlog from '../components/OurLatestBlog.vue'
import OurFitcher from '../components/OurFitcher.vue'
import ClientLogo from '../elements/ClientLogo.vue'

import { useHomeStore } from '../stores/home'

const homeStore = useHomeStore()
onMounted(() => {
  homeStore.home()
})
</script>

<template>
  <div

    class="page-content bg-white"
  >
    <div class="banner-two">
      <div class="container">
        <div class="banner-inner">
          <div class="row align-items-center">
            <div class="col-lg-7">
              <div class="banner-content">
                <h6
                  class="wow fadeInUp sub-title text-primary"
                  data-wow-delay="0.5s"
                >
                  {{ homeStore.findText(619) }}
                </h6>
                <h1
                  class="wow fadeInUp m-b20"
                  data-wow-delay="1s"
                >
                  {{ homeStore.findText(620) }}
                </h1>
                <p
                  class="wow fadeInUp m-b15"
                  data-wow-delay="1.5s"
                >
                  {{ homeStore.findText(621) }}
                </p>
                <ul
                  class="wow fadeInUp list-check-2 m-b20"
                  data-wow-delay="2.0s"
                >
                  <li>
                    {{ homeStore.findText(622) }}
                  </li>
                  <li>
                    {{ homeStore.findText(623) }}
                  </li>
                </ul>
                <RouterLink
                  to="/about-us"
                  class="wow fadeInUp btn btn-primary rounded-xl gradient"
                >
                  {{ homeStore.findText(624) }}
                </RouterLink>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="banner-media">
                <img
                  src="../assets/images/main-slider/slider2/pic3.png"
                  class="wow fadeInUp"
                  alt=""
                >
                <div class="move-2">
                  <img
                    src="../assets/images/main-slider/slider2/pic1.png"
                    class="wow zoomIn"
                    alt=""
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <HomeBlog />
    <HomeAboutBlog />
    <div v-if="homeStore.data.length > 0">
      <HomeCounter />
      <OurFitcher />
      <HomePortfolio />
      <HomeOurPrincing />
      <Testymonial />
      <OurLatestBlog />
      <ClientLogo />
    </div>
  </div>
</template>

<style scoped>
.banner-two {
    background-image: url('../assets/images/main-slider/slider2/pic2.png');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: top;
}
</style>
