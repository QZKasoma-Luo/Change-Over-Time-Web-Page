import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Echarts from 'vue-echarts' // refers to components/Echarts.vue in webpack

const app = createApp(App)
app.component('E-charts', Echarts)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
