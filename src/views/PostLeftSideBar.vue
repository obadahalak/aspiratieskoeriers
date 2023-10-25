<script setup>
import CommonBanner2 from '../elements/CommonBanner2.vue'
import bgimg from '../assets/images/banner/bnr1.jpg'
import PostStartLeftContent from '../components/PostStartLeftContent.vue'
import PostStartRightContent from '../components/PostStartRightContent.vue'
import BlogThumb2 from '../assets/images/blog/default/thum2.jpg'
</script>

<template>
  <div class="page-content bg-white">
    <CommonBanner2
      :image="bgimg"
      title="Post Left Sidebar"
      title2="Post Left Sidebar"
    />
    <section class="content-inner bg-img-fix">
      <div class="container">
        <div class="row">
          <PostStartRightContent />
          <PostStartLeftContent :IMG="BlogThumb2" />
        </div>
      </div>
    </section>
  </div>
</template>
