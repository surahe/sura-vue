// 环境变量
export const NODE_ENV = process.env.NODE_ENV || 'prod'

// 是否开启监控
export const MONITOR_ENABLE = true

// Vue Router默认配置
export const ROUTER_DEFAULT_CONFIG = {
  waitForData: true,
  transitionOnLoad: true
}

// axios 默认配置
export const AXIOS_DEFAULT_CONFIG = {
  timeout: 20000,
  maxContentLength: 2000,
  headers: {}
}

// vuex 默认配置
export const VUEX_DEFAULT_CONFIG = {
  strict: process.env.NODE_ENV !== 'production'
}

// API 默认配置
export const API_DEFAULT_CONFIG = {
  debug: true,
  sep: '/'
}
