<template>
  <div class="services-item">
    <div class="services-item__image-container">
      <ResponsiveImage
      :src="$api($get(service, 'previewImage.url', ''))"
      :placeholder="$api($get(service, 'previewImage.formats.thumbnail.url', ''))"
      />
    </div>
    <div class="services-item__wrapper">
      <h4 class="services-item__header">{{ service.name }}</h4>
      <p class="services-item__description">
        {{ service.shortDescription }}
      </p>

      <ActionLink
      text="ПОДРОБНЕЕ"
      icon="arrow-right"
      :to="`/services/${service.slug}`"
      black
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["service"]
};
</script>

<style>
.services-item {
  font-family: var(--font-default);
  --image-height: 20rem;
}

.services-item__image-container {
  height: var(--image-height);
  width: 100%;

  position: relative;
}

.services-item__image-container img {
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

.services-item__wrapper {
  margin-top: 2rem;
}

.services-item__header {
  font-weight: var(--fw-semibold);
  font-size: 1.2rem;
  margin: 0;
  letter-spacing: 0.04em;
}

.services-item__description {
  margin-top: 1rem;

  line-height: 1.5rem;
  font-weight: var(--fw-regular);
  color: var(--info-text-color);
}
</style>
