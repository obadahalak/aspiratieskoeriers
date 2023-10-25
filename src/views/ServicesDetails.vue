<script setup>
import { ref } from 'vue'
import CommonBanner from '../elements/CommonBanner.vue'
import bgimg from '../assets/images/banner/bnr1.jpg'
import Testymonial from '../components/Testymonial.vue'
import ClientLogo from '../elements/ClientLogo.vue'
import BlogCard from '../elements/BlogCard.vue'

// import Modalvideo from '../components/Modalvideo.vue';

const ExpirianceLine = ref([
  { title: 'SEO', width: '80%' },
  { title: 'Designing', width: '90%' },
  { title: 'Development', width: '85%' },
  { title: 'Marketing', width: '70%' },
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
  <div class="page-content bg-white">
    <CommonBanner
      :image="bgimg"
      title="Services Details"
    />
    <section class="content-inner-2">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="dlab-media m-b30 rounded-md">
              <img
                src="../assets/images/blog/default/thum1.jpg"
                alt=""
              >
            </div>
            <div class="dlab-content">
              <div class="m-b40">
                <h3>Web Development</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                  has been the industry's standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div class="row align-items-center m-b30">
                <div class="col-lg-6 m-b30">
                  <h3>How You Start Web Development ?</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley.
                  </p>
                  <ul class="list-arrow primary">
                    <li>Lorem Ipsum is simply dummy text of the printing.</li>
                    <li>Lorem Ipsum has been the industry's standard dummy text ever.</li>
                    <li>when an unknown printer took a galley of type and scrambled.</li>
                    <li>It has survived not only five centuries, but also the leap.</li>
                    <li>Recently with desktop publishing software like Aldus PageMaker.</li>
                    <li>Lorem Ipsum is simply dummy text of the printing industry.</li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <div
                    v-for="progressLine, ind in ExpirianceLine"
                    :key="ind"
                    class="progress-bx overflow-hidden mb-3"
                  >
                    <div class="progress-info">
                      <span class="title">{{ progressLine.title }}</span>
                      <span class="progress-value">{{ progressLine.width }}</span>
                    </div>
                    <div class="progress mb-3">
                      <div
                        class="progress-bar wow fadeInLeft"
                        :style="`width:${progressLine.width}`"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!-- Video -->
              <section
                class="content-inner-2 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="video-bx style-1 overlay-black-light">
                        <img
                          src="../assets/images/video/pic1.jpg"
                          alt=""
                        >
                        <div class="video-btn">
                          <RouterLink
                            to=""
                            class="popup-youtube"
                            @click="modalVideoBtn"
                          >
                            <i class="flaticon-play" />
                          </RouterLink>
                          <h2 class="title">
                            Watch US
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="content-inner-2">
      <div class="container">
        <div class="row">
          <BlogCard />
        </div>
      </div>
    </section>
    <Testymonial />
    <ClientLogo />
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
