import Vue from 'vue'
import Router from 'vue-router'

import routers from './routers'
import { ROUTER_DEFAULT_CONFIG } from '@/config/index'

Vue.use(Router)

export default new Router({
  routers,
  ...ROUTER_DEFAULT_CONFIG
})
