<template>
  <div class="section-header">
    <h2>{{ header }}</h2>
    <h3 v-if="text != undefined">{{ text }}</h3>
  </div>
</template>

<style>
.section-header h2 {
  color: #7a7a7a;
  font: var(--font-default);
  font-weight: var(--fw-semibold);
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.0875rem;

  margin: 0;
}

.section-header h3 {
  color: black;
  font-family: var(--font-serif);
  font-size: 2.2rem;
  font-weight: var(--fw-normal);

  margin: 0;
  margin-top: 1rem;
}
</style>

<script>
export default {
  props: ["header", "text"],
};
</script>