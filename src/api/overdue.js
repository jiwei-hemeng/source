// 违约订单相关接口
import Request from "@/utils/request";
// 获取违约订单列表
export function listOverOrder(params) {
  return Request({
    url: "overdueOrderController/listOverOrder",
    method: "GET",
    params
  })
}
// 获取订单详细信息
export function editOverOrder(params) {
  return Request({
    url: "overdueOrderController/editOverOrder",
    method: "GET",
    params
  })
}
// 修改逾期金回显
export function updateOverShow(params) {
  return Request({
    url: "overdueOrderController/updateOver",
    method: "GET",
    params
  })
}
// 修改逾期金
export function updateOver(data) {
  return Request({
    url: "overdueOrderController/updateOver",
    method: "POST",
    data
  })
}
