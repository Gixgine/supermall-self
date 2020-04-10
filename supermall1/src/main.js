import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import Router from "vue-router"
import request from "./network/request"
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


