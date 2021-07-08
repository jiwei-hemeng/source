import React from "react";
import { NavBar, Icon, Card, ImagePicker, Button, TextareaItem, Modal, Toast } from "antd-mobile";
import { removeCourse, removeCourseAdd } from "@/api/order";
import styles from "./index.module.scss";
const alert = Modal.alert;
export default class leaveschool extends React.Component {
  state = {
    files: [],
    remark: "",
    backInfo: {}
  }
  componentDidMount = async () => {
    Toast.loading("正在加载中...", 0);
    const { data } = await removeCourse(this.props.location.state.id);
    Toast.hide();
    if(data && data.code === 200) {
      this.setState({
        backInfo: data.data
      })
    }
  }
  renderBaseinfo = () => {
    const { backInfo } = this.state
    return (
      <>
        <div className={ styles.baseInfo }>
          <div className={ styles.title }>订单总Id</div>
          <div className={ styles.content }>{backInfo.summary_id}</div>
        </div>
        <div className={ styles.baseInfo }>
          <div className={ styles.title }>订单号</div>
          <div className={ styles.content }>{backInfo.order_number}</div>
        </div>
        <div className={ styles.baseInfo }>
          <div className={ styles.title }>买家姓名</div>
          <div className={ styles.content }>{backInfo.student_name}</div>
        </div>
        <div className={ styles.baseInfo }>
          <div className={ styles.title }>手机号</div>
          <div className={ styles.content }>{backInfo.person_phone}</div>
        </div>
        <div className={ styles.baseInfo }>
          <div className={ styles.title }>商品价格</div>
          <div className={ styles.content }>{backInfo.money}</div>
        </div>
        <div className={ styles.baseInfo }>
          <div className={ styles.title }>贷款费用</div>
          <div className={ styles.content }>{backInfo.dk_money}</div>
        </div>
        <div className={ styles.baseInfo }>
          <div className={ styles.title }>分期状态</div>
          <div className={ styles.content }>{backInfo.order_status}</div>
        </div>
        <div className={ styles.baseInfo }>
          <div className={ styles.title }>下单时间</div>
          <div className={ styles.content }>{backInfo.set_up_time}</div>
        </div>
        <div className={ styles.baseInfo }>
          <div className={ styles.title }>延期期数</div>
          <div className={ styles.content }>{backInfo.delay_stages}</div>
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
    this.setState({
      files,
    });
  }
  renderStoreinfo = () => {
    const { backInfo } = this.state
    return (
      <>
        <div className={ styles.baseInfo }>
          <div className={ styles.title }>商品名称</div>
          <div className={ styles.content }>{backInfo.course_name}</div>
        </div>
        <div className={ styles.baseInfo }>
          <div className={ styles.title }>月供</div>
          <div className={ styles.content }>{backInfo.yue_gong}</div>
        </div>
        <div className={ styles.baseInfo }>
          <div className={ styles.title }>下期还款期数</div>
          <div className={ styles.content }>{backInfo.dijiqi}</div>
        </div>
        <div className={ styles.baseInfo }>
          <div className={ styles.title }>下期应还款时间</div>
          <div className={ styles.content }>{backInfo.nexttime}</div>
        </div>
        <div className={ styles.baseInfo }>
          <div className={ styles.title }>商家是否担保</div>
          <div className={ styles.content }>{backInfo.deposit_status}</div>
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
              { text: '取消', onPress: () => {} },
              { text: '确认', onPress: () => this.submit() }
            ])
          }}
        >取消订单</Button>
      </>
    )
  }
  submit = async () => {
    const fd = new FormData();
    fd.append("file", this.state.files[0].file);
    const obj = {
      ...this.state.backInfo,
      desc_text: this.state.remark
    }
    fd.append("removeCourse", JSON.stringify(obj));
    Toast.loading("正在加载中...", 0);
    const { data } = await removeCourseAdd(fd)
    Toast.hide();
    if(data && data.code === 200) {
      Toast.success("操作成功", 2);
      this.props.history.push("/")
    }
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