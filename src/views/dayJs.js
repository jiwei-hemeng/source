import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import dayjs from "dayjs";
import zh_CN from "dayjs/locale/zh-cn.js";
import relativeTime from "dayjs/plugin/relativeTime.js";
// 使用插件
dayjs.extend(relativeTime);
// 设置语言
dayjs.locale(zh_CN);

function DayJS(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(dayjs().format("YYYY-MM-DD HH:mm:ss"));
    console.log(dayjs("2023-01-01").fromNow());
    console.log(dayjs().add(1, "day").format("YYYY-MM-DD"));
  }, []);

  return (
    <>
      <div>{count}</div>
      <div>joinTime: {props.joinTime}</div>
      <button
        onClick={() => {
          props.setJoinTime(Date.now())
          setCount((count) => count + 1);
        }}
      >
        count++
      </button>
    </>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    joinTime: state.joinTime,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setJoinTime: (timeStrap) => {
      dispatch({
        type: "setJoinTime",
        value: timeStrap,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DayJS);
