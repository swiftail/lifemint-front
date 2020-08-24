<template>
  <div class="gallery-item">
    <div class="gallery-item__image-container">
      <img loading="lazy" :src="$api(photo.url)" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["photo"]
};
</script>

<style>
.gallery-item {
  height: 40rem;
  max-height: 70vh;
}

.gallery-item__image-container {
  height: 100%;
  width: 100%;
  position: relative;
}

.gallery-item__image-container img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  object-fit: cover;

  min-width: 100%;
  min-height: 100%;
  max-width: 100%;
  max-height: 100%;
}
</style>
