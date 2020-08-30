<template>
  <a :href="`#${anchor}`" class="anchor-link" @click.prevent="click">
    <slot />
  </a>
</template>

<script>
import checkAnchor from "~/assets/js/anchor";

export default {
  props: {
    anchor: String
  },
  methods: {
    click(e) {
      let anchor = "#" + this.anchor;
      checkAnchor(this.$router, null, anchor);
    }
  }
};
</script>
