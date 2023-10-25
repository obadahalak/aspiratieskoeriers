<script setup>
import CommonBanner2 from '../elements/CommonBanner2.vue'
import bgimg from '../assets/images/banner/bnr1.jpg'
import PostStartLeftContent from '../components/PostStartLeftContent.vue'
import PostStartRightContent from '../components/PostStartRightContent.vue'
import BlogThumb1 from '../assets/images/blog/default/thum1.jpg'
</script>

<template>
  <div class="page-content bg-white">
    <CommonBanner2
      :image="bgimg"
      title="Post Standard"
      title2="Post Standard"
    />
    <section class="content-inner bg-img-fix">
      <div class="container">
        <div class="row">
          <PostStartLeftContent :IMG="BlogThumb1" />
          <PostStartRightContent />
        </div>
      </div>
    </section>
  </div>
</template>
