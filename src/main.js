import Vue from 'vue'
import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'

Vue.use('')
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
