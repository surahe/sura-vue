import api from '@/plugins/api'
import * as types from './mutation-types'

export default {
  getUserInfo ({ commit }, {list}) {
    console.log(api['other/userinfo'])
    return api['other/userinfo']().then(resData => {
      commit(types.SET_USER_INFO, resData)
      return resData
    })
  }
}
