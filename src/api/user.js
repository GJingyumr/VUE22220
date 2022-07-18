import request from '../utils/request'
// 登录接口
const getLogin = (data) => {
  return request({ url: '/admin/login', method: 'POST', data })
}
// 用户信息接口
const getUserinfo = () => {
  return request({ url: '/admin/getinfo', method: 'POST' })
}
// 退出登录
const getLogout = () => {
  return request({ url: '/admin/logout', method: 'POST' })
}
export default {
  getLogin,
  getUserinfo,
  getLogout
}
