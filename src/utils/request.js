import axios from "axios";
// import {
//   useHistory
// } from "react-router-dom";
let Request = axios.create({
  baseURL: "/api",
});
// 请求拦截器
Request.interceptors.request.use((config) => {
  if (!config.url.startsWith("/user")) {
    config.headers.authorization = sessionStorage.getItem("token")
  }
  return config;
});
// 响应拦截器
Request.interceptors.response.use((response) => {
  if (response.data.code === 401) {
    // const history = useHistory();
    // console.log(history)

    // function push() {
    //   history.push("/login");
    // }
    // return push()
    window.location.href="/login"
  }
  return response;
});
export default Request;