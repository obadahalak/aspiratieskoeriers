<script setup>
import { ref } from 'vue'
import CommonBanner from '../elements/CommonBanner.vue'
import bgimg from '../assets/images/banner/bnr1.jpg'
import backgroundImg from '../assets/images/background/bg15.png'
import ClientLogo from '../elements/ClientLogo.vue'
import Testymonial from '../components/Testymonial.vue'
import OurFitcher from '../components/OurFitcher.vue'
import BlogCard from '../elements/BlogCard.vue'

const ExpirianceLine = ref([
  { title: 'SEO', width: '80%' },
  { title: 'Designing', width: '90%' },
  { title: 'Development', width: '85%' },
  { title: 'Marketing', width: '70%' },
])
</script>

<template>
  <div class="page-content bg-white">
    <CommonBanner
      :image="bgimg"
      title="Our Services"
    />
    <section class="content-inner-2">
      <div class="container">
        <div class="row">
          <BlogCard />
        </div>
      </div>
    </section>
    <!-- next section -->
    <section
      class="content-inner-2 about-wraper-1"
      :style="`background-image: url(${backgroundImg}); background-size: contain; background-position: center right; background-repeat: no-repeat;`"
    >
      <div class="container">
        <div class="row align-items-center">
          <div
            class="col-lg-6 m-b30 wow fadeInLeft"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div class="dz-media left">
              <img
                src="../assets/images/about/pic1.jpg"
                alt=""
              >
            </div>
          </div>
          <div
            class="col-lg-6 wow fadeInRight"
            data-wow-duration="2s"
            data-wow-delay="0.4s"
          >
            <div class="section-head style-1">
              <h6 class="sub-title text-primary">
                Our Skills
              </h6>
              <h2 class="title m-b20">
                We Have Best Experience
              </h2>
            </div>
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
      </div>
    </section>

    <OurFitcher />
    <Testymonial />
    <ClientLogo />
  </div>
</template>
