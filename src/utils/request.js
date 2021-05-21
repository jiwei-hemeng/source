import axios from "axios";
let Request = axios.create({
  baseURL: "/api",
});
// 请求拦截器
Request.interceptors.request.use((config) => {
  return config;
});
// 响应拦截器
Request.interceptors.response.use((response) => {
  return response;
});
export default Request;
