import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import styles from "./index.module.scss";
import Virtualized from "@/component/virtualized";
import GoTop from "@/component/GoTop";
import { Card, Toast, SearchBar, Button } from "antd-mobile";
import { listDayOrder } from "@/api/today";
import MyList from "@/component/MyList";
const Today = () => {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(1);
  const [student_name, set_student_name] = useState("");
  let isUnmounted = useRef(true);
  const history = useHistory();
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
      return 213;
    } else {
      return 270;
    }
  };
  // 加载更多
  const loadMoreRows = ({ startIndex, stopIndex }) => {
    const pageNum = startIndex / 10 + 1;
    let params = {
      page: pageNum,
      size: 10,
      truename: student_name === "" ? undefined : student_name,
    };
    return new Promise(async (resolve, reject) => {
      Toast.loading("正在加载中...", 0, null, true);
      const { data } = await listDayOrder(params);
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
    const renderArr = [
      { title: "卖家姓名", value: item.student_name },
      { title: "机构名称", value: item.merchant_name },
      { title: "商品名称", value: item.course_name },
      { title: "商品价格", value: item.money },
    ];
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
          <MyList list={renderArr} />
          <div className={styles.btns}>
            <Button
              type="primary"
              className={styles.btn}
              size="small"
              icon={<i className="iconfont icon-details" />}
              onClick={() => {
                history.push({
                  pathname: "/periodization",
                  state: { id: item.summary_id },
                });
              }}
            >
              分期详情
            </Button>
            <Button
              type="primary"
              className={styles.btn}
              size="small"
              icon={<i className="iconfont icon-details" />}
              onClick={() => {
                history.push({
                  pathname: "/edit",
                  state: { id: item.summary_id, type: 1 },
                });
              }}
            >
              编辑
            </Button>
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
