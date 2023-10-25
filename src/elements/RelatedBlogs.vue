<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import LeavForm from '../elements/LeavForm.vue'
import DefaultThumb3 from '../assets/images/blog/default/thum3.jpg'
import DefaultThumb2 from '../assets/images/blog/default/thum2.jpg'

const RelatedBlog = ref([
  { img: DefaultThumb3, title: 'Praesent ut lobortis purus hasellus libero orci.' },
  { img: DefaultThumb2, title: 'Donec feugiat mollis nisi in dignissim.' },
])
</script>

<template>
  <div class="row extra-blog style-1">
    <div class="col-lg-12">
      <h4 class="blog-title">
        RELATED BLOGS
      </h4>
    </div>
    <div
      v-for="item, ind in RelatedBlog"
      class="col-lg-6 col-md-6"
    >
      <div class="dlab-blog style-1 bg-white m-b30">
        <div class="dlab-media">
          <RouterLink to="/blog-details">
            <img
              :src="item.img"
              alt=""
            >
          </RouterLink>
        </div>
        <div class="dlab-info">
          <h5 class="dlab-title">
            <RouterLink to="/blog-details">
              {{ item.title }}
            </RouterLink>
          </h5>
          <p class="m-b0">
            Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum
            pulvinar.
          </p>
          <div class="dlab-meta meta-bottom">
            <ul>
              <li class="post-date">
                <i class="flaticon-clock m-r10" />7 March, 2020
              </li>
              <li class="post-comment">
                <RouterLink to="">
                  <i class="flaticon-speech-bubble" /><span>15</span>
                </RouterLink>
              </li>
              <li class="post-share">
                <i class="flaticon-share" />
                <ul>
                  <li>
                    <a
                      class="fab fa-facebook-f"
                      href="https://www.facebook.com/"
                      target="_blank"
                    />
                  </li>
                  <li>
                    <a
                      class="fab fa-twitter"
                      href="https://www.instagram.com/"
                      target="_blank"
                    />
                  </li>
                  <li>
                    <a
                      class="fab fa-linkedin-in"
                      href="https://twitter.com/"
                      target="_blank"
                    />
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    id="comment-list"
    class="clear"
  >
    <div
      id="comments"
      class="comments-area style-1"
    >
      <h4 class="comments-title">
        8 COMMENTS
      </h4>
      <div class="clearfix">
        <ul class="comment-list">
          <li class="comment">
            <div class="comment-body">
              <div class="comment-author vcard">
                <img
                  class="avatar photo"
                  src="../assets/images/testimonials/pic1.jpg"
                  alt=""
                >
                <cite class="fn">Celesto Anderson</cite>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <div class="reply">
                <RouterLink
                  to=""
                  class="comment-reply-link"
                >
                  <i class="fa fa-reply" />Reply
                </RouterLink>
              </div>
            </div>
            <ol class="children">
              <li class="comment odd parent">
                <div class="comment-body">
                  <div class="comment-author vcard">
                    <img
                      class="avatar photo"
                      src="../assets/images/testimonials/pic2.jpg"
                      alt=""
                    >
                    <cite class="fn">Jake Johnson</cite>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div class="reply">
                    <RouterLink
                      to=""
                      class="comment-reply-link"
                    >
                      <i class="fa fa-reply" />Reply
                    </RouterLink>
                  </div>
                </div>
                <!-- list END -->
              </li>
            </ol>
            <!-- list END -->
          </li>
          <li class="comment">
            <div class="comment-body">
              <div class="comment-author vcard">
                <img
                  class="avatar photo"
                  src="../assets/images/testimonials/pic1.jpg"
                  alt=""
                >
                <cite class="fn">John Doe</cite>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <div class="reply">
                <RouterLink
                  to=""
                  class="comment-reply-link"
                >
                  <i class="fa fa-reply" />Reply
                </RouterLink>
              </div>
            </div>
          </li>
        </ul>
        <!-- comment list END -->
        <!-- Form -->
        <LeavForm />
        <!-- Form -->
      </div>
    </div>
  </div>
</template>
