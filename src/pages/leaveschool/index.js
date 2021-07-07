import React from "react";
import { NavBar, Icon, Card, ImagePicker, Button, TextareaItem, Modal } from "antd-mobile";
// import {  } from "@/api/order";
import styles from "./index.module.scss";
const alert = Modal.alert;
export default class leaveschool extends React.Component {
  state = {
    files: [],
    remark: ""
  }
  renderBaseinfo = () => {
    return (
      <>
        <div className={ styles.baseInfo }>
          <div className={ styles.title }>订单总Id</div>
          <div className={ styles.content }>6248</div>
        </div>
        <div className={ styles.baseInfo }>
          <div className={ styles.title }>订单号</div>
          <div className={ styles.content }>s20210619142718751860</div>
        </div>
        <div className={ styles.baseInfo }>
          <div className={ styles.title }>买家姓名</div>
          <div className={ styles.content }>侯嘉琪</div>
        </div>
        <div className={ styles.baseInfo }>
          <div className={ styles.title }>手机号</div>
          <div className={ styles.content }>17634504335</div>
        </div>
        <div className={ styles.baseInfo }>
          <div className={ styles.title }>商品价格</div>
          <div className={ styles.content }>6980.00</div>
        </div>
        <div className={ styles.baseInfo }>
          <div className={ styles.title }>贷款费用</div>
          <div className={ styles.content }>5980.00</div>
        </div>
        <div className={ styles.baseInfo }>
          <div className={ styles.title }>分期状态</div>
          <div className={ styles.content }>分期中</div>
        </div>
        <div className={ styles.baseInfo }>
          <div className={ styles.title }>下单时间</div>
          <div className={ styles.content }>2021-06-19 02:27:18</div>
        </div>
        <div className={ styles.baseInfo }>
          <div className={ styles.title }>延期期数</div>
          <div className={ styles.content }>0</div>
        </div>
      </>
    )
  }
  renderLeave = () => {
    return (
      <Card
        className={styles.Card}
      >
        <Card.Header title="基本信息"></Card.Header>
        <Card.Body>
          {
            this.renderBaseinfo()
          }
        </Card.Body>
      </Card>
    )
  }
  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
  }
  renderStoreinfo = () => {
    return (
      <>
        <div className={ styles.baseInfo }>
          <div className={ styles.title }>商品名称</div>
          <div className={ styles.content }>淘宝初级美工</div>
        </div>
        <div className={ styles.baseInfo }>
          <div className={ styles.title }>月供</div>
          <div className={ styles.content }>996.67</div>
        </div>
        <div className={ styles.baseInfo }>
          <div className={ styles.title }>下期还款期数</div>
          <div className={ styles.content }>2</div>
        </div>
        <div className={ styles.baseInfo }>
          <div className={ styles.title }>下期应还款时间</div>
          <div className={ styles.content }>2021-06-19 02:27:18</div>
        </div>
        <div className={ styles.baseInfo }>
          <div className={ styles.title }>商家是否担保</div>
          <div className={ styles.content }>是</div>
        </div>
        <div className={ styles.special }>
          <div className={ styles.title }>退课申请表</div>
          <ImagePicker
            files={ this.state.files}
            onChange={this.onChange}
            inline
            selectable={this.state.files.length === 0}
          />
        </div>
        <TextareaItem
          title="申请退课原因"
          placeholder="请输入申请退课原因..."
          value={this.state.remark}
          onChange={ v => this.setState({ remark: v})}
          autoHeight
          rows={2}
        />
        <Button
          type="primary"
          className={styles.uploadbtn}
          onClick={() => {
            alert("取消订单提示", <div>您确认要取消订单吗~</div>, [
              { text: '取消', onPress: () => console.log('第0个按钮被点击了') },
              { text: '确认', onPress: () => console.log('第1个按钮被点击了') }
            ])
          }}
        >取消订单</Button>
      </>
    )
  }
  renderStoreInfo = () => {
    return (
      <Card
        className={styles.Card}
      >
        <Card.Header title="商品详情"></Card.Header>
        <Card.Body>
          {
            this.renderStoreinfo()
          }
        </Card.Body>
      </Card>
    )
  }
  render() {
    const { history } = this.props
    return (
      <div className={styles.leaveschool}>
        <NavBar
          className={styles.NavBar}
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => history.goBack()}
        >退课</NavBar>
        {
          this.renderLeave()
        }
        {
          this.renderStoreInfo()
        }
      </div>
    )
  }
}