<template>
  <div class="advantages-item">
      <h3 class="advantages-item__header">
        {{ advantage.name }}
      </h3>
      <p class="advantages-item__description">
        {{ advantage.description }}
      </p>
    </div>
</template>

<script>
export default {
  props: ['advantage']
}
</script>

<style >
.advantages-item {
  font-family: var(--font-default);
}

.advantages-item__header {
  font-weight: var(--fw-semibold);
  font-size: 1.2rem;
  margin: 0;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.advantages-item__description {
  margin-top: 1.5rem;
  line-height: 1.5rem;
  font-weight: var(--fw-regular);
}
</style>
