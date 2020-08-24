<template>
  <div class="reviews">

    <Slider :breakpoints="breakpoints" loop>
      <Slide v-for="review in $store.state.reviews" :key="review.id">

        <Review :review="review" />

      </Slide>
    </Slider>

  </div>
</template>

<script>
import * as bp from "~/assets/js/swiperBreakpoints";

export default {
  data() {
    return {
      breakpoints: bp.medium
    };
  },
};
</script>
