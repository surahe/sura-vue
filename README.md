## 目录结构

~~~
src
├── assets          // 资源目录 图片，样式，iconfont
├── components      // 全局通用组件目录
├── config          // 项目配置，拦截器，开关
├── plugins         // 插件相关，生成路由、请求、store 等实例，并挂载 Vue 实例
├── directives      // 拓展指令集合
├── routes          // 路由配置
├── service         // 服务层
├── utils           // 工具类
└── views           // 视图层
~~~

## 组件 components

<br>

## 全局配置，插件与拦截器 config

### 全局配置
~~~
config
├── index.js             // 全局配置/开关
├── interceptors        // 拦截器
    ├── index.js        // 入口文件
    ├── axios.js        // 请求/响应拦截
    ├── router.js       // 路由拦截
    └── ...
└── ...
~~~


### 插件
~~~
plugins
├── api.js              // 服务层 api 插件
├── axios.js            // 请求实例插件
├── const.js            // 服务层 const 插件
├── store.js            // vuex 实例插件
├── inject.js           // 注入 Vue 原型插件
└── router.js           // 路由实例插件
~~~

### 服务
~~~
service
├── api
    ├── index.js             // 入口文件
    ├── order.js             // 订单相关接口配置
    └── ...
├── const                   
    ├── index.js             // 入口文件
    ├── order.js             // 订单常量接口配置
    └── ...
├── store                    // vuex 状态管理
├── expands                  // 拓展
    ├── monitor.js           // 监控
    ├── beacon.js            // 打点
    ├── localstorage.js      // 本地存储
    └── ...                  // 按需拓展
└── ...
~~~

### 视图
~~~
views/
├── pageA/
    ├── index.vue
    ├── components/
            a.vue
            b.vue
            ...
    ├── children/
            childrenA.vue
            childrenB.vue
            ...
    ├── store/
            index.js
            actions.js
            moduleA.js  
            moduleB.js
~~~