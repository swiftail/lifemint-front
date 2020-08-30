<template>
  <div class="expert">
    <div class="expert__photo">
      <img
        loading="lazy"
        :src="$api(expert.photo.url)"
        :alt="$api(expert.photo.alternativeText)"
        :title="$api(expert.photo.caption)"
      />
    </div>
    <div class="expert__meta">
      <span class="expert__name">
        {{ expert.name }}
      </span>
      <div class="expert__description">
        <Markdown :markdown="expert.description" />
      </div>
      <ActionLink text="Записаться" icon="arrow-right" @click="handleClick" />
    </div>
  </div>
</template>

<style>
.expert {
  display: flex;
  max-width: 70rem;
  width: 100%;
  height: 40rem;

  font-family: var(--font-default);
}

.expert > * {
  flex: 1 1 0;
  margin: 1rem;
}

.expert__meta {
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 2rem;
}

.expert__name {
  font-size: 1.5em;
  font-weight: var(--fw-semibold);
  line-height: 1.15;
  letter-spacing: 0.0875em;
  text-transform: uppercase;
}

.expert__description {
  padding: 1.5em 0;
}

.expert__photo {
  position: relative;
}

.expert__photo img {
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

@media screen and (max-width: 55em) {
  .expert {
    flex-direction: column;
    height: auto;
  }

  .expert__photo {
    min-height: 50vh;
  }

  .expert__meta {
    padding: 0;
    /* font-size: 14px; */
  }
}
</style>

<script>
export default {
  props: ["expert", "linkClickHandler"],
  methods: {
    handleClick() {
      this.$showAppointment({
        context: `Эксперт: ${this.expert.name}`
      });
    }
  }
};
</script>
