import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about-us',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/Faq.vue'),
    },
    {
      path: '/princing-table',
      name: 'princing',
      component: () => import('../views/PrincingeTable.vue'),
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('../views/Team.vue'),
    },
    {
      path: '/team-details',
      name: 'team_detail',
      component: () => import('../views/TeamDetails.vue'),
    },
    {
      path: '/company-history',
      name: 'company_history',
      component: () => import('../views/CompanyHistory.vue'),
    },
    {
      path: '/coming-soon',
      name: 'coming_soon',
      component: () => import('../views/ComingSoon.vue'),
    },
    {
      path: '/error-404',
      name: 'error',
      component: () => import('../views/Error404.vue'),
    },
    {
      path: '/site-down',
      name: 'site_down',
      component: () => import('../views/SiteDowm.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/Services.vue'),
    },
    {
      path: '/services-details',
      name: 'services_details',
      component: () => import('../views/ServicesDetails.vue'),
    },
    {
      path: '/post-standard',
      name: 'post_standard',
      component: () => import('../views/PostStarted.vue'),
    },
    {
      path: '/post-left-sidebar',
      name: 'post_left_sidebar',
      component: () => import('../views/PostLeftSideBar.vue'),
    },
    {
      path: '/post-header-image',
      name: 'post_header_image',
      component: () => import('../views/PostHeaderImage.vue'),
    },
    {
      path: '/post-slide-show',
      name: 'post_slide_show',
      component: () => import('../views/PostSlideShow.vue'),
    },
    {
      path: '/post-side-image',
      name: 'post_side_image',
      component: () => import('../views/PostSideImage.vue'),
    },
    {
      path: '/post-gallery',
      name: 'post_gallery',
      component: () => import('../views/PostGallery.vue'),
    },
    {
      path: '/post-gallery-alt',
      name: 'post_gallery_alt',
      component: () => import('../views/PostGalleryAit.vue'),
    },
    {
      path: '/post-link',
      name: 'post_link',
      component: () => import('../views/PostLink.vue'),
    },
    {
      path: '/post-audio',
      name: 'post_audio',
      component: () => import('../views/PostAudio.vue'),
    },
    {
      path: '/post-video',
      name: 'post_video',
      component: () => import('../views/PostVideo.vue'),
    },
    {
      path: '/post-with-pagination',
      name: 'post_with_pagination',
      component: () => import('../views/PostPagination.vue'),
    },
    {
      path: '/post-open-gutenberg',
      name: 'post_open_gutenberg',
      component: () => import('../views/PostGutenberg.vue'),
    },
    {
      path: '/blog-grid',
      name: 'blog_grid',
      component: () => import('../views/BlogGrid.vue'),
    },
    {
      path: '/large-left-sidebar',
      name: 'large_left_sidebar',
      component: () => import('../views/LargeLeftSidebar.vue'),
    },
    {
      path: '/large-right-sidebar',
      name: 'large_right_sidebar',
      component: () => import('../views/LargeRightSidebar.vue'),
    },
    {
      path: '/blog-details',
      name: 'blog_details',
      component: () => import('../views/BlogDetails.vue'),
    },
    {
      path: '/contact-us',
      name: 'contact_us',
      component: () => import('../views/ContactUs.vue'),
    },
    {
      path: '/home-2',
      name: 'home_2',
      component: () => import('../views/Home2.vue'),
    },
  ],
})

export default router
