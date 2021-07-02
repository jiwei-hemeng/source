import axios from "axios";
const baseURL = process.env.REACT_APP_URL
let Request = axios.create({
  baseURL: baseURL,
});
// 请求拦截器
Request.interceptors.request.use((config) => {
  if (config.url !== "/loginController/login") {
    config.headers.Authorization = "Bearer " + sessionStorage.getItem("token")
  }
  return config;
});
// 响应拦截器
Request.interceptors.response.use((response) => {
  if (response.data.code === 401) {
    window.location.href="/login"
  }
  return response;
});
export default Request;