// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Reg from './components/reg'
import Login from './components/login'
import PerEdit from './components/perEdit'
import PerEditPass from './components/perEditPass'
import Picture from './components/picture'
import VueResource from 'vue-resource'
import axios from 'axios'
Vue.prototype.$ajax = axios

Vue.use(VueResource)

Vue.use(Login)
Vue.use(Reg)
Vue.use(PerEdit)
Vue.use(PerEditPass)
Vue.use(Picture)
Vue.use(ElementUI);


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
