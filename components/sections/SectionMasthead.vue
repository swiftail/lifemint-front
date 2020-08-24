<template>
  <section class="masthead a11y-bg-image-container">
    <ResponsiveImage :image="image" />
    <div class="masthead__container">
      <h1 class="masthead__heading">
        {{ heading }}
      </h1>
      <p class="masthead__description">
        {{ description }}
      </p>

      <ActionLink
        :text="actionText"
        icon="arrow-right"
        @click="
          $showAppointment({
            context: actionContext
          })
        "
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    heading: String,
    description: String,
    image: Object,
    actionText: String,
    actionContext: String
  }
};
</script>

<style>
.masthead {
  --gradient-start-bp: 23%;
  --gradient-end-bp: 72%;
  --gradient-start-color: rgb(251, 251, 251);
  --gradient-end-color: rgba(251, 251, 251, 0.2);

  --container-width: 50%;
  --container-height: 40rem;
  --container-padding-v: 0;

  --heading-size: 3.5rem;
}

.masthead {
  background: linear-gradient(
    90deg,
    var(--gradient-start-color) 0%,
    var(--gradient-start-color) var(--gradient-start-bp),
    transparent var(--gradient-end-bp)
  );
  position: relative;

  width: 100%;

  /* TODO: Universal gap */
  padding: var(--container-padding-v) var(--content-gap);
  height: var(--container-height);
}

.masthead img {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  object-fit: contain;
  z-index: -1;
}

.masthead__container {
  width: var(--container-width);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.masthead__container > *:not(:last-child) {
  margin-bottom: 2rem;
}

.masthead__heading {
  padding: 0;
  margin: 0;

  font-family: var(--font-serif);
  font-size: var(--heading-size);
  font-weight: var(--fw-regular);
}

.masthead__description {
  padding: 0;
  margin: 0;

  font-family: var(--font-default);
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: var(--fw-regular);
}

/* Small desktop / large laptop */
@media screen and (max-width: 100em) {
  .masthead {
    --gradient-start-bp: 40%;
    --gradient-end-bp: 100%;
    --container-width: 60%;
  }
}

/* Laptop */
@media screen and (max-width: 80em) {
  .masthead {
    --gradient-start-bp: 40%;
    --gradient-end-bp: 150%;

    --container-width: 70%;
    --heading-size: 3rem;
  }
}

/* Tablet */
@media screen and (max-width: 64em) {
  .masthead {
    --gradient-start-bp: 40%;
    --gradient-end-bp: 270%;

    --container-width: 60%;
    --heading-size: 2.5rem;
  }
}

/* Mobile */
@media screen and (max-width: 40em) {
  .masthead {
    --gradient-start-bp: 20%;
    --gradient-end-bp: 300%;

    --container-width: 100%;
    --container-height: auto;
    --container-padding-v: 5rem;
    --heading-size: 2.5rem;
  }
}
</style>
