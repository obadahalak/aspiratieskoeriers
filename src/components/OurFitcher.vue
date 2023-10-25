<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import { useHomeStore } from '../stores/home'

const addActive = ref(1)

const Services = ref([
  { icon: 'flaticon-idea', title: 'Idea & Analysis Gathering', mr: 'm-r50' },
  { icon: 'flaticon-coding', title: 'Design & Developing', mr: 'm-l50' },
  { icon: 'flaticon-rocket', title: 'Testing & Lunching', mr: 'm-r50' },

])

const homeStore = useHomeStore()

function initServices() {
  Services.value = [
    { icon: 'flaticon-idea', title: homeStore.findText(650), details: homeStore.findText(651), mr: 'm-r50' },
    { icon: 'flaticon-coding', title: homeStore.findText(652), details: homeStore.findText(653), mr: 'm-l50' },
    { icon: 'flaticon-rocket', title: homeStore.findText(654), details: homeStore.findText(655), mr: 'm-r50' },

  ]
}
onMounted(() => initServices())
</script>

<template>
  <section
    v-if="Services.length > 0"
    class="content-inner-2"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 wow fadeInLeft">
          <div class="section-head style-1">
            <h6 class="sub-title text-primary m-b15">
              {{ homeStore.findText(648) }}
            </h6>
            <h2 class="title">
              {{ homeStore.findText(649) }}
            </h2>
          </div>
          <div
            v-for="item, index in Services"
            :class="`icon-bx-wraper style-3 left box-hover   m-b30 wow fadeInRight
                            ${item.mr} ${addActive === index ? 'active' : ''}`"
            @mouseenter="addActive = index"
          >
            <div class="icon-bx-sm radius">
              <RouterLink
                to=""
                class="icon-cell"
              >
                <i :class="item.icon" />
              </RouterLink>
            </div>
            <div class="icon-content">
              <h4 class="dlab-title m-b10">
                {{ item.title }}
              </h4>
              <p>{{ item.details }}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="cf-r-img d-lg-block d-none">
            <img
              src="../assets/images/about/pic3.png"
              class="move-2"
              alt=""
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
