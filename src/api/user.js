import Request from "@/utils/request";
export function login(data) {
  return Request({
    url: "/user/login",
    method: "POST",
    data
  })
}