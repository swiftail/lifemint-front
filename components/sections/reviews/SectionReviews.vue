<template>
  <div class="reviews">
    <Slider :breakpoints="breakpoints" loop>
      <Slide v-for="review in reviews" :key="review.id">
        <Review :review="review" />
      </Slide>
    </Slider>
  </div>
</template>

<script>
import * as bp from "~/assets/js/swiperBreakpoints";

export default {
  props: {
    reviews: {
      type: Array,
      default() {
        return this.$store.state.reviews;
      }
    }
  },
  data() {
    return {
      breakpoints: bp.medium
    };
  }
};
</script>
