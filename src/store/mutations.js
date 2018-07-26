import * as types from './mutation-types'

export const state = {
  toLoginPath: '',
  toLogin: false,
  userinfo: null,
  fruit: null
}

// 全局mutations
export const mutations = {
  [types.SET_TO_LOGIN] (state, boolean) {
    state.toLogin = boolean
  },
  [types.SET_TO_LOGIN_PATH] (state, path) {
    state.toLoginPath = path
  },
  [types.SET_USER_INFO] (state, resData) {
    state.userinfo = resData
  },
  [types.SET_FRUIT] (state, resData) {
    state.fruit = resData
  }
}
