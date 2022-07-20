import { createStore } from 'vuex'
import user from './modules/user'
import getters from './getters'
import menu from './modules/menu'
export default createStore({
  getters,
  modules: {
    user,
    menu
  }
})
