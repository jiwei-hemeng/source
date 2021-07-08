import React from "react";
import { NavBar, Icon, Card, Modal, InputItem, Radio, List, Toast } from "antd-mobile";
import { repayList } from "@/api/order";
import style from "./index.module.scss";
// const alert = Modal.alert;
const RadioItem = Radio.RadioItem;
export default class Periodization extends React.Component {
  state = {
    modal: false,
    orderId: "", // 支付单号
    money: "",
    RadioV: "",
    repayList: [],
  }
  onChange = (v) => {
    this.setState({
      RadioV: v
    })
  }
  async componentDidMount() {
    Toast.loading("正在加载中...", 0);
    const { data } = await repayList(this.props.location.state.id);
    Toast.hide();
    if(data && data.code === 200) {
      this.setState({
        repayList: data.data
      })
    }
  }
  renderModal = () => {
    const data = [
      { value: 0, label: '月供' },
      { value: 1, label: '服务费' },
      { value: 2, label: '违约金' },
    ];
    return (
      <Modal
        popup
        visible={this.state.modal}
        transparent
        maskClosable
        animationType="slide-up"
        onClose={() => {
          this.setState({
            modal: false
          })
        }}
        title="线下还款"
        footer={[{ text: '提交', onPress: () => {
          this.setState({modal: false})
        } }]}
      >
        <div style={{ height: 345, overflow: 'scroll' }}>
          <InputItem
            value={this.props.location.state.id}
            placeholder="请输入订单编号..."
          >订单编号</InputItem>
          <InputItem
            value={this.state.money}
            placeholder="请输入支付金额..."
            onChange={v => this.setState({money: v})}
          >支付金额</InputItem>
          <InputItem
            value={this.state.orderId}
            placeholder="请输入支付单号..."
            onChange={v => this.setState({orderId: v})}
          >支付单号</InputItem>
          <List renderHeader={() => "支付类型"}>
            {data.map(i => (
              <RadioItem key={i.value} checked={this.state.RadioV === i.value} onChange={() => this.onChange(i.value)}>
                {i.label}
              </RadioItem>
            ))}
          </List>
        </div>
      </Modal>
    )
  }
  renderList = () => {
    const { repayList } = this.state
    return repayList.map(item => {
      return (
        <Card
          className={style.Card}
          key={item.orderSn}
        >
          <Card.Header
            title={<span className={style.CardTitle}>{item.orderSn}</span>} 
            extra={
              <span className={item.ispay === 0? style.status: style.end }>{item.ispay === 0? "未支付": "已支付"}</span>
            }
          />
          <Card.Body>
            <div className={style.CardItem}><span className={style.title}>期数</span><span>{item.dijiqi}</span></div>
            <div className={style.CardItem}><span className={style.title}>应付款时间</span><span>{item.payDate}</span></div>
            <div className={style.CardItem}><span className={style.title}>实际支付时间</span><span>{item.payDate}</span></div>
            <div className={style.CardItem}><span className={style.title}>月供</span><span>{item.yuegong}</span></div>
            <div className={style.CardItem}><span className={style.title}>逾期金额</span><span>{item.yqmoney}</span></div>
            {/* <div className={style.btn_group}>
              <Button
                type="ghost"
                className={style.btn}
                size="small" inline
                onClick={() => {
                  alert("扣款提醒", "您确认要扣款吗~", [
                    { text: "取消", onPress: () => console.log('cancel') },
                    { text: "确认", onPress: () => console.log('ok') },
                  ])
                }}
              >扣款</Button>
              <Button
                type="ghost"
                className={style.btn}
                size="small"
                inline
                onClick={() => {
                  this.setState({
                    modal: true
                  })
                }}
              >线下还款</Button>
            </div> */}
          </Card.Body>
        </Card>
      )
    })
  }
  render() {
    const { history } = this.props
    return (
      <div className={style.Periodization}>
        <NavBar
          className={style.NavBar}
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => history.goBack()}
        >分期详情页</NavBar>
        {
          this.renderList()
        }
        {
          this.renderModal()
        }
      </div>
    )
  }
}