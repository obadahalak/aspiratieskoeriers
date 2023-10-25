<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules'
import testymonialPic1 from '../assets/images/testimonials/pic1.jpg'
import testymonialPic2 from '../assets/images/testimonials/pic2.jpg'
import testymonialPic3 from '../assets/images/testimonials/pic3.jpg'
import backgroundImg from '../assets/images/background/bg17.png'
import { useHomeStore } from '../stores/home'

const slideeImage = ref([
  { img: testymonialPic1, name: '', position: '', text: '' },
  { img: testymonialPic2, name: '', position: '', text: '' },
  { img: testymonialPic3, name: '', position: '', text: '' },
])
const homeStore = useHomeStore()

function initSlideeImage() {
  slideeImage.value = [
    { img: testymonialPic1, name: homeStore.findText(704), position: homeStore.findText(705), text: homeStore.findText(706) },
    { img: testymonialPic2, name: homeStore.findText(707), position: homeStore.findText(708), text: homeStore.findText(709) },
    { img: testymonialPic3, name: homeStore.findText(710), position: homeStore.findText(711), text: homeStore.findText(712) },
  ]
}
onMounted(() => initSlideeImage())
const thumbsSwiper = ref(null)
const modules = [FreeMode, Navigation, Thumbs, Pagination]
function setThumbsSwiper(swiper) {
  thumbsSwiper.value = swiper
}
</script>

<template>
  <section
    class="content-inner-2"
    :style="`background-image: url(${backgroundImg});  background-size: contain;  background-position: center;  background-repeat: no-repeat;`"
  >
    <div class="container">
      <div class="section-head style-1 text-center">
        <h6 class="sub-title text-primary m-b15">
          {{ homeStore.findText(702) }}
        </h6>
        <h2 class="title">
          {{ homeStore.findText(703) }}
        </h2>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="testimonials-wraper-2">
            <!-- Swiper -->
            <div class="swiper-container testimonial-thumbs">
              <Swiper
                class="swiper-wrapper"
                :on-swiper="setThumbsSwiper"
                :loop="true"
                :space-between="10"
                :speed="1500"
                :slides-per-view="3"
                :free-mode="true"
                :watch-slides-progress="true"
                :modules="modules"
              >
                <SwiperSlide
                  v-for="item, ind in slideeImage"
                  class="swiper-slide"
                >
                  <div
                    :key="ind"
                    class="testimonial-pic"
                  >
                    <img
                      style="cursor: pointer;"
                      :src="item.img"
                      alt=""
                    >
                    <div class="shape-bx" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div class="swiper-container testimonial-content">
              <Swiper
                :loop="true"
                :space-between="10"
                :thumbs="{ swiper: thumbsSwiper }"
                :modules="modules"
                :pagination="{ el: '.swiper-pagination', clickable: true }"
                class="swiper-wrapper"
              >
                <SwiperSlide
                  v-for="item, ind in slideeImage"
                  class="swiper-slide"
                >
                  <div
                    :key="ind"
                    class="testimonial-4 quote-left"
                  >
                    <div class="testimonial-text">
                      <strong class="testimonial-name"> {{ item.name }}</strong>
                      <span class="testimonial-position text-primary m-b20"> {{ item.position }}</span>
                      <p>
                        {{ item.text }}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <div class="swiper-pagination" />
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
