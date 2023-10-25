<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import CommonBanner from '../elements/CommonBanner.vue'
import bgImg from '../assets/images/banner/bnr4.jpg'
import backgroundBg from '../assets/images/background/bg18.png'
import ClientLogo from '../elements/ClientLogo.vue'
import teamPic1 from '../assets/images/team/pic1.jpg'
import teamPic2 from '../assets/images/team/pic2.jpg'
import teamPic3 from '../assets/images/team/pic3.jpg'
import teamPic4 from '../assets/images/team/pic4.jpg'
import teamPic5 from '../assets/images/team/pic5.jpg'
import teamPic6 from '../assets/images/team/pic6.jpg'
import teamPic7 from '../assets/images/team/pic7.jpg'
import teamPic8 from '../assets/images/team/pic8.jpg'
import teamPic9 from '../assets/images/team/pic9.jpg'

const teamInfo = ref([
  { img: teamPic1, name: 'Steve Johnson' },
  { img: teamPic2, name: 'Olivia Jackson' },
  { img: teamPic3, name: 'Tamerlan Aziev' },
  { img: teamPic4, name: 'John Kenny' },
  { img: teamPic5, name: 'Silvia Perry' },
  { img: teamPic6, name: 'David Schwimmer' },
  { img: teamPic7, name: 'Titian Silva' },
  { img: teamPic8, name: 'Sakura Chen' },
  { img: teamPic9, name: 'Neo Jackson' },
])
</script>

<template>
  <div class="page-content bg-white">
    <CommonBanner
      :image="bgImg"
      title="Our Team"
    />
    <section
      class="content-inner-2"
      :style="`background - image: url(${backgroundBg}); background-repeat: no-repeat;`"
    >
      <div class="container">
        <div class="row">
          <div
            v-for=" item, ind in teamInfo "
            :key="ind"
            class="col-lg-4 col-sm-6 wow fadeInUp"
          >
            <div class="dlab-team style-3 m-b30">
              <div class="dlab-media">
                <RouterLink to="">
                  <img
                    :src="item.img"
                    alt=""
                  >
                </RouterLink>
                <div class="overlay-content">
                  <ul class="dlab-social-icon">
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
                        href="https://www.instagram.com"
                        target="_blank"
                      />
                    </li>
                    <li>
                      <a
                        class="fab fa-twitter"
                        href="https://twitter.com"
                        target="_blank"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div class="dlab-content">
                <div class="clearfix">
                  <h4 class="dlab-name">
                    <RouterLink to="">
                      {{ item.name }}
                    </RouterLink>
                  </h4>
                  <span class="dlab-position">Chief Exicutive Officer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ClientLogo />
  </div>
</template>
