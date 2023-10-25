<script setup>
import bgimg from '../assets/images/background/bg1.jpg'
</script>

<template>
  <div class="page-content bg-white">
    <div class="content-block">
      <div
        class="section-full bg-white page-down overlay-black-dark"
        :style="`background-image:url(${bgimg}); background-size:cover; background-position:center;`"
      >
        <div class="container-fluid">
          <div class="pagedown-title">
            <img
              src="../assets/images/vlc.png"
              alt=""
            >
            <h1>Site Is Down <br>For Maintenance</h1>
            <p>This is the Technical Problems Page. <br>Or any other page.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
