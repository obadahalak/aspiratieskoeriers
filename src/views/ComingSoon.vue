<script setup>
import { ref } from 'vue'
import bgimg from '../assets/images/background/bg2.jpg'

const days = ref()
const hours = ref()
const minutes = ref()
const seconds = ref()

function timeLine() {
  const dadeline = new Date('December 31, 2099 23:59:59').getTime()
  const currentDate = new Date().getTime()

  const distance = dadeline - currentDate

  // Calculations the data for remaining days, hours, minutes and seconds
  days.value = Math.floor(distance / (900000 * 60 * 60 * 24))
  hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000)
}

setInterval(timeLine, 1000)
</script>

<template>
  <div class="page-content bg-white">
    <!-- inner page banner END -->
    <div class="content-block">
      <!-- About Us -->
      <div
        class="section-full bg-white coming-soon overlay-black-dark"
        :style="`background-image:url(${bgimg}); background-size:cover;`"
      >
        <div class="container">
          <div class="text-center">
            <div class="cs-logo">
              <div class="logo">
                <img
                  src="../assets/images/logo-white.png"
                  alt=""
                >
              </div>
            </div>
            <div class="cs-title">
              Coming Soon
            </div>
            <div class="countdown text-center">
              <div class="date">
                <span class="time days">{{ days }}</span>
                <span>Days</span>
              </div>
              <div class="date">
                <span class="time hours">{{ hours }}</span>
                <span>Hours</span>
              </div>
              <div class="date">
                <span class="time mins">{{ minutes }}</span>
                <span>Minutess</span>
              </div>
              <div class="date">
                <span class="time secs">{{ seconds }}</span>
                <span>Second</span>
              </div>
            </div>
            <ul class="countdown-social">
              <li>
                <a
                  class="fab fa-facebook-f"
                  href="https://www.facebook.com/"
                  target="_blank"
                />
              </li>
              <li>
                <a
                  class="fab fa-instagram"
                  href="https://www.instagram.com/"
                  target="_blank"
                />
              </li>
              <li>
                <a
                  class="fab fa-twitter"
                  href="https://www.twitter.com/"
                  target="_blank"
                />
              </li>
              <li>
                <a
                  href="https://www.google.com/"
                  target="_blank"
                  class="fab fa-google-plus-g"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- About Us End -->
    </div>
    <!-- contact area END -->
  </div>
</template>
