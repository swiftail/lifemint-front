<template>
  <div class="experts">

    <Slider>
      <Slide v-for="expert in $store.state.experts" :key="expert.id">

        <Expert :expert="expert" />

      </Slide>
    </Slider>

  </div>
</template>
