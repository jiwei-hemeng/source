// 正常订单相关接口
import Request from "@/utils/request";
// 测试接口
export function Test() {
  return Request({
    url: "/loginController/test",
    method: "GET",
  })
}
