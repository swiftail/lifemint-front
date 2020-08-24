<template>
  <div class="gallery">

    <Slider :breakpoints="breakpoints" loop>
      <Slide v-for="photo in $store.state.gallery.photos" :key="photo.id">

        <GalleryItem :photo="photo" />

      </Slide>
    </Slider>

  </div>
</template>

<script>
import * as bp from "~/assets/js/swiperBreakpoints";

export default {
  data() {
    return {
      breakpoints: bp.big
    };
  },
};
</script>
