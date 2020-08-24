<template>
  <div class="services">
    <ServicesItem
      v-for="service in $store.state.services"
      :service="service"
      :key="service.id"
    />
  </div>
</template>

<style>
.services {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 4rem;
}

@media screen and (max-width: 86em) {
  .services {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media screen and (max-width: 64em) {
  .services {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 38em) {
  .services {
    grid-template-columns: 1fr;
  }
}
</style>
