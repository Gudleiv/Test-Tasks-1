export default {
  namespaced: true,
  state: {
    driverCat: '12211'
  },
  mutations: {
    SET_DRIVER_CAT(state, payload) {
      state.driverCat = payload
    }
  },
  actions: {
  },
  getters: {
  }
}
