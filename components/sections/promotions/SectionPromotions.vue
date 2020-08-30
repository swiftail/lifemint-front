<template>
  <div class="section-promotions">
    <PromotionsItem
       v-for="item in $store.state.promotions" :key="item.id"
      :name="item.name"
      :text="item.description"
      :image="item.image"
    />
  </div>
</template>

<style>
.section-promotions {
  display: grid;
  /* две колонки одного размера */
  grid-template-columns: 1fr 1fr;
  /* хоть сколько рядов одного размера */
  grid-template-rows: repeat(auto-fill, 1fr);
  gap: 1rem;
}

@media screen and (max-width: 60em) {
  .section-promotions {
    /* одна колонка на маленьких экранах */
    grid-template-columns: 1fr;
  }
}
</style>
