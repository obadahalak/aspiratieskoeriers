<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const cards = ref([
  { icon: 'flaticon-office', title: 'Strategy & Research' },
  { icon: 'flaticon-coding', title: 'Web Development' },
  { icon: 'flaticon-laptop', title: 'Web Solution' },
])

const addActive = ref(1)
</script>

<template>
  <section class="content-inner bg-white">
    <div class="container">
      <div class="section-head style-3 text-center">
        <h2 class="title">
          Our Speciallization
        </h2>
      </div>
      <div class="row">
        <div
          v-for="item, ind in cards"
          :key="ind"
          class="col-lg-4 col-md-6"
        >
          <div
            :class="`icon-bx-wraper style-5 box-hover text-center m-b30 ${addActive === ind ? 'active' : ''}`"
            @mouseenter="addActive = ind"
          >
            <div class="icon-bx">
              <span class="icon-cell"><i :class="item.icon" /></span>
            </div>
            <div class="icon-content">
              <h4 class="dlab-title m-b15">
                {{ item.title }}
              </h4>
              <p class="m-b20">
                Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo
                sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor.
              </p>
              <RouterLink
                to="/services-details"
                class="btn btn-outline-primary"
              >
                <i
                  class="fa fa-angle-right"
                />
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
