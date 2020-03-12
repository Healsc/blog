import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/reset.css'
import '@/assets//js/rem.js'

import { Calendar ,Cell} from 'vant';

Vue.use(Calendar).use(Cell);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
