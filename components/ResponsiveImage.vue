<template>
  <client-only>
    <ResponsiveImageRender :data="{ img, fallback, placeholder }" />
  </client-only>
</template>

<script>
function requireResponsiveImage(name, sizes) {
  let sizesStr = sizes.map((num) => `&sizes[]=${num}`).join("");

  let requireStr = `~/assets/images/${name}?resize${sizesStr}`;
  let requireStrWebp = requireStr + "&format=webp";
  let requireStrFallback = "~/assets/images/masthead.png";

  return {
    default: require("~/assets/images/masthead.png"),
    _default: require(requireStrFallback),
    // _default: require(requireStr),
    // webp: require(requireStrWebp),
  };
}

export default {
  props: ["src", "webp", "fallback", "placeholder"],
  data() {
    let { src, webp } = this;

    // Populating image
    let img = {};
    img["default"] = src;
    if (webp) img["webp"] = webp;

    console.log(img)

    return {
      img,
    };
  }
};
</script>