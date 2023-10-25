<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import router from '../router'
import ChangeLanguage from '../base/ChangeLanguage'
import Menu from './Menu.vue'
import { useHomeStore } from '../stores/home'

const activeMenu = ref()

window.addEventListener('scroll', () => {
  const scrollValue = window.scrollY
  activeMenu.value = scrollValue
})
let currentLang = localStorage.getItem('lang').concat('.png')
const url = new URL(`../assets/icons/${currentLang}`, import.meta.url).pathname

const TogglNav = ref(false)
const path = ref()

const pahtName = ['/', '/home-2']

router.afterEach(() => {
  path.value = router.currentRoute.value.path
  if (pahtName.includes(window.location.pathname))
    document.querySelector('.site-header')?.classList.add('header-transparent')

  else
    document.querySelector('.site-header')?.classList.remove('header-transparent')
})
function chnageLang(lan) {
  localStorage.setItem('lang', lan)
  currentLang = localStorage.getItem('lang').concat('.png')
  const url = new URL(`../assets/icons/${currentLang}`, import.meta.url).pathname

  document.getElementById('lang-img').src = url
}
const data = useHomeStore().data
onMounted(() => {

})
</script>

<template>
  <header class="site-header header  mo-left">
    <!-- Main Header -->
    <div :class="`text-black sticky-header main-bar-wraper navbar-expand-lg ${activeMenu > 120 ? 'is-fixed' : ''}`">
      <div class="main-bar clearfix ">
        <div class="container clearfix">
          <!-- Website Logo -->
          <div class="logo-header logo-dark">
            <RouterLink to="/">
              <img
                src="../assets/images/logo.png"
                alt=""
              >
            </RouterLink>
          </div>
          <div
            v-if="router.currentRoute.value.path === '/'"
            class="logo-header logo-white"
          >
            <RouterLink to="/">
              <img
                src="../assets/images/logo.png"
                alt=""
              >
            </RouterLink>
          </div>
          <div
            v-if="router.currentRoute.value.path === '/large-left-sidebar'"
            class="logo-header logo-white"
          >
            <RouterLink to="/">
              <img
                src="../assets/images/logo-white.png"
                alt=""
              >
            </RouterLink>
          </div>
          <!-- Nav Toggle Button -->
          <button
            :class="`navbar-toggler collapsed navicon justify-content-end ${TogglNav === true ? 'open' : ''}`"
            type="button"
            @click="TogglNav === false ? TogglNav = true : TogglNav = false"
          >
            <span />
            <span />
            <span />
          </button>
          <!-- Extra Nav -->
          <div class="extra-nav">
            <div class="extra-cell">
              <RouterLink
                to="/contact-us"
                class="btn btn-primary gradient rounded-xl"
              >
                Get A Quote
              </RouterLink>
            </div>
            <!-- change lang
            <div class="extra-cell">
              <div class=" dropdown">
                <button
                  type="button"
                  class="btn p-3 btn-primary dropdown-toggle gradient rounded-xl ms-2"
                  data-bs-toggle="dropdown"
                >
                  <img
                    id="lang-img"
                    class="rounded-circle me-2"
                    width="30"
                    :src="`${url}`"

                    alt="ff"
                  >
                  change language
                </button>
                <ul class="dropdown-menu ">
                  <li

                    class="d-flex p-2"
                    @click="
                      chnageLang('br')"
                  >
                    <img
                      class="rounded-circle me-2"
                      width="30"
                      src="../assets/icons/br.png"
                      alt=""
                    >
                    <span>britain</span>
                  </li>
                  <li
                    class="d-flex p-2"
                    @click="
                      chnageLang('ne')"
                  >
                    <img
                      class="rounded-circle me-2 "
                      width="30"
                      src="../assets/icons/ne.png"
                      alt=""
                    >
                    <span>netherlands</span>
                  </li>
                  <li
                    class="d-flex p-2"
                    @click="
                      chnageLang('ar')"
                  >
                    <img
                      class="rounded-circle me-2"
                      width="30"
                      src="../assets/icons/ar.png"
                      alt=""
                    >
                    <span>saudi arabia</span>
                  </li>
                </ul>
              </div>
            </div> -->

            <!--  -->
          </div>

          <div
            id="navbarNavDropdown"
            :class="`header-nav navbar-collapse collapse justify-content-end ${TogglNav === true ? 'show' : ''}`"
          >
            <div class="logo-header logo-dark">
              <RouterLink to="/">
                <img
                  src="../assets/images/logo.png"
                  alt=""
                >
              </RouterLink>
            </div>

            <Menu />

            <div class="dlab-social-icon">
              <ul>
                <li>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/"
                  ><i
                    class="fab fa-facebook-f"
                  /></a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://twitter.com/"
                  ><i class="fab fa-twitter" /></a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/"
                  ><i
                    class="fab fa-linkedin-in"
                  /></a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/"
                  ><i
                    class="fab fa-instagram"
                  /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
