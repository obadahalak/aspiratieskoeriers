<script setup>
import { ref } from 'vue'

const addActive = ref(0)
const about = ref([
  { icon: 'flaticon-idea', title: 'Idea Analysis Gathering' },
  { icon: 'flaticon-coding', title: 'Design Developing' },
])
</script>

<template>
  <section class="content-inner bg-gray">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 m-b30 d-lg-block d-none">
          <div class="dz-media left-ml ">
            <img
              src="../assets/images/about/img6.png"
              class="move-2"
              alt=""
            >
          </div>
        </div>
        <div class="col-lg-6">
          <div class="section-head style-3">
            <h2 class="title">
              Why Our Agency
            </h2>
            <p>
              In dictum aliquam turpis lacinia iaculis. Fusce vel malesuada magna. Nulla vel maximus risus.
              Donec volutpat metus lacinia.
            </p>
          </div>
          <div
            v-for="item, ind in about"
            :class="`icon-bx-wraper style-3 left box-hover m-b30 wow fadeInRight ${addActive === ind ? 'active' : ''}`"
            @mouseenter="addActive = ind"
          >
            <div class="icon-bx-sm radius">
              <a
                href="javascript:void(0);"
                class="icon-cell"
              >
                <i :class="item.icon" />
              </a>
            </div>
            <div class="icon-content">
              <h4 class="dlab-title m-b10">
                {{ item.title }}
              </h4>
              <p>Maecenas laoreet efficitur sagittis. Aliquam eleifend nisl leo, sit amet consequat augue.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
