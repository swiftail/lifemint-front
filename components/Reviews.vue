<template>
  <div class="reviews-component">

    <Slider :breakpoints="breakpoints" />
    
  </div>
</template>

<script>
import * as bp from "../assets/js/swiperBreakpoints";

export default {
  data() {
    return {
      breakpoints: bp.small,
    };
  },
};
</script>