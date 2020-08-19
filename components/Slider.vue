<template>
  <swiper ref="swiper" :options="swiperOptions">

    <swiper-slide v-for="slide of slides" :key="slide">
        <div class="slider-item">
            {{ slide }}
        </div>
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<style>
.slider-item {
    height: 25rem;
    background: white;
}
</style>

<script>
import mapValues from "lodash.mapvalues";
import 'swiper/swiper-bundle.css'

export default {
  props: {
    breakpoints: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    let { breakpoints } = this;

    let swiperBreakpoints = mapValues(breakpoints, (v) => ({
      slidesPerView: v,
    }));

    console.log(swiperBreakpoints);

    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 50,
        loop: true,
        pagination: {
            el: '.swiper-pagination'
        },
        breakpoints: swiperBreakpoints,
      },
      slides: [
          'Отзыв 1',
          'Отзыв 2',
          'Отзыв 3',
          'Отзыв 4',
          'Отзыв 5',
          'Отзыв 6',
          'Отзыв 7',
          'Отзыв 8',
          'Отзыв 9',
          'Отзыв 10',
      ]
    };
  },
};
</script>