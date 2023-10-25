<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import CommonBanner from '../elements/CommonBanner.vue'
import HomeAboutBlog from '../components/HomeAboutBlog.vue'
import HomeCounter from '../components/HomeCounter.vue'
import Testymonial from '../components/Testymonial.vue'
import OurLatestBlog from '../components/OurLatestBlog.vue'
import bgimg from '../assets/images/banner/bnr2.jpg'
import ClientLogo from '../elements/ClientLogo.vue'
import { useHomeStore } from '../stores/home'
import { useAboutUs } from '@/stores/about'

const homeStore = useHomeStore()
const aboutUsStore = useAboutUs()

const stepCard = ref([])

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
function initStepCards() {
  stepCard.value = [
    { icon: 'flaticon-sketch', title: aboutUsStore.findText(848), details: aboutUsStore.findText(849) },
    { icon: 'flaticon-vector', title: aboutUsStore.findText(850), details: aboutUsStore.findText(851) },
    { icon: 'flaticon-startup', title: aboutUsStore.findText(852), details: aboutUsStore.findText(853) },
  ]
}

onMounted(() => {
  homeStore.home()
  aboutUsStore.getAboutUs().then(() => initStepCards())
})
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

  <div
    class="page-wraper"
  >
    <div class="page-content bg-white">
      <CommonBanner
        :image="bgimg"
        :title="aboutUsStore.findText(844)"
        :home="aboutUsStore.findText(845)"
      />
      <section
        v-if="homeStore.data.length > 0"
        class="content-inner-2"
      >
        <div class="container">
          <div class="section-head style-1 text-center">
            <h6 class="sub-title text-primary">
              {{ aboutUsStore.findText(846) }}
            </h6>
            <h2 class="title">
              {{ aboutUsStore.findText(847) }}
            </h2>
          </div>
          <div class="row about-wraper-3 wow fadeIn">
            <div
              v-for="item, ind in stepCard"
              class="col-md-4"
            >
              <div class="icon-bx-wraper style-6 text-center m-b30 icon-up">
                <div class="icon-bx-lg radius bg-white">
                  <RouterLink
                    to=""
                    class="icon-cell text-primary"
                  >
                    <i :class="item.icon" />
                  </RouterLink>
                </div>
                <div class="icon-content">
                  <h4 class="dlab-title m-b15">
                    {{ item.title }}
                  </h4>
                  <p>{{ item.details }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomeAboutBlog />
      <div v-if="homeStore.data.length > 0">
        <HomeCounter />
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
        <Testymonial />
        <OurLatestBlog />
        <ClientLogo />
      </div>
    </div>
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
