<template>
  <div class="advantages">
    <AdvantagesItem
      v-for="advantage in $store.state.advantages"
      :advantage="advantage"
      :key="advantage.id"
    />
  </div>
</template>

<style>
.advantages {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem 4rem;
}

@media screen and (max-width: 74em) {
  .advantages {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 38em) {
  .advantages {
    grid-template-columns: 1fr;
  }
}
</style>
