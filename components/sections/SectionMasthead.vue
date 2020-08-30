<template>
  <section class="masthead a11y-bg-image-container">
    <ResponsiveImage :image="image" alt="Главный экран" />
    <div class="masthead__container">
      <h1 class="masthead__heading" v-html="heading"></h1>
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
  --gradient-start-bp: 43%;
  --gradient-end-bp: 100%;

  --gradient-start-color: rgba(0, 0, 0, 0.541);
  --gradient-end-color: rgba(0, 0, 0, 0.466);

  --container-width: 50%;
  --container-height: 40rem;
  --container-padding-v: 0;

  --heading-size: 3.5em;
  --accent-color: white;
}

.masthead {
  background: linear-gradient(
    90deg,
    var(--gradient-start-color) 0%,
    var(--gradient-start-color) var(--gradient-start-bp),
    var(--gradient-end-color) var(--gradient-end-bp)
  );
  position: relative;

  width: 100%;

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

  color: white;

  font-family: var(--font-default);
  font-size: var(--heading-size);
  font-weight: var(--fw-semibold);
}

.masthead__description {
  padding: 0;
  margin: 0;

  color: white;

  font-family: var(--font-default);
  font-size: 1em;
  line-height: 1.5em;
  font-weight: var(--fw-semibold);
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
    --gradient-start-bp: 20%;
    --gradient-end-bp: 100%;
    --gradient-start-color: #fafafa;

    --container-width: 70%;
    --heading-size: 3em;
  }
}

/* Tablet */
@media screen and (max-width: 64em) {
  .masthead {
    --gradient-start-bp: 2%;
    --gradient-end-bp: 100%;

    --container-width: 80%;
    --heading-size: 1.75em;

    --gradient-start-color: rgba(0, 0, 0, 0.8);
    --gradient-end-color: rgba(0, 0, 0, 0.6);
  }

  .masthead__description,
  .masthead__heading {
    color: white;
  }

  .masthead__description {
    font-weight: var(--fw-semibold);
  }
}

/* Mobile */
@media screen and (max-width: 40em) {
  .masthead {
    --gradient-start-bp: 0%;
    --gradient-end-bp: 100%;

    --container-width: 100%;
    --container-height: auto;
    --container-padding-v: 5rem;

    --gradient-start-color: rgba(0, 0, 0, 0.75);
    --gradient-end-color: rgba(0, 0, 0, 0.65);

    /* font-size: 14px; */
  }
}
</style>
