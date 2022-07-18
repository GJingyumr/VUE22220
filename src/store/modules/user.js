import UserApi from '../../api/user'
import { setItem, getItem } from '../../utils/storage'
export default {
  namespaced: true,
  state: {
    token: getItem('token') || '',
    userInfo: ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
      setItem('userInfo', userInfo)
    }
  },
  actions: {
    async login({ commit }, payload) {
      const response = await UserApi.getLogin(payload)
      console.log(response.token)
      commit('setToken', response.token)
      return response
    },
    async userInfo({ commit }, payload) {
      console.log(payload)
      const response = await UserApi.getUserinfo(payload)
      console.log(response)
      commit('setUserInfo', response.userInfo)
      return response
    },
    async logout({ commit }) {
      const response = await UserApi.getLogout()
      commit('setToken', '')
      commit('setUserInfo', '')
      console.log(response)
    }
  }
}
