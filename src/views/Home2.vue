<script setup>
import { RouterLink } from 'vue-router'
import Home2OurFiture from '../components/Home2OurFiture.vue'
import Home2Team from '../components/Home2Team.vue'
import HomePortfolio from '../components/HomePortfolio.vue'
import OurAgency from '../components/OurAgency.vue'
import OurSpeciallization from '../components/OurSpeciallization.vue'
import NewsLetter from '../elements/NewsLetter.vue'
</script>

<template>
  <div class="page-content bg-white">
    <div
      class="banner-three bg-primary p-t100"
      style="background-image: url(), url(images/background/bg6.png), var(--gradient-sec);"
    >
      <div class="container banner-inner">
        <div class="row align-items-center">
          <div class="col-xl-8 col-lg-7 col-md-7">
            <div class="banner-content text-white">
              <h6
                data-wow-delay="0.5s"
                data-wow-duration="3s"
                class="wow fadeInUp sub-title text-yellow"
              >
                We
                Are Product Designer From India
              </h6>
              <h1
                data-wow-delay="1s"
                data-wow-duration="3s"
                class="wow fadeInUp m-b15"
              >
                We Design Interfaces
                That Users Love
              </h1>
              <p
                data-wow-delay="1.5s"
                data-wow-duration="3s"
                class="wow fadeInUp m-b30"
              >
                Nunc vel ligula ut
                erat scelerisque vehicula sit amet porttitor magna. Donec malesuada quis diam quis
                pellentesque. Mauris mollis ligula magna.
              </p>
              <RouterLink
                to="/about-us"
                class="wow fadeInUp btn gradient btn-primary"
              >
                Learn More
              </RouterLink>
            </div>
          </div>
          <div class="col-xl-4 col-lg-5 col-md-5">
            <div
              class="dz-media wow fadeIn"
              data-wow-delay="1s"
              data-wow-duration="3s"
            >
              <img
                src="../assets/images/main-slider/slider3/pic1.png"
                class="move-1"
                alt=""
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <OurSpeciallization />
    <OurAgency />
    <Home2OurFiture />
    <HomePortfolio />
    <NewsLetter />
    <Home2Team />
  </div>
</template>
