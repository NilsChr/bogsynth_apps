import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

interface sta {
  age: number;
}

export default new Vuex.Store({
  state: {
    age: 0
  } as sta,
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
