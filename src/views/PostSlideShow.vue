<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import CommonBanner2 from '../elements/CommonBanner2.vue'
import bgimg from '../assets/images/banner/bnr1.jpg'
import blogThumb1 from '../assets/images/blog/default/thum1.jpg'
import blogThumb2 from '../assets/images/blog/default/thum2.jpg'
import blogThumb3 from '../assets/images/blog/default/thum3.jpg'
import PostStartLeftContent from '../components/PostStartLeftContent.vue'

const sliderRef = ref([
  { img: blogThumb1 },
  { img: blogThumb2 },
  { img: blogThumb3 },
])

const modules = [Autoplay, Navigation, Pagination]
</script>

<template>
  <div class="page-content bg-white">
    <CommonBanner2
      :image="bgimg"
      title="Post Slide  Show"
      title2="Post Slide  Show"
    />
    <section class="content-inner bg-img-fix">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="dlab-blog blog-single post-header rounded-md shadow">
              <div class="dlab-media ">
                <Swiper
                  :modules="modules"
                  :loop="true"
                  :navigation="{
                    prevEl: '.owl-prev',
                    nextEl: '.owl-next',
                  }"
                  :speed="2000"
                  :autoplay="{
                    delay: 1200,
                  }"
                  :pagination="true"
                  class="post-carousel owl-carousel owl-theme owl owl-btn-center-lr owl-btn-2"
                >
                  <SwiperSlide
                    v-for="item, ind in sliderRef"
                    class="item"
                  >
                    <img
                      class="rounded-sm"
                      :src="item.img"
                      alt=""
                      style="z-index: 0;"
                    >
                  </SwiperSlide>
                  <div class="owl-nav">
                    <div class="owl-prev zIUp">
                      <i class="las la-arrow-left" />
                    </div>
                    <div class="owl-next zIUp">
                      <i class="las la-arrow-right" />
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="min-container">
        <div class="row">
          <PostStartLeftContent />
        </div>
      </div>
    </section>
  </div>
</template>
