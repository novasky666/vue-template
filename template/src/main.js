import Vue from 'vue'
import './d2.js'
import '../dev/qcs/u.js'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App.vue'
import store from './store'
import router from './router'

import '@/icons' // icon
import 'virtual:svg-icons-register' // svg-register
import '@/permission' // permission control

import { setupProdMockServer } from '@/utils/mockProdServer'
setupProdMockServer(import.meta.env.VITE_APP_BASE_API)

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
