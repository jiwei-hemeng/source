import React from "react";
import {
  NavBar,
  Icon,
  Card,
  Button,
  TextareaItem,
  Modal,
  List,
  InputItem,
  Radio,
  Toast,
} from "antd-mobile";
import {
  editOverOrder,
  updateOverShow,
  updateOver,
  updateReturn,
  orderReview,
  updateReturnInfo,
} from "@/api/overdue";
import MyTable from "@/component/MyTable";
import MyList from "@/component/MyList";
import IdCardQualified from "./component/idCardQualified";
import UploadAudio from "./component/uploadAudio";
import style from "./index.module.scss";
import axios from "axios";
const RadioItem = Radio.RadioItem;
export default class Overduedetails extends React.Component {
  state = {
    files: [],
    multiple: false,
    visible: false,
    course: false,
    PerPay: false,
    AuditStatus: 1, // 审核状态
    orderDetails: {},
    OverShow: {}, // 修改逾期金展示的信息
    pastdueFirst: "", // 修改后的逾期金
    remark: "", // 修改逾期金的备注
    record: "", // 回访记录
    Qualified: 0, // 身份证是否合格
    UploadAudioObj: {}, // 上传的音频文件
  };
  componentWillUnmount = () => {
    this.setState = (state, callback) => {
      return;
    };
  };
  componentDidMount = async () => {
    await this.getOrderDetails();
    await this.updateOverShow();
  };
  updateOverShow = async () => {
    Toast.loading("正在加载中...", 0);
    const { data } = await updateOverShow({
      orderId: this.props.location.state.id,
    });
    Toast.hide();
    if (data.code === 200) {
      this.setState({
        OverShow: data.data,
      });
    }
  };
  getOrderDetails = async () => {
    Toast.loading("正在加载中...", 0);
    const { data } = await editOverOrder({
      orderId: this.props.location.state.id,
    });
    Toast.hide();
    if (data.code === 200 && data.data) {
      const fileList = [
        { url: data.data.fqOrder.image_front, id: "身份证正面面照片" },
        { url: data.data.fqOrder.image_fan, id: "身份证国徽面照片" },
        { url: data.data.fqOrder.image_hand, id: "手持身份证照片" },
      ];
      this.setState({
        orderDetails: data.data,
        files: fileList,
        AuditStatus: data.data.fqOrder.sh_status,
      });
    }
  };
  renderBasicinformation = () => {
    const { fqOrder } = this.state.orderDetails;
    if (fqOrder) {
      const Arr = [
        { title: "订单ID", value: fqOrder.summary_id },
        { title: "订单号", value: fqOrder.order_number },
        { title: "卖家姓名", value: fqOrder.student_name },
        { title: "手机号", value: fqOrder.person_phone },
        { title: "商品价格", value: fqOrder.money },
        { title: "贷款费用", value: fqOrder.dk_money },
        { title: "分期状态", value: fqOrder.order_status },
        { title: "下单时间", value: fqOrder.set_up_time },
        { title: "延期期数", value: fqOrder.delay_stages },
      ];
      return (
        <Card className={style.Card}>
          <Card.Header title="基本信息" />
          <Card.Body>
            <MyList list={Arr} />
          </Card.Body>
        </Card>
      );
    }
  };
  renderMember = () => {
    const { fqOrder } = this.state.orderDetails;
    if (fqOrder) {
      const Arr = [
        { title: "剩余本金", value: fqOrder.syMoney },
        { title: "已还本息", value: fqOrder.paidAllMoney },
        { title: "逾期本息", value: fqOrder.overdueAllMoney },
        { title: "罚息", value: fqOrder.faxi },
        { title: "逾期天数", value: fqOrder.yq_day },
      ];
      return (
        <Card className={style.Card}>
          <Card.Header title="会员还款详情" />
          <Card.Body>
            <MyList list={Arr} />
          </Card.Body>
        </Card>
      );
    }
  };
  renderProductDetails = () => {
    const { fqOrder } = this.state.orderDetails;
    if (fqOrder) {
      const Arr = [
        { title: "商品名称", value: fqOrder.course_name },
        { title: "期数", value: fqOrder.stages_number },
        { title: "月供", value: fqOrder.yue_gong },
        { title: "下期还款期数", value: fqOrder.dijiqi },
        { title: "下期应还款时间", value: fqOrder.nexttime },
        {
          title: "商家是否担保",
          value: fqOrder.deposit_status === 1 ? "是" : "否",
        },
        { title: "机构名称", value: fqOrder.merchant_name },
      ];
      return (
        <Card className={style.Card}>
          <Card.Header title="商品详情" />
          <Card.Body>
            <MyList list={Arr} />
          </Card.Body>
        </Card>
      );
    }
  };
  renderUserInfo = () => {
    const { fqOrder } = this.state.orderDetails;
    if (fqOrder) {
      const Arr = [
        { title: "买家姓名", value: fqOrder.student_name },
        { title: "买家手机号", value: fqOrder.person_phone },
        { title: "现居住地址", value: fqOrder.fqUrgent.myaddress },
        { title: "月收入额", value: fqOrder.fqUrgent.money },
        { title: "公司名称", value: fqOrder.fqUrgent.mycompany },
        { title: "任职部门", value: fqOrder.fqUrgent.mybumen },
        { title: "公司地址", value: fqOrder.fqUrgent.companyAddress },
        { title: "公司座机", value: fqOrder.fqUrgent.companyPhone },
        { title: "亲属姓名", value: fqOrder.fqUrgent.fmname },
        { title: "关系", value: fqOrder.fqUrgent.guanxi },
        { title: "电话", value: fqOrder.fqUrgent.fmmobile },
        { title: "婚姻", value: fqOrder.fqUrgent.hunyin },
        { title: "配偶", value: fqOrder.fqUrgent.duixiang },
        { title: "配偶电话", value: fqOrder.fqUrgent.dxmobile },
        { title: "社会联系人", value: fqOrder.fqUrgent.friendname },
        { title: "电话", value: fqOrder.fqUrgent.friendmobile },
        { title: "公司联系人", value: fqOrder.fqUrgent.companyContacts },
        { title: "电话", value: fqOrder.fqUrgent.contactsMobile },
      ];
      return (
        <Card className={style.Card}>
          <Card.Header title="用户信用信息" />
          <Card.Body>
            <MyList list={Arr} />
          </Card.Body>
        </Card>
      );
    }
  };
  // 实名身份信息
  renderIdInfo = () => {
    const { files } = this.state;
    let fqRenzheng = {};
    if (this.state.orderDetails.fqOrder) {
      fqRenzheng = this.state.orderDetails.fqOrder.fqRenzheng;
    }
    const Arr = [
      { title: "买家姓名", value: fqRenzheng.truename },
      { title: "性别", value: fqRenzheng.sex },
      { title: "身份证号", value: fqRenzheng.idcard },
      { title: "家庭地址", value: fqRenzheng.address },
    ];
    return (
      <Card className={style.Card}>
        <Card.Header title="实名身份信息" />
        <Card.Body>
          <MyList list={Arr} />
          <div className={style.Idphoto}>
            <div className={style.title}>身份证照片</div>
            <div className={style.images}>
              {files.map((item) => {
                if (item) {
                  return (
                    <div
                      className={style.image_item}
                      key={item.id}
                      style={{
                        backgroundImage: `url(${item.url})`,
                      }}
                      onClick={() => {
                        window.location.href = item.url;
                      }}
                    ></div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  };
  renderOrderInfo = () => {
    const { fqOrderList } = this.state.orderDetails;
    if (fqOrderList) {
      return (
        <MyTable
          title="订单详情信息"
          list={fqOrderList}
          RenderData={[
            { title: "订单编号", value: "orderSn" },
            { title: "第几期", value: "dijiqi" },
            { title: "付款状态", value: "payStatus" },
            { title: "应付款时间", value: "payDate" },
            { title: "实际支付时间", value: "truePayDate" },
            { title: "月供", value: "yuegong" },
            { title: "逾期金额", value: "yqmoney" },
          ]}
        />
      );
    }
  };
  renderNotes = () => {
    const { fqOrderActionList } = this.state.orderDetails;
    if (fqOrderActionList) {
      return (
        <MyTable
          title="操作记录"
          list={fqOrderActionList}
          RenderData={[
            { title: "操作人", value: "actionUsername" },
            { title: "操作时间", value: "timeString" },
            { title: "商家担保", value: "guarantees" },
            { title: "备注", value: "statusDesc" },
          ]}
        />
      );
    }
  };
  renderDeductionRecord = () => {
    const { fqApilogdks } = this.state.orderDetails;
    if (fqApilogdks) {
      return (
        <MyTable
          title="扣款记录"
          list={fqApilogdks}
          RenderData={[
            { title: "编号", value: "id" },
            { title: "订单编号", value: "orderSn" },
            { title: "支付商单号", value: "payorderSn" },
            { title: "扣款是否成功", value: "isLokstr" },
            { title: "信息", value: "message" },
            { title: "扣款时间", value: "timeString" },
          ]}
        />
      );
    }
  };
  renderCreditInformation = () => {
    if (this.props.location.state.type === 2) {
      return (
        <Card className={style.Card}>
          <Card.Header title="征信信息"></Card.Header>
          <Card.Body className={style.CreditInformation}>
            {this.renderCreditContent()}
          </Card.Body>
        </Card>
      );
    }
  };
  renderCreditContent = () => {
    return (
      <>
        <Button
          type="primary"
          size="small"
          className={style.btn}
          onClick={() => {
            this.setState({
              visible: true,
            });
          }}
        >
          修改逾期金
        </Button>
      </>
    );
  };
  renderAuditStatus = () => {
    const Radiolist = [
      { value: 0, label: "待审核" },
      { value: 1, label: "通过" },
      { value: 2, label: "拒绝" },
      { value: 4, label: "等待会员签约" },
    ];
    const { fqOrder } = this.state.orderDetails;
    if (!fqOrder) {
      return <div></div>;
    }
    return (
      <Card className={style.Card}>
        <Card.Body>
          <List renderHeader={() => "审核状态"}>
            {Radiolist.map((item) => {
              return (
                <RadioItem
                  key={item.value}
                  checked={item.value === this.state.AuditStatus}
                  onChange={() => {
                    if (fqOrder.sh_status === 0) {
                      this.setState({
                        AuditStatus: item.value,
                      });
                    }
                  }}
                >
                  {item.label}
                </RadioItem>
              );
            })}
          </List>
        </Card.Body>
      </Card>
    );
  };
  renderReturnVisit = () => {
    const { fqOrder } = this.state.orderDetails;
    if (fqOrder) {
      return (
        <Card className={style.Card}>
          <Card.Header
            title={fqOrder.sh_status === 0 ? "备注" : "回访记录"}
          ></Card.Header>
          <Card.Body className={style.ReturnVisit}>
            <TextareaItem
              rows={5}
              placeholder={
                fqOrder.sh_status === 0 ? "请输入备注..." : "请输入回访记录..."
              }
              autoHeight
              labelNumber={5}
              value={this.state.record}
              onChange={(e) => {
                this.setState({
                  record: e,
                });
              }}
            />
            <Button
              type="primary"
              className={style.btn}
              onClick={async () => {
                Toast.loading("正在加载中...", 0);
                let data = null;
                const { type } = this.props.location.state;
                if (type === 1 && fqOrder.sh_status === 0) {
                  const formData = new FormData();
                  formData.append("file", this.state.UploadAudioObj[0]);
                  const RES = await axios({
                    url: "http://101.200.63.68:6008//img/upLoadImg",
                    method: "POST",

                    headers: {
                      "Content-Type": "multipart/form-data",
                    },
                    data: formData,
                  });
                  if (RES && RES.data && RES.data.code !== 200)
                    return Toast.fail(RES.data.msg, 2);
                  const res = await orderReview({
                    ...this.state.orderDetails.fqOrder,
                    audio_url: RES.data.data,
                    sh_status: this.state.AuditStatus,
                    iscardValue: this.state.Qualified,
                    statusDesc: this.state.record,
                  });
                  data = res.data;
                } else if (type === 1 && fqOrder.sh_status === 1) {
                  const res = await updateReturnInfo({
                    orderId: this.state.orderDetails.fqOrder.summary_id,
                    statusDesc: this.state.record,
                  });
                  data = res.data;
                } else if (type === 2) {
                  const res = await updateReturn({
                    summary_id: this.state.orderDetails.fqOrder.summary_id,
                    sh_status: this.state.AuditStatus,
                    statusDesc: this.state.record,
                  });
                  data = res.data;
                }
                Toast.hide();
                if (data && data.code === 200) {
                  Toast.success(data.msg, 2);
                  this.props.history.push("/");
                } else {
                  Toast.fail(data.msg, 2);
                }
              }}
            >
              提交
            </Button>
          </Card.Body>
        </Card>
      );
    }
  };
  renderModal = () => {
    const { OverShow } = this.state;
    return (
      <Modal
        popup
        visible={this.state.visible}
        animationType="slide-up"
        onClose={() => {
          this.setState({
            visible: false,
          });
        }}
      >
        <List renderHeader={() => <div>修改逾期金</div>} className="popup-list">
          <div className="ModalItem">
            <span>订单编号</span>
            <InputItem
              className="InputItem"
              placeholder="auto focus"
              value={OverShow.orderSn}
            />
          </div>
          <div className="ModalItem">
            <span>逾期金额</span>
            <InputItem
              className="InputItem"
              placeholder="auto focus"
              value={OverShow.pastdueFirst}
            />
          </div>
          <div className="ModalItem">
            <span>修改逾期金额</span>
            <InputItem
              type="money"
              moneyKeyboardAlign="left"
              className="InputItem"
              placeholder="请输入修改逾期金额..."
              autoAdjustHeight={true}
              value={this.state.pastdueFirst}
              onChange={(v) => {
                this.setState({
                  pastdueFirst: v,
                });
              }}
            />
          </div>
          <div className="ModalItem">
            <span>备注</span>
            <InputItem
              className="InputItem"
              placeholder="请输入备注..."
              value={this.state.remark}
              onChange={(v) => this.setState({ remark: v })}
            />
          </div>
          <List.Item>
            <Button
              type="primary"
              onClick={async () => {
                const { data } = await updateOver({
                  ...OverShow,
                  pastdueBack: this.state.pastdueFirst,
                  remark: this.state.remark,
                });
                if (data && data.code === 200) {
                  Toast.success("操作成功", 2);
                }
                this.setState({
                  visible: false,
                });
              }}
            >
              提交
            </Button>
          </List.Item>
        </List>
      </Modal>
    );
  };
  renderIdCardQualified = () => {
    const { fqOrder } = this.state.orderDetails;
    if (fqOrder && fqOrder.sh_status === 0) {
      return (
        <IdCardQualified
          Qualified={this.state.Qualified}
          onChange={(v) => {
            this.setState({
              Qualified: v,
            });
          }}
        />
      );
    }
  };
  renderUploadAudio = () => {
    const { fqOrder } = this.state.orderDetails;
    if (fqOrder && fqOrder.sh_status === 0) {
      return (
        <UploadAudio
          files={(e) => {
            this.setState({
              UploadAudioObj: e,
            });
          }}
        />
      );
    }
  };
  render() {
    const { history } = this.props;
    return (
      <div className={style.Details}>
        <NavBar
          className={style.NavBar}
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => history.goBack()}
        >
          订单详情页
        </NavBar>
        {
          // 基本信息
          this.renderBasicinformation()
        }
        {
          // 会员还款详情
          this.renderMember()
        }
        {
          // 商品详情
          this.renderProductDetails()
        }
        {
          // 用户信用信息
          this.renderUserInfo()
        }
        {
          // 实名身份信息
          this.renderIdInfo()
        }
        {
          // 订单详情信息
          this.renderOrderInfo()
        }
        {
          // 操作记录
          this.renderNotes()
        }
        {
          // 扣款记录
          this.renderDeductionRecord()
        }
        {
          // 征信信息
          this.renderCreditInformation()
        }
        {
          // 身份证是否合格
          this.renderIdCardQualified()
        }
        {
          // 上传音频
          this.renderUploadAudio()
        }
        {
          // 审核状态
          this.renderAuditStatus()
        }
        {
          // 回访记录
          this.renderReturnVisit()
        }
        {
          // 修改逾期金
          this.renderModal()
        }
      </div>
    );
  }
}
