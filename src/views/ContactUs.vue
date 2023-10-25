<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import CommonBanner from '../elements/CommonBanner.vue'
import bgimg from '../assets/images/banner/bnr1.jpg'
import background from '../assets/images/background/bg2.png'
import ClientLogo from '../elements/ClientLogo.vue'

import { useHomeStore } from '../stores/home'

const detaisCard = ref([
  { icon: 'las la-phone-volume', title: 'Call Now', data: '123 456 7890', data2: '987 654 3210' },
  { icon: 'las la-map-marker', title: 'Location', data: '1247/Plot No. 39, 15th Phase, Colony, Kukatpally, Hyderabad', data2: '987 654 3210' },
  { icon: 'las la-envelope-open', title: 'Email Now', data: 'info@gmail.com', data2: 'Services@gmail.com' },
])

// const homeStore = useHomeStore()

// onMounted(() => useHomeStore().home())
</script>

<template>
  <!-- {{ homeStore.findText(700) }} -->

  <div class="page-content bg-white">
    <CommonBanner
      :image="bgimg"
      title="Get A Quote"
    />
    <div
      class="content-inner-2"
      :style="`background-image: url(${background}); background-repeat: no-repeat; background-size:100%;`"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 m-b60">
            <div class="map-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14448.884443175983!2d75.81853095!3d25.128214449999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sin!4v1615281171136!5m2!1sen!2sin"
                height="570"
                style="border:0; width:100%; vertical-align: middle;"
                allowfullscreen=""
                loading="lazy"
              />
            </div>
          </div>
          <div class="col-lg-6 m-b30 ">
            <form
              class="dlab-form dzForm"
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
              <div class="row">
                <div class="col-sm-6">
                  <div class="input-group">
                    <input
                      name="dzFirstName"
                      required
                      type="text"
                      class="form-control"
                      placeholder="First Name"
                    >
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="input-group">
                    <input
                      name="dzLastName"
                      type="text"
                      class="form-control"
                      placeholder="Last Name"
                    >
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="input-group">
                    <input
                      name="dzEmail"
                      required
                      type="text"
                      class="form-control"
                      placeholder="Email Address"
                    >
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="input-group">
                    <input
                      name="dzPhoneNumber"
                      required
                      type="text"
                      class="form-control"
                      placeholder="Phone No."
                    >
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="input-group">
                    <input
                      name="dzOther[project_title]"
                      required
                      type="text"
                      class="form-control"
                      placeholder="Project Title"
                    >
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="input-group">
                    <select
                      name="dzOther[choose_service]"
                      class="form-control"
                    >
                      <option selected>
                        Choose Service
                      </option>
                      <option value="1">
                        Web Development
                      </option>
                      <option value="2">
                        Web Design
                      </option>
                      <option value="3">
                        Strategy & Research
                      </option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="input-group">
                    <textarea
                      name="dzMessage"
                      required
                      class="form-control"
                      placeholder="Message"
                    />
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="input-group">
                    <div
                      class="g-recaptcha"
                      data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                      data-callback="verifyRecaptchaCallback"
                      data-expired-callback="expiredRecaptchaCallback"
                    />
                    <input
                      class="form-control d-none"
                      style="display:none;"
                      data-recaptcha="true"
                      required
                      data-error="Please complete the Captcha"
                    >
                  </div>
                </div>
                <div class="col-sm-12">
                  <button
                    name="submit"
                    type="submit"
                    value="Submit"
                    class="btn btn-primary gradient border-0 rounded-xl btn-block"
                  >
                    Submit Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="content-inner-2">
      <div class="container">
        <div class="row">
          <div
            v-for="item, ind in detaisCard"
            class="col-lg-4 col-md-4"
          >
            <div class="icon-bx-wraper style-9 m-md-b60 center">
              <div class="icon-bx-sm radius gradient">
                <RouterLink
                  to=""
                  class="icon-cell text-white"
                >
                  <i :class="item.icon" />
                </RouterLink>
              </div>
              <div class="icon-content">
                <h4 class="dlab-title">
                  {{ item.title }}
                </h4>
                <p>{{ item.data }}</p>
                <p>{{ item.data2 }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ClientLogo />
  </div>
</template>
