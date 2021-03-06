import Vue from 'vue'
import App from './App.vue'
import 'assets/css/iconfont/iconfont.css'
import router from './router/index.js'
import store from './store/index.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
