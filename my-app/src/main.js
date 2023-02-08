import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui"; //import the web layout extension for Vue
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.use(ElementUI); // making the plug in for Element UI
new Vue({
  el: "#app",
  render: (h) => h(App),
}).$mount("#app");
