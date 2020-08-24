<template>
  <v-lazy-image
    :srcset="srcset"
    :src="src"
    :src-placeholder="placeholder"
  ></v-lazy-image>
</template>

<script>

import Vue from "vue"

export default {
  props: ["data"],
  data() {
    let { img, fallback, placeholder } = this.data;

    let usedImage;
    if (Modernizr.webp && img.webp) usedImage = img.webp;
    else usedImage = img.default;

    let attributes = {
      src: undefined,
      srcset: undefined,
      placeholder: undefined
    };

    if (typeof usedImage === 'string') {
      // Used image is not srcset, no need for fallback
      attributes.src = usedImage
    } else {
      // Used image is srcset
      attributes.srcset = usedImage.srcSet;
      attributes.src = fallback;
    }
    if(placeholder) {
      attributes.placeholder = placeholder;
    }

    return attributes;
  }
};
</script>
