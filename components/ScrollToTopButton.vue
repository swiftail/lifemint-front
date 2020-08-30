<template>
  <button class="button-reset scroll-to-top" :class="{ show: visible }" @click="clickHandler">
    <iconify-icon icon="arrow-up" />
  </button>
</template>

<script>
import debounce from "lodash.debounce";

export default {
  data() {
    return {
      visible: false,
      scrollListener: debounce(this.computeVisible, 5)
    };
  },
  methods: {
    computeVisible() {
      this.visible = window.scrollY >= 500;
    },
    clickHandler() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollListener);
  }
};
</script>

<style>
.scroll-to-top {
  width: 3em;
  height: 3em;
  position: fixed;

  background-color: #333;
  border-radius: 0.7em;

  bottom: 2em;
  right: 2em;

  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;

  visibility: hidden;
  opacity: 0;

  z-index: 5;

  display: flex;
  justify-content: center;
  align-items: center;
}

.scroll-to-top svg {
  width: 2.2em;
  height: 2.2em;
  color: white
}

.scroll-to-top.show {
  visibility: visible;
  opacity: 0.6;
}

.scroll-to-top.show:hover {
  cursor: pointer;
  opacity: 1;
}
</style>
