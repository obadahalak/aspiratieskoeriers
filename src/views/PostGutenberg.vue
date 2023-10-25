<script setup>
import { RouterLink } from 'vue-router'
import CommonBanner2 from '../elements/CommonBanner2.vue'
import RelatedBlogs from '../elements/RelatedBlogs.vue'
import bgibg from '../assets/images/banner/bnr1.jpg'
</script>

<template>
  <div class="page-content bg-white">
    <CommonBanner2
      :image="bgibg"
      title="Post Open Gutenberg"
      title2="Post Open Gutenberg"
    />
    <section class="content-inner bg-img-fix overflow-hidden">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="dlab-blog blog-single post-header rounded-md shadow">
              <div class="dlab-media ">
                <img
                  class="rounded-sm"
                  src="../assets/images/background/bg8.jpg"
                  alt=""
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="min-container">
        <div class="row">
          <div class="col-xl-12 col-lg-12 m-b50">
            <div class="dlab-blog blog-single style-1">
              <div class="dlab-info">
                <div class="dlab-meta  border-0 py-0 mb-2">
                  <ul class="border-0">
                    <li class="post-date">
                      <i class="flaticon-clock m-r10" />7 March, 2020
                    </li>
                    <li class="post-author">
                      <i class="flaticon-user m-r10" />By <RouterLink to="">
                        Johne Doe
                      </RouterLink>
                    </li>
                  </ul>
                </div>
                <h4 class="dlab-title mb-0">
                  Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere
                  dolor. Vestibulum in ante ut tortor eleifend venenatis
                </h4>
                <div class="dlab-post-text text pt-0">
                  <p>
                    Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed maximus orci ac condi
                    mentum efficitur. Suspendi potenti. Fusce diam felis, ullamcor aca felis sed,
                    volutpat
                    varius tortor. Ut eleifend justo sed quam blandit, vehicula ante hendrerit. Sed
                    condimentum libero vel eros porta, eu malesuada nulla bibendum. Proin varius
                    sollicitudin nulla quis fermentum. Nunc vitae arcu eget diam gravida ultrices
                    finibus
                    nec mi. Maecenas egestas libero.
                  </p>
                  <p>
                    Donec ultricies convallis urna. Morbi consequat vestibulum nunc sed semper. Proin
                    iaculis
                    risus eleifend, efficitur eros et, tristique tortor. Integer nec lacinia augue.
                    Curabitur mattis vel orci id mattis. Aliquam eu dignissim sem. Interdum et malesuada
                    fames ac ante ipsum primis in faucibus. Mauris vitae fermentum quam.
                  </p>
                  <p>
                    Aliquam eu dignissim sem. Interdum et malesuada fames ac ante ipsum primis in
                    faucibus.
                    Mauris vitae fermentum quam. Aliquam laoreet fringilla velit, quis pulvinar ex
                    bibendum
                    vestibulum. Aenean vel dapibus ex. Curabitur sodales dui ut hendrerit volutpat.
                    Phasellus fringilla semper urnator at.
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
                  <p>
                    Aliquam laoreet fringilla velit, quis pulvinar ex bibendum vestibulum. Aenean dapibus
                    ex.
                    Curabitur sodales dui ut hendrerit volutpat. Phasellus fringilla semper rneu dapibus
                    lacus porttitor at. Sed eget pellentes orci. Aliquam pulvinar augue sed molestie
                    semper.
                    Integer ullamcorper magna viverra.
                  </p>
                  <h4>Curabitur elementum lobortis malesuada. </h4>
                  <p>
                    Cras ac erat sapien. Etiam porta, arcu sed scelerisque dapibus, orci felis tincidunt
                    tellus, bibendum ex velit ac dolor. Aenean auctor, lectus laoreet efficitur dapibus,
                    orci nulla ultrices risus, sed volutpat nisl nulla at felis. Integer ligula risus,
                    ultricies eu velit non, rutrum conse ctetur neque.
                  </p>
                  <ul>
                    <li>
                      import images, multimedia and approved files from the media library or add HTML
                      shortcodes;
                    </li>
                    <li> copy and paste links for embeds;</li>
                    <li> write shortcodes for specialized assets of different plugins;</li>
                    <li> create featured images to be added at the top of RouterLink post or page; </li>
                  </ul>
                  <p>
                    Cras ac erat sapien. Etiam porta, arcu sed scelerisque dapibus, orci felis tincidunt
                    tellus, bibendum ex velit ac dolor. Aenean auctor, lectus laoreet efficitur dapibus,
                    orci nulla ultrices risus, sed volutpat nisl nulla at felis. Integer ligula risus,
                    ultricies eu velit non, rutrum conse ctetur neque.
                  </p>
                  <p>
                    Nulla ultrices diam at odio malesuada lacinia. Fusce eget posuere purus. Donec
                    accumsan
                    vehicula id imperdiet nulla ornare eu. Orci varius natoque penatibus et magnis dis
                    parturient montes ulus mus.
                  </p>
                  <blockquote class="wp-block-quote">
                    <p>
                      Use this static Page to test the Theme’s handling of the Blog Posts Index page.
                      If
                      the site is set to display RouterLink static Page on the Front Page, and this
                      Page is.
                    </p>
                    <cite>WordPress Community</cite>
                  </blockquote>
                  <p>
                    Cras ac erat sapien. Etiam porta, arcu sed scelerisque dapibus, orci felis tincidunt
                    tellus, bibendum ex velit ac dolor. Aenean auctor, lectus laoreet efficitur dapibus,
                    orci nulla ultrices risus, sed volutpat nisl nulla at felis. Integer ligula risus,
                    ultricies eu velit non, rutrum conse ctetur neque. augue arcu, cursus id egestas ut,
                    viverra at urna.
                  </p>
                  <figure class="wp-block-image size-full is-style-default alignfullwide">
                    <img
                      src="../assets/images/background/bg5.jpg"
                      alt=""
                    >
                  </figure>
                  <p>
                    Cras ac erat sapien. Etiam porta, arcu sed scelerisque dapibus, orci felis tincidunt
                    tellus, bibendum ex velit ac dolor. Aenean auctor, lectus laoreet efficitur dapibus,
                    orci nulla ultrices risus, sed volutpat nisl nulla at felis. Integer ligula risus,
                    ultricies eu velit non, rutrum conse ctetur neque. augue arcu, cursus id egestas ut,
                    viverra at urna.
                  </p>

                  <pre class="wp-block-code"><code>wp_nav_menu( array
( 'theme_location' =&gt;
	'footer_menu',
	'container_id' =&gt;
	'navbar-collapse-1',
	'container_class'=&gt;
	'navbar-collapse collapse navbar-right',
	'menu_class'=&gt;'nav navbar-nav',
	'fallback_cb'=&gt;false,
	'items_wrap' =&gt; '%3$s',
	'container'=&gt;false,
	'depth' =&gt; 1,
	'walker'=&gt; ''
)
);</code></pre>
                  <p>
                    Cras ac erat sapien. Etiam porta, arcu sed scelerisque dapibus, orci felis tincidunt
                    tellus, bibendum ex velit ac dolor. Aenean auctor, lectus laoreet efficitur dapibus,
                    orci nulla ultrices risus, sed volutpat nisl nulla at felis. Integer ligula risus,
                    ultricies eu velit non, rutrum conse ctetur neque. augue arcu, cursus id egestas ut,
                    viverra at urna.
                  </p>
                  <ul class="wp-block-gallery columns-4 is-cropped">
                    <li class="blocks-gallery-item">
                      <img
                        alt=""
                        src="../assets/images/projects/pic1.jpg"
                      >
                    </li>
                    <li class="blocks-gallery-item">
                      <img
                        alt=""
                        src="../assets/images/projects/pic2.jpg"
                      >
                    </li>
                    <li class="blocks-gallery-item">
                      <img
                        alt=""
                        src="../assets/images/projects/pic3.jpg"
                      >
                    </li>
                    <li class="blocks-gallery-item">
                      <img
                        alt=""
                        src="../assets/images/projects/pic4.jpg"
                      >
                    </li>
                    <li class="blocks-gallery-item">
                      <img
                        alt=""
                        src="../assets/images/projects/pic5.jpg"
                      >
                    </li>
                    <li class="blocks-gallery-item">
                      <img
                        alt=""
                        src="../assets/images/projects/pic6.jpg"
                      >
                    </li>
                    <li class="blocks-gallery-item">
                      <img
                        alt=""
                        src="../assets/images/projects/pic7.jpg"
                      >
                    </li>
                  </ul>
                  <p>
                    Cras ac erat sapien. Etiam porta, arcu sed scelerisque dapibus, orci felis tincidunt
                    tellus, bibendum ex velit ac dolor. Aenean auctor, lectus laoreet efficitur dapibus,
                    orci nulla ultrices risus, sed volutpat nisl nulla at felis. Integer ligula risus,
                    ultricies eu velit non, rutrum conse ctetur neque.
                  </p>
                  <p>
                    Nulla ultrices diam at odio malesuada lacinia. Fusce eget posuere purus. Donec
                    accumsan
                    vehicula id imperdiet nulla ornare eu. Orci varius natoque penatibus et magnis dis
                    parturient montes ulus mus.
                  </p>
                  <p>
                    Praesent vehicula neque et augue consectetur placerat. Ut pellentesque euismod sapien
                    eget venena tis. Proin massa lacus, dapibus RouterLink scelerisque RouterLink,
                    molestie sit amet
                    mauris.
                    Cras maximus lectus quis orci feugiat, at tristique velit bibendum. Etiam augue
                    arcu,
                    cursus id egestas ut, viverra at urna.
                  </p>
                  <div class="alignleft w-50 rounded-md overflow-hidden ">
                    <img
                      src="../assets/images/blog/our-blog/pic1.jpg "
                      alt=""
                    >
                  </div>
                  <p>
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                    auctor. Integer posuere erat RouterLink ante venenatis dapibus posuere velit
                    aliquet. Donec ullamcorper nulla non metus auctor fringilla. Maecenas
                    sed diam eget risus varius.
                  </p>
                  <p>
                    Praesent vehicula neque et augue consectetur placerat. Ut
                    pellentesque euismod sapien eget venena tis. Proin massa lacus, dapibus RouterLink
                    scelerisque RouterLink, molestie sit amet mauris. Cras maximus lectus quis orci
                    feugiat, at tristique velit bibendum. Etiam augue arcu, cursus id
                    egestas ut, viverra at urna.
                  </p>
                  <p>
                    Molestie sit amet mauris. Cras maximus lectus quis orci
                    feugiat, at tristique velit bibendum. Etiam augue arcu, cursus id
                    egestas ut, viverra at urna.
                  </p>
                  <h4> Image Block </h4>
                  <p>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
                    sem
                    nec elit. Maecenas faucibus mollis interdum.
                  </p>
                  <figure class="wp-block-image size-large is-style-default">
                    <img
                      src="../assets/images/blog/default/thum2.jpg"
                      alt=""
                    >
                  </figure>
                  <figure class="wp-block-image size-large is-style-default aligncenter">
                    <img
                      src="../assets/images/blog/default/thum1.jpg"
                      alt=""
                    >
                    <figcaption>nd an image with caption</figcaption>
                  </figure>
                  <p>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
                    sem
                    nec elit. Maecenas faucibus mollis interdum.
                  </p>
                  <h4> Cover Image Block </h4>
                  <p>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
                    sem
                    nec elit. Maecenas faucibus mollis interdum.
                  </p>
                  <p>
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected humour,
                    or randomised words which don’t look even slightly believable.
                  </p>
                  <p>
                    If you are going to use RouterLink passage of Lorem Ipsum, you need
                    to be sure there isn’t anything embarrassing hidden in the middle of
                    text. All the Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true generator on
                    the Internet.
                  </p>
                  <p>
                    It uses RouterLink dictionary of over 200 Latin words, combined with RouterLink
                    handful of model sentence structures, to generate Lorem Ipsum which
                    looks reasonable. The generated Lorem Ipsum is therefore always free
                    from repetition, injected humour, or non-characteristic words etc.
                  </p>
                  <div class="clearfix" />
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
                          href="https://twitter.com/"
                          target="_blank"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <RelatedBlogs />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
