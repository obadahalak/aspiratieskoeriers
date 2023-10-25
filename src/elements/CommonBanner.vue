<script setup lang="ts">
import { RouterLink } from 'vue-router'

const props = withDefaults(defineProps<{
  title: string
  image: string
  home?: string
}>(), { home: 'Home' })
</script>

<template>
  <div
    class="dlab-bnr-inr overlay-gradient-dark text-center"
    :style="`background-image: url(${props.image});`"
  >
    <div class="container">
      <div class="dlab-bnr-inr-entry">
        <h1>{{ props.title }}</h1>
        <nav
          aria-label="breadcrumb"
          class="breadcrumb-row"
        >
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <RouterLink to="/">
                {{ props.home }}
              </RouterLink>
            </li>
            <li
              class="breadcrumb-item active"
              aria-current="page"
            >
              {{ title }}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
