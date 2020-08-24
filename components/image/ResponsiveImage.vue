<template>
  <client-only>
    <ResponsiveImageRender :data="renderData" />
  </client-only>
</template>

<script>

export default {
  props: ["src", "webp", "fallback", "placeholder", "image"],
  data() {

    let params = this;

    if(this.image) {
      params = this.image;
    }

    let { src, webp } = params;

    // Populating image
    let img = {};
    img["default"] = src;
    if (webp) img["webp"] = webp;

    return {
      renderData: {
        img,
        fallback: params.fallback,
        placeholder: params.placeholder
      },
    };
  }
};
</script>
