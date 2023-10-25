<script setup>
import CommonBanner2 from '../elements/CommonBanner2.vue'
import bgimg from '../assets/images/banner/bnr1.jpg'
import CommonLeftBlog from '../elements/CommonLeftBlog.vue'
import RelatedBlogs from '../elements/RelatedBlogs.vue'
import PostStartRightContent from '../components/PostStartRightContent.vue'
</script>

<template>
  <div class="page-content bg-white">
    <CommonBanner2
      :image="bgimg"
      title="Post Gallery Alternative"
      title2="Post Gallery Alternative"
    />
    <section class="content-inner bg-img-fix">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-8 m-b50">
            <div class="dlab-blog blog-single style-1 sidebar">
              <div class="dlab-media rounded-md shadow ">
                <iframe
                  style="width: 100%; height:400px; vertical-align: middle;"
                  src="https://w.soundcloud.com/player/?visual=true&#038;url=https://soundcloud.com/secret-service-862007284/old-town-road&#038;show_artwork=true&#038;maxwidth=750&#038;maxheight=1000&#038;dnt=1"
                />
              </div>
              <CommonLeftBlog />
            </div>
            <RelatedBlogs />
          </div>
          <PostStartRightContent />
        </div>
      </div>
    </section>
  </div>
</template>
