<template>
  <div class="section-header">

    <template v-if="text">
      <div class="section-header__header" v-if="header" v-html="header"></div>
      <h2 class="section-header__text"  v-html="text"></h2>
    </template>
    <template v-else>
      <h2 class="section-header__header" v-html="header"></h2>
    </template>

  </div>
</template>

<style>
.section-header__header {
  color: #7a7a7a;
  font-family: var(--font-default);
  font-weight: var(--fw-semibold);
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.0875rem;

  margin: 0;
}

.section-header__text {
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
  props: ["header", "text"]
};
</script>
