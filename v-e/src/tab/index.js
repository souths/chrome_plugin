import Vue from "vue";
import App from "./App/App.vue";
import '../assets/css/common.styl'
new Vue({
  el: "#app",
  render: createElement => {
    return createElement(App);
  }
});
