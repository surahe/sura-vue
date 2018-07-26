import axios from './axios'
import api from './api'

export default {
  install: (Vue, options) => {
    Vue.prototype.$api = api
    Vue.prototype.$ajax = axios
    // 需要挂载的都放在这里
  }
}
