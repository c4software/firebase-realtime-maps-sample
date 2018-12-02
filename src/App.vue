<template>
  <myMap />
</template>

<script>
import myMap from "./view/map.vue";

export default {
  name: "app",
  components: {
    myMap
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
</style>
