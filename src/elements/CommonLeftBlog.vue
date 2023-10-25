<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import router from '../router'

defineProps({
  IMG: String,
})

const path = ref()
path.value = router.currentRoute.value.path
</script>

<template>
  <div class="dlab-info">
    <div
      v-if="path !== '/post-header-image'"
      class="dlab-meta  border-0 py-0 mb-2"
    >
      <ul class="border-0">
        <li class="post-date">
          <i class="flaticon-clock m-r10" />7 March, 2020
        </li>
        <li class="post-author">
          <i class="flaticon-user m-r10" />By <RouterLink to="">
            Johne
            Doe
          </RouterLink>
        </li>
      </ul>
    </div>
    <h4
      v-if="path !== '/post-header-image'"
      class="dlab-title"
    >
      Fusce sem ligula, imperdiet sed nisi sit
      amet,
      euismod posuere dolor. Vestibulum in
      ante ut tortor eleifend venenatis
    </h4>
    <div class="dlab-post-text text">
      <ul
        v-if="path === '/post-gallery-alt'"
        class="wp-block-gallery columns-3"
      >
        <li class="blocks-gallery-item">
          <img
            alt=""
            src="../assets/images/blog/our-blog/pic3.jpg"
          >
        </li>
        <li class="blocks-gallery-item">
          <img
            alt=""
            src="../assets/images/blog/our-blog/pic4.jpg"
          >
        </li>
        <li class="blocks-gallery-item">
          <img
            alt=""
            src="../assets/images/blog/our-blog/pic1.jpg"
          >
        </li>
      </ul>
      <div class="alignleft w-50 rounded-md shadow overflow-hidden">
        <img
          v-if="path === '/post-side-image'"
          src="../assets/images/blog/our-blog/pic1.jpg "
          alt=""
        >
      </div>
      <p>
        Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed maximus orci ac condi mentum
        efficitur.
        Suspendi potenti. Fusce diam felis, ullamcor aca felis sed, volutpat varius tortor. Ut eleifend
        justo sed quam blandit, vehicula ante hendrerit. Sed condimentum libero vel eros porta, eu
        malesuada
        nulla bibendum. Proin varius sollicitudin nulla quis fermentum. Nunc vitae arcu eget diam
        gravida
        ultrices finibus nec mi. Maecenas egestas libero.
      </p>
      <p>
        Donec ultricies convallis urna. Morbi consequat vestibulum nunc sed semper. Proin iaculis risus
        eleifend, efficitur eros et, tristique tortor. Integer nec lacinia augue. Curabitur mattis vel
        orci
        id mattis. Aliquam eu dignissim sem. Interdum et malesuada fames ac ante ipsum primis in
        faucibus.
        Mauris vitae fermentum quam.
      </p>
      <ul>
        <li>
          <RouterLink to="">
            Duis auctor sed elit quis consequat.
          </RouterLink>
          Fusce est quam, sodales vel eros vitae, dictum consectetur dolor. Fusce convallis mauris
          tellus,
          eu aliquet magna aliquet eget.
        </li>
        <li>
          Nam iaculis,
          <RouterLink to="">
            enim ut elementum maximus, quam lectus convallis metus,
          </RouterLink>
          id suscipit risus lectus id urna. Cras viverra consectetur diam. Morbi sed consequat tellus,
          in
          vehicula urna.
        </li>
        <li>
          <RouterLink to="">
            Morbi sit amet diam sodales, sodales purus quis,
          </RouterLink>
          feugiat turpis. Maecenas elementum mauris quis plac erat maximus.
          <RouterLink to="">
            Curabitur elementum lobortis malesuada.
          </RouterLink>
        </li>
      </ul>
      <p>
        Aliquam laoreet fringilla velit, quis pulvinar ex bibendum vestibulum. Aenean vel dapibus ex.
        Curabitur sodales dui ut hendrerit volutpat. Phasellus fringilla semper urna, eu dapibus lacus
        porttitor at. Sed eget pellentes orci. Aliquam pulvinar augue sed molestie semper. Integer
        ullamcorper magna fringilla arcu rutrum, sed porttitor ex viverra.
      </p>
      <ul class="wp-block-gallery columns-3">
        <li class="blocks-gallery-item">
          <img
            alt=""
            src="../assets/images/blog/our-blog/pic2.jpg"
          >
        </li>
        <li class="blocks-gallery-item">
          <img
            alt=""
            src="../assets/images/blog/our-blog/pic1.jpg"
          >
        </li>
      </ul>
      <h4>Curabitur elementum lobortis malesuada. </h4>
      <p>
        Aliquam laoreet fringilla velit, quis pulvinar ex bibendum vestibulum. Aenean vel dapibus ex.
        Curabitur sodales dui ut hendrerit volutpat. Phasellus fringilla semper urna, eu dapibus lacus
        porttitor at. Sed eget pellentes orci. Aliquam pulvinar augue sed molestie semper. Integer
        ullamcorper magna fringilla arcu rutrum, sed porttitor ex viverra.
      </p>
      <blockquote class="wp-block-quote is-style-default">
        <p>
          Use this static Page to test the Theme’s handling of the Blog Posts Index page. If the site
          is
          set to display RouterLink static Page on the Front Page, and this Page is.
        </p><cite>WordPress
          Community</cite>
      </blockquote>
      <p>
        Cras ac erat sapien. Etiam porta, arcu sed scelerisque dapibus, orci felis tincidunt tellus, at
        bibendum ex velit ac dolor. Aenean auctor, lectus laoreet efficitur dapibus, orci nulla ultrices
        risus, sed volutpat nisl nulla at felis. Integer ligula risus, ultricies eu velit non, rutrum
        consectetur neque. Sed ullamcorper sed massa quis hendrerit.
      </p>
      <p>
        Nulla ultrices diam at odio malesuada lacinia. Fusce eget posuere purus. Donec accumsan vehicula
        mi,
        id imperdiet nulla ornare eu. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>
      <p>
        Praesent vehicula neque et augue consectetur placerat. Ut pellentesque euismod sapien eget
        venenatis.
        Proin massa lacus, dapibus RouterLink scelerisque RouterLink, molestie sit amet mauris. Cras maximus lectus quis
        orci
        feugiat, at tristique velit bibendum. Etiam augue arcu, cursus id egestas ut, viverra at urna.
        Quisque ipsum sit amet aliquet tempus.
      </p>
      <div class="clearfix" />
    </div>
    <nav v-if="path === '/post-with-pagination'">
      <ul class="pagination text-center p-t10 mb-5">
        <li class="page-item">
          <RouterLink
            class="page-link prev"
            to=""
          >
            Prev
          </RouterLink>
        </li>
        <li class="page-item">
          <RouterLink
            class="page-link active"
            to=""
          >
            1
          </RouterLink>
        </li>
        <li class="page-item">
          <RouterLink
            class="page-link"
            to=""
          >
            2
          </RouterLink>
        </li>
        <li class="page-item">
          <RouterLink
            class="page-link"
            to=""
          >
            3
          </RouterLink>
        </li>
        <li class="page-item">
          <RouterLink
            class="page-link next"
            to=""
          >
            Next
          </RouterLink>
        </li>
      </ul>
    </nav>

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
</template>
