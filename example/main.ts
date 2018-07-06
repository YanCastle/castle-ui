// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from './vue'
import App from './App.vue'
import castle from '../src/index'
Vue.config.productionTip = true
/* eslint-disable no-new */
Vue.use(castle)
const app = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
})
