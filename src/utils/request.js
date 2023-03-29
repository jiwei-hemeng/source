import axios from "axios";
import { Toast } from "antd-mobile";
// const baseURL = process.env.REACT_APP_URL || "/api";

let Request = axios.create({
  baseURL: "/",
  timeout: 30000, // 超时时间
});
// 请求拦截器
Request.interceptors.request.use((config) => {
  console.log("config", config, process)
  if (config.url !== "/loginController/login") {
    config.headers.Authorization = "Bearer " + sessionStorage.getItem("token");
  }
  return config;
});
// 响应拦截器
Request.interceptors.response.use((response) => {
  if (
    response.data.code === 301 ||
    response.data.code === 302 ||
    response.data.code === 303
  ) {
    sessionStorage.clear("token");
    window.location.href = "/login";
  }
  return response;
}, (error) => {
  console.log(error)
  Toast.fail("网络错误")
});
export default Request;
