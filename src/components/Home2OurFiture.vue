<script setup>
import { ref } from 'vue'

const fitures1 = ref([
  { icon: 'flaticon-idea', title: 'Idea & Analysis' },
  { icon: 'flaticon-vector', title: 'Designing' },
  { icon: 'flaticon-vector', title: 'SEO Marketing' },
])
const fitures2 = ref([
  { icon: 'flaticon-coding', title: 'Development' },
  { icon: 'flaticon-rocket', title: 'Lunching' },
  { icon: 'flaticon-rocket', title: 'Research' },
])
</script>

<template>
  <section class="content-inner bg-white">
    <div class="container">
      <div class="section-head style-3 text-center">
        <h2 class="title">
          Our Fetures
        </h2>
      </div>
      <div class="row align-items-center about-wraper-2">
        <div class="col-lg-4 col-md-6">
          <div class="row">
            <div
              v-for="item, ind in fitures1"
              :key="ind"
              class="col-lg-12"
            >
              <div class="icon-bx-wraper right m-b10 icon-up style-8 m-md-b30">
                <div class="icon-bx-sm m-b20">
                  <a
                    href="javascript:void(0);"
                    class="icon-cell"
                  ><i :class="item.icon" /></a>
                </div>
                <div class="icon-content">
                  <h4 class="dlab-tilte text-capitalize">
                    {{ item.title }}
                  </h4>
                  <p>Praesent tincidunt congue est ut hendrerit ellentesque eros.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-lg-4 col-md-6 wow zoomIn d-lg-block d-none"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div class="dz-media text-center m-b30 scale1">
            <img
              src="../assets/images/about/img7.png"
              alt=""
            >
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="row">
            <div
              v-for="item, ind in fitures2"
              :key="ind"
              class="col-lg-12"
            >
              <div class="icon-bx-wraper left m-b10 icon-up style-8 m-md-b30">
                <div class="icon-bx-sm m-b20">
                  <a
                    href="javascript:void(0);"
                    class="icon-cell"
                  ><i :class="item.icon" /></a>
                </div>
                <div class="icon-content">
                  <h4 class="dlab-tilte text-capitalize">
                    {{ item.title }}
                  </h4>
                  <p>Praesent tincidunt congue est ut hendrerit ellentesque eros.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
