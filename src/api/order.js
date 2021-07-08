// 正常订单相关接口
import Request from "@/utils/request";
// 测试接口
export function getList(data) {
  return Request({
    url: "move/order/list",
    method: "POST",
    data
  })
}
