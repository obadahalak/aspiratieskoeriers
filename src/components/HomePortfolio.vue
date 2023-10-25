<script setup>
import { ref } from 'vue'

// import image
import { RouterLink } from 'vue-router'
import project_2Pic1 from '../assets/images/projects/project-2/pic1.jpg'
import project_2Pic2 from '../assets/images/projects/project-2/pic2.jpg'
import project_2Pic3 from '../assets/images/projects/project-2/pic3.jpg'
import project_2Pic4 from '../assets/images/projects/project-2/pic4.jpg'
import project_2Pic5 from '../assets/images/projects/project-2/pic5.jpg'
import project_2Pic6 from '../assets/images/projects/project-2/pic6.jpg'

import { useHomeStore } from '../stores/home'

const homeStore = useHomeStore()

const GalleryBlog = ref([
  { img: project_2Pic1, class: 'card-container col-lg-7 col-md-7 col-sm-12 web_design' },
  { img: project_2Pic2, class: 'card-container col-lg-5 col-md-5 col-sm-12 web_development' },
  {
    img: project_2Pic5,
    class: 'col-lg-7 col-md-12 col-sm-12',
    blogImage: [
      { img: project_2Pic3, class: 'card-container col-lg-6 col-md-6 col-sm-12 branding' },
      { img: project_2Pic4, class: 'card-container col-lg-6 col-md-6 col-sm-12 branding' },
    ],
  },
  { img: project_2Pic6, class: 'card-container col-lg-5 col-md-12 col-sm-12 seo' },
])

function initGalleryBlog() {
  GalleryBlog.value = [
    { img: project_2Pic1, class: 'card-container col-lg-7 col-md-7 col-sm-12 web_design', name: homeStore.findText(658), by: homeStore.findText(659) },
    { img: project_2Pic2, class: 'card-container col-lg-5 col-md-5 col-sm-12 web_development', name: homeStore.findText(660), by: homeStore.findText(661) },
    {
      img: project_2Pic5,
      class: 'col-lg-7 col-md-12 col-sm-12',
      name: homeStore.findText(662),
      by: homeStore.findText(663),
      blogImage: [
        {
          img: project_2Pic3,
          class: 'card-container col-lg-6 col-md-6 col-sm-12 branding',
          name: homeStore.findText(664),
          by: homeStore.findText(665),
        },
        {
          img: project_2Pic4,
          class: 'card-container col-lg-6 col-md-6 col-sm-12 branding',
          name: homeStore.findText(666),
          by: homeStore.findText(667),
        },
      ],
    },
    {
      img: project_2Pic6,
      class: 'card-container col-lg-5 col-md-12 col-sm-12 seo',
      name: homeStore.findText(668),
      by: homeStore.findText(669),
    },
  ]
}

onMounted(() => initGalleryBlog())
const thumbsGallery = ref([
  { img: project_2Pic1 },
  { img: project_2Pic2 },
  { img: project_2Pic5 },
  { img: project_2Pic6 },
  { img: project_2Pic3 },
  { img: project_2Pic4 },
])

const imageLarge = [project_2Pic1, project_2Pic2, project_2Pic5, project_2Pic6, project_2Pic3, project_2Pic4]

const indexRef = ref()

function lightBox(index) {
  indexRef.value = index
  document.querySelector('.light-box-container').classList.add('light-box')
  document.querySelector('.light-box-container img').setAttribute('src', imageLarge[indexRef.value])
  document.querySelectorAll('.thumb-image')[index].classList.add('active')
}
function lightBox2(ind) {
  indexRef.value = ind + 4
  document.querySelector('.light-box-container').classList.add('light-box')
  document.querySelector('.light-box-container img').setAttribute('src', imageLarge[indexRef.value])
  document.querySelectorAll('.thumb-image')[ind + 4].classList.add('active')
}
function closeLightBox() {
  document.querySelector('.light-box-container').classList.remove('light-box')
}

function nextSlideHandler() {
  const thumbImage = document.querySelectorAll('.thumb-image')
  const layoutImage = document.querySelectorAll('.layout-image')
  const num = indexRef.value < 5 ? indexRef.value += 1 : indexRef.value = 0
  document.querySelector('.light-box-container img').setAttribute('src', imageLarge[num])
  thumbImage.forEach((ell) => {
    ell.classList.remove('active')
    thumbImage[num].classList.add('active')
  })
  for (let i = 0; i < layoutImage.length; i++)
    layoutImage[i].classList.remove('smooth')

  layoutImage.forEach((ell) => {
    ell.setAttribute('style', 'opacity:0')
    setTimeout(() => {
      ell.classList.add('smooth')
    }, 100)
  })
}
function prevSlideHandler() {
  const thumbImage = document.querySelectorAll('.thumb-image')
  const layoutImage = document.querySelectorAll('.layout-image')
  const num = indexRef.value > 0 ? indexRef.value -= 1 : indexRef.value = 5
  document.querySelector('.light-box-container img').setAttribute('src', imageLarge[num])
  thumbImage.forEach((ell) => {
    ell.classList.remove('active')
    thumbImage[num].classList.add('active')
  })
  for (let i = 0; i < layoutImage.length; i++)
    layoutImage[i].classList.remove('smooth')

  layoutImage.forEach((ell) => {
    ell.setAttribute('style', 'opacity:0')
    setTimeout(() => {
      ell.classList.add('smooth')
    }, 100)
  })
}

// thumb img events
function thumbImages(ind) {
  const thumbImage = document.querySelectorAll('.thumb-image')
  const layoutImage = document.querySelectorAll('.layout-image')
  document.querySelector('.light-box-container img').setAttribute('src', imageLarge[ind])

  thumbImage.forEach((ell) => {
    ell.classList.remove('active')
    thumbImage[ind].classList.add('active')
  })

  for (let i = 0; i < layoutImage.length; i++)
    layoutImage[i].classList.remove('smooth')

  layoutImage.forEach((ell) => {
    ell.setAttribute('style', 'opacity:0')
    setTimeout(() => {
      ell.classList.add('smooth')
    }, 100)
  })
}

function CloseGallery() {
  document.querySelector('.light-box-container').classList.remove('light-box')
}
</script>

<template>
  <div
    v-if="GalleryBlog.length > 0"
    class="light-box-container"
  >
    <div
      class="lauyot"
      @click="closeLightBox"
    />
    <nav>
      <label
        for=""
        @click="CloseGallery"
      >&times;</label>
    </nav>
    <img
      class="layout-image"
      :src="project_2Pic1"
      alt=""
    >
    <div class="lg-actions">
      <button
        class="lg-next lg-icon"
        @click="prevSlideHandler"
      >
        <i class="ti-arrow-left" />
      </button>
      <button
        class="lg-prev lg-icon"
        @click="nextSlideHandler"
      >
        <i class="ti-arrow-right" />
      </button>
    </div>
    <div class="light-box-thumb">
      <div v-for="image, ind in thumbsGallery">
        <img
          :ref="boxContainerImg"
          :key="ind"
          class="thumb-image"
          :src="image.img"
          alt=""
          @click="thumbImages(ind)"
        >
      </div>
    </div>
  </div>

  <section class="content-inner-2">
    <div class="container">
      <div class="section-head style-1 text-center">
        <h6 class="sub-title text-primary m-b15">
          {{ homeStore.findText(656) }}
        </h6>
        <h2 class="title">
          {{ homeStore.findText(657) }}
        </h2>
      </div>
      <div class="clearfix">
        <div class="row lightgallery">
          <div
            v-for="item, ind in GalleryBlog"
            :class="item.class"
          >
            <div class="row">
              <div
                v-for="data, index in item.blogImage"
                :class="data.class"
              >
                <div class="dlab-box dlab-overlay-box style-2 m-b30 overlay-shine">
                  <div class="dlab-media dlab-img-overlay1">
                    <img
                      :src="data.img"
                      alt=""
                    >
                    <span
                      class="lightimg"
                      @click="lightBox2(index)"
                    >
                      <i class="la la-plus" />
                    </span>
                  </div>
                  <div class="dlab-info">
                    <h5 class="title">
                      <RouterLink to="/services-details">
                        {{ data.name }}
                      </RouterLink>
                    </h5>
                    <p class="post-author">
                      By <RouterLink to="/services-details">
                        {{ data.by }}
                      </RouterLink>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="dlab-box dlab-overlay-box style-2 m-b30 overlay-shine">
              <div class="dlab-media dlab-img-overlay1">
                <img
                  :src="item.img"
                  alt=""
                >
                <span
                  class="lightimg"
                  @click="lightBox(ind)"
                >
                  <i class="la la-plus" />
                </span>
              </div>
              <div class="dlab-info">
                <h5 class="title">
                  <RouterLink to="/services-details">
                    {{ item.name }}
                  </RouterLink>
                </h5>
                <p class="post-author">
                  By <RouterLink to="/services-details">
                    {{ item.by }}
                  </RouterLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.content-inner-2 {
    background-image: url('../assets/images/background/bg17.png');
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
}

.light-box-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #000000cb;
    transform: scale(0);
    transition: all .1s linear;
}

.lauyot {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
}

.light-box {
    transform: scale(1);
    z-index: 99999 !important;

}

.light-box-container img {
    width: 40%;
    object-fit: cover;
    z-index: 5;
}

.smooth {
    transition: .3s linear;
    opacity: 1 !important;
}

.lg-actions button {
    background-color: rgba(0, 0, 0, .45);
    border-radius: 2px;
    color: #ffffff;
    cursor: pointer;
    display: grid;
    place-items: center;
    font-size: 2vmax;
    padding: 0 10px;
    position: absolute;
    z-index: 1080;
    z-index: 5;
    border: none;
    outline: 0;
    padding: 10px 15px ;
}

/* .lg-actions button strong {
    font-weight: bolder;
    color: white;
} */

.lg-next {
    position: absolute;
    left: 5vmax;
    top: 50%;
    transform: translateY(-50%);
}

.lg-prev {
    position: absolute;
    right: 5vmax;
    top: 50%;
    transform: translateY(-50%);
}

/* thubms */
.light-box-thumb {
    position: absolute;
    bottom: 10px;
    width: 100%;
    display: flex;
    overflow-x: auto;
    gap: 5px;
    z-index: 9;
    justify-content: first baseline;
}

.light-box-thumb div {
    width: 7%;
    height: 5.5vmax;
    overflow: hidden;
    cursor: pointer;
}

.light-box-thumb div img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: 2px solid white;
}

.light-box-thumb .active {
    border: 2px solid rgba(190, 54, 133, 0.856);
}

.light-box-container nav {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 60px;
    background-color: rgba(0, 0, 0, 0.438);
    display: flex;
    align-items: center;
    justify-content: end;
    padding-right: 30px;
    font-size: 35px;
    color: white;
    gap: 20px;
}

.light-box-container nav label {
    cursor: pointer;
}

@media screen and (max-width: 2000px) {
    .light-box-container img {
        height: 20vmax;
        object-fit: cover;
    }

}

@media screen and (max-width: 1500px) {
    .light-box-container img {
        height: 30vmax;
        object-fit: cover;
    }

}

@media screen and (max-width:1024px) {
    .lg-actions button {
        font-size: 2.5vmax;
    }
}

@media screen and (max-width:991px) {
    .light-box-container img {
        width: 60%;
        height: 35vmax;
    }
    .lg-actions button{
        padding: 5px 8px;
    }

}

@media screen and (max-width:768px) {
    .light-box-container img {
        width: 70%;
        height: 40vmax;
    }

    .light-box-thumb div {
        width: 10%;
        height: 7vmax;
    }

}

@media screen and (max-width:600px) {
    .light-box-container img {
        width: 90%;
    }

    .light-box-thumb {
        overflow-x: scroll;
    }

    .light-box-thumb div {
        width: 5rem;
        height: 6vmax;
    }

}
</style>
