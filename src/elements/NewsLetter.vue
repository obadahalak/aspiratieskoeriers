<script setup>
import bgimg from '../assets/images/background/bg12.png'
</script>

<template>
  <section
    class="content-inner-3"
    :style="`background-image: url(${bgimg}), var(--gradient-sec); background-size: cover, 200%; background-repeat: no-repeat;`"
  >
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-xl-6 col-lg-8 col-md-9">
          <div class="section-head style-3 text-white">
            <h2 class="title">
              Subscribe To Us !
            </h2>
            <p>
              Donec ut mattis orci. In sit amet posuere urna, eget consectetur purus. Donec ex tortor,
              consectetur nec eros condimentum, tincidunt facilisis est.
            </p>
          </div>
          <div class="dlab-subscribe style-2 max-w500 m-auto">
            <form
              class="dzSubscribe"
              action="script/mailchamp.php"
              method="post"
            >
              <div class="dzSubscribeMsg" />
              <div class="form-group m-b30">
                <div class="input-group mb-0">
                  <input
                    name="dzEmail"
                    required="required"
                    type="email"
                    class="form-control"
                    placeholder="Email Address"
                  >
                  <div class="input-group-addon">
                    <button
                      name="submit"
                      value="Submit"
                      type="submit"
                      class="btn gradient shadow btn-primary"
                      @click="(e) => { e.preventDefault() }"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
