<template>
  <v-lazy-image v-if="placeholder" :srcset="srcSet" :src="fallback" :src-placeholder="placeholder"></v-lazy-image>
  <v-lazy-image v-else :srcset="srcSet" :src="fallback"></v-lazy-image>
</template>

<script>

function extractSrcSet(image) {
  if(typeof image === 'string') return image;
  else return image.srcSet;
}

function extractSrc(image) {
  if(typeof image === 'string') return image;
  else return image.src;
}

export default {
  props: ["data"],
  data() {
    let { img, fallback, placeholder } = this.data;

    let usedImage;
    if (Modernizr.webp && img.webp) usedImage = img.webp;
    else usedImage = img.default;

    console.log(usedImage)

    return {
      srcSet: extractSrcSet(usedImage),
      fallback: fallback || extractSrc(usedImage),
      placeholder
    };
  },
};
</script>