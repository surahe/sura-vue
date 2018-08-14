import axios from './axios'
import _pick from 'lodash/pick'
import _assign from 'lodash/assign'
import _isEmpty from 'lodash/isEmpty'

import { API_DEFAULT_CONFIG } from '@/config'
import API_CONFIG from '@/service/api'

class MakeApi {
  constructor (options) {
    this.api = {}
    this.apiBuilder(options)
  }

  apiBuilder ({
    sep = '|',
    config = {},
    debug = false
  }) {
    Object.keys(config).map(namespace => {
      this._apiSingleBuilder({
        namespace,
        sep,
        debug,
        config: config[namespace]
      })
    })
  }
  _apiSingleBuilder ({
    namespace,
    sep = '|',
    config = {},
    debug = false
  }) {
    config.forEach(api => {
      const { name, desc, params, method, path } = api

      Object.defineProperty(this.api, `${namespace}${sep}${name}`, {
        value (outerParams, outerOptions) {
          // 请求参数自动截取
          // 请求参数不传则发送默认配置参数
          let _data = _isEmpty(outerParams) ? params : _pick(_assign({}, params, outerParams), Object.keys(params))
          return axios(_normoalize(_assign({
            path,
            desc,
            method
          }, outerOptions), _data))
        }
      })
    })
  }
}

function _normoalize (options, data) {
  if (options.method === 'POST') {
    options.data = data
  } else if (options.method === 'GET') {
    options.params = data
  }
  return options
}

export default new MakeApi({
  config: API_CONFIG,
  ...API_DEFAULT_CONFIG
})['api']
