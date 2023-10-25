<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { RouterLink } from 'vue-router'
import blogGridPic1 from '../assets/images/blog/blog-grid/pic1.jpg'
import blogGridPic2 from '../assets/images/blog/blog-grid/pic2.jpg'
import blogGridPic3 from '../assets/images/blog/blog-grid/pic3.jpg'
import bgimg from '../assets/images/background/bg16.png'
import { useHomeStore } from '../stores/home'
import { getValue } from '@/base/ResourceMapping'

const blogCards = ref([
  { img: blogGridPic1, title: 'Reasons Why You Shouldn’t Rely On.', date: '28 MARCH 2023' },
  { img: blogGridPic2, title: 'Maecenas maximus augue eget libero dictum..', date: '28 MARCH 2023' },
  { img: blogGridPic3, title: 'Reasons Why You Shouldn’t Rely On.', date: '28 MARCH 2023' },
  { img: blogGridPic1, title: 'Reasons Why You Shouldn’t Rely On.', date: '28 MARCH 2023' },
  { img: blogGridPic2, title: 'Maecenas maximus augue eget libero dictum..', date: '28 MARCH 2023' },
  { img: blogGridPic3, title: 'Reasons Why You Shouldn’t Rely On.', date: '28 MARCH 2023' },
])
const homeStore = useHomeStore()

function initBlogCards() {
  blogCards.value = [
    { img: blogGridPic1, title: homeStore.findText(715), date: homeStore.findText(716), details: homeStore.findText(717), description: homeStore.findText(718), by: homeStore.findText(719), auther: homeStore.findText(720), comment: homeStore.findText(721), count_comments: homeStore.findText(722) },
    { img: blogGridPic1, title: homeStore.findText(723), date: homeStore.findText(724), details: homeStore.findText(725), description: homeStore.findText(726), by: homeStore.findText(719), auther: homeStore.findText(727), comment: homeStore.findText(721), count_comments: homeStore.findText(728) },
    { img: blogGridPic1, title: homeStore.findText(729), date: homeStore.findText(730), details: homeStore.findText(731), description: homeStore.findText(732), by: homeStore.findText(719), auther: homeStore.findText(733), comment: homeStore.findText(721), count_comments: homeStore.findText(734) },
    { img: blogGridPic1, title: homeStore.findText(735), date: homeStore.findText(736), details: homeStore.findText(737), description: homeStore.findText(738), by: homeStore.findText(719), auther: homeStore.findText(739), comment: homeStore.findText(721), count_comments: homeStore.findText(740) },
    { img: blogGridPic1, title: homeStore.findText(741), date: homeStore.findText(742), details: homeStore.findText(743), description: homeStore.findText(744), by: homeStore.findText(719), auther: homeStore.findText(745), comment: homeStore.findText(721), count_comments: homeStore.findText(746) },
    { img: blogGridPic1, title: homeStore.findText(747), date: homeStore.findText(749), details: homeStore.findText(750), description: homeStore.findText(751), by: homeStore.findText(719), auther: homeStore.findText(752), comment: homeStore.findText(721), count_comments: homeStore.findText(753) },

  ]
}
onMounted(() => initBlogCards())
</script>

<template>
  <section
    class="content-inner-2"
    :style="`background-image: url(${bgimg}); background-size: cover;  background-position: top center;   background-repeat: no-repeat;`"
  >
    <div class="container">
      <div class="section-head style-1 text-center">
        <h6 class="sub-title text-primary m-b15">
          {{ homeStore.findText(713) }}
        </h6>
        <h2 class="title">
          {{ homeStore.findText(714) }}
        </h2>
      </div>
      <Swiper
        class="blog-carousel2 owl-carousel owl-none"
        :slides-per-view="3"
        :space-between="30"
        :speed="1200"
        :loop="true"
        :breakpoints="{
          991: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 2,
          },
          300: {
            slidesPerView: 1,
          },
        }"
      >
        <SwiperSlide
          v-for="item, ind in blogCards"
          class="item"
        >
          <div class="dlab-blog style-2 m-b10">
            <div class="dlab-media rounded-md">
              <RouterLink to="/blog-details">
                <img
                  :src="item.img"
                  alt=""
                >
              </RouterLink>
            </div>
            <div class="dlab-info">
              <h4 class="dlab-title">
                <RouterLink to="/blog-details">
                  {{ item.title }}
                </RouterLink>
              </h4>
              <p class="m-b20">
                {{ item.details }}
                {{ item.description }}
              </p>
              <div class="dlab-meta mb-0">
                <ul>
                  <li class="post-date">
                    {{ item.date }}
                  </li>
                  <li class="post-author">
                    <i class="las la-user-circle" />{{ item.by }} <RouterLink to="">
                      {{ item.auther }}
                    </RouterLink>
                  </li>
                  <li class="post-comment">
                    <i class="las la-comment" />
                    <RouterLink to="">
                      {{ item.comment }}<span>{{ item.count_comments }}</span>
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
