<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import { ref } from 'vue'
import logoPink1 from '../assets/images/logo/logo-pink1.png'
import logoLight1 from '../assets/images/logo/logo-light1.png'
import logoPink2 from '../assets/images/logo/logo-pink2.png'
import logoLight2 from '../assets/images/logo/logo-light2.png'
import logoPink3 from '../assets/images/logo/logo-pink3.png'
import logoLight3 from '../assets/images/logo/logo-light3.png'
import logoPink4 from '../assets/images/logo/logo-pink4.png'
import logoLight4 from '../assets/images/logo/logo-light4.png'
import logoPink5 from '../assets/images/logo/logo-pink5.png'
import logoLight5 from '../assets/images/logo/logo-light5.png'
import logoPink6 from '../assets/images/logo/logo-pink6.png'
import logoLight6 from '../assets/images/logo/logo-light6.png'

const ClientLogo = ref([
  { img: logoPink1, img2: logoLight1 },
  { img: logoPink2, img2: logoLight2 },
  { img: logoPink3, img2: logoLight3 },
  { img: logoPink4, img2: logoLight4 },
  { img: logoPink5, img2: logoLight5 },
  { img: logoPink6, img2: logoLight6 },
  { img: logoPink1, img2: logoLight1 },
  { img: logoPink2, img2: logoLight2 },
  { img: logoPink3, img2: logoLight3 },
  { img: logoPink4, img2: logoLight4 },
  { img: logoPink5, img2: logoLight5 },
  { img: logoPink6, img2: logoLight6 },
])
</script>

<template>
  <div class="content-inner-3">
    <div class="container">
      <Swiper
        class="clients-carousel owl-none owl-carousel style-2"
        :slides-per-view="6"
        :space-between="30"
        :modules="[Autoplay]"
        :speed="1500"
        :autoplay="{
          delay: 1200,
        }"
        :breakpoints="{
          1024: {
            slidesPerView: 5,
          },
          991: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          420: {
            slidesPerView: 2,
          },
          200: {
            slidesPerView: 1,
          },
        }"
      >
        <SwiperSlide
          v-for="item, ind in ClientLogo"
          class="item"
        >
          <div class="clients-logo">
            <img
              class="logo-main"
              :src="item.img"
              alt=""
            >
            <img
              class="logo-hover"
              :src="item.img2"
              alt=""
            >
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
