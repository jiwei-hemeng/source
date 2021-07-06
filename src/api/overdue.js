// 违约订单相关接口
import Request from "@/utils/request";
export function Test() {
  return Request({
    url: "/loginController/test",
    method: "GET",
  })
}
