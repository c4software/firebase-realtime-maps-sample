<template>
  <l-map
    id="map"
    :zoom="zoom"
    :center="center"
  >
    <l-tile-layer :url="url"></l-tile-layer>
    <l-control position="bottomleft">
      <button @click="getUserLocation">
        Localiser moi
      </button>
    </l-control>
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker, LControl } from "vue2-leaflet";

export default {
  name: "myMap",
  data() {
    return {
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 16,
      center: [47.472092, -0.550589]
    };
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LControl
  },
  methods: {
    getUserLocation() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          position => {
            this.center = [position.coords.latitude, position.coords.longitude];
          },
          error => {
            console.error(error);
          }
        );
      }
    }
  }
};
</script>

<style scoped>
#map {
  height: 100%;
  width: 100%;
}
</style>
