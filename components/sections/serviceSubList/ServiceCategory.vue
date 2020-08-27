<template>
  <div class="service-category">
    <h2 v-if="header" class="servive-category__header">
      {{ header }}
    </h2>

    <ul class="service-category__items">
      <li v-for="item in items" class="service-category__item" :class="{ 'no-description': !item.description }" :key="item.id">
        <h3 class="service-category-item__name" >{{ item.name }}</h3>
        <div class="service-category-item__description" v-if="item.description">
          {{ item.description }}
        </div>
        <div class="service-category-item__price">
          <span v-if="item.startingPrice"> От {{ item.startingPrice }} руб </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style>

.service-category {
  font-family: var(--font-default);
}

.servive-category__header {
  font-weight: var(--fw-semibold);
  font-size: 1.2rem;
  letter-spacing: 0.0175rem;
  text-transform: uppercase;
  margin: 0;
}

.service-category__items {
  padding: 0;
  list-style: none;
}

.service-category__item {
  background: #f1f1f1;
  width: 100%;
  padding: 2.7rem;
  margin-top: 1.5rem;

  gap: 1.2rem 0;

  display: grid;
  grid-template:
    "name price" min-content
    "desc price" min-content /
    1fr min-content;
}

.service-category__item.no-description {
  grid-template:
    "name price" min-content /
    1fr min-content;
}

.service-category-item__name {
  grid-area: name;

  font-size: 1.2rem;
  font-weight: var(--fw-semibold);

  margin: 0;
}

.service-category-item__description {
  grid-area: desc;

  color: var(--info-text-color);

  max-width: 45rem;
  line-height: 1.3rem;
}

.service-category-item__price {
  grid-area: price;
  white-space: nowrap;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding-left: 5rem;

  font-size: 1.5rem;
  color: var(--accent-color);
  font-weight: var(--fw-semibold);
  text-transform: uppercase;
}

@media screen and (max-width: 65em) {
  .service-category-item__price {
    padding-left: 2.5rem;
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 55em) {
  .service-category-item__price {
    padding-left: 2.5rem;
    font-size: 1.5rem;
  }

  .service-category__item {
    display: flex;
    flex-direction: column;
    padding: 1.8rem;
  }

  .service-category-item__price {
    margin-top: 1.5rem;
    padding: 0;
    justify-content: flex-start;
    font-size: 1.2rem;
  }
}
</style>

<script>
export default {
  props: {
    header: String,
    items: Array
  }
};
</script>
