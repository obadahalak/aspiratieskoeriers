<script setup>
import backgroundImg from '../assets/images/banner/bnr2.jpg'
import BlogLargeContent from '../elements/BlogLargeContent.vue'
import CommonBanner2 from '../elements/CommonBanner2.vue'
</script>

<template>
  <div class="page-content bg-white">
    <CommonBanner2
      :image="backgroundImg"
      title="BLOG LEFT SIDEBAR"
      title2="Blog Left Sidebar"
    />
    <div class="content-inner">
      <div class="container">
        <div class="row">
          <BlogLargeContent />
        </div>
      </div>
    </div>
  </div>
</template>
