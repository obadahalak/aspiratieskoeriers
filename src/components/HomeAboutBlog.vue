<script setup>
import { RouterLink } from 'vue-router'
import { useHomeStore } from '../stores/home'

const homeStore = useHomeStore()
</script>

<template>
  <section class="content-inner about-wraper-1">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 wow fadeInLeft">
          <div class="dz-media left">
            <img
              src="../assets/images/about/pic1.jpg"
              alt=""
            >
          </div>
        </div>
        <div class="col-lg-6 m-b30 wow fadeInRight">
          <div class="section-head style-1">
            <h6 class="sub-title text-primary m-b15">
              {{ homeStore.findText(633) }}
            </h6>
            <h2 class="title m-b20">
              {{ homeStore.findText(634) }}
            </h2>
            <p>
              {{ homeStore.findText(635) }}
            </p>
          </div>
          <ul class="list-check primary m-b30">
            <li> {{ homeStore.findText(636) }}</li>
            <li> {{ homeStore.findText(637) }}</li>
            <li> {{ homeStore.findText(638) }}</li>
            <li> {{ homeStore.findText(639) }}</li>
          </ul>
          <RouterLink
            to="/about-us"
            class="btn btn-primary rounded-xl gradient"
          >
            {{ homeStore.findText(640) }}
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
    background-image: url('../assets/images/background/bg15.png');
    background-size: contain;
    background-position: center right;
    background-repeat: no-repeat;
}
</style>
