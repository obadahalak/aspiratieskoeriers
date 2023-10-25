<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import { RouterLink } from 'vue-router'
import blogPic1 from '../assets/images/blog/recent-blog/pic1.jpg'
import blogPic2 from '../assets/images/blog/recent-blog/pic2.jpg'
import blogPic3 from '../assets/images/blog/recent-blog/pic3.jpg'
import blogPic4 from '../assets/images/blog/recent-blog/pic4.jpg'
import blogThumbPic1 from '../assets/images/blog/default/thum1.jpg'
import blogThumbPic2 from '../assets/images/blog/default/thum2.jpg'
import blogThumbPic3 from '../assets/images/blog/default/thum3.jpg'
import Pagination from '../elements/Pagination.vue'
import PostStartRightContent from '../components/PostStartRightContent.vue'

const PostImages = ref([
  { img: blogPic1 },
  { img: blogPic2 },
  { img: blogPic3 },
  { img: blogPic4 },
])

const swiperCarousel = ref([
  { img: blogThumbPic1 },
  { img: blogThumbPic2 },
  { img: blogThumbPic3 },
])

const videoVal = ref(false)
function modalVideoBtn() {
  videoVal.value = true
  videoVal.value === true
    ? document.querySelector('.modalVideo').setAttribute('style', 'opacity:1')
    : document.querySelector('.modalVideo').setAttribute('style', 'opacity:0')
}
function closeBtn() {
  videoVal.value = false
}
</script>

<template>
  <div
    v-if="videoVal === true"
    style="z-index: 9999;"
    class="modalVideo"
  >
    <div
      class="overlay"
      @click="closeBtn"
    />
    <div>
      <iframe
        src="https://www.youtube.com/embed/pyRjzvdOSHk"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        style="width: 100%; height: 100%; vertical-align: middle;"
      />
    </div>
  </div>
  <PostStartRightContent />
  <div class="col-xl-8 col-lg-8 m-b30">
    <div class="dlab-blog m-b50 no-image">
      <div class="dlab-info">
        <div class="dlab-meta">
          <ul>
            <li class="post-date">
              <i class="flaticon-clock m-r10" />7 March, 2020
            </li>
            <li class="post-author">
              <i class="flaticon-user m-r10" />By
              <RouterLink to="">
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
        <h4 class="dlab-title">
          <RouterLink to="/blog-details">
            Quisque sem tortor, convallis in arcu eu, accumsan finibus massa donec et
            sapien risus.
          </RouterLink>
        </h4>
        <p class="m-b20">
          Phasellus vestibulum velit in lacinia ultrices. Aenean vel euismod risus, ac congue lectus.
          In hac habitasse platea dictumst. Vivamus et felis imperdiet, commodo augue in, condimentum tellus.
          Quisque RouterLink velit RouterLink eros malesuada ullamcorper.
        </p>
        <RouterLink
          to="/blog-details"
          class="btn btn-lg shadow gradient btn-primary"
        >
          Read More
        </RouterLink>
      </div>
    </div>
    <div class="dlab-blog m-b50">
      <div class="dlab-media rounded dlab-img-effect zoom post-video">
        <RouterLink to="/blog-details">
          <img
            src="../assets/images/blog/default/thum2.jpg"
            alt=""
          >
          <RouterLink
            to=""
            class="popup-youtube post-video-icon fa fa-play"
            @click="modalVideoBtn"
          />
          <div class="" />
        </RouterLink>
      </div>
      <div class="dlab-info">
        <div class="dlab-meta">
          <ul>
            <li class="post-date">
              <i class="flaticon-clock m-r10" />7 March, 2020
            </li>
            <li class="post-author">
              <i class="flaticon-user m-r10" />By <RouterLink to="">
                Johne
                Doe
              </RouterLink>
            </li>
            <li class="post-comment">
              <RouterLink to="">
                <i class="flaticon-speech-bubble" /><span>15</span>
              </RouterLink>
            </li>
          </ul>
        </div>
        <h4 class="dlab-title">
          <RouterLink to="/blog-details">
            Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere
            dolor.
          </RouterLink>
        </h4>
        <p class="m-b20">
          Phasellus vestibulum velit in lacinia ultrices. Aenean vel euismod risus, ac congue lectus.
          In hac habitasse platea dictumst. Vivamus et felis imperdiet, commodo augue in, condimentum tellus.
          Quisque RouterLink velit RouterLink eros malesuada ullamcorper.
        </p>
        <RouterLink
          to="/blog-details"
          class="btn btn-lg shadow gradient btn-primary"
        >
          Read More
        </RouterLink>
      </div>
    </div>
    <div class="dlab-blog m-b50">
      <div class="dlab-media rounded">
        <Swiper
          class="post-carousel owl-carousel owl-theme owl owl-btn-center-lr owl-btn-2"
          :loop="true"
          :speed="1500"
          :modules="[Navigation]"
          :navigation="{
            prevEl: '.owl-prev',
            nextEl: '.owl-next',
          }"
        >
          <SwiperSlide
            v-for="data, index in swiperCarousel"
            :key="index"
            class="item"
          >
            <img
              class="rounded-sm"
              :src="data.img"
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
        <div class="dlab-meta">
          <ul>
            <li class="post-date">
              <i class="flaticon-clock m-r10" />7 March, 2020
            </li>
            <li class="post-author">
              <i class="flaticon-user m-r10" />By <RouterLink to="">
                Johne
                Doe
              </RouterLink>
            </li>
            <li class="post-comment">
              <RouterLink to="">
                <i class="flaticon-speech-bubble" /><span>15</span>
              </RouterLink>
            </li>
          </ul>
        </div>
        <h4 class="dlab-title">
          <RouterLink to="/blog-details">
            Donec feugiat mollis nisi in dignissim. Morbi sollicitudin quis
            lectus vel
            euismod.
          </RouterLink>
        </h4>
        <p class="m-b20">
          Phasellus vestibulum velit in lacinia ultrices. Aenean vel euismod risus, ac congue lectus.
          In hac habitasse platea dictumst. Vivamus et felis imperdiet, commodo augue in, condimentum tellus.
          Quisque RouterLink velit RouterLink eros malesuada ullamcorper.
        </p>
        <RouterLink
          to="/blog-details"
          class="btn btn-lg shadow gradient btn-primary"
        >
          Read More
        </RouterLink>
      </div>
    </div>
    <div class="dlab-blog post-quote m-b50">
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
          <polygon points="0,170.667 64,170.667 21.333,256 85.333,256 128,170.667 128,42.667 0,42.667" />
          <polygon
            points="170.667,42.667 170.667,170.667 234.667,170.667 192,256 256,256 298.667,170.667 298.667,42.667"
          />
        </svg>
      </div>
      <div class="dlab-info ">
        <h4 class="dlab-title">
          <RouterLink to="/blog-details">
            Donec feugiat mollis nisi in dignissim. Morbi sollicitudin quis
            lectus vel
            euismod.
          </RouterLink>
        </h4>
      </div>
    </div>
    <Pagination />
  </div>
</template>

<style scoped>
.modalVideo {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.473);
    transition: all .2s linear;
}

.modalVideo .overlay {
    width: 100vw !important;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.473);
}

.modalVideo div {
    width: 70%;
    height: 70%;
    z-index: 9999;
}

@media screen and (max-width:700px) {
    .modalVideo div {
        width: 90%;
    }
}

@media screen and (max-width:500px) {
    .modalVideo div {
        width: 95%;
        height: 50%;
    }
}
</style>
