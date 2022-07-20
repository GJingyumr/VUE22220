export default {
  namespaced: true,
  state: {
    collapse: false
  },
  mutations: {
    setcollapse: (state) => {
      state.collapse = !state.collapse
    }
  },
  actions: {
    setCollapse: ({ commit }) => {
      commit('setcollapse')
    }
  }
}
