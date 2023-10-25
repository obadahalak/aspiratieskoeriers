<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import CommonBanner from '../elements/CommonBanner.vue'
import bgimg from '../assets/images/banner/bnr4.jpg'
import ClientLogo from '../elements/ClientLogo.vue'
import { useHistory } from '@/stores/history'

const historeStore = useHistory()
const HistoryCard = ref([])

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
function initHistoryCards() {
  HistoryCard.value = [
    { title: historeStore.findText(833), details: historeStore.findText(834), class: 'line-left clearfix', direction: 'line-left-box', count: 7 },
    { title: historeStore.findText(835), details: historeStore.findText(836), class: 'line-right clearfix', direction: 'line-right-box', count: 8 },
    { title: historeStore.findText(837), details: historeStore.findText(838), class: 'line-left clearfix', direction: 'line-left-box', count: 9 },
    { title: historeStore.findText(839), details: historeStore.findText(840), class: 'line-right clearfix', direction: 'line-right-box', count: 10 },
  ]
}

onMounted(() => {
  historeStore.histories().then(() => initHistoryCards())
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
  <div class="page-content bg-white">
    <CommonBanner
      :image="bgimg"
      :title="historeStore.findText(810)"
      :home="historeStore.findText(811)"
    />
    <section class="content-inner-2">
      <div class="container">
        <div class="text-center time-line-start">
          <img
            src="../assets/images/startup.png"
            alt=""
            class="fa faa-horizontal animated"
          >
        </div>
        <div class="time-line clearfix">
          <div class="line-left clearfix">
            <div class="line-left-box">
              <div class="line-content-box wow fadeInLeft">
                <h4 class="title">
                  {{ historeStore.findText(812) }}
                </h4>
                <p> {{ historeStore.findText(813) }}</p>
                <ul class="list-check primary m-b0">
                  <li> {{ historeStore.findText(814) }}</li>
                  <li> {{ historeStore.findText(815) }}</li>
                  <li> {{ historeStore.findText(816) }}</li>
                </ul>
              </div>
              <div class="line-num gradient">
                1
              </div>
            </div>
          </div>
          <div class="line-right clearfix">
            <div class="line-right-box">
              <div class="line-content-box wow fadeInRight">
                <h4 class="title">
                  {{ historeStore.findText(841) }}
                </h4>
                <p>
                  {{ historeStore.findText(842) }}
                </p>
                <p class="m-b0">
                  {{ historeStore.findText(843) }}
                </p>
              </div>
              <div class="line-num gradient">
                2
              </div>
            </div>
          </div>
          <div class="line-left clearfix">
            <div class="line-left-box">
              <div class="line-content-box wow fadeInLeft">
                <h4 class="title">
                  {{ historeStore.findText(817) }}
                </h4>
                <p>{{ historeStore.findText(818) }}</p>
                <img
                  class="rounded-sm"
                  src="../assets/images/blog/default/thum1.jpg"
                  alt=""
                >
              </div>
              <div class="line-num gradient">
                3
              </div>
            </div>
          </div>
          <div class="line-right clearfix">
            <div class="line-right-box">
              <div class="line-content-box wow fadeInRight">
                <h4 class="title">
                  {{ historeStore.findText(818) }}
                </h4>
                <p>{{ historeStore.findText(819) }}</p>
                <div class="video-bx style-3">
                  <img
                    src="../assets/images/blog/default/thum2.jpg"
                    alt=""
                  >
                  <div class="video-btn">
                    <RouterLink
                      to=""
                      class="popup-youtube"
                      @click="modalVideoBtn"
                    >
                      <i
                        class="flaticon-play"
                      />
                    </RouterLink>
                  </div>
                </div>
              </div>
              <div class="line-num gradient">
                4
              </div>
            </div>
          </div>
          <div class="line-left clearfix">
            <div class="line-left-box">
              <div class="line-content-box wow fadeInLeft">
                <h4 class="title">
                  {{ historeStore.findText(821) }}
                </h4>
                <p class="m-b30">
                  {{ historeStore.findText(822) }}
                </p>
                <div class="row">
                  <div class="col-lg-12 col-md-6">
                    <div class="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
                      <div class="icon-bx-sm bg-white">
                        <RouterLink
                          to=""
                          class="icon-cell text-primary"
                        >
                          <i class="flaticon-chat" />
                        </RouterLink>
                      </div>
                      <div class="icon-content">
                        <h5 class="dlab-title m-b10">
                          {{ historeStore.findText(823) }}
                        </h5>
                        <p>
                          {{ historeStore.findText(824) }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-6">
                    <div class="icon-bx-wraper style-6 left p-0 m-b0 icon-up">
                      <div class="icon-bx-sm bg-white">
                        <RouterLink
                          to=""
                          class="icon-cell text-primary"
                        >
                          <i class="flaticon-bullhorn" />
                        </RouterLink>
                      </div>
                      <div class="icon-content">
                        <h5 class="dlab-title m-b10">
                          {{ historeStore.findText(825) }}
                        </h5>
                        <p>
                          {{ historeStore.findText(826) }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="line-num gradient">
                5
              </div>
            </div>
          </div>
          <div class="line-right clearfix">
            <div class="line-right-box">
              <div class="line-content-box wow fadeInRight">
                <h4 class="title">
                  {{ historeStore.findText(827) }}
                </h4>
                <p class="m-b30">
                  {{ historeStore.findText(828) }}
                </p>
                <div class="progress-bx overflow-hidden mb-2">
                  <div class="progress-info">
                    <span class="title">
                      {{ historeStore.findText(829) }}</span>
                    <span class="progress-value">
                      {{ historeStore.findText(830) }}</span>
                  </div>
                  <div class="progress mb-3">
                    <div
                      class="progress-bar wow fadeInLeft"
                      data-wow-delay="0.6s"
                      style="width: 80%"
                    />
                  </div>
                </div>
                <div class="progress-bx overflow-hidden mb-0">
                  <div class="progress-info">
                    <span class="title">{{ historeStore.findText(831) }}</span>
                    <span class="progress-value">{{ historeStore.findText(832) }}</span>
                  </div>
                  <div class="progress mb-3">
                    <div
                      class="progress-bar wow fadeInLeft"
                      data-wow-delay="0.6s"
                      style="width: 90%"
                    />
                  </div>
                </div>
              </div>
              <div class="line-num gradient">
                6
              </div>
            </div>
          </div>
          <div
            v-for="(item, ind) in HistoryCard"
            :key="ind"
            :class="item.class"
          >
            <div :class="item.direction">
              <div class="line-content-box wow fadeInLeft">
                <h4 class="title">
                  {{ item.title }}
                </h4>
                <p class="m-b0">
                  {{ item.details }}
                </p>
              </div>
              <div class="line-num gradient">
                {{ item.count }}
              </div>
            </div>
          </div>
        </div>
        <div class="text-center time-line-end">
          <img
            src="../assets/images/the-end.png"
            alt=""
          >
        </div>
      </div>
    </section>

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
