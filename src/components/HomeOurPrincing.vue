<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import servicesPic4 from '../assets/images/services/pic4.jpg'
import servicesPic5 from '../assets/images/services/pic5.jpg'
import servicesPic6 from '../assets/images/services/pic6.jpg'
import bgimg from '../assets/images/background/bg16.png'

import { useHomeStore } from '../stores/home'

const homeStore = useHomeStore()

const PlanCards = ref([
  { img: servicesPic4, title: 'Basic Plan', monthlyPlan: '$49', yearlyPlan: '$449' },
  { img: servicesPic5, title: 'Standart Plan', monthlyPlan: '$99', yearlyPlan: '$1099' },
  { img: servicesPic6, title: 'Premium Plan', monthlyPlan: '$149', yearlyPlan: '$1249' },
])

const addActive = ref(1)
const plan = ref('monthly')

function addClassBtn() {
  plan.value === 'monthly' ? plan.value = 'yearly' : plan.value = 'monthly'
}

function initPlanCards() {
  PlanCards.value = [
    {
      img: servicesPic4,
      title: homeStore.findText(674),
      monthlyPlan: homeStore.findText(675),
      yearlyPlan: homeStore.findText(772),
      details: [homeStore.findText(677), homeStore.findText(678), homeStore.findText(679), homeStore.findText(680), homeStore.findText(681), homeStore.findText(682)],
      details_yearly: [homeStore.findText(765), homeStore.findText(766), homeStore.findText(767), homeStore.findText(768), homeStore.findText(769), homeStore.findText(770)],
    },
    {
      img: servicesPic5,
      title: homeStore.findText(684),
      monthlyPlan: homeStore.findText(685),
      yearlyPlan: homeStore.findText(773),
      details: [homeStore.findText(687), homeStore.findText(688), homeStore.findText(689), homeStore.findText(690), homeStore.findText(691), homeStore.findText(692)],
      details_yearly: [homeStore.findText(755), homeStore.findText(756), homeStore.findText(757), homeStore.findText(758), homeStore.findText(759), homeStore.findText(760)],
    },
    {
      img: servicesPic6,
      title: homeStore.findText(693),
      monthlyPlan: homeStore.findText(694),
      yearlyPlan: homeStore.findText(774),
      details: [homeStore.findText(696), homeStore.findText(697), homeStore.findText(698), homeStore.findText(699), homeStore.findText(700), homeStore.findText(701)],
      details_yearly: [homeStore.findText(761), homeStore.findText(762), homeStore.findText(763), homeStore.findText(764), homeStore.findText(765), homeStore.findText(766)],

    },
  ]
}
onMounted(() => initPlanCards())
</script>

<template>
  <section
    v-if="PlanCards.length > 0"
    class="content-inner-2"
    :style="`background-image: url(${bgimg});`"
  >
    <div class="container">
      <div class="section-head style-1 text-center mb-3">
        <h6 class="sub-title m-b15 text-primary">
          {{ homeStore.findText(670) }}
        </h6>
        <h2 class="title">
          {{ homeStore.findText(671) }}
        </h2>
      </div>
      <div :class="`toggle-tabs ${plan}`">
        <span
          class="monthly"
          @click="addClassBtn"
        >  {{ homeStore.findText(672) }}</span>
        <span
          class="yearly"
          @click="addClassBtn"
        >  {{ homeStore.findText(673) }}</span>
      </div>
      <div class="pricingtable-row">
        <div class="row justify-content-center">
          <div
            v-for="item, ind in PlanCards"
            :key="ind"
            class="col-lg-4 col-md-6 wow fadeInUp"
            @mouseenter="addActive = ind"
          >
            <div :class="`pricingtable-wrapper style-2 m-md-b30 ${addActive === ind ? 'active' : ''}`">
              <div class="pricingtable-inner">
                <div class="pricingtable-title">
                  <h3>{{ item.title }}</h3>
                </div>
                <div class="pricingtable-media m-b15">
                  <img
                    :src="item.img"
                    width="125"
                    alt=""
                  >
                </div>
                <div
                  class="pricingtable-price month"
                  :style="`display:${plan == 'monthly' ? 'block' : 'none'};`"
                >
                  <h2 class="pricingtable-bx">
                    {{ item.monthlyPlan }}<small
                      class="pricingtable-type"
                    >/Month</small>
                  </h2>
                </div>
                <div
                  class="pricingtable-price year"
                  :style="`display:${plan == 'yearly' ? 'block' : 'none'};`"
                >
                  <h2 class="pricingtable-bx">
                    {{ item.yearlyPlan }}<small
                      class="pricingtable-type"
                    >/Year</small>
                  </h2>
                </div>
                <ul
                  v-if="plan === 'yearly'"
                  class="pricingtable-features"
                >
                  <li v-for="detail in item.details_yearly">
                    {{ detail }}
                  </li>
                </ul>
                <ul
                  v-else
                  class="pricingtable-features"
                >
                  <li v-for="detail in item.details">
                    {{ detail }}
                  </li>
                </ul>
                <div class="pricingtable-footer">
                  <RouterLink
                    to="/princing-table"
                    class="btn btn-primary gradient shadow rounded-xl"
                  >
                    {{ homeStore.findText(683) }}
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
