<template>
  <div class="review">
    <div class="review__heading">
      <div class="review__avatar">
        <img loading="lazy" :src="$api(review.avatar.formats.thumbnail.url)" />
      </div>
      <div class="review__meta">
        <span class="review__date">{{ review.date }}</span>
        <span class="review__reviewer">{{ review.reviewer }}</span>
      </div>
    </div>
    <div class="review__text">
      {{ review.text }}
    </div>
    <div class="review__source" v-if="review.ReviewSource">
      <a :href="review.ReviewSource.url" target="_blank">
        <iconify-icon :icon="reviewSourceIcon" />
      </a>
    </div>
  </div>
</template>

<script>
import images from "~/assets/js/images";

export default {
  props: ["review"],
  data() {
    return {
      placeholder: images.placeholder
    };
  },
  computed: {
    reviewSourceIcon() {
      switch (this.review.ReviewSource.media) {
        case "vk":
          return "sm-vk";
        case "instagram":
          return "sm-instagram";
        case "facebook":
          return "sm-facebook";
        case "other":
        default:
          return "sm-web";
      }
    }
  }
};
</script>

<style>
.review {
  font-family: var(--font-default);
  height: 100%;
}

.review__source {
  margin-top: 1.5rem;
}

.review__source svg {
  color: var(--icon-color);
  width: 1.6rem;
  height: 1.6rem;

  transition-property: color;
  transition: var(--standard-transition)
}

.review__source a:hover svg {
  color: black;
}

.review__text {
  line-height: 1.5rem;
  margin-top: 1.2rem;
}

.review__heading {
  display: flex;
  align-items: flex-end;
}

.review__meta {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.7rem;
}

.review__date {
  font-weight: var(--fw-semibold);
}

.review__reviewer {
  margin-top: 0.44rem;
}

.review__avatar {
  position: relative;
  height: 5rem;
  width: 5rem;
  margin-right: 1.2rem;
}

.review__avatar img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  object-fit: cover;

  min-width: 100%;
  min-height: 100%;
  max-width: 100%;
  max-height: 100%;

  border-radius: 100%;
  /* border: 4px solid white; */
}

@media screen and (max-width: 48em) {
  .review {
    font-size: 14px;
  }
}
</style>
