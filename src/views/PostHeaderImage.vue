<script setup>
import { RouterLink } from 'vue-router'
import CommonBanner2 from '../elements/CommonBanner2.vue'
import bgimg from '../assets/images/banner/bnr1.jpg'
import PostStartLeftContent from '../components/PostStartLeftContent.vue'
import PostStartRightContent from '../components/PostStartRightContent.vue'
</script>

<template>
  <div class="page-content bg-white">
    <CommonBanner2
      :image="bgimg"
      title="Post Header Image"
      title2="Post Header Image"
    />
    <section class="content-inner bg-img-fix">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="dlab-blog blog-single post-header rounded-md shadow">
              <div class="dlab-media ">
                <img
                  src="../assets/images/blog/default/thum1.jpg"
                  alt=""
                >
              </div>
              <div class="dlab-info">
                <div class="dlab-meta  border-0 py-0 mb-2">
                  <ul class="border-0">
                    <li class="post-date">
                      <i class="flaticon-clock m-r10" />7 March, 2020
                    </li>
                    <li class="post-author">
                      <i class="flaticon-user m-r10" />By <RouterLink
                        to=""
                      >
                        Johne Doe
                      </RouterLink>
                    </li>
                  </ul>
                </div>
                <h4 class="dlab-title mb-0">
                  Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere
                  dolor. Vestibulum in ante ut tortor eleifend venenatis
                </h4>
              </div>
            </div>
          </div>
          <div class="row">
            <PostStartLeftContent />
            <PostStartRightContent />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
