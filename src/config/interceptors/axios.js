import { Message } from 'element-ui'

/**
 * 自定义请求拦截逻辑，
 * @param {*} requestObj
 */
export function requestSuccessFunc (requestObj) {
  // 可以处理权限，请求发送监控，loading等

  return requestObj
}

/**
 *  自定义发送请求失败逻辑
 * @param {*} requestError
 */
export function requestFailFunc (requestError) {
  // 断网，请求发送监控等

  return Promise.reject(requestError)
}

/**
 * 自定义响应成功逻辑，全局拦截接口，根据不同业务做不同处理，响应成功监控等
 * @param {*} responseObj
 */
export function responseSuccessFunc (responseObj) {
  // ...
  // 假设我们请求体为
  // {
  //     code: 1010,
  //     msg: 'this is a msg',
  //     data: null
  // }

  let resData = responseObj.data
  let { code } = resData

  switch (code) {
    case 0: // 如果业务成功，直接进成功回调
      return resData.data
    case 1111:
      // 如果业务失败，根据不同 code 做不同处理
      // 比如最常见的授权过期跳登录
      // 特定弹窗
      // 跳转特定页面等

      location.href = 'xxx' // 这里的路径也可以放到全局配置里
      return
    default:
      // 业务中还会有一些特殊 code 逻辑，我们可以在这里做统一处理，也可以下方它们到业务层
      // !responseObj.config.noShowDefaultError && global.vbus.$emit('global.$dialog.show', resData.msg)
      return Promise.reject(resData)
  }
}

/**
 * 响应失败，可根据 responseError.message 和 responseError.response.status 来做监控处理
 * @param {*} responseError
 */
export function responseFailFunc (responseError) {
  if (responseError && responseError.response) {
    switch (responseError.response.status) {
      case 400: responseError.message = '请求错误(400)'
        break
      case 401: responseError.message = '未授权，请重新登录(401)'
        break
      case 403: responseError.message = '拒绝访问(403)'
        break
      case 404: responseError.message = '请求出错(404)'
        break
      case 408: responseError.message = '请求超时(408)'
        break
      case 500: responseError.message = '服务器错误(500)'
        break
      case 501: responseError.message = '服务未实现(501)'
        break
      case 502: responseError.message = '网络错误(502)'
        break
      case 503: responseError.message = '服务不可用(503)'
        break
      case 504: responseError.message = '网络超时(504)'
        break
      case 505: responseError.message = 'HTTP版本不受支持(505)'
        break
      default: responseError.message = `连接出错(${responseError.response.status})!`
    }
  } else {
    responseError.message = '连接服务器失败!'
  }
  Message.error(responseError.message)
  return Promise.reject(responseError)
}
