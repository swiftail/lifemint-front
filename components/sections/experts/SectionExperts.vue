<template>
  <div class="experts">
    <Slider>
      <Slide v-for="expert in experts" :key="expert.id">
        <Expert :expert="expert" />
      </Slide>
    </Slider>
  </div>
</template>

<script>
export default {
  props: {
    experts: {
      type: Array,
      default() {
        return this.$store.state.experts;
      }
    }
  }
};
</script>
