import Vue from 'vue'
import Vuex from 'vuex'
import appBar, { appBarMutations } from './modules/appBar.state'

Vue.use(Vuex)

export const STORE_MUTATIONS = {
  appBar: appBarMutations
}

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    appBar: appBar
  }
})
