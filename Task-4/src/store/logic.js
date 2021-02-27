const DRIVER_CATEGORIES = ['A', 'B', 'C', 'D', 'E']

export default {
  state: {
    driverCatList: DRIVER_CATEGORIES
  },
  mutations: {
  },
  actions: {
    changeDriverCategory({ commit }, payload) {
      const result = DRIVER_CATEGORIES
        .map(el => payload.includes(el) ? '2' : '1')
        .join('')

      commit('driver/SET_DRIVER_CAT', result, { root: true })
    }
  },
  getters: {
    getFormattedDriverCategory(state, getters, rootState) {
      return rootState.driver.driverCat
        .split('')
        .map((el, idx) => el === '2' ? DRIVER_CATEGORIES[idx] : '')
        .filter(el => el)   
    }
  }
}
