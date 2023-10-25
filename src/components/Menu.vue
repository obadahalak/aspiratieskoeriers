<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import router from '../router'

const MenuItems = [
  { menu: 'Home', link: '/' },
  {
    menu: 'Pages',
    class: 'sub-menu-down',
    submenu: [
      { submenulink: 'About Us', link: '/about-us' },
      { submenulink: 'Faq', link: '/faq' },
      { submenulink: 'Princing Table', link: '/princing-table' },
      { submenulink: 'Team', link: '/team' },
      { submenulink: 'Team Details', link: '/team-details' },
      { submenulink: 'Company History', link: '/company-history' },
      { submenulink: 'Coming Soon', link: '/coming-soon' },
      { submenulink: 'Error 404', link: '/error-404' },
      { submenulink: 'Site Down', link: '/site-down' },
    ],
  },
  {
    menu: 'Services',
    link: '',
    class: 'sub-menu-down',
    submenu: [
      { submenulink: 'Services', link: '/services' },
      { submenulink: 'Services Details', link: '/services-details' },
    ],
  },
  {
    menu: 'Post Layout',
    link: '',
    class: 'sub-menu-down',
    submenu: [
      { submenulink: 'Post Standard', link: '/post-standard' },
      { submenulink: 'Post Left Sidebar', link: '/post-left-sidebar' },
      { submenulink: 'Post Header Image', link: '/post-header-image' },
      { submenulink: 'Post Slide Show', link: '/post-slide-show' },
      { submenulink: 'Post Side Image', link: '/post-side-image' },
      { submenulink: 'Post Gallery', link: '/post-gallery' },
      { submenulink: 'Post Gallery Alt', link: '/post-gallery-alt' },
      { submenulink: 'Post Link', link: '/post-link' },
      { submenulink: 'Post Audio', link: '/post-audio' },
      { submenulink: 'Post Video', link: '/post-video' },
      { submenulink: 'Post With Pagination', link: '/post-with-pagination' },
      { submenulink: 'Post Open Gutenberg', link: '/post-open-gutenberg' },
    ],
  },
  {
    menu: 'Blog',
    link: '',
    class: 'sub-menu-down',
    submenu: [
      { submenulink: 'Blog Grid', link: '/blog-grid' },
      { submenulink: 'Large Left Sidebar', link: '/large-left-sidebar' },
      { submenulink: 'Large Right Sidebar', link: '/large-right-sidebar' },
      { submenulink: 'Blog Details', link: '/blog-details' },
    ],
  },
  { menu: 'Contact Us', link: '/contact-us' },
]

const addActive = ref()
const subMenuActive = ref()

router.afterEach(() => {
  const pathName = router.currentRoute.value.path
  MenuItems.map((ell) => {
    if (ell?.link === pathName)
      addActive.value = ell.menu

    ell?.submenu?.map((ele) => {
      if (ele.link === pathName) {
        addActive.value = ell.menu
        subMenuActive.value = ell.submenu
      }
    })
  })
})

function openNavBtn(index: number) {
  const num = index - 1
  document.querySelectorAll('.sub-menu-down').forEach((Ele, ind) => {
    Ele.classList.toggle('open')
    if (num !== ind)
      Ele.classList.remove('open')
  })
}
</script>

<template>
  <ul
    v-for="item, index in MenuItems"
    :key="index"
    class="nav navbar-nav navbar show"
  >
    <li
      v-if="item.class === 'sub-menu-down'"
      :class="`sub-menu-down ${item.menu === addActive ? 'active' : ''}`"
    >
      <RouterLink
        to=""
        @click="openNavBtn(index)"
      >
        <span> {{ item.menu }}</span>
      </RouterLink>
      <ul
        v-if="item.class === 'sub-menu-down'"
        class="sub-menu"
      >
        <li
          v-for="subItem, ind in item.submenu"
          :key="ind"
          :class="subItem.submenulink === subMenuActive ? 'active' : 'active'"
        >
          <RouterLink :to="`${subItem.link}`">
            {{ subItem.submenulink }}
          </RouterLink>
        </li>
      </ul>
    </li>
    <li
      v-else
      :class="item.menu === addActive ? 'active' : ''"
    >
      <RouterLink :to="`${item.link}`">
        <span> {{ item.menu }}</span>
      </RouterLink>
    </li>
  </ul>
</template>
