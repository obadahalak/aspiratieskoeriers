<script setup>
import CommonBanner2 from '../elements/CommonBanner2.vue'
import bgimg from '../assets/images/banner/bnr1.jpg'
import PostStartLeftContent from '../components/PostStartLeftContent.vue'
import PostStartRightContent from '../components/PostStartRightContent.vue'
</script>

<template>
  <div class="page-content bg-white">
    <CommonBanner2
      :image="bgimg"
      title="Post Slide Show"
      title2="Post Slide Show"
    />
    <section class="content-inner bg-img-fix">
      <div class="container">
        <div class="row">
          <PostStartLeftContent />
          <PostStartRightContent />
        </div>
      </div>
    </section>
  </div>
</template>
