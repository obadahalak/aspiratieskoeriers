<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="overlay-secondary-middle bg-img-fix">
    <div class="container">
      <div class="row action-box style-1  align-items-center">
        <div class="col-xl-9 col-lg-8 col-md-8 wow fadeIn">
          <h2 class="title text-white my-2">
            YOU WANT TO SHOWCASE YOUR WEBSITE
          </h2>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-4 text-end wow fadeIn">
          <RouterLink
            to="/contact-us"
            class="btn btn-primary"
          >
            Join Now <i class="fa fa-angle-right m-l10" />
          </RouterLink>
        </div>
      </div>
    </div>
  </section>

  <footer
    id="footer"
    class="site-footer style-1"
  >
    <div class="footer-top">
      <div class="container">
        <div class="footer-info ">
          <div class="row align-items-center">
            <div class="col-xl-5 col-md-4">
              <div class="footer-logo">
                <RouterLink to="/">
                  <img
                    src="../assets/images/logo-white.png"
                    alt=""
                  >
                </RouterLink>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6">
              <div class="icon-bx-wraper left m-b10">
                <div class="icon-lg">
                  <RouterLink
                    to=""
                    class="icon-cell"
                  >
                    <i class="flaticon-email" />
                  </RouterLink>
                </div>
                <div class="icon-content">
                  <p><strong>+91 987-654-3210</strong><br>info@example.com</p>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 col-sm-6">
              <div class="icon-bx-wraper left m-b10">
                <div class="icon-lg">
                  <RouterLink
                    to=""
                    class="icon-cell"
                  >
                    <i class="flaticon-location" />
                  </RouterLink>
                </div>
                <div class="icon-content">
                  <p>1247/Plot No. 39, 15th Phase, Colony, Kkatpally, Hyderabad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-3 col-lg-4 col-sm-6 ">
            <div class="widget widget_about">
              <h5 class="footer-title">
                ABOUT US
              </h5>
              <p>
                Maecenas pellentesque placerat quam, in finibus nisl tincidunt sed. Aliquam magna augue,
                malesuada ut feugiat eget, cursus eget felis.
              </p>
              <div class="dlab-social-icon">
                <ul>
                  <li>
                    <RouterLink
                      class="fab fa-facebook-f"
                      to="https://www.facebook.com"
                      target="_blank"
                    />
                  </li>
                  <li>
                    <RouterLink
                      class="fab fa-instagram"
                      to="https://www.instagram.com"
                      target="_blank"
                    />
                  </li>
                  <li>
                    <RouterLink
                      class="fab fa-twitter"
                      to="https://www.twitter.com"
                      target="_blank"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-2 col-sm-6 ">
            <div class="widget widget_services">
              <h5 class="footer-title">
                OUR LINKS
              </h5>
              <ul>
                <li>
                  <RouterLink to="">
                    Home
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="">
                    About Us
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="">
                    Services
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="">
                    Team
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="">
                    Blog
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-sm-6 ">
            <div class="widget widget_services">
              <h5 class="footer-title">
                OUR SERVICES
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
          <div class="col-xl-3 col-lg-3 col-sm-6 ">
            <div class="widget widget_services">
              <h5 class="footer-title">
                OTHER LINKS
              </h5>
              <ul>
                <li>
                  <RouterLink to="">
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
    <div class="footer-bottom ">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <span class="copyright-text">Copyright © 2023 <RouterLink
              to="https://dexignzone.com"
              target="_blank"
            >DexignZone</RouterLink>. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
    background-image: url('../assets/images/background/bg10.png');
}

section {
    background-image: url('../assets/images/background/bg5.jpg');
    background-size: cover;

}
</style>
