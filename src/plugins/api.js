import axios from './axios'
import _pick from 'lodash/pick'
import _assign from 'lodash/assign'
import _isEmpty from 'lodash/isEmpty'

import { assert } from '@/utils/tools'
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
    mock = false,
    debug = false,
    mockBaseURL = ''
  }) {
    Object.keys(config).map(namespace => {
      this._apiSingleBuilder({
        namespace,
        mock,
        mockBaseURL,
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
    mock = false,
    debug = false,
    mockBaseURL = ''
  }) {
    config.forEach(api => {
      const { name, desc, params, method, path, mockPath, apiUrl } = api
      let apiname = `${namespace}${sep}${name}`
      let url = mock ? mockPath : path
      let baseURL = mock && mockBaseURL

      // 通过全局配置开启调试模式。
      debug && console.info(`调用服务层接口${apiname}，接口描述为${desc}`)
      debug && assert(name, `${apiUrl} :接口name属性不能为空`)
      debug && assert(apiUrl.indexOf('/') === 0, `${apiUrl} :接口路径path，首字符应为/`)

      Object.defineProperty(this.api, `${namespace}${sep}${name}`, {
        value (outerParams, outerOptions) {
          // 请求参数自动截取
          // 请求参数不穿则发送默认配置参数
          let _data = _isEmpty(outerParams) ? params : _pick(_assign({}, params, outerParams), Object.keys(params))
          return axios(_normoalize(_assign({
            url,
            desc,
            baseURL,
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
