import Request from "@/utils/request";
// 登录系统
export function login(data) {
  return Request({
    url: "/login",
    method: "POST",
    data
  })
}