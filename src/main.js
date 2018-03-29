// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Reg from './components/reg'
import Login from './components/login'
import axios from 'axios'
Vue.prototype.$ajax = axios

//import Phaser from '../static/js/phaser.min.js'
//import vue from '../static/js/vue.js'
//import run from '../static/js/run.js'
//import ruler from '../static/js/ruler.js'
//import step from '../static/js/step.js'
//import public1 from '../static/js/public.js'
//import turn from '../static/js/turn.js'
//import collision from '../static/js/collision.js'
//import state from '../static/js/state.js'
//import initData from '../static/js/initData.js'

Vue.use(Login)
Vue.use(Reg)
Vue.use(ElementUI);
//Vue.use(Phaser);
//Vue.use(vue);
//Vue.use(run);
//Vue.use(ruler);
//Vue.use(step);
//Vue.use(public1);
//Vue.use(turn);
//Vue.use(collision);
//Vue.use(state);
//Vue.use(initData);

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
