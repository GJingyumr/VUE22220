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
// 分类管理列表
const getcategory = () => {
  return request({ url: '/admin/category', method: 'GET' })
}
// 添加分类管理
const createcategory = (data) => {
  return request({ url: '/admin/category', method: 'POST', data })
}
// 修改分类管理
const updateCategory = (id, data) => {
  return request({ url: '/admin/category/' + id, method: 'POST', data })
}
// 规格管理列表
const getGetinfo = (page) => {
  return request({ url: `admin/skus/${page}`, method: 'GET' })
}
// 优惠券管理
const getcouponList = (page) => {
  return request({ url: `/admin/coupon/${page}`, method: 'GET' })
}
export default {
  getLogin,
  getUserinfo,
  getLogout,
  getcategory,
  createcategory,
  updateCategory,
  getGetinfo,
  getcouponList
}
