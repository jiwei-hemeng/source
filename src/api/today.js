import Request from "@/utils/request";
// 获取今日订单列表
export function listDayOrder(params) {
  return Request({
    url: "/order/listDayOrder",
    method: "GET",
    params,
  });
}
// 获取今日订单编辑数据
export function editDay(params) {
  return Request({
    url: "/order/editDay",
    method: "GET",
    params,
  });
}
