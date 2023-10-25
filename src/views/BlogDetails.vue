<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import CommonBanner from '../elements/CommonBanner.vue'
import bgimg from '../assets/images/banner/bnr2.jpg'
import blogGridPic1 from '../assets/images/blog/blog-grid/pic1.jpg'
import blogGridPic2 from '../assets/images/blog/blog-grid/pic2.jpg'
import LeavForm from '../elements/LeavForm.vue'

const relatedBlog = ref([
  { img: blogGridPic1 },
  { img: blogGridPic2 },
])
</script>

<template>
  <div class="page-content bg-white">
    <CommonBanner
      :image="bgimg"
      title="Blog Detail"
    />
    <section class="content-inner bg-img-fix">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="dlab-blog blog-single style-2">
              <div class="dlab-media rounded-md">
                <img
                  src="../assets/images/blog/default/thum1.jpg"
                  alt=""
                >
              </div>
              <div class="dlab-info">
                <div class="dlab-meta">
                  <ul class="border-0 pt-0">
                    <li><i class="flaticon-clock m-r10" />7 March, 2020</li>
                    <li class="post-author">
                      <i class="flaticon-user m-r10" />By <RouterLink to="" />
                      Johne Doe
                    </li>
                    <li class="post-comment">
                      <RouterLink to="">
                        <i class="flaticon-speech-bubble" /><span>15</span>
                      </RouterLink>
                    </li>
                  </ul>
                </div>
                <h4 class="dlab-title">
                  Maecenas aliquet quam sed tellus cursus, eget sodales elit luctus.
                  Proin blandit sed arcu sed ultricies fusce ac ligula vel enim fermentum blandit.
                </h4>
                <div class="dlab-post-text">
                  <p>
                    Donec suscipit porta lorem eget condimentum. Morbi vitae mauris in leo venenatis
                    varius. Aliquam nunc enim, egestas ac dui in, aliquam vulputate erat. Curabitur
                    porttitor ante ut odio vestibulum, et iaculis arcu scelerisque. Sed ornare mi vitae
                    elit molestie malesuada. Curabitur venenatis venenatis elementum. Etiam ullamcorper
                    metus vel leo convallis, quis bibendum tortor congue. Vivamus dapibus eu ex sed
                    tempus.
                  </p>
                  <p>
                    Maecenas aliquet quam sed tellus cursus, eget sodales elit luctus. Proin blandit sed
                    arcu sed ultricies. Fusce ac ligula vel enim fermentum blandit. Proin cursus massa
                    ipsum, at lacinia erat elementum sit amet. Quisque sem tortor, convallis in arcu eu,
                    accumsan finibus massa. Donec et sapien risus. Duis feugiat, odio vulputate
                    dignissim consectetur, diam metus dictum sapien, at tincidunt nibh eros vel velit.
                    Aenean accumsan et eros et hendrerit. In metus quam, consequat id imperdiet eu,
                    suscipit RouterLink nulla. Morbi mollis eu sem et condimentum. Pellentesque iaculis
                    imperdiet
                    purus ut tincidunt.
                  </p>
                  <blockquote class="wp-block-quote is-style-default">
                    <p>
                      Use this static Page to test the Theme’s handling of the Blog Posts Index page.
                      If the site is set to display RouterLink static Page on the Front Page, and this
                      Page is.
                    </p><cite>WordPress Community</cite>
                  </blockquote>
                  <p>
                    Phasellus vestibulum velit in lacinia ultrices. Aenean vel euismod risus, ac congue
                    lectus. In hac habitasse platea dictumst. Vivamus et felis imperdiet, commodo augue
                    in, condimentum tellus. Quisque RouterLink velit RouterLink eros malesuada
                    ullamcorper. Maecenas
                    ultricies, nisl vel tristique iaculis, libero ex dictum nisi, quis faucibus velit
                    leo vel sapien.
                  </p>
                  <img
                    class="alignleft rounded-md w-50"
                    src="../assets/images/blog/pic2.jpg"
                    alt=""
                  >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut imperdiet arcu,
                    et consectetur massa. Vivamus in arcu quis diam gravida tempus. Vivamus et
                    ullamcorper mauris, in sollicitudin tortor. Morbi vitae lacus dolor. Phasellus
                    blandit et sapien RouterLink efficitur.
                  </p>
                  <p>
                    In mollis auctor odio RouterLink porttitor. Vivamus venenatis auctor nulla, et
                    imperdiet enim
                    pretium sit amet. Mauris rutrum ex quis dolor elementum, eu pharetra dui gravida. Ut
                    iaculis lacus molestie dui interdum, vel varius justo egestas. Donec diam ex,
                    sodales nec molestie quis, consequat non justo. Cras elementum velit quis dolor
                    finibus condimentum quis ac quam. Suspendisse vitae justo ut sapien rhoncus egestas.
                  </p>
                  <p>
                    Integer accumsan lacinia nulla ac maximus. In dapibus est vel risus tincidunt, nec
                    dignissim eros suscipit. Vestibulum fermentum aliquet ligula vitae laoreet.
                  </p>
                  <p>
                    Phasellus vestibulum velit in lacinia ultrices. Aenean vel euismod risus, ac congue
                    lectus. In hac habitasse platea dictumst. Vivamus et felis imperdiet, commodo augue
                    in, condimentum tellus. Quisque RouterLink velit RouterLink eros malesuada
                    ullamcorper. Maecenas
                    ultricies, nisl vel tristique iaculis, libero ex dictum nisi, quis faucibus velit
                    leo vel sapien.
                  </p>
                </div>
                <div class="dlab-meta meta-bottom border-top">
                  <div class="post-tags">
                    <strong>Tags:</strong>
                    <RouterLink to="">
                      Child
                    </RouterLink>,
                    <RouterLink to="">
                      Eduction
                    </RouterLink>,
                    <RouterLink to="">
                      Money
                    </RouterLink>,
                    <RouterLink to="">
                      Resturent
                    </RouterLink>
                  </div>
                  <div class="dlab-social-icon primary-light">
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
                          class="fab fa-instagram"
                          href="https://www.instagram.com/"
                          target="_blank"
                        />
                      </li>
                      <li>
                        <a
                          class="fab fa-twitter"
                          href="https://www.twitter.com/"
                          target="_blank"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="row extra-blog style-2">
              <div class="col-lg-12 m-b30">
                <h2 class="blog-title">
                  Related Blogs
                </h2>
                <div class="dlab-separator style-1" />
              </div>
              <div
                v-for="item, ind in relatedBlog"
                class="col-lg-6 col-md-6"
              >
                <div class="dlab-blog style-2 m-b30">
                  <div class="dlab-media rounded-md">
                    <RouterLink to="/blog-details">
                      <img
                        :src="item.img"
                        alt=""
                      >
                    </RouterLink>
                  </div>
                  <div class="dlab-info">
                    <h4 class="dlab-title">
                      <RouterLink to="/blog-detailshtml">
                        Maecenas maximus augue eget
                        libero dictum.
                      </RouterLink>
                    </h4>
                    <p class="m-b20">
                      Nunc convallis sagittis dui eu dictum. Cras sodales id ipsum ac
                      aliquam. Phasellus justo quam.
                    </p>
                    <div class="dlab-meta mb-0">
                      <ul>
                        <li class="post-date">
                          25 March 2023
                        </li>
                        <li class="post-author">
                          <i class="las la-user-circle" /> By <RouterLink
                            to=""
                          >
                            Johne Doe
                          </RouterLink>
                        </li>
                        <li class="post-comment">
                          <i class="las la-comment" />
                          <RouterLink to="">
                            Comments<span>15</span>
                          </RouterLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="comment-list"
              class="row clear"
            >
              <div class="col-lg-6">
                <div
                  id="comments"
                  class="comments-area style-2"
                >
                  <h2 class="comments-title">
                    8 Comments
                  </h2>
                  <div class="dlab-separator style-1" />
                  <div class="clearfix m-t30">
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore magna aliqua.
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
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                do eiusmod tempor.
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore magna aliqua.
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
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <LeavForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
