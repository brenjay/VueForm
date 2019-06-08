// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Multiselect from "vue-multiselect";
import multiselect from "./components/multiselect.vue";
import "./main.css";

Vue.component("multiselect", Multiselect);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { multiselect, App },
  data() {
    return {
      value: null,
      options: ["list", "of", "options"],
      datas: "yes"
    };
  }
}).$mount("#app");
