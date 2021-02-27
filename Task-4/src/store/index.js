import Vue from 'vue'
import Vuex from 'vuex'
import driver from './driver'
import logic from './logic'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    driver,
    logic
  }
})
