<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import { RouterLink } from 'vue-router'
import CommonBanner2 from '../elements/CommonBanner2.vue'
import bgimg from '../assets/images/banner/bnr2.jpg'
import PostStartRightContent from '../components/PostStartRightContent.vue'
import Pagination from '../elements/Pagination.vue'
import blogThumb1 from '../assets/images/blog/default/thum1.jpg'
import blogThumb2 from '../assets/images/blog/default/thum2.jpg'
import blogThumb3 from '../assets/images/blog/default/thum3.jpg'

const slideImages = ref([
  { img: blogThumb1 },
  { img: blogThumb2 },
  { img: blogThumb3 },
])
</script>

<template>
  <div class="page-content bg-white">
    <CommonBanner2
      :image="bgimg"
      title="BLOG RIGHT SIDEBAR"
      title2="Blog Right Sidebar"
    />
    <section class="content-inner bg-img-fix">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-8 m-b50">
            <div class="dlab-blog style-1 bg-white m-b50">
              <div class="dlab-info">
                <h4 class="dlab-title">
                  <RouterLink to="/blog-details">
                    Fusce sem ligula, imperdiet sed nisi sit amet, euismod
                    posuere dolor. Vestibulum in ante ut tortor eleifend
                  </RouterLink>
                </h4>
                <p class="m-b0">
                  Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante
                  velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu,
                  ullamcorper sed auctor vitae, porttitor quis erat. Donec sit amet semper massa.
                </p>
                <div class="dlab-meta meta-bottom">
                  <ul>
                    <li class="post-date">
                      <i class="flaticon-clock m-r10" />7 March, 2020
                    </li>
                    <li class="post-author">
                      <i class="flaticon-user m-r10" />By<RouterLink to="">
                        Johne Doe
                      </RouterLink>
                    </li>
                    <li class="post-comment">
                      <RouterLink to="">
                        <i class="flaticon-speech-bubble" /><span>15</span>
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="dlab-blog style-1 bg-white m-b50">
              <div class="dlab-media dlab-img-effect zoom">
                <Swiper
                  class="post-carousel owl-carousel owl-theme owl owl-btn-center-lr owl-btn-2"
                  :modules="[Navigation]"
                  :speed="1500"
                  :loop="true"
                  :navigation="{
                    prevEl: '.owl-prev',
                    nextEl: '.owl-next',

                  }"
                >
                  <SwiperSlide
                    v-for="item, ind in slideImages"
                    :key="ind"
                    class="item"
                  >
                    <img
                      class="rounded-sm"
                      :src="item.img"
                      alt=""
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
              <div class="dlab-info">
                <h4 class="dlab-title">
                  <RouterLink to="/blog-details">
                    Quisque egestas iaculis felis eget placerat ut pulvinar
                    mi
                    elitauctor nec.
                  </RouterLink>
                </h4>
                <p class="m-b0">
                  Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante
                  velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu,
                  ullamcorper sed auctor vitae, porttitor quis erat. Donec sit amet semper massa.
                </p>
                <div class="dlab-meta meta-bottom">
                  <ul>
                    <li class="post-date">
                      <i class="flaticon-clock m-r10" />7 March, 2020
                    </li>
                    <li class="post-author">
                      <i class="flaticon-user m-r10" />By <RouterLink to="">
                        Johne Doe
                      </RouterLink>
                    </li>
                    <li class="post-comment">
                      <RouterLink to="">
                        <i class="flaticon-speech-bubble" /><span>15</span>
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="dlab-blog style-1 bg-white m-b50">
              <div class="dlab-media dlab-img-effect zoom post-video">
                <RouterLink to="/blog-details">
                  <img
                    src="../assets/images/blog/default/thum3.jpg"
                    alt=""
                  >
                  <div class="post-video-icon fa fa-play" />
                </RouterLink>
              </div>
              <div class="dlab-info">
                <h4 class="dlab-title">
                  <RouterLink to="/blog-details">
                    Quisque sem tortor, convallis in arcu eu, accumsan
                    finibus
                    massa donec et sapien risus.
                  </RouterLink>
                </h4>
                <p class="m-b0">
                  Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante
                  velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu,
                  ullamcorper sed auctor vitae, porttitor quis erat. Donec sit amet semper massa.
                </p>
                <div class="dlab-meta meta-bottom">
                  <ul>
                    <li class="post-date">
                      <i class="flaticon-clock m-r10" />7 March, 2020
                    </li>
                    <li class="post-author">
                      <i class="flaticon-user m-r10" />By <RouterLink to="">
                        Johne Doe
                      </RouterLink>
                    </li>
                    <li class="post-comment">
                      <RouterLink to="">
                        <i class="flaticon-speech-bubble" /><span>15</span>
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="dlab-blog style-1 post-quote bg-white m-b50">
              <div class="post-quote-icon">
                <svg
                  id="Capa_1"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 298.667 298.667"
                  style="enable-background:new 0 0 298.667 298.667;"
                  xml:space="preserve"
                >
                  <polygon
                    points="0,170.667 64,170.667 21.333,256 85.333,256 128,170.667 128,42.667 0,42.667"
                  />
                  <polygon
                    points="170.667,42.667 170.667,170.667 234.667,170.667 192,256 256,256 298.667,170.667 298.667,42.667"
                  />
                </svg>
              </div>
              <div class="dlab-info">
                <h4 class="dlab-title">
                  <RouterLink to="/blog-details">
                    Quisque sem tortor, convallis in arcu eu, accumsan
                    finibus
                    massa donec et sapien risus.
                  </RouterLink>
                </h4>
              </div>
            </div>
            <Pagination />
          </div>
          <PostStartRightContent />
        </div>
      </div>
    </section>
  </div>
</template>
