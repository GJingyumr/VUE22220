import axios from "axios"
import store from "../store"
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000
})
// 请求拦截
service.interceptors.request.use((config) => {
  // 将token通过请求头进行发送
  const token = store.getters.token
  console.log(token)
  if (token) config.headers.token = token
  return config
}, (error) => {
  return Promise.reject(error)
})
// 响应拦截
service.interceptors.response.use((response) => {
  if (response.status === 200) {
    return response.data.data
  }
  // return response
}, (error) => {
  return Promise.reject(error)
})

const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return service(options)
}

export default request
