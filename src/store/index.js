import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import { state, mutations } from './mutations'
import { VUEX_DEFAULT_CONFIG } from '@/config'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  ...VUEX_DEFAULT_CONFIG
})
