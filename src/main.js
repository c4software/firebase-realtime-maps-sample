import Vue from "vue";
import App from "./App.vue";
import "./plugins/vue2-leaflet";
import "./plugins/firebase";
import "./plugins/vuefire";

Vue.config.productionTip = true;

new Vue({
  render: h => h(App)
}).$mount("#app");
