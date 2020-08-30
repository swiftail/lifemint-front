<template>
  <div class="yandex-map" id="map"></div>
</template>

<style>
.yandex-map {
  height: 100%;
}
</style>

<script>
export default {
  props: {
    coords: Array,
    markerHint: String
  },
  mounted() {
    let self = this;
    ymaps.ready(function() {
      let map = new ymaps.Map("map", {
        center: self.coords,
        zoom: 16
      });
      let myPlacemark = new ymaps.Placemark(self.coords, {
        hintContent: self.markerHint
      });

      map.geoObjects.add(myPlacemark);

      map.container.fitToViewport();
    });
  }
};
</script>
