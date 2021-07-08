import React from "react";
import { NavBar, Icon, Card, InputItem, Button, Toast } from "antd-mobile";
import { backInfo, saveProof } from "@/api/order";
import style from "./index.module.scss";
import "./index.scss";
export default class Returnback extends React.Component {
  state = {
    filelist: [], // 上传文件的文件列表
    summary: "", // 音频文件说明
    remark: "", // 备注
    backInfo: []
  }
  async componentDidMount() {
    Toast.loading("正在加载中...", 0);
    const { data } = await backInfo(this.props.location.state.id);
    Toast.hide();
    if(data && data.code === 200) {
      this.setState({
        backInfo: data.data
      })
    }
  }
  submit = async () => {
    let fd = new FormData();
    fd.append("file", this.state.filelist[0]);
    fd.append("fileDesc", this.state.summary);
    fd.append("descript", this.state.remark);
    fd.append("orderId", this.props.location.state.id);
    console.log("FormData", fd)
    Toast.loading("正在加载中...", 0);
    const { data } = await saveProof(fd);
    Toast.hide();
    if(data && data.code === 200) {
      Toast.success("操作成功", 2);
    }
  }
  renderCard = () => {
    return (
      <Card
        className={style.Card}
      >
        <Card.Body>
          <div className={style.CardItem}>
            <span className={style.title}>音频文件</span>
            <Button
              className={style.btn}
              type="primary"
              icon={<i className="iconfont icon-upload"></i>}
              onClick={() => {
                this.fileClick.click()
              }}
            >选择文件</Button>
            <input
              className={style.fileBtn}
              type="file"
              accept="audio/*"
              onChange={e => {
                this.setState({filelist: e.target.files})
              }}
              ref={ref => this.fileClick = ref}
            />
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
          <Button className={style.btn} type="primary" onClick={ ()=> { this.submit() }}>提交</Button>
        </Card.Body>
      </Card>
    )
  }
  rendreRecode = () => {
    const { backInfo } = this.state
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
              {
                backInfo.map(item => {
                  return (
                    <tr key={item.id}>
                      <td>{item.orderId}</td>
                      <td>{item.visitNum}</td>
                      <td>{item.audioDesc}</td>
                      <td>{item.adminId}</td>
                      <td>{item.adminUsername}</td>
                      <td>{item.soundUrl}</td>
                      <td>{item.descText}</td>
                      <td>{item.addtime}</td>
                      <td>{item.scene}</td>
                    </tr>
                  )
                })
              }
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