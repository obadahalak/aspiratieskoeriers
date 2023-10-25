<script setup>
import { onMounted, ref } from 'vue'

import CountUp from 'vue-countup-v3'
import { useHomeStore } from '../stores/home'

const CounterArr = ref([])

const homeStore = useHomeStore()

function initArray() {
  CounterArr.value = [
    { icon: 'flaticon-smile', title: homeStore.findText(642), number: homeStore.findText(641) },
    { icon: 'flaticon-line-chart', title: homeStore.findText(643), number: homeStore.findText(644) },
    { icon: 'flaticon-startup', title: homeStore.findText(754), number: homeStore.findText(645) },
    { icon: 'flaticon-confetti', title: homeStore.findText(647), number: homeStore.findText(646) },
  ]
}

onMounted(() => initArray())
</script>

<template>
  <div
    v-if="CounterArr.length > 0"
    class="main_container_div"
  >
    <section class="content-inner-3 bg-light">
      <div class="container containet_counter">
        <div class="row">
          <div
            v-for="(item, ind) in CounterArr"
            :key="ind"
            class="col-lg-3 col-sm-6 m-b30 col-6"
          >
            <div class="dlab-content-bx style-3 text-center">
              <div class="icon-bx-sm radius">
                <span class="icon-cell">
                  <i :class="item.icon" />
                </span>
              </div>
              <div class="icon-content">
                <h2 class="m-b0 text-primary d-flex justify-content-center">
                  <CountUp
                    start-val="0"
                    duration="30"
                    :end-val="item.number"
                  />
                  <!-- <span class="counter m-r5">{{ item.counterValue }}</span> -->
                  Ml
                </h2>
                <span class="title">{{ item.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.bg-light {
    background-image: url('../assets/images/background/bg14.png');
    background-position: center;
    background-repeat: no-repeat;
}

.content-inner-2 {
    background-image: url('../assets/images/background/bg2.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
</style>
