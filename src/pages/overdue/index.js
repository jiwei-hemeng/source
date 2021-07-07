// 逾期列表
import React from "react"
import { Card, SearchBar, Toast } from "antd-mobile";
import styles from "./index.module.scss";
import Virtualized from "@/component/virtualized";
import { listOverOrder } from "@/api/overdue";
export default class Overdue extends React.Component {
  state = {
    list: [],
    count: 1, // list 总条数
  }
  componentDidMount() {
    console.log("收索组件传来的值", this.props.location.state)
  }
  // 加载更多
  loadMoreRows= ({ startIndex, stopIndex }) => {
    const pageNum = startIndex / 10 + 1;
    const { state } = this.props.location
    return new Promise(async (resolve, reject) => {
      let params = {
        page: pageNum,
        size: 10,
        day: state ? state.overTime : undefined,
        truename: state ? state.student_name : undefined,
      }
      Toast.loading("正在加载中...", 0, null, false)
      const { data } = await listOverOrder(params)
      Toast.hide()
      if(data && data.code === 200) {
        const newlist = [...this.state.list, ...data.data]
        const totle = data.count;
        this.setState({
          count: totle,
          list: newlist
        })
        return resolve()
      }
      return reject()
      
    })
  }
  rowRenderer = ({
    key,         // Unique key within array of rows
    index,       // 索引号
    isScrolling, // 当前项是否正在滚动中
    isVisible,   // 当前项在List中是可见的
    style        // 重点属性：一定要给每一个行数添加该样式
  }) => {
    let item = this.state.list[index]
    if(!item){
      return (
        <div key={key} style={style}>正在加载中...</div>
      )
    }
    return (
      <div key={key} style={style}>
        <Card
          className={styles.Card}
          key={item.order_number}
          onClick={() => {
            this.props.history.push({ pathname: "/overduedetails", state: {id: item.summary_id, type: 2}});
          }}
        >
          <Card.Header
            title={<span className={styles.CardTitle}>{ item.order_number }</span>} 
            extra={
              <span className={item.order_status === "1"? styles.status: styles.end }>{item.order_status === "0"?"分期中": "已还清"}</span>
            }
          />
          <Card.Body>
            <div className={styles.cardItem}>
              <span className={styles.title}>卖家姓名</span><span>{item.student_name}</span>
            </div>
            <div className={styles.cardItem}>
              <span className={styles.title}>代理人姓名</span><span>{item.agentName}</span>
            </div>
            <div className={styles.cardItem}>
              <span className={styles.title}>下单时间</span><span>{item.set_up_time}</span>
            </div>
          </Card.Body>
        </Card>
      </div>
    )
  }
  rowHeight = () => {
    const clientWidth = document.body.clientWidth;
    if(clientWidth < 321){
      return 120
    } else if(clientWidth < 376) {
      return 135
    } else if(clientWidth < 415) {
      return 150
    } else {
      return 200
    }
  }
  render() {
    return (
      <div className={styles.Overdue}>
        <SearchBar
          placeholder="Search"
          onFocus={() => {
            this.props.history.push({
              pathname: "/overdueSearch",
              state: { type: "overdue"}
            })
          }}
        />
        <Virtualized
          count={ this.state.count }
          list={ this.state.list }
          minimumBatchSize={ 10 }
          rowHeight={ this.rowHeight }
          rowRenderer={ this.rowRenderer  }
          loadMoreRows={ this.loadMoreRows }
        />
      </div>
    )
  }
}