<script setup>
import { ref } from 'vue'
import ServicesPic1 from '../assets/images/services/pic1.jpg'
import ServicesPic2 from '../assets/images/services/pic2.jpg'
import ServicesPic3 from '../assets/images/services/pic3.jpg'
import ServicesPic4 from '../assets/images/services/pic4.jpg'
import ServicesPic5 from '../assets/images/services/pic5.jpg'
import ServicesPic6 from '../assets/images/services/pic6.jpg'

const BlogCards = ref([
  { img: ServicesPic1, title: 'Web Development' },
  { img: ServicesPic2, title: 'Strategy & Research' },
  { img: ServicesPic3, title: 'Growth Tracking' },
  { img: ServicesPic4, title: 'Web Solution' },
  { img: ServicesPic5, title: 'Company Branding' },
  { img: ServicesPic6, title: '24x7 Support' },
])
</script>

<template>
  <div
    v-for="item, ind in BlogCards"
    :key="ind"
    class="col-lg-4 col-md-6 col-sm-6"
  >
    <div class="icon-bx-wraper style-7 text-center m-b30">
      <div class="icon-media">
        <img
          :src="item.img"
          width="215"
          alt=""
        >
      </div>
      <div class="icon-content">
        <h4 class="dlab-title">
          {{ item.title }}
        </h4>
        <p>
          Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus magna, rhoncus quis
          magna quis.
        </p>
      </div>
    </div>
  </div>
</template>
