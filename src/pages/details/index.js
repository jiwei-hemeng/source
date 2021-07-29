import React from "react";
import {
  NavBar,
  Icon,
  Card,
  ImagePicker,
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
      return (
        <Card className={style.Card}>
          <Card.Header title="基本信息" />
          <Card.Body>
            <div className={style.Item}>
              <span className={style.title}>订单ID</span>
              <span>{fqOrder.summary_id}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>订单号</span>
              <span>{fqOrder.order_number}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>卖家姓名</span>
              <span>{fqOrder.student_name}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>手机号</span>
              <span>{fqOrder.person_phone}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>商品价格</span>
              <span>{fqOrder.money}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>贷款费用</span>
              <span>{fqOrder.dk_money}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>分期状态</span>
              <span>{fqOrder.order_status}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>下单时间</span>
              <span>{fqOrder.set_up_time}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>延期期数</span>
              <span>{fqOrder.delay_stages}</span>
            </div>
          </Card.Body>
        </Card>
      );
    }
  };
  renderMember = () => {
    const { fqOrder } = this.state.orderDetails;
    if (fqOrder) {
      return (
        <Card className={style.Card}>
          <Card.Header title="会员还款详情" />
          <Card.Body>
            <div className={style.Item}>
              <span className={style.title}>剩余本金</span>
              <span>{fqOrder.syMoney}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>已还本息</span>
              <span>{fqOrder.paidAllMoney}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>逾期本息</span>
              <span>{fqOrder.overdueAllMoney}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>罚息</span>
              <span>{fqOrder.faxi}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>逾期天数</span>
              <span>{fqOrder.yq_day}</span>
            </div>
          </Card.Body>
        </Card>
      );
    }
  };
  renderProductDetails = () => {
    const { fqOrder } = this.state.orderDetails;
    if (fqOrder) {
      return (
        <Card className={style.Card}>
          <Card.Header title="商品详情" />
          <Card.Body>
            <div className={style.Item}>
              <span className={style.title}>商品名称</span>
              <span>{fqOrder.course_name}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>期数</span>
              <span>{fqOrder.stages_number}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>月供</span>
              <span>{fqOrder.yue_gong}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>下期还款期数</span>
              <span>{fqOrder.dijiqi}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>下期应还款时间</span>
              <span>{fqOrder.nexttime}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>商家是否担保</span>
              <span>{fqOrder.deposit_status === 1 ? "是" : "否"}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>机构名称</span>
              <span>{fqOrder.merchant_name}</span>
            </div>
          </Card.Body>
        </Card>
      );
    }
  };
  renderUserInfo = () => {
    const { fqOrder } = this.state.orderDetails;
    if (fqOrder) {
      return (
        <Card className={style.Card}>
          <Card.Header title="用户信用信息" />
          <Card.Body>
            <div className={style.Item}>
              <span className={style.title}>买家姓名</span>
              <span>{fqOrder.student_name}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>买家手机号</span>
              <span>{fqOrder.person_phone}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>现居住地址</span>
              <span>{fqOrder.fqUrgent.myaddress}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>下期还款期数</span>
              <span>{fqOrder.dijiqi}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>月收入额</span>
              <span>{fqOrder.fqUrgent.money}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>公司名称</span>
              <span>{fqOrder.fqUrgent.mycompany}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>任职部门</span>
              <span>{fqOrder.fqUrgent.mybumen}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>公司地址</span>
              <span>{fqOrder.fqUrgent.companyAddress}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>公司座机</span>
              <span>{fqOrder.fqUrgent.companyPhone}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>亲属姓名</span>
              <span>{fqOrder.fqUrgent.fmname}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>关系</span>
              <span>{fqOrder.fqUrgent.guanxi}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>电话</span>
              <span>{fqOrder.fqUrgent.fmmobile}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>婚姻</span>
              <span>{fqOrder.fqUrgent.hunyin}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>配偶</span>
              <span>{fqOrder.fqUrgent.duixiang}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>配偶电话</span>
              <span>{fqOrder.fqUrgent.dxmobile}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>社会联系人</span>
              <span>{fqOrder.fqUrgent.friendname}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>电话</span>
              <span>{fqOrder.fqUrgent.friendmobile}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>公司联系人</span>
              <span>{fqOrder.fqUrgent.companyContacts}</span>
            </div>
            <div className={style.Item}>
              <span className={style.title}>电话</span>
              <span>{fqOrder.fqUrgent.contactsMobile}</span>
            </div>
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
    return (
      <Card className={style.Card}>
        <Card.Header title="实名身份信息" />
        <Card.Body>
          <div className={style.Item}>
            <span className={style.title}>买家姓名</span>
            <span>{fqRenzheng.truename}</span>
          </div>
          <div className={style.Item}>
            <span className={style.title}>性别</span>
            <span>{fqRenzheng.sex}</span>
          </div>
          <div className={style.Item}>
            <span className={style.title}>身份证号</span>
            <span>{fqRenzheng.idcard}</span>
          </div>
          <div className={style.Item}>
            <span className={style.title}>家庭地址</span>
            <span>{fqRenzheng.address}</span>
          </div>
          <div className={style.Idphoto}>
            <div className={style.title}>身份证照片</div>
            <ImagePicker files={files} selectable={false} disableDelete />
          </div>
        </Card.Body>
      </Card>
    );
  };
  renderOrderInfo = () => {
    const { fqOrderList } = this.state.orderDetails;
    if (fqOrderList) {
      return (
        <Card className={style.Card}>
          <Card.Header title="订单详情信息" />
          <Card.Body>
            <table className={style.OrderInfo}>
              <thead>
                <tr>
                  <th width="120px">订单编号</th>
                  <th width="120px">第几期</th>
                  <th width="120px">付款状态</th>
                  <th width="120px">应付款时间</th>
                  <th width="120px">实际支付时间</th>
                  <th width="120px">月供</th>
                  <th width="120px">逾期金额</th>
                </tr>
              </thead>
              <tbody>
                {fqOrderList.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.orderSn}</td>
                      <td>{item.dijiqi}</td>
                      <td>{item.payStatus}</td>
                      <td>{item.payDate}</td>
                      <td>{item.truePayDate}</td>
                      <td>{item.yuegong}</td>
                      <td>{item.yqmoney}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card.Body>
        </Card>
      );
    }
  };
  renderNotes = () => {
    const { fqOrderActionList } = this.state.orderDetails;
    if (fqOrderActionList) {
      return (
        <Card className={style.Card}>
          <Card.Header title="操作记录"></Card.Header>
          <Card.Body>
            <table className={style.OrderInfo}>
              <thead>
                <tr>
                  <th width="120px">操作人</th>
                  <th width="120px">操作时间</th>
                  <th width="120px">商家担保</th>
                  <th width="120px">备注</th>
                </tr>
              </thead>
              <tbody>
                {fqOrderActionList.map((item) => {
                  return (
                    <tr key={item.actionId}>
                      <td>{item.actionUsername}</td>
                      <td>{item.timeString}</td>
                      <td>{item.guarantees}</td>
                      <td>{item.statusDesc}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card.Body>
        </Card>
      );
    }
  };
  renderDeductionRecord = () => {
    const { fqApilogdks } = this.state.orderDetails;
    if (fqApilogdks) {
      return (
        <Card className={style.Card}>
          <Card.Header title="扣款记录"></Card.Header>
          <Card.Body>
            <table className={style.OrderInfo}>
              <thead>
                <tr>
                  <th width="120px">编号</th>
                  <th width="120px">订单编号</th>
                  <th width="120px">支付商单号</th>
                  <th width="120px">扣款是否成功</th>
                  <th width="120px">信息</th>
                  <th width="120px">扣款时间</th>
                </tr>
              </thead>
              <tbody>
                {fqApilogdks.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.orderSn}</td>
                      <td>{item.payorderSn}</td>
                      <td>{item.isLokstr}</td>
                      <td>{item.message}</td>
                      <td>{item.timeString}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card.Body>
        </Card>
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
        {/* {
          // 修改身份证
          this.renderChangeIdCard()
        } */}
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
