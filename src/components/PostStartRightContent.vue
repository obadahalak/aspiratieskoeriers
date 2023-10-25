<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import BlogPic1 from '../assets/images/blog/recent-blog/pic1.jpg'
import BlogPic2 from '../assets/images/blog/recent-blog/pic2.jpg'
import BlogPic3 from '../assets/images/blog/recent-blog/pic3.jpg'

const Posts = ref([
  { img: BlogPic1, title: 'Fusce mollis felis quis tristique' },
  { img: BlogPic2, title: 'Fusce mollis felis quis tristique' },
  { img: BlogPic3, title: 'Fusce mollis felis quis tristique' },
])
</script>

<template>
  <div class="col-xl-4 col-lg-4 m-b30">
    <aside class="side-bar sticky-top">
      <div class="widget">
        <div class="search-bx">
          <form
            role="search"
            method="post"
          >
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="la la-search" /></span>
              </div>
              <input
                name="text"
                class="form-control"
                placeholder="Search"
                type="text"
              >
              <span class="input-group-btn">
                <button
                  type="button"
                  class="btn btn-primary"
                >
                  <i class="la la-long-arrow-right" />
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
      <div class="widget widget_categories">
        <h4 class="widget-title">
          Category
        </h4>
        <ul>
          <li class="cat-item cat-item-26">
            <RouterLink to="">
              Audio
            </RouterLink> (3)
          </li>
          <li class="cat-item cat-item-36">
            <RouterLink to="">
              Beauty
            </RouterLink> (4)
          </li>
          <li class="cat-item cat-item-43">
            <RouterLink to="">
              Fashion
            </RouterLink> (3)
          </li>
          <li class="cat-item cat-item-27">
            <RouterLink to="">
              Images
            </RouterLink> (1)
          </li>
          <li class="cat-item cat-item-40">
            <RouterLink to="">
              Lifestyle
            </RouterLink> (3)
          </li>
        </ul>
      </div>
      <div class="widget recent-posts-entry">
        <h4 class="widget-title">
          Recent Posts
        </h4>
        <div class="widget-post-bx">
          <div
            v-for="item, ind in Posts"
            class="widget-post clearfix"
          >
            <div class="dlab-media">
              <RouterLink to="blog-details">
                <img
                  :src="item.img"
                  alt=""
                >
              </RouterLink>
            </div>
            <div class="dlab-info">
              <h4 class="title">
                <RouterLink to="blog-details">
                  {{ item.title }}
                </RouterLink>
              </h4>
              <div class="dlab-meta">
                <ul>
                  <li class="post-date">
                    7 March, 2020
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="widget widget widget_categories">
        <h4 class="widget-title">
          Archives
        </h4>
        <ul>
          <li>
            <RouterLink to="">
              January
            </RouterLink>(3)
          </li>
          <li>
            <RouterLink to="">
              Fabruary
            </RouterLink>(4)
          </li>
          <li>
            <RouterLink to="">
              March
            </RouterLink>(4)
          </li>
          <li>
            <RouterLink to="">
              April
            </RouterLink>(3)
          </li>
          <li>
            <RouterLink to="">
              May
            </RouterLink>(4)
          </li>
          <li>
            <RouterLink to="">
              Jun
            </RouterLink>(1)
          </li>
          <li>
            <RouterLink to="">
              July
            </RouterLink>(4)
          </li>
        </ul>
      </div>
      <div class="widget widget_tag_cloud">
        <h4 class="widget-title">
          Tags
        </h4>
        <div class="tagcloud">
          <RouterLink to="">
            Business
          </RouterLink>
          <RouterLink to="">
            News
          </RouterLink>
          <RouterLink to="">
            Brand
          </RouterLink>
          <RouterLink to="">
            Website
          </RouterLink>
          <RouterLink to="">
            Internal
          </RouterLink>
          <RouterLink to="">
            Strategy
          </RouterLink>
          <RouterLink to="">
            Brand
          </RouterLink>
          <RouterLink to="">
            Mission
          </RouterLink>
        </div>
      </div>
    </aside>
  </div>
</template>
