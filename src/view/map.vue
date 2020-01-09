<template>
  <l-map id="map" :zoom="zoom" :center="center" @click="addMarker">

    <l-marker v-for="(marker,i) in markerList" :key="i" :lat-lng="marker" @click="() => removeMarker(marker['.key'])"></l-marker>
    
    <l-tile-layer :url="url"></l-tile-layer>
    
    <l-control v-if="!locating">
      <button @click.stop="getUserLocation">Localiser moi</button>
    </l-control>

  </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker, LControl } from "vue2-leaflet";

export default {
  name: "myMap",
  firebase() {
    return {
      markerList: this.$db.ref("/markerList/")
    };
  },
  data() {
    return {
      markerList: [],
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 16,
      center: [47.472092, -0.550589],
      locating: false
    };
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LControl
  },
  methods: {
    addMarker(position) {
      this.$firebaseRefs.markerList.push([
        position.latlng.lat,
        position.latlng.lng
      ]);
    },
    removeMarker(markerKey) {
      this.$firebaseRefs.markerList.child(markerKey).remove();
    },
    getUserLocation() {
      if ("geolocation" in navigator) {
        this.locating = true;
        navigator.geolocation.getCurrentPosition(
          position => {
            this.locating = false;
            this.center = [position.coords.latitude, position.coords.longitude];
          },
          error => {
            this.locating = false;
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
