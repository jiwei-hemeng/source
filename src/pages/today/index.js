import React, { useState } from "react";
import styles from "./index.module.scss";
import Virtualized from "@/component/virtualized";
import { Card, Toast } from "antd-mobile";
import { getList } from "@/api/order";
const Today = ({ location }) => {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(1);
  // 设置行高
  const rowHeight = () => {
    const clientWidth = document.body.clientWidth;
    if (clientWidth < 321) {
      return 145;
    } else if (clientWidth < 376) {
      return 165;
    } else if (clientWidth < 415) {
      return 183;
    } else {
      return 235;
    }
  };
  // 加载更多
  const loadMoreRows = ({ startIndex, stopIndex }) => {
    const pageNum = startIndex / 10 + 1;
    const { state } = location;
    let params = {
      page: pageNum,
      size: 10,
      username: state ? state.student_name : undefined, // 买家姓名
      mobile: state ? state.moblie : undefined, // 买家手机号
      downOrdersn: state ? state.orderID : undefined,
      truename: state ? state.merchant : undefined, // 商家姓名
      fqstatus: state ? state.fenqiStatus : undefined, // 分期状态
      isvalid: state ? state.shenheStatus : undefined, // 审核状态
    };
    return new Promise(async (resolve, reject) => {
      Toast.loading("正在加载中...", 0, null, true);
      const { data } = await getList(params);
      Toast.hide();
      if (data && data.code === 200) {
        const newlist = [...list, ...data.data];
        const totle = data.count;
        setList(newlist);
        setCount(totle);
        return resolve();
      }
      return reject();
    });
  };
  const renderList = (item) => {
    return (
      <Card className={styles.Card} key={item.order_number}>
        <Card.Header
          title={<span className={styles.CardTitle}>{item.order_number}</span>}
          extra={
            <span
              className={item.order_status === "0" ? styles.status : styles.end}
            >
              {item.order_status === "0" ? "分期中" : "已还清"}
            </span>
          }
        />
      </Card>
    )
  };
  const rowRenderer = ({
    key, // Unique key within array of rows
    index, // 索引号
    isScrolling, // 当前项是否正在滚动中
    isVisible, // 当前项在List中是可见的
    style, // 重点属性：一定要给每一个行数添加该样式
  }) => {
    let item = list[index];
    if (item) {
      return (
        <div key={key} style={style}>
          {renderList(item)}
        </div>
      );
    }
  };
  return (
    <div className={styles.Today}>
      <Virtualized
        count={count}
        list={list}
        minimumBatchSize={10}
        rowHeight={rowHeight}
        rowRenderer={rowRenderer}
        loadMoreRows={loadMoreRows}
      />
    </div>
  );
};
export default Today;
