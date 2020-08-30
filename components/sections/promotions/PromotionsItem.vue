<template>
  <div class="promotions-item" :class="{ 'has-image': image }" :style="style">
    <div class="promotions-item__text">
      <h4>{{ name }}</h4>
      <p>{{ text }}</p>
    </div>
    <div class="promotions-item__action">
      <ActionLink
        text="Записаться"
        icon="arrow-right"
        @click="
          $showAppointment({
            context: `Акция: ${name}`
          })
        "
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "text", 'image'],
  data() {
    let image = this.image;
    let style = {};

    if(image) {
      style = {
        'background-image': `url(${this.$api(image.url)})`
      }
    }

    return { style }
  }
};
</script>

<style>
.promotions-item__text h4 {
  max-width: 25rem;
  margin: 0;
  margin-bottom: 1rem;
  font-weight: var(--fw-semibold);
  font-size: 1.4rem;
  line-height: 1.7rem;
  letter-spacing: 0.0675em;
  color: #000000;
}

.promotions-item__text p {
  max-width: 20rem;
  margin: 0;
  line-height: 1.3rem;
  color: var(--info-text-color);
}

.promotions-item {
  padding: 2.5rem;
  border: solid 2px transparent;
  font-family: var(--font-default);
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  height: 100%;

  --accent-color: black;
}

.promotions-item.has-image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.promotions-item:not(.has-image) {
  border-color: gainsboro;
}

.promotions-item__action {
  margin-top: 2rem;
}

@media screen and (max-width: 60em) {
  .promotions-item {
    padding: 1.5rem;
  }
}
</style>
