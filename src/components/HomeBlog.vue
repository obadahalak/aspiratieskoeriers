<script setup>
import ServicesPic1 from '../assets/images/services/pic1.jpg'
import ServicesPic2 from '../assets/images/services/pic2.jpg'
import ServicesPic3 from '../assets/images/services/pic3.jpg'
import { useHomeStore } from '../stores/home'

const BlogCards = [
  { img: ServicesPic1, title: 'Web Development' },
  { img: ServicesPic2, title: 'Strategy & Research' },
  { img: ServicesPic3, title: 'Growth Tracking' },
]

const homeStore = useHomeStore()
</script>

<template>
  <section class="content-inner-2">
    <div class="container">
      <div class="section-head style-1 text-center">
        <h6 class="sub-title text-primary m-b10">
          {{ homeStore.findText(625) }}
        </h6>
        <h2 class="title">
          {{ homeStore.findText(626) }}
        </h2>
      </div>
      <div class="row">
        <div

          class="col-lg-4 col-md-6 col-sm-12 offset-lg-0 offset-md-3"
        >
          <div class="icon-bx-wraper style-7 text-center ">
            <div class="icon-media">
              <img
                :src="ServicesPic1"
                width="215"
                alt=""
              >
            </div>
            <div class="icon-content">
              <h4 class="dlab-title">
                {{ homeStore.findText(627) }}
              </h4>
              <p>
                {{ homeStore.findText(628) }}
              </p>
            </div>
          </div>
        </div>
        <div

          class="col-lg-4 col-md-6 col-sm-12 offset-lg-0 offset-md-3"
        >
          <div class="icon-bx-wraper style-7 text-center ">
            <div class="icon-media">
              <img
                :src="ServicesPic2"
                width="215"
                alt=""
              >
            </div>
            <div class="icon-content">
              <h4 class="dlab-title">
                {{ homeStore.findText(629) }}
              </h4>
              <p>
                {{ homeStore.findText(630) }}
              </p>
            </div>
          </div>
        </div>
        <div

          class="col-lg-4 col-md-6 col-sm-12 offset-lg-0 offset-md-3"
        >
          <div class="icon-bx-wraper style-7 text-center ">
            <div class="icon-media">
              <img
                :src="ServicesPic3"
                width="215"
                alt=""
              >
            </div>
            <div class="icon-content">
              <h4 class="dlab-title">
                {{ homeStore.findText(631) }}
              </h4>
              <p>
                {{ homeStore.findText(632) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
    background-image: url('../assets/images/background/bg2.png');
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
}
</style>
