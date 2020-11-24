import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
=======
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router
>>>>>>> 8d834ac7e122ca76bdd03f93649fc7a25261a01f
}).$mount('#app')
