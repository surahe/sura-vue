<template>
  <div>store</div>
</template>

<script>
import store from './store'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('pageA', ['aaa', 'bbb', 'ccc'])
  },
  beforeRouterEnter (to, from, next) {
    store.install()
    next()
  },
  beforeRouterLeave (to, from, next) {
    store.uninstall()
    next()
  }
}
</script>
