import Request from "@/utils/request";
// 登录系统
export function login(data) {
  return Request({
    url: "/user/login",
    method: "POST",
    data,
  });
}
// 测试接口
export function Test() {
  return Request({
    url: "/loginController/test",
    method: "GET",
  });
}
