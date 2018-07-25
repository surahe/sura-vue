import Vue from 'vue'

// 引入插件
import router from '@/plugins/router'
import inject from '@/plugins/inject'
import store from '@/plugins/store'

// import 'Components'// 全局组件注册
// import 'Directives' // 指令

// 引入组件库及其组件库样式

// 引入根组件
import App from './App'

Vue.prototype.vbus = new Vue()

Vue.use(inject)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
