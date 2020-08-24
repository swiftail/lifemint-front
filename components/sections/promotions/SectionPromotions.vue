<template>
  <div class="section-promotions">
    <PromotionsItem
      name="ПЕНСИОНЕРАМ СКИДКА 10% НА ПРОТЕЗИРОВАНИЕ"
      text="Для пенсионеров действует скидка -10% нные протезы."
    />
    <PromotionsItem
      name="ПЕНСИОНЕРАМ СКИДКА 10% НА ПРОТЕЗИРОВАНИЕ"
      text="Для пенсионеров действует скидка -10% нные протезы."
    />
    <PromotionsItem
      name="ПЕНСИОНЕРАМ СКИДКА 10% НА ПРОТЕЗИРОВАНИЕ"
      text="Для пенсионеров действует скидка -10% на зубные ."
    />
  </div>
</template>

<style>
.section-promotions {
  display: grid;
  /* две колонки одного размера */
  grid-template-columns: 1fr 1fr;
  /* хоть сколько рядов одного размера */
  grid-template-rows: repeat(auto, 1fr);
  gap: 1rem;
}

@media screen and (max-width: 60em) {
  .section-promotions {
    /* одна колонка на маленьких экранах */
    grid-template-columns: 1fr;
  }
}
</style>
