<script setup>
import { RouterLink } from 'vue-router'
import bgimg from '../assets/images/background/bg4.png'
</script>

<template>
  <footer
    id="footer"
    class="site-footer style-2"
    :style="`background-image: url(${bgimg});`"
  >
    <div class="container">
      <div class="dlab-subscribe style-1">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h2 class="title">
              Subscribe To Our Newsletter
            </h2>
          </div>
          <div class="col-lg-6">
            <form
              class="dzSubscribe"
              method="post"
            >
              <div class="dzSubscribeMsg" />
              <div class="form-group">
                <div class="input-group shadow">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Your Email Address"
                  >
                  <div class="input-group-addon">
                    <button
                      name="submit"
                      type="button"
                      class="btn btn-primary gradient"
                      @click="(e) => { e.preventDefault() }"
                    >
                      <i class="las la-paper-plane scale4" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-lg-4 col-sm-6 wow fadeIn">
            <div class="widget widget_about">
              <div class="footer-logo">
                <RouterLink to="/">
                  <img
                    src="../assets/images/logo-white.png"
                    alt=""
                  >
                </RouterLink>
              </div>
              <div class="widget widget_getintuch">
                <ul>
                  <li>
                    <i class="fa fa-phone gradient" />
                    <span>+91 123-456-7890<br>+91 987-654-3210</span>
                  </li>
                  <li>
                    <i class="fa fa-envelope gradient" />
                    <span>info@example.com <br>services@gmail.com</span>
                  </li>
                  <li>
                    <i class="fas fa-map-marker-alt gradient" />
                    <span>Demo Address #8901 Chi Minh City, Vietnam</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-2 col-sm-6 wow fadeIn">
            <div class="widget widget_services">
              <h5 class="footer-title">
                Our links
              </h5>
              <ul>
                <li>
                  <RouterLink to="/">
                    Home
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/about-us">
                    About Us
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/services">
                    Services
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/team">
                    Team
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/blog-grid">
                    Blog
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-sm-6 wow fadeIn">
            <div class="widget widget_services">
              <h5 class="footer-title">
                Our Services
              </h5>
              <ul>
                <li>
                  <RouterLink to="">
                    Strategy & Research
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="">
                    Web Development
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="">
                    Web Solution
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="">
                    Digital Marketing
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="">
                    App Design
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-sm-6 wow fadeIn">
            <div class="widget widget_services">
              <h5 class="footer-title">
                Other links
              </h5>
              <ul>
                <li>
                  <RouterLink to="/faq">
                    FAQ
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="">
                    Portfolio
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="">
                    Privacy Policy
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="">
                    Terms & Conditions
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="">
                    Support
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer bottom part -->
    <div class="footer-bottom">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-7 text-start">
            <span class="copyright-text">Copyright © 2023 <a
              href="https://dexignzone.com/"
              target="_blank"
            >DexignZone</a>. All rights reserved.</span>
          </div>
          <div class="col-lg-6 col-md-5 text-end">
            <div class="dlab-social-icon">
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
    </div>
  </footer>
</template>
