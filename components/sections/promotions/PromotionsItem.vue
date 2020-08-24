<template>
  <div class="promotions-item">
    <div class="promotions-item__text">
      <h4>{{ name }}</h4>
      <p>{{ text }}</p>
    </div>
    <div class="promotions-item__action">Записаться</div>
  </div>
</template>

<script>
export default {
  props: ["name", "text"]
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
  border: solid 2px gainsboro;
  font-family: var(--font-default);
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  height: 100%;
}

.promotions-item__action {
  margin-top: 2rem;
}
</style>
