import React from "react";
import { NavBar, Icon, Card, InputItem, Button } from "antd-mobile";
import style from "./index.module.scss"
import "./index.scss"
export default class ReturnBack extends React.Component {
  state = {
    filelist: [], // 上传文件的文件列表
    summary: "", // 音频文件说明
    remark: "", // 备注
  }
  componentDidMount() {
    console.log(this.props.location.state)
  }
  submit = () => {
    let fd = new FormData();
    fd.append("file", this.state.filelist);
    fd.append("summary", this.state.summary);
    fd.append("remark", this.state.remark);
    console.log("FormData", fd)
  }
  renderCard = () => {
    return (
      <Card
        className={style.Card}
      >
        <Card.Body>
          <div className={style.CardItem}>
            <span className={style.title}>音频文件</span>
            <input type="file" accept="audio/*" onChange={e => {
              this.setState({filelist: e.target.files})
            }} />
          </div>
          <InputItem
            value={this.state.summary}
            placeholder="请输入音频文件说明..."
            onChange={v => this.setState({summary: v})}
          >音频文件说明</InputItem>
          <InputItem
            value={this.state.remark}
            placeholder="请输入备注..."
            onChange={v => this.setState({remark: v})}
          >备注</InputItem>
          <Button className={style.btn} type="primary" size="small" onClick={ ()=> { this.submit() }}>提交</Button>
        </Card.Body>
      </Card>
    )
  }
  rendreRecode = () => {
    return (
      <Card className={style.Recode}>
        <Card.Header title="操作记录"></Card.Header>
        <Card.Body>
        <table className={style.OrderInfo}>
            <thead>
              <tr>
                <th>订单id</th>
                <th>回访次数</th>
                <th>音频文件说明</th>
                <th>审核人id</th>
                <th>审核人姓名</th>
                <th>音频地址</th>
                <th>回访说明</th>
                <th>操作时间</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>f20210513125437280223</td>
              <td>1</td>
              <td>未支付</td>
              <td>2021-06-13 12:54:37	</td>
              <td>2021-06-13 12:54:37</td>
              <td>2375.93</td>
              <td>189.00</td>
              <td>189.00</td>
              <td>189.00</td>
            </tr>
            </tbody>
          </table>
        </Card.Body>
      </Card>
    )
  }
  render() {
    const { history } = this.props
    return (
      <div className={style.ReturnBack}>
        <NavBar
          className={style.NavBar}
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => history.goBack()}
        >回访信息</NavBar>
        {
          this.renderCard()
        }
        {
          this.rendreRecode()
        }
      </div>
    )
  }
}