<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  image: string
  title: string
  title2: string
}>()
</script>

<template>
  <div
    class="dlab-bnr-inr overlay-primary-dark"
    :style="`background-image: url(${image});`"
  >
    <div class="container">
      <div class="dlab-bnr-inr-entry">
        <h1>{{ title }}</h1>
        <nav
          aria-label="breadcrumb"
          class="breadcrumb-row"
        >
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <RouterLink to="/">
                Home
              </RouterLink>
            </li>
            <li
              class="breadcrumb-item active"
              aria-current="page"
            >
              {{ title2 }}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
