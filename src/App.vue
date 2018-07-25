<template>
  <div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['getUserInfo']),
    bindEvent () {
      // global.vbus.$on('ajax_handle_error', resData => {
      //   if (resData.config.noShowDefaultError) return
      //   this.$store.commit('SET_TO_LOGIN_PATH', this.$route.path)
      //   this.$store.commit('SET_TO_LOGIN', true)
      // })
      // global.vbus.$on('global.dialog.show', (msg) => {
      //   if (msg) return
      //   // 注册全局需要操控试图层的事件，方便在非业务代码中通过发布订阅调用
      //   this.$dialog.popup({
      //     content: msg
      //   })
      // })
      // global.vbus.$on('request_error', resData => {})
      // global.vbus.$on('response_error', resData => {})
      // global.vbus.$on('scrollToTop', resData => {})
    },
    init () {
      this.getUserInfo()
    }
  },
  created () {
    this.init()
    this.bindEvent()
  }
}
</script>

<style>
@import "./assets/style/index.scss";
</style>
