import Vue from "vue";
import AppComponent from "./App/App.vue";
import ElementConfig from '@/config/element'

Vue.use(ElementConfig)

new Vue({
  el: "#app",
  render: createElement => {
    return createElement(AppComponent);
  }
});
