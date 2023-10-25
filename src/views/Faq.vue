<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import CommonBanner from '../elements/CommonBanner.vue'
import bgImg from '../assets/images/banner/bnr2.jpg'
import ClientLogo from '../elements/ClientLogo.vue'
import { useFaqStore } from '@/stores/faq'

const faqStore = useFaqStore()

function toggleClose(index) {
  document.querySelectorAll('.accordian_collaps_link').forEach((ell, ind) => {
    ell.classList.toggle('collapsed')
    if (index !== ind)
      ell.classList.add('collapsed')
  })
  document.querySelectorAll('.accordian_collaps').forEach((ell, ind) => {
    ell.classList.toggle('collapse')
    if (index !== ind)
      ell.classList.add('collapse')
  })
}
function toggleClose2(index) {
  document.querySelectorAll('.accordian_collaps_link2').forEach((ell, ind) => {
    ell.classList.toggle('collapsed')
    if (index !== ind)
      ell.classList.add('collapsed')
  })
  document.querySelectorAll('.accordian_collaps2').forEach((ell, ind) => {
    ell.classList.toggle('collapse')
    if (index !== ind)
      ell.classList.add('collapse')
  })
}

const AccordianCard = ref([])
function initAccordianCard() {
  AccordianCard.value = [{
    title: faqStore.findText(861),
    answer: faqStore.findText(862),
    title2: faqStore.findText(863),
    answer2: faqStore.findText(864),
  },
  {
    title: faqStore.findText(865),
    answer: faqStore.findText(866),
    title2: faqStore.findText(867),
    answer2: faqStore.findText(868),
  },
  {
    title: faqStore.findText(869),
    answer: faqStore.findText(870),
    title2: faqStore.findText(871),
    answer2: faqStore.findText(872),
  },
  {
    title: faqStore.findText(873),
    answer: faqStore.findText(874),
    title2: faqStore.findText(875),
    answer2: faqStore.findText(876),
  },
  {
    title: faqStore.findText(877),
    answer: faqStore.findText(878),
    title2: faqStore.findText(879),
    answer2: faqStore.findText(880),
  }]
}
onMounted(() => {
  faqStore.Faqs().then(() => initAccordianCard())
})
</script>

<template>
  <div class="page-content bg-white">
    <CommonBanner
      :image="bgImg"
      :title="faqStore.findText(859)"
      :home="faqStore.findText(860)"
    />
    <section class="content-inner-2">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 wow fadeIn">
            <div
              id="accordionFaq"
              class="dlab-accordion"
            >
              <div
                v-for="item, ind in AccordianCard"
                :key="ind"
                class="card"
              >
                <div
                  id="faqOneOne"
                  class="card-header"
                >
                  <h5 class="dlab-title">
                    <RouterLink
                      to=""
                      class="accordian_collaps_link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOneOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                      @click="toggleClose(ind)"
                    >
                      {{ item.title }}
                      <span class="toggle-close" />
                    </RouterLink>
                  </h5>
                </div>
                <div
                  class="accordian_collaps collapse"
                  aria-labelledby="faqOneOne"
                  data-bs-parent="#accordionFaq1"
                >
                  <div class="card-body">
                    <p class="m-b0">
                      {{ item.answer }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 wow fadeIn">
            <div
              id="accordionFaq1"
              class="dlab-accordion"
            >
              <div
                v-for="item, ind in AccordianCard"
                :key="ind"
                class="card"
              >
                <div
                  id="faqOneOne"
                  class="card-header"
                >
                  <h5 class="dlab-title">
                    <RouterLink
                      to=""
                      class="accordian_collaps_link2 collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOneOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                      @click="toggleClose2(ind)"
                    >
                      {{ item.title2 }}
                      <span class="toggle-close" />
                    </RouterLink>
                  </h5>
                </div>
                <div
                  class="accordian_collaps2 collapse"
                  aria-labelledby="faqOneOne"
                  data-bs-parent="#accordionFaq1"
                >
                  <div class="card-body">
                    <p class="m-b0">
                      {{ item.answer2 }}
                    </p>
                  </div>
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
