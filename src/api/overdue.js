// 违约订单相关接口
import Request from "@/utils/request";
// 获取违约订单列表
export function listOverOrder(params) {
  return Request({
    url: "move/overdueOrderController/listOverOrder",
    method: "GET",
    params
  })
}
// 获取订单详细信息
export function editOverOrder(params) {
  return Request({
    url: "move/overdueOrderController/editOverOrder",
    method: "GET",
    params
  })
}
// 修改逾期金回显
export function updateOverShow(params) {
  return Request({
    url: "move/overdueOrderController/updateOver",
    method: "GET",
    params
  })
}
// 修改逾期金
export function updateOver(data) {
  return Request({
    url: "move/overdueOrderController/updateOver",
    method: "POST",
    data
  })
}
// 提交回访记录
export function updateReturn(data) {
  return Request({
    url: "move/overdueOrderController/updateReturn",
    method: "POST",
    data
  })
}
