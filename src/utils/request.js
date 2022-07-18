import axios from "axios"

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000
})
// 请求拦截
service.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})
// 响应拦截
service.interceptors.response.use((response) => {
  return response
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
