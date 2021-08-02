import axios from "axios";
import { Toast } from "antd-mobile";
const baseURL = process.env.REACT_APP_URL;
let Request = axios.create({
  baseURL: baseURL,
  timeout: 30000, // 超时时间
});
// 请求拦截器
Request.interceptors.request.use((config) => {
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
    Toast.success(response.data.msg, 2);
    window.location.href = "/login";
  }
  return response;
});
export default Request;
