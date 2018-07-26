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
      // this.vbus.$on('ajax_handle_error', resData => {
      //   if (resData.config.noShowDefaultError) return
      //   this.$store.commit('SET_TO_LOGIN_PATH', this.$route.path)
      //   this.$store.commit('SET_TO_LOGIN', true)
      // })
      // this.vbus.$on('global.dialog.show', (msg) => {
      //   if (msg) return
      //   // 注册全局需要操控试图层的事件，方便在非业务代码中通过发布订阅调用
      //   this.$dialog.popup({
      //     content: msg
      //   })
      // })
      // this.vbus.$on('request_error', resData => {})
      // this.vbus.$on('response_error', resData => {})
      // this.vbus.$on('scrollToTop', resData => {})
    },
    init () {
      this.$ajax.get('/suer', {id: 1}).then(res => {
        console.log(res)
      })
      // this.getUserInfo({
      //   list: 1
      // }).then(data => {
      //   console.log(data)
      // }).catch(function (error) {
      //   console.log(error)
      // })
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
