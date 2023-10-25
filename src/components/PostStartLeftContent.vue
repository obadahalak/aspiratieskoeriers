<script setup>
import { ref } from 'vue'
import RelatedBlogs from '../elements/RelatedBlogs.vue'
import CommonLeftBlog from '../elements/CommonLeftBlog.vue'
import router from '../router'

defineProps({
  IMG: String,
})

const path = ref()
path.value = router.currentRoute.value.path
</script>

<template>
  <div :class="path !== '/post-slide-show' ? 'col-xl-8 col-lg-8 m-b50' : 'col-xl-12 col-lg-12 m-b50'">
    <div class="dlab-blog blog-single style-1 sidebar">
      <div class="dlab-media rounded-md shadow">
        <img
          :src="IMG"
          alt=""
          :style="`display: ${path !== '/post-slide-show' || path !== '/post-header-image' || path !== '/post-side-image' ? 'block' : 'none'};`"
        >
      </div>
      <CommonLeftBlog />
    </div>
    <RelatedBlogs />
  </div>
</template>
