<script lang="ts" setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import router from './router'
import { useGlobalStore } from './stores/global'
import Loader from '@/elements/Loader.vue'

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

function ScrollTop() {
  window.scrollTo(0, 0)
}
</script>

<template>
  <Loader v-if="useGlobalStore().loading" />
  <div
    class="page-wraper"
    :style="[useGlobalStore().loading ? 'opacity: 0.2' : 'opacity: 1']"
  >
    <div v-if="$router.currentRoute.value.path !== '/coming-soon'">
      <Header v-if="$router.currentRoute.value.path !== '/site-down'" />
    </div>
    <RouterView />
    <div v-if="$router.currentRoute.value.path !== '/coming-soon'">
      <Footer
        v-if="$router.currentRoute.value.path !== '/site-down'"
        class="footer1"
      />
      <!-- <Footer2 class="footer2"/> -->
    </div>
    <button
      class="scroltop icon-up"
      type="button"
      style="display: inline-block;"
      @click="ScrollTop"
    >
      <i class="fa fa-arrow-up" />
    </button>
  </div>
</template>
