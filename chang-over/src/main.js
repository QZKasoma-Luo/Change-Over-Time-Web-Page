import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import * as echarts from "echarts";
import router from "./router";
import axios from "axios";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;
axios.default.baseURL = "/api";
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
