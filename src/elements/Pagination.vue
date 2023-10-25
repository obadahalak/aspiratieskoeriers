<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav aria-label="Blog Pagination">
    <ul class="pagination text-center p-t20">
      <li class="page-item">
        <RouterLink
          class="page-link prev"
          to=""
        >
          Prev
        </RouterLink>
      </li>
      <li class="page-item">
        <RouterLink
          class="page-link active"
          to=""
        >
          1
        </RouterLink>
      </li>
      <li class="page-item">
        <RouterLink
          class="page-link"
          to=""
        >
          2
        </RouterLink>
      </li>
      <li class="page-item">
        <RouterLink
          class="page-link"
          to=""
        >
          3
        </RouterLink>
      </li>
      <li class="page-item">
        <RouterLink
          class="page-link next"
          to=""
        >
          Next
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
