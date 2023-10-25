<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div
    id="respond"
    class="comment-respond style-2"
  >
    <h2
      id="reply-title"
      class="comment-reply-title"
    >
      Leave a Reply
      <small>
        <RouterLink
          id="cancel-comment-reply-link"
          style="display:none;"
          to=""
          rel="nofollow"
        >Cancel
          reply
        </RouterLink>
      </small>
    </h2>
    <div class="dlab-separator style-1 m-b30" />
    <form
      id="commentform"
      class="comment-form m-t30"
      method="post"
    >
      <p class="comment-form-author">
        <label for="author">Name <span class="required">*</span></label>
        <input
          id="author"
          type="text"
          name="Author"
          placeholder="Author"
        >
      </p>
      <p class="comment-form-email">
        <label for="email">Email <span class="required">*</span></label>
        <input
          id="email"
          type="text"
          placeholder="Email"
          name="email"
        >
      </p>
      <p class="comment-form-comment">
        <label for="comment">Comment</label>
        <textarea
          id="comment"
          rows="8"
          name="comment"
          placeholder="Comment"
        />
      </p>
      <p class="form-submit">
        <button
          id="submit"
          type="button"
          class="btn btn-primary"
        >
          Submit Now<i
            class="fa fa-angle-right m-l10"
          />
        </button>
      </p>
    </form>
  </div>
</template>
