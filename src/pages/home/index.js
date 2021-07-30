import React from "react";
import { SearchBar, Card, Button, Toast } from "antd-mobile";
import Virtualized from "@/component/virtualized";
import styles from "./index.module.scss";
import { getList } from "@/api/order";
import MyList from "@/component/MyList";
class Index extends React.Component {
  state = {
    list: [],
    count: 1, // list 总条数
  };
  // 加载更多
  loadMoreRows = ({ startIndex, stopIndex }) => {
    const pageNum = startIndex / 10 + 1;
    const { state } = this.props.location;
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
        const newlist = [...this.state.list, ...data.data];
        const totle = data.count;
        this.setState({
          count: totle,
          list: newlist,
        });
        return resolve();
      }
      return reject();
    });
  };
  rowRenderer = ({
    key, // Unique key within array of rows
    index, // 索引号
    isScrolling, // 当前项是否正在滚动中
    isVisible, // 当前项在List中是可见的
    style, // 重点属性：一定要给每一个行数添加该样式
  }) => {
    let item = this.state.list[index];
    if (item) {
      return (
        <div key={key} style={style}>
          {this.renderList(item)}
        </div>
      );
    }
  };
  componentWillUnmount = () => {
    this.setState = (state, callback) => {
      return;
    };
  };
  rowHeight = () => {
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
  renderList = (item) => {
    const list = [
      { title: "卖家姓名", value: item.student_name },
      { title: "代理人姓名", value: item.agentName },
      { title: "下单时间", value: item.set_up_time },
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
          <MyList list={list} />
          <div className={styles.btn_group}>
            <Button
              type="primary"
              className={styles.btn}
              size="small"
              icon={<i className="iconfont icon-dingdanxiangqingxianxing" />}
              onClick={() => {
                this.props.history.push({
                  pathname: "/overduedetails",
                  state: { id: item.summary_id, type: 1 },
                });
              }}
            >
              订单详情
            </Button>
            <Button
              type="warning"
              className={styles.btn}
              size="small"
              icon={<i className="iconfont icon-tuike" />}
              onClick={() => {
                this.props.history.push({
                  pathname: "/leaveschool",
                  state: { id: item.summary_id },
                });
              }}
            >
              退课
            </Button>
            <Button
              type="primary"
              className={styles.btn}
              size="small"
              icon={<i className="iconfont icon-bianzu" />}
              onClick={() => {
                this.props.history.push({
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
              icon={<i className="iconfont icon-returnback" />}
              onClick={() => {
                this.props.history.push({
                  pathname: "/returnBack",
                  state: { id: item.summary_id },
                });
              }}
            >
              回访信息
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  };
  render() {
    return (
      <div className={styles.Index}>
        <SearchBar
          placeholder="Search"
          onFocus={() => {
            this.props.history.push({
              pathname: "/overdueSearch",
              state: { type: "order" },
            });
          }}
        />
        <Virtualized
          count={this.state.count}
          list={this.state.list}
          minimumBatchSize={10}
          rowHeight={this.rowHeight}
          rowRenderer={this.rowRenderer}
          loadMoreRows={this.loadMoreRows}
        />
      </div>
    );
  }
}
export default Index;
