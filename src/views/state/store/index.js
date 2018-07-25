import Store from '@/plugins/store'
import actions from './actions.js'
import moduleA from './moduleA.js'
import moduleB from './moduleB.js'

export default {
  install () {
    Store.registerModule(['pageA'], {
      actions,
      modules: {
        moduleA,
        moduleB
      },
      namespaced: true
    })
  },
  uninstall () {
    Store.unregisterModule(['pageA'])
  }
}
