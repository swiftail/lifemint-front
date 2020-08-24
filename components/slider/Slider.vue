<template>
  <div v-swiper:swiper="swiperOptions">
    <div class="swiper-wrapper">
      <slot />
    </div>

    <div class="slider-controls">
      <div class="swiper-pagination"></div>
      <div class="swiper-nav">
        <button class="button-reset swiper-nav__prev" @click="back()">
          <iconify-icon icon="slider-prev" data-size="xl"></iconify-icon>
        </button>
        <button class="button-reset swiper-nav__next" @click="forward()">
          <iconify-icon icon="slider-next" data-size="xl"></iconify-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.slider-container {
  display: flex;
  flex-direction: column;
}

.slider-controls {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
}

.swiper-nav {
  grid-column: 3;

  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.swiper-nav button {
  display: flex;
  align-items: center;

  cursor: pointer;
  color: var(--brand-color);

  transition-property: color;
  transition: var(--standard-transition);
}

.swiper-nav button:hover {
  color: var(--icon-color);
}

/*
* Pagination styling
*/
.slider-controls .swiper-pagination {
  grid-column: 2;

  position: relative;
  display: flex;

  justify-content: center;
  align-items: center;
}

.slider-controls .swiper-pagination .swiper-pagination-bullet:not(:last-child) {
  margin-right: 3px;
}

.slider-controls .swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: gainsboro;
  opacity: 1;

  transition-property: background, width;
  transition: 0.2s ease-in-out;
}

.slider-controls .swiper-pagination-bullet-active {
  width: 20px;
  background: var(--accent-color);
}
</style>

<script>
import mapValues from "lodash.mapvalues";
import "swiper/swiper-bundle.min.css";
import { Swiper as SwiperClass, Pagination, Navigation } from "swiper/core";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";

SwiperClass.use([Pagination, Navigation]);

const { directive } = getAwesomeSwiper(SwiperClass);

export default {
  props: {
    breakpoints: {
      type: Object,
      default: () => {}
    },
    loop: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    back() {
      this.swiper.slidePrev();
    },
    forward() {
      this.swiper.slideNext();
    }
  },
  data() {
    let { breakpoints } = this;

    let swiperBreakpoints = mapValues(breakpoints, v => ({
      slidesPerView: v
    }));

    let options = {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 50,
        loop: this.loop,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        preventClicks: false,
        // preventClicksPropagation: false,

        breakpoints: swiperBreakpoints
      }
    };

    console.log(options);

    return options;
  },
  directives: {
    swiper: directive
  }
};
</script>
