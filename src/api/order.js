// 正常订单相关接口
import Request from "@/utils/request";
// 测试接口
export function getList(data) {
  return Request({
    url: "/order/list",
    method: "POST",
    data
  })
}
// 获取回访信息
export function backInfo(orderId) {
  return Request({
    url: `/order/backInfo/${orderId}`,
  })
}
// 上传回访信息
export function saveProof(data) {
  return Request({
    url: "/order/saveProof",
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    data
  })
}
// 退课信息
export function removeCourse(orderId) {
  return Request({
    url: `/order/removeCourse/${orderId}`,
  })
}
// 退课的接口
export function removeCourseAdd(data) {
  return Request({
    url: "/order/removeCourseAdd",
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    data,
  })
}
// 分期详情
export function repayList(orderId) {
  return Request({
    url: `/order/repayList/${orderId}`,
  })
}
