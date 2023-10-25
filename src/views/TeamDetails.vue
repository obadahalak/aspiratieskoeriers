<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import CommonBanner from '../elements/CommonBanner.vue'
import bgImg from '../assets/images/banner/bnr4.jpg'
import ClientLogo from '../elements/ClientLogo.vue'
import backgroundImg from '../assets/images/background/bg18.png'
import { useTeamDetail } from '../stores/teamDetail'

const teamsStore = useTeamDetail()
const num = ref(1)

const AddressDetails = ref([])

function navBtn(val) {
  num.value = val
}
function initAddressDetails() {
  AddressDetails.value = [
    {
      icon: 'las la-map-marker',
      heading: teamsStore.findText(794),
      title: teamsStore.findText(795),
    },
    {
      icon: 'las la-phone',
      heading: teamsStore.findText(796),
      title: teamsStore.findText(801),
    },
    {
      icon: 'lab la-skype',
      heading: teamsStore.findText(797),
      title: teamsStore.findText(798),
    },
    {
      icon: 'las la-envelope',
      heading: teamsStore.findText(799),
      title: teamsStore.findText(800),
    },
  ]
}
onMounted(() => {
  teamsStore.teams().then(() =>
    initAddressDetails(),
  )
})
</script>

<template>
  <CommonBanner
    :image="bgImg"
    :home="teamsStore.findText(776)"
    :title="teamsStore.findText(775)"
  />
  <section
    class="content-inner"
    :style="`background-image: url(${backgroundImg}); background-repeat: no-repeat;`"
  >
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-md-12">
          <div class="dlab-team style-3 mb-5">
            <div class="dlab-media">
              <RouterLink to="">
                <img
                  src="../assets/images/team-detail/teacher_f2.jpg"
                  alt="image"
                >
              </RouterLink>
              <div class="overlay-content">
                <ul class="dlab-social-icon">
                  <li>
                    <a
                      :href="teamsStore.findText(807)"
                      class="fab fa-facebook-f"
                    />
                  </li>
                  <li>
                    <a
                      :href="teamsStore.findText(808)"
                      class="fab fa-instagram"
                    />
                  </li>
                  <li>
                    <a
                      :href="teamsStore.findText(809)"
                      class="fab fa-twitter"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="about-media">
            <div class="dz-content">
              <div class="row media-portion">
                <div
                  v-for="item, ind in AddressDetails"
                  :key="ind"
                  class="col-md-6"
                >
                  <div class="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
                    <div class="icon-bx-sm bg-white">
                      <RouterLink
                        to=""
                        class="icon-cell text-primary"
                      >
                        <i :class="item.icon" />
                      </RouterLink>
                    </div>
                    <div class="icon-content">
                      <h5 class="dlab-title m-b10">
                        {{ item.heading }}:
                      </h5>
                      <p>{{ item.title }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-md-12">
          <div class="section-head style-1">
            <h6 class="sub-title text-primary m-b15">
              {{ teamsStore.findText(777) }}
            </h6>
            <h3 class="title m-b20">
              {{ teamsStore.findText(778) }}
            </h3>
            <p class="text m-b20">
              {{ teamsStore.findText(802) }}
            </p>
            <p class="text m-b50">
              {{ teamsStore.findText(803) }}
            </p>
          </div>
          <div class="details-tabs">
            <ul
              id="myTab"
              class="nav nav-tabs m-b40"
            >
              <li class="nav-item">
                <button
                  id="Skills-tab"
                  :class="`nav-link ${num === 1 ? 'active' : ''}`"
                  type="button"
                  @click="navBtn(1)"
                >
                  {{ teamsStore.findText(780) }}
                </button>
              </li>
              <li class="nav-item">
                <button
                  id="Biography-tab"
                  :class="`nav-link ${num === 2 ? 'active' : ''}`"
                  type="button"
                  @click="navBtn(2)"
                >
                  {{ teamsStore.findText(781) }}
                </button>
              </li>
              <li class="nav-item">
                <button
                  id="Send-message-tab "
                  :class="`nav-link ${num === 3 ? 'active' : ''}`"
                  type="button"
                  @click="navBtn(3)"
                >
                  {{ teamsStore.findText(782) }}
                </button>
              </li>
            </ul>
            <div
              id="myTabContent"
              class="tab-content"
            >
              <div
                id="Skills"
                :class="`tab-pane fade ${num === 1 ? 'show active' : ''}`"
                role="tabpanel"
              >
                <div class="wpb_wrapper">
                  <ul class="list-check primary m-b30">
                    <li>{{ teamsStore.findText(783) }}</li>
                    <li> {{ teamsStore.findText(784) }}</li>
                    <li> {{ teamsStore.findText(785) }}</li>
                    <li>{{ teamsStore.findText(786) }}</li>
                    <li>{{ teamsStore.findText(787) }}</li>
                    <li>{{ teamsStore.findText(788) }}</li>
                  </ul>
                </div>
              </div>
              <div
                id="Biography"
                :class="`tab-pane fade ${num === 2 ? 'show active' : ''}`"
              >
                <div class="wpb_wrapper">
                  <p>
                    {{ teamsStore.findText(804) }}
                  </p>
                  <p>
                    {{ teamsStore.findText(805) }}
                  </p>
                  <p>
                    {{ teamsStore.findText(806) }}
                  </p>
                </div>
              </div>
              <div
                id="Send-message"
                :class="`tab-pane fade ${num === 3 ? 'show active' : ''}`"
              >
                <form
                  class="wpb_wrapper dlab-form dzForm"
                  method="POST"
                  action="script/contact_smtp.php"
                >
                  <div class="dzFormMsg" />
                  <input
                    type="hidden"
                    class="form-control"
                    name="dzToDo"
                    value="Contact"
                  >
                  <input
                    type="hidden"
                    class="form-control"
                    name="reCaptchaEnable"
                    value="0"
                  >
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="input-group">
                        <input
                          name="dzName"
                          type="text"
                          required
                          class="form-control"
                          :placeholder="teamsStore.findText(790)"
                        >
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-group">
                        <input
                          name="dzEmail"
                          type="text"
                          required
                          class="form-control"
                          :placeholder="teamsStore.findText(791)"
                        >
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="input-group">
                        <textarea
                          name="dzMessage"
                          required
                          class="form-control"
                          :placeholder="teamsStore.findText(792)"
                        />
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <button
                        name="submit"
                        type="button"
                        value="Submit"
                        class="btn btn-lg gradient btn-primary"
                      >
                        {{ teamsStore.findText(793) }}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <ClientLogo />
</template>
