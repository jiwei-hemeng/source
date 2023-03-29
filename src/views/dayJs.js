import React, { useEffect } from "react";
import dayjs from "dayjs";
import zh_CN from "dayjs/locale/zh-cn.js";
import relativeTime from "dayjs/plugin/relativeTime.js";
// 使用插件
dayjs.extend(relativeTime);
// 设置语言
dayjs.locale(zh_CN);
export default function DayJS() {
  useEffect(() => {
    console.log(dayjs().format("YYYY-MM-DD HH:mm:ss"));
    console.log(dayjs("2022-12-12").fromNow());
    console.log(dayjs().add(1, "day").format("YYYY-MM-DD"));
  }, []);
  return (
    <>
      <div>dayjs</div>
    </>
  );
}
