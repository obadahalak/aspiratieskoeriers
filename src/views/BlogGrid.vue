<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'
import { Navigation, Pagination } from 'swiper/modules'
import { RouterLink } from 'vue-router'
import ClientLogo from '../elements/ClientLogo.vue'
import CommonBanner from '../elements/CommonBanner.vue'
import bgimg from '../assets/images/banner/bnr2.jpg'
import backgroundImg from '../assets/images/background/bg2.png'
import blogGridPic2 from '../assets/images/blog/blog-grid/pic2.jpg'
import blogGridPic3 from '../assets/images/blog/blog-grid/pic3.jpg'
import blogGridPic4 from '../assets/images/blog/blog-grid/pic4.jpg'

const CardSlider = ref([
  { img: blogGridPic2 },
  { img: blogGridPic3 },
  { img: blogGridPic4 },
])
</script>

<template>
  <div class="page-content bg-white">
    <CommonBanner
      :image="bgimg"
      title="Blog Grid"
    />
    <section
      class="content-inner-2"
      :style="`background-image: url(${backgroundImg}); background-position: center;`"
    >
      <div class="container">
        <div
          id="masonry"
          class="masonry-box-container"
        >
          <div class="card-container">
            <div class="dlab-blog style-2 m-b50">
              <div class="dlab-info">
                <h4 class="dlab-title">
                  <RouterLink to="/blog-details">
                    Maecenas maximus augue eget libero
                    dictum, vitae tempus erat pretium.
                  </RouterLink>
                </h4>
                <p class="m-b20">
                  Nunc convallis sagittis dui eu dictum. Cras sodales id ipsum ac
                  aliquam.
                  Phasellus justo quam, sagittis vel sem congue, vehicula tempus elit.
                </p>
                <div class="dlab-meta mb-0">
                  <ul>
                    <li class="post-date">
                      25 March 2023
                    </li>
                    <li class="post-author">
                      <i class="las la-user-circle" /> By <RouterLink to="">
                        Johne Doe
                      </RouterLink>
                    </li>
                    <li class="post-comment">
                      <i class="las la-comment" />
                      <RouterLink to="">
                        Comments<span>15</span>
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="dlab-blog style-2 m-b50">
              <div class="dlab-media rounded-md post-video">
                <RouterLink to="/blog-details">
                  <img
                    src="../assets/images/blog/blog-grid/pic3.jpg"
                    alt=""
                  >
                  <div class="post-video-icon fa fa-play" />
                </RouterLink>
              </div>
              <div class="dlab-info">
                <h4 class="dlab-title">
                  <RouterLink to="/blog-details">
                    Now Is The Time About Construction
                    For
                    You To Know.
                  </RouterLink>
                </h4>
                <p class="m-b20">
                  Nunc convallis sagittis dui eu dictum. Cras sodales id ipsum ac
                  aliquam.
                  Phasellus justo quam, sagittis vel sem congue, vehicula tempus elit.
                </p>
                <div class="dlab-meta mb-0">
                  <ul>
                    <li class="post-date">
                      25 March 2023
                    </li>
                    <li class="post-author">
                      <i class="las la-user-circle" /> By <RouterLink to="">
                        Johne Doe
                      </RouterLink>
                    </li>
                    <li class="post-comment">
                      <i class="las la-comment" />
                      <RouterLink to="">
                        Comments<span>15</span>
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="dlab-blog style-2 m-b50">
              <div class="dlab-media rounded-md">
                <RouterLink to="/blog-details">
                  <img
                    src="../assets/images/blog/blog-grid/pic5.jpg"
                    alt=""
                  >
                </RouterLink>
              </div>
              <div class="dlab-info">
                <h4 class="dlab-title">
                  <RouterLink to="/blog-details">
                    Here's What People Are Saying About
                    Our
                    Business.
                  </RouterLink>
                </h4>
                <p class="m-b20">
                  Nunc convallis sagittis dui eu dictum. Cras sodales id ipsum ac
                  aliquam.
                  Phasellus justo quam, sagittis vel sem congue, vehicula tempus elit.
                </p>
                <div class="dlab-meta mb-0">
                  <ul>
                    <li class="post-date">
                      25 March 2023
                    </li>
                    <li class="post-author">
                      <i class="las la-user-circle" /> By <RouterLink to="">
                        Johne Doe
                      </RouterLink>
                    </li>
                    <li class="post-comment">
                      <i class="las la-comment" />
                      <RouterLink to="">
                        Comments<span>15</span>
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="dlab-blog style-2 m-b50">
              <div class="dlab-media rounded-md">
                <Swiper
                  class="post-carousel owl-carousel owl-theme owl owl-btn-center-lr owl-btn-2"
                  :modules="[Navigation, Pagination]"
                  :navigation="{
                    nextEl: '.owl-next',
                    prevEl: '.owl-prev',
                  }"
                  :pagination="true"
                  :speed="1500"
                >
                  <SwiperSlide
                    v-for="item, ind in CardSlider"
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
                    How Construction Is Go To Change
                    Your
                    Business Strategies.
                  </RouterLink>
                </h4>
                <p class="m-b20">
                  Nunc convallis sagittis dui eu dictum. Cras sodales id ipsum ac
                  aliquam.
                  Phasellus justo quam, sagittis vel sem congue, vehicula tempus elit.
                </p>
                <div class="dlab-meta mb-0">
                  <ul>
                    <li class="post-date">
                      25 March 2023
                    </li>
                    <li class="post-author">
                      <i class="las la-user-circle" /> By <RouterLink to="">
                        Johne Doe
                      </RouterLink>
                    </li>
                    <li class="post-comment">
                      <i class="las la-comment" />
                      <RouterLink to="">
                        Comments<span>15</span>
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="dlab-blog style-2 post-quote m-b50">
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
                    Maecenas maximus augue eget libero
                    dictum, vitae tempus erat pretium.
                  </RouterLink>
                </h4>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="dlab-blog style-2 m-b50">
              <div class="dlab-media rounded-md">
                <RouterLink to="/blog-details">
                  <img
                    src="../assets/images/blog/blog-grid/pic6.jpg"
                    alt=""
                  >
                </RouterLink>
              </div>
              <div class="dlab-info">
                <h4 class="dlab-title">
                  <RouterLink to="/blog-details">
                    Reasons Why You Shouldn’t Rely On
                    Business Anymore.
                  </RouterLink>
                </h4>
                <p class="m-b20">
                  Nunc convallis sagittis dui eu dictum. Cras sodales id ipsum ac
                  aliquam.
                  Phasellus justo quam, sagittis vel sem congue, vehicula tempus elit.
                </p>
                <div class="dlab-meta mb-0">
                  <ul>
                    <li class="post-date">
                      25 March 2023
                    </li>
                    <li class="post-author">
                      <i class="las la-user-circle" /> By <RouterLink to="">
                        Johne Doe
                      </RouterLink>
                    </li>
                    <li class="post-comment">
                      <i class="las la-comment" />
                      <RouterLink to="">
                        Comments<span>15</span>
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ClientLogo />
  </div>
</template>

<style scoped>
.masonry-box-container {
    column-count: 2;
    row-gap: 100px;
    column-gap: 25px;
}

@media screen and (max-width:990px) {
    .masonry-box-container {
        column-count: 1;
    }
}
</style>
