<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import teamPic1 from '../assets/images/team/team1/pic1.jpg'
import teamPic2 from '../assets/images/team/team1/pic2.jpg'
import teamPic3 from '../assets/images/team/team1/pic3.jpg'
import teamPic4 from '../assets/images/team/team1/pic4.jpg'
import teamPic5 from '../assets/images/team/team1/pic5.jpg'
import teamPic6 from '../assets/images/team/team1/pic6.jpg'
import teamPic7 from '../assets/images/team/team1/pic7.jpg'
import teamPic8 from '../assets/images/team/team1/pic8.jpg'

const teamCards = ref([
  { img: teamPic1 },
  { img: teamPic2 },
  { img: teamPic3 },
  { img: teamPic4 },
  { img: teamPic5 },
  { img: teamPic6 },
  { img: teamPic7 },
  { img: teamPic8 },
])
</script>

<template>
  <section class="content-inner-1 bg-gray">
    <div class="container">
      <div class="section-head style-3 text-center z mb-3">
        <h2 class="title">
          Our Expertise
        </h2>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <Swiper
            class="team-carousel2 owl owl-carousel owl-none owl-theme dots-style-1"
            :space-between="30"
            :loop="true"
            :modules="[Autoplay]"
            :speed="1500"
            :autoplay="{
              delay: 1200,
            }"
            :slides-per-view="4"
          >
            <SwiperSlide
              v-for="item, ind in teamCards"
              :key="ind"
              class="item"
            >
              <div class="flip-bx dlab-team style-2 m-tb30">
                <div class="front">
                  <div class="inner text-white">
                    <div class="dlab-media">
                      <a href="javascript:void(0);"><img
                        :src="item.img"
                        alt=""
                      ></a>
                    </div>
                  </div>
                </div>
                <div class="back">
                  <div class="inner text-white">
                    <div class="dlab-content">
                      <h4 class="dlab-name">
                        <a href="javascript:void(0);">Emily Smith</a>
                      </h4>
                      <span class="dlab-position mb-2 d-block">Senior Designer</span>
                      <ul class="dlab-social-icon">
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="fab fa-facebook-f"
                          />
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="fab fa-instagram"
                          />
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="fab fa-twitter"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>
