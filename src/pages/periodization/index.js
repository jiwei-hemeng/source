import React from "react";
import { NavBar, Icon, Card, Toast } from "antd-mobile";
import { repayList } from "@/api/order";
import style from "./index.module.scss";
export default class Periodization extends React.Component {
  state = {
    modal: false,
    orderId: "", // 支付单号
    money: "",
    RadioV: "",
    repayList: [],
  };
  onChange = (v) => {
    this.setState({
      RadioV: v,
    });
  };
  async componentDidMount() {
    Toast.loading("正在加载中...", 0);
    const { data } = await repayList(this.props.location.state.id);
    Toast.hide();
    if (data && data.code === 200) {
      this.setState({
        repayList: data.data,
      });
    }
  }
  addZero(value) {
    return value < 10 ? "0" + value : value;
  }
  formattime = (time) => {
    if (time === 0) {
      return "";
    }
    const date = new Date(time * 1000);
    return `${date.getFullYear()}-${this.addZero(
      date.getMonth() + 1
    )}-${this.addZero(date.getDay())} ${this.addZero(
      date.getHours()
    )}:${this.addZero(date.getMinutes())}:${this.addZero(
      date.getMilliseconds()
    )}`;
  };
  renderList = () => {
    const { repayList } = this.state;
    return repayList.map((item) => {
      return (
        <Card className={style.Card} key={item.orderSn}>
          <Card.Header
            title={<span className={style.CardTitle}>{item.orderSn}</span>}
            extra={
              <span className={item.status === 0 ? style.status : style.end}>
                {item.status === 0 ? "未支付" : "已支付"}
              </span>
            }
          />
          <Card.Body>
            <div className={style.CardItem}>
              <span className={style.title}>期数</span>
              <span>{item.dijiqi}</span>
            </div>
            <div className={style.CardItem}>
              <span className={style.title}>应付款时间</span>
              <span>{this.formattime(item.paytime)}</span>
            </div>
            <div className={style.CardItem}>
              <span className={style.title}>实际支付时间</span>
              <span>{this.formattime(item.truepaytime)}</span>
            </div>
            <div className={style.CardItem}>
              <span className={style.title}>月供</span>
              <span>{item.yuegong}</span>
            </div>
            <div className={style.CardItem}>
              <span className={style.title}>逾期金额</span>
              <span>{item.yqmoney}</span>
            </div>
          </Card.Body>
        </Card>
      );
    });
  };
  render() {
    const { history } = this.props;
    return (
      <div className={style.Periodization}>
        <NavBar
          className={style.NavBar}
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => history.goBack()}
        >
          分期详情页
        </NavBar>
        {this.renderList()}
      </div>
    );
  }
}
