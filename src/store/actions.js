import api from '@/plugins/api'
import * as types from './mutation-types'

export default {
  getUserInfo ({ commit }) {
    api['user/info']().then(resData => {
      commit(types.SET_USER_INFO, resData)
    })
  }
}
