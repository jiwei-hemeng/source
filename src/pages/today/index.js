import React, { useState, useEffect, useRef } from "react";
import styles from "./index.module.scss";
import Virtualized from "@/component/virtualized";
import GoTop from "@/component/GoTop";
import { Card, Toast, SearchBar } from "antd-mobile";
import { getList } from "@/api/order";
const Today = ({ location }) => {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(1);
  const [student_name, set_student_name] = useState("");
  let isUnmounted = useRef(true);
  useEffect(() => {
    isUnmounted.current = true;
    return () => {
      isUnmounted.current = false;
    };
  });
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
    let params = {
      page: pageNum,
      size: 10,
      username: student_name === "" ? undefined : student_name,
    };
    return new Promise(async (resolve, reject) => {
      Toast.loading("正在加载中...", 0, null, true);
      const { data } = await getList(params);
      Toast.hide();
      if (data && data.code === 200) {
        const newlist = [...new Set([...list, ...data.data])];
        const totle = data.count;
        if (isUnmounted.current) {
          setList(newlist);
          setCount(totle);
        }
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
        <Card.Body>
          <div className={styles.cardItem}>
            <span className={styles.title}>卖家姓名</span>
            <span>{item.student_name}</span>
          </div>
          <div className={styles.cardItem}>
            <span className={styles.title}>机构名称</span>
            <span>{item.merchant_name}</span>
          </div>
          <div className={styles.cardItem}>
            <span className={styles.title}>商品名称</span>
            <span>{item.course_name}</span>
          </div>
          <div className={styles.cardItem}>
            <span className={styles.title}>商品价格</span>
            <span>{item.money}</span>
          </div>
        </Card.Body>
      </Card>
    );
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
      <SearchBar
        value={student_name}
        placeholder="请输入卖家姓名"
        onChange={(v) => set_student_name(v)}
        onSubmit={(v) => {
          loadMoreRows({
            startIndex: 0,
          });
        }}
        onCancel={() => {
          set_student_name("");
          loadMoreRows({
            startIndex: 0,
          });
        }}
      />
      <Virtualized
        count={count}
        list={list}
        minimumBatchSize={10}
        rowHeight={rowHeight}
        rowRenderer={rowRenderer}
        loadMoreRows={loadMoreRows}
      />
      <GoTop />
    </div>
  );
};
export default Today;
