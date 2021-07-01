import React from "react";
import { NavBar, Icon, Card, Button, Modal, InputItem, Radio, List } from "antd-mobile";
import style from "./index.module.scss"
const alert = Modal.alert;
const RadioItem = Radio.RadioItem;
const data = [
  {"id":64465,"loantype":3,"orderId":6176,"orderSn":"f2021011311251231392201","payorderSn":"","adminId":202,"agentId":2,"businessId":0,"userId":10013,"cuserId":101527,"money":833.33,"status":0,"paymethod":0,"truepaytime":0,"paytime":1613186712,"dijiqi":1,"lixi":100.11,"guanlifei":0,"fuwufei":0,"yuegong":3435.07,"guarantee":1,"islast":0,"latefee":171.75,"latelixi":2542.03,"yqmoney":2732.20,"dtime":0,"ispay":0,"prepayment":0.00,"isprepayment":0,"isdaihuan":0,"planid":0,"daitime":0,"payDate":"2021-02-13 11:25:12","truePayDate":null,"payStatus":null,"agent":null,"businessName":null,"courseName":null},
  {"id":64466,"loantype":3,"orderId":6176,"orderSn":"f2021011311251233382202","payorderSn":"","adminId":202,"agentId":2,"businessId":0,"userId":10013,"cuserId":101527,"money":833.33,"status":0,"paymethod":0,"truepaytime":0,"paytime":1615605912,"dijiqi":2,"lixi":100.11,"guanlifei":0,"fuwufei":0,"yuegong":3435.07,"guarantee":1,"islast":0,"latefee":0.00,"latelixi":0.00,"yqmoney":0.00,"dtime":0,"ispay":0,"prepayment":0.00,"isprepayment":0,"isdaihuan":0,"planid":0,"daitime":0,"payDate":"2021-03-13 11:25:12","truePayDate":null,"payStatus":null,"agent":null,"businessName":null,"courseName":null},
  {"id":64467,"loantype":3,"orderId":6176,"orderSn":"f2021011311251262018903","payorderSn":"","adminId":202,"agentId":2,"businessId":0,"userId":10013,"cuserId":101527,"money":833.33,"status":0,"paymethod":0,"truepaytime":0,"paytime":1618284312,"dijiqi":3,"lixi":100.11,"guanlifei":0,"fuwufei":0,"yuegong":933.44,"guarantee":1,"islast":0,"latefee":0.00,"latelixi":0.00,"yqmoney":0.00,"dtime":0,"ispay":0,"prepayment":0.00,"isprepayment":0,"isdaihuan":0,"planid":0,"daitime":0,"payDate":"2021-04-13 11:25:12","truePayDate":null,"payStatus":null,"agent":null,"businessName":null,"courseName":null},
  {"id":64468,"loantype":3,"orderId":6176,"orderSn":"f2021011311251231516804","payorderSn":"","adminId":202,"agentId":2,"businessId":0,"userId":10013,"cuserId":101527,"money":833.33,"status":0,"paymethod":0,"truepaytime":0,"paytime":1620876312,"dijiqi":4,"lixi":100.11,"guanlifei":0,"fuwufei":0,"yuegong":933.44,"guarantee":1,"islast":0,"latefee":0.00,"latelixi":0.00,"yqmoney":0.00,"dtime":0,"ispay":0,"prepayment":0.00,"isprepayment":0,"isdaihuan":0,"planid":0,"daitime":0,"payDate":"2021-05-13 11:25:12","truePayDate":null,"payStatus":null,"agent":null,"businessName":null,"courseName":null},
  {"id":64469,"loantype":3,"orderId":6176,"orderSn":"f2021011311251247757105","payorderSn":"","adminId":202,"agentId":2,"businessId":0,"userId":10013,"cuserId":101527,"money":833.33,"status":0,"paymethod":0,"truepaytime":0,"paytime":1623554712,"dijiqi":5,"lixi":100.11,"guanlifei":0,"fuwufei":0,"yuegong":933.44,"guarantee":1,"islast":0,"latefee":0.00,"latelixi":0.00,"yqmoney":0.00,"dtime":0,"ispay":0,"prepayment":0.00,"isprepayment":0,"isdaihuan":0,"planid":0,"daitime":0,"payDate":"2021-06-13 11:25:12","truePayDate":null,"payStatus":null,"agent":null,"businessName":null,"courseName":null},
  {"id":64470,"loantype":3,"orderId":6176,"orderSn":"f2021011311251242886706","payorderSn":"","adminId":202,"agentId":2,"businessId":0,"userId":10013,"cuserId":101527,"money":833.33,"status":0,"paymethod":0,"truepaytime":0,"paytime":1626146712,"dijiqi":6,"lixi":100.11,"guanlifei":0,"fuwufei":0,"yuegong":933.44,"guarantee":1,"islast":0,"latefee":0.00,"latelixi":0.00,"yqmoney":0.00,"dtime":0,"ispay":0,"prepayment":0.00,"isprepayment":0,"isdaihuan":0,"planid":0,"daitime":0,"payDate":"2021-07-13 11:25:12","truePayDate":null,"payStatus":null,"agent":null,"businessName":null,"courseName":null},
  {"id":64471,"loantype":3,"orderId":6176,"orderSn":"f2021011311251297751707","payorderSn":"","adminId":202,"agentId":2,"businessId":0,"userId":10013,"cuserId":101527,"money":833.33,"status":0,"paymethod":0,"truepaytime":0,"paytime":1628825112,"dijiqi":7,"lixi":100.11,"guanlifei":0,"fuwufei":0,"yuegong":933.44,"guarantee":1,"islast":0,"latefee":0.00,"latelixi":0.00,"yqmoney":0.00,"dtime":0,"ispay":0,"prepayment":0.00,"isprepayment":0,"isdaihuan":0,"planid":0,"daitime":0,"payDate":"2021-08-13 11:25:12","truePayDate":null,"payStatus":null,"agent":null,"businessName":null,"courseName":null},
  {"id":64472,"loantype":3,"orderId":6176,"orderSn":"f2021011311251221776108","payorderSn":"","adminId":202,"agentId":2,"businessId":0,"userId":10013,"cuserId":101527,"money":833.33,"status":0,"paymethod":0,"truepaytime":0,"paytime":1631503512,"dijiqi":8,"lixi":100.11,"guanlifei":0,"fuwufei":0,"yuegong":933.44,"guarantee":1,"islast":0,"latefee":0.00,"latelixi":0.00,"yqmoney":0.00,"dtime":0,"ispay":0,"prepayment":0.00,"isprepayment":0,"isdaihuan":0,"planid":0,"daitime":0,"payDate":"2021-09-13 11:25:12","truePayDate":null,"payStatus":null,"agent":null,"businessName":null,"courseName":null},
  {"id":64473,"loantype":3,"orderId":6176,"orderSn":"f2021011311251257496809","payorderSn":"","adminId":202,"agentId":2,"businessId":0,"userId":10013,"cuserId":101527,"money":833.33,"status":0,"paymethod":0,"truepaytime":0,"paytime":1634095512,"dijiqi":9,"lixi":100.11,"guanlifei":0,"fuwufei":0,"yuegong":933.44,"guarantee":1,"islast":0,"latefee":0.00,"latelixi":0.00,"yqmoney":0.00,"dtime":0,"ispay":0,"prepayment":0.00,"isprepayment":0,"isdaihuan":0,"planid":0,"daitime":0,"payDate":"2021-10-13 11:25:12","truePayDate":null,"payStatus":null,"agent":null,"businessName":null,"courseName":null},
  {"id":64474,"loantype":3,"orderId":6176,"orderSn":"f2021011311251243745410","payorderSn":"","adminId":202,"agentId":2,"businessId":0,"userId":10013,"cuserId":101527,"money":833.33,"status":0,"paymethod":0,"truepaytime":0,"paytime":1636773912,"dijiqi":10,"lixi":100.11,"guanlifei":0,"fuwufei":0,"yuegong":933.44,"guarantee":1,"islast":0,"latefee":0.00,"latelixi":0.00,"yqmoney":0.00,"dtime":0,"ispay":0,"prepayment":0.00,"isprepayment":0,"isdaihuan":0,"planid":0,"daitime":0,"payDate":"2021-11-13 11:25:12","truePayDate":null,"payStatus":null,"agent":null,"businessName":null,"courseName":null}
]
export default class Periodization extends React.Component {
  state = {
    modal: false,
    orderId: "", // 支付单号
    money: "",
    RadioV: ""
  }
  onChange = (v) => {
    this.setState({
      RadioV: v
    })
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
          console.log('ok'); 
        } }]}
      >
        <div style={{ height: 360, overflow: 'scroll' }}>
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
    return data.map(item => {
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
            <div className={style.btn_group}>
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
            </div>
          </Card.Body>
        </Card>
      )
    })
  }
  render() {
    const { history, location } = this.props
    console.log("传来的参数", location.state)
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