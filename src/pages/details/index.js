import React from "react";
import { NavBar, Icon, Card, ImagePicker, Button, TextareaItem, Modal, List, InputItem, Radio, Toast } from "antd-mobile";
import { editOverOrder, updateOverShow, updateOver, updateReturn } from "@/api/overdue";
import style from "./index.module.scss";
const RadioItem = Radio.RadioItem;
// const data = {"orderId":null,"downOrdersn":null,"loantype":null,"modelname":null,"brandname":null,"specname":null,"color":null,"adminId":null,"agentId":null,"businessId":null,"userId":null,"cuserId":null,"inId":null,"goodsprice":null,"daimoney":null,"fenqiPeriods":null,"downPaymentRate":null,"downPayment":null,"payorderSn":null,"addtime":null,"paytime":null,"status":null,"paymethod":null,"payname":null,"guarantee":null,"lilv":null,"guanlirate":null,"fuwurate":null,"yuegong":null,"contractnum":null,"fqstatus":null,"dijiqi":1,"nexttime":null,"isapply":null,"applytime":null,"isbaddebt":null,"isprepayment":null,"isvalid":null,"delay":null,"repaymethod":null,"cancelpay":null,"dtime":null,"uconfirm":null,"cconfirm":null,"agreetime":null,"itemId":null,"source":null,"istest":null,"surplusTime":null,"supplyImg":null,"isCdel":null,"isUdel":null,"isfree":null,"yqnum":null,"isPlan":null,"planid":null,"isSend":null,"isSign":null,"isChangeAgent":null,"zdStatus":null,"shPassTime":null,"creditCode":null,"isSign2":null,"summary_id":6232,"order_number":"s20210521160721385818","sh_status":1,"student_name":"曹海军","person_phone":"18030113691","merchant_name":null,"truename":null,"fbId":null,"course_name":"女子健身培训","money":6880.00,"dk_money":3000.00,"stages_type":1,"mc_deposit_bl":0.0,"mc_deposit":0.0,"mc_deposit_status":0,"yue_gong":1036.02,"order_status":"0","deposit_status":"1","set_up_time":"2021-05-21 16:07:21","stages_number":3,"name":"翁明芳","down_payment":null,"down_payment_money":0.0,"down_payment_status":null,"admin_status":null,"choiceName":null,"mc_deposit_paytime":null,"mc_deposit_ought_time":null,"mc_deposit_money":null,"weiyue_day":null,"weiyue_money":null,"mc_deposit_return_time":null,"bank_name":null,"card_number":null,"username":null,"mc_deposit_caiwu_out_status":null,"caiwu_bei_zhu":null,"mc_deposit_cash_out_status":null,"delay_stages":"0","syMoney":null,"paidAllMoney":null,"overdueAllMoney":null,"faxi":null,"yq_day":8,"fqUrgent":null,"fqRenzheng":null,"image_front":null,"image_fan":null,"image_hand":null,"desc_text":null,"application_thumb":null,"statusDesc":null,"audio_url":null,"iscardValue":null,"agentName":"林建喜","a001":null,"a002":null,"b003":null,"b004":null,"c001":null,"c003":null,"d001":null,"f001":null,"h001":null,"h003":null};
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
  }
  componentDidMount = async () => {
    await this.getOrderDetails();
    await this.updateOverShow();
  }
  updateOverShow = async () => {
    Toast.loading("正在加载中...", 0);
    const { data } = await updateOverShow({
      orderId: this.props.location.state.id,
    })
    Toast.hide()
    if(data.code === 200) {
      console.log("获取也不行啊就啥事", data.data)
      this.setState({
        OverShow: data.data
      })
    }
  }
  getOrderDetails = async () => {
    Toast.loading("正在加载中...", 0);
    const { data } = await editOverOrder({
      orderId: this.props.location.state.id,
    })
    Toast.hide()
    if(data.code === 200 && data.data) {
      const fileList = [
        { url: data.data.fqOrder.image_front, id: "身份证正面面照片" },
        { url: data.data.fqOrder.image_fan, id: "身份证国徽面照片" },
        { url: data.data.fqOrder.image_hand, id: "手持身份证照片" },
      ]
      this.setState({
        orderDetails: data.data,
        files: fileList
      })
    }
  }
  renderBasicinformation = () => {
    const { fqOrder } = this.state.orderDetails;
    if(fqOrder) {
      return (
        <Card
          className={style.Card}
        >
          <Card.Header 
            title="基本信息"
          />
          <Card.Body>
            <div className={style.Item}><span className={style.title}>订单ID</span><span>{ fqOrder.summary_id }</span></div>
            <div className={style.Item}><span className={style.title}>订单号</span><span>{ fqOrder.order_number }</span></div>
            <div className={style.Item}><span className={style.title}>卖家姓名</span><span>{ fqOrder.student_name }</span></div>
            <div className={style.Item}><span className={style.title}>手机号</span><span>{ fqOrder.person_phone }</span></div>
            <div className={style.Item}><span className={style.title}>商品价格</span><span>{ fqOrder.money }</span></div>
            <div className={style.Item}><span className={style.title}>贷款费用</span><span>{ fqOrder.dk_money }</span></div>
            <div className={style.Item}><span className={style.title}>分期状态</span><span>{ fqOrder.order_status }</span></div>
            <div className={style.Item}><span className={style.title}>下单时间</span><span>{ fqOrder.set_up_time }</span></div>
            <div className={style.Item}><span className={style.title}>延期期数</span><span>{ fqOrder.delay_stages }</span></div>
          </Card.Body>
        </Card>
      )
    }
  }
  renderMember = () => {
    const { fqOrder } = this.state.orderDetails;
    if(fqOrder) {
      return (
        <Card
          className={style.Card}
        >
          <Card.Header 
            title="会员还款详情"
          />
          <Card.Body>
            <div className={style.Item}><span className={style.title}>剩余本金</span><span>{ fqOrder.syMoney }</span></div>
            <div className={style.Item}><span className={style.title}>已还本息</span><span>{ fqOrder.paidAllMoney }</span></div>
            <div className={style.Item}><span className={style.title}>逾期本息</span><span>{ fqOrder.overdueAllMoney }</span></div>
            <div className={style.Item}><span className={style.title}>罚息</span><span>{ fqOrder.faxi }</span></div>
            <div className={style.Item}><span className={style.title}>逾期天数</span><span>{ fqOrder.yq_day }</span></div>
          </Card.Body>
        </Card>
      )
    }
  }
  renderProductDetails = () => {
    const { fqOrder } = this.state.orderDetails;
    if(fqOrder) {
      return (
        <Card
          className={style.Card}
        >
          <Card.Header 
            title="商品详情"
          />
          <Card.Body>
            <div className={style.Item}><span className={style.title}>商品名称</span><span>{ fqOrder.course_name }</span></div>
            <div className={style.Item}><span className={style.title}>期数</span><span>{ fqOrder.stages_number }</span></div>
            <div className={style.Item}><span className={style.title}>月供</span><span>{ fqOrder.yue_gong }</span></div>
            <div className={style.Item}><span className={style.title}>下期还款期数</span><span>{ fqOrder.dijiqi }</span></div>
            <div className={style.Item}><span className={style.title}>下期应还款时间</span><span>{ fqOrder.nexttime }</span></div>
            <div className={style.Item}><span className={style.title}>商家是否担保</span><span>{ fqOrder.deposit_status === 1 ? "是": "否" }</span></div>
            <div className={style.Item}><span className={style.title}>机构名称</span><span>{ fqOrder.merchant_name }</span></div>
          </Card.Body>
        </Card>
      )
    }
  }
  renderUserInfo = () => {
    const { fqOrder } = this.state.orderDetails;
    if(fqOrder) {
      return (
        <Card
          className={style.Card}
        >
          <Card.Header 
            title="用户信用信息"
          />
          <Card.Body>
            <div className={style.Item}><span className={style.title}>买家姓名</span><span>{ fqOrder.student_name }</span></div>
            <div className={style.Item}><span className={style.title}>买家手机号</span><span>{ fqOrder.person_phone }</span></div>
            <div className={style.Item}><span className={style.title}>现居住地址</span><span>{ fqOrder.fqUrgent.myaddress }</span></div>
            <div className={style.Item}><span className={style.title}>下期还款期数</span><span>{ fqOrder.dijiqi }</span></div>
            <div className={style.Item}><span className={style.title}>月收入额</span><span>{ fqOrder.fqUrgent.money }</span></div>
            <div className={style.Item}><span className={style.title}>公司名称</span><span>{ fqOrder.fqUrgent.mycompany }</span></div>
            <div className={style.Item}><span className={style.title}>任职部门</span><span>{ fqOrder.fqUrgent.mybumen }</span></div>
            <div className={style.Item}><span className={style.title}>公司地址</span><span>{ fqOrder.fqUrgent.companyAddress }</span></div>
            <div className={style.Item}><span className={style.title}>公司座机</span><span>{ fqOrder.fqUrgent.companyPhone }</span></div>
            <div className={style.Item}><span className={style.title}>亲属姓名</span><span>{ fqOrder.fqUrgent.fmname }</span></div>
            <div className={style.Item}><span className={style.title}>关系</span><span>{ fqOrder.fqUrgent.guanxi }</span></div>
            <div className={style.Item}><span className={style.title}>电话</span><span>{ fqOrder.fqUrgent.fmmobile }</span></div>
            <div className={style.Item}><span className={style.title}>婚姻</span><span>{ fqOrder.fqUrgent.hunyin }</span></div>
            <div className={style.Item}><span className={style.title}>配偶</span><span>{ fqOrder.fqUrgent.duixiang }</span></div>
            <div className={style.Item}><span className={style.title}>配偶电话</span><span>{ fqOrder.fqUrgent.dxmobile }</span></div>
            <div className={style.Item}><span className={style.title}>社会联系人</span><span>{ fqOrder.fqUrgent.friendname }</span></div>
            <div className={style.Item}><span className={style.title}>电话</span><span>{ fqOrder.fqUrgent.friendmobile }</span></div>
            <div className={style.Item}><span className={style.title}>公司联系人</span><span>{ fqOrder.fqUrgent.companyContacts }</span></div>
            <div className={style.Item}><span className={style.title}>电话</span><span>{ fqOrder.fqUrgent.contactsMobile }</span></div>
          </Card.Body>
        </Card>
      )
    }
  }
  // 实名身份信息
  renderIdInfo = () => {
    const { files } = this.state;
    let fqRenzheng = {}
    if(this.state.orderDetails.fqOrder) {
      fqRenzheng = this.state.orderDetails.fqOrder.fqRenzheng
    }
    return (
      <Card
        className={style.Card}
      >
        <Card.Header 
          title="实名身份信息"
        />
        <Card.Body>
          <div className={style.Item}><span className={style.title}>买家姓名</span><span>{ fqRenzheng.truename }</span></div>
          <div className={style.Item}><span className={style.title}>性别</span><span>{ fqRenzheng.sex }</span></div>
          <div className={style.Item}><span className={style.title}>身份证号</span><span>{ fqRenzheng.idcard }</span></div>
          <div className={style.Item}><span className={style.title}>家庭地址</span><span>{ fqRenzheng.address }</span></div>
          <div className={style.Idphoto}>
            <div className={style.title}>身份证照片</div>
            <ImagePicker 
              files={files} 
              selectable={false}
              disableDelete
            />
          </div>
        </Card.Body>
      </Card>
    )
  }
  renderOrderInfo = () => {
    const { fqOrderList } = this.state.orderDetails;
    if(fqOrderList) {
      return (
        <Card
          className={style.Card}
        >
          <Card.Header 
            title="订单详情信息"
          />
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
                {
                  fqOrderList.map(item => {
                    return (
                      <tr key={ item.id }>
                        <td>{item.orderSn}</td>
                        <td>{item.dijiqi}</td>
                        <td>{item.payStatus}</td>
                        <td>{item.payDate}</td>
                        <td>{item.truePayDate}</td>
                        <td>{item.yuegong}</td>
                        <td>{item.yqmoney}</td>
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
  }
  renderNotes = () => {
    const { fqOrderActionList } = this.state.orderDetails;
    if(fqOrderActionList) {
      return (
        <Card
          className={style.Card}
        >
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
                {
                  fqOrderActionList.map(item => {
                    return (
                      <tr key={item.actionId}>
                        <td>{item.actionUsername}</td>
                        <td>{item.timeString}</td>
                        <td>{item.guarantees}</td>
                        <td>{item.statusDesc}</td>
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
  }
  renderDeductionRecord = () => {
    const { fqApilogdks } = this.state.orderDetails;
    if(fqApilogdks) {
      return (
        <Card
          className={style.Card}
        >
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
                {
                  fqApilogdks.map(item => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.orderSn}</td>
                        <td>{item.payorderSn}</td>
                        <td>{item.isLokstr}</td>
                        <td>{item.message}</td>
                        <td>{item.timeString}</td>
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
  }
  renderCreditInformation = () => {
    return (
      <Card
        className={style.Card}
      >
        <Card.Header title="征信信息"></Card.Header>
        <Card.Body className={style.CreditInformation}>
          {
            this.renderCreditContent()
          }
        </Card.Body>
      </Card>
    )
  }
  renderCreditContent = () => {
    const { type } = this.props.location.state
    if(type === 1) {
      return (
        <>
          <Button type="primary" size="small" className={style.btn} onClick={() => {
            this.props.history.push({
              pathname: "/creditrecords",
              state: {id: this.props.location.state.id}
            })
          }}>征信信息</Button>
          <Button type="primary" size="small" className={style.btn} onClick={() => {
            this.setState({
              course: true
            })
          }}>退课计算</Button>
          <Button type="primary" size="small" className={style.btn} onClick={() => {
            this.setState({
              PerPay: true
            })
          }}>提前还款</Button>
        </>
      )
    }
    return (
      <>
        {/* <Button type="primary" size="small" className={style.btn} onClick={() => {
          this.props.history.push({
            pathname: "/creditrecords",
            state: {id: data.order_number}
          })
        }}>征信信息</Button> */}
        <Button type="primary" size="small" className={style.btn} onClick={() => {
          this.setState({
            visible: true
          })
        }}>修改逾期金</Button>
      </>
    )
  }
  // 退课计算Modal
  rendercourse = () => {
    return (
      <Modal
        popup
        visible={this.state.course}
        animationType="slide-up"
        onClose={() => {
          this.setState({
            course: false
          })
        }}
        footer={[{ text: "关闭", onPress: () => {
          this.setState({course: false})
        } }]}
      >
        <div style={{ height: 175, overflow: 'scroll' }}>
          <List renderHeader={() => "退课信息"}>
            <InputItem
              value={6}
              placeholder="请输入使用天数..."
            >使用天数</InputItem>
            <InputItem
              value={6}
              placeholder="请输入使用天数..."
            >剩余未还本金</InputItem>
            <InputItem
              value={6}
              placeholder="请输入使用天数..."
            >违约金额</InputItem>
          </List>
        </div>
      </Modal>
    )
  }
  renderPerPayModal = () => {
    return (
      <Modal
        popup
        visible={this.state.PerPay}
        animationType="slide-up"
        onClose={() => {
          this.setState({
            PerPay: false
          })
        }}
        footer={[{ text: "关闭", onPress: () => {
          this.setState({PerPay: false})
        } }]}
      >
        <div style={{ height: 220, overflow: 'scroll' }}>
          <List renderHeader={() => "提前还款信息"}>
            <InputItem
              value={6}
              placeholder="请输入分期总额..."
            >分期总额</InputItem>
            <InputItem
              value={6}
              placeholder="请输入剩余未还本金..."
            >剩余未还本金</InputItem>
            <InputItem
              value={6}
              placeholder="请输入违约金..."
            >违约金</InputItem>
            <InputItem
              value={6}
              placeholder="请输入应还金额..."
            >应还金额</InputItem>
          </List>
        </div>
      </Modal>
    )
  }
  renderAuditStatus = () => {
    const Radiolist = [
      { value: 0, label: "待审核" },
      { value: 1, label: "通过" },
      { value: 2, label: "拒绝" },
      { value: 4, label: "等待会员签约" },
    ];
    const { fqOrder } = this.state.orderDetails
    if(!fqOrder) {
      return (
        <div></div>
      )
    }
    return (
      <Card
        className={style.Card}
      >
        <Card.Body>
          <List renderHeader={() => "审核状态"}>
            {
              Radiolist.map(item => {
                return (
                  <RadioItem
                    key={item.value}
                    checked={item.value === fqOrder.sh_status}
                  >{item.label}</RadioItem>
                )
              })
            }
          </List>
        </Card.Body>
      </Card>
    )
  }
  renderReturnVisit = () => {
    return (
      <Card
      className={style.Card}
    >
      <Card.Header title="回访记录"></Card.Header>
      <Card.Body className={style.ReturnVisit}>
        <TextareaItem 
          rows={5}
          placeholder="请输入回访记录..."
          autoHeight
          labelNumber={5}
          value={ this.state.record }
          onChange={(e) => {
            this.setState({
              record: e
            })
          }}
        />
        <Button
          type="primary"
          className={style.btn}
          onClick={async () => {
            Toast.loading("正在加载中...", 0);
            const { data } = await updateReturn({
              summary_id: this.state.orderDetails.fqOrder.summary_id,
              sh_status: this.state.orderDetails.fqOrder.sh_status,
              statusDesc: this.state.record,
            })
            Toast.hide()
            if(data && data.code === 200) {
              console.log("请求成功了")
            }
          }}
        >提交</Button>
      </Card.Body>
    </Card>
    )
  }
  renderModal = () => {
    const { OverShow } = this.state
    return (
      <Modal
        popup
        visible={this.state.visible}
        animationType="slide-up"
        onClose={() => {
          this.setState({
            visible: false
          })
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
              <InputItem className="InputItem"  placeholder="auto focus" value={OverShow.pastdueFirst} />
            </div>
            <div className="ModalItem">
              <span>修改逾期金额</span>
              <InputItem
                type="money"
                moneyKeyboardAlign="left"
                className="InputItem" 
                placeholder="请输入修改逾期金额..." 
                value={this.state.pastdueFirst}
                onChange={v => {
                  this.setState({
                    pastdueFirst: v
                  })
                }}
              />
            </div>
            <div className="ModalItem">
              <span>备注</span>
              <InputItem className="InputItem"  placeholder="请输入备注..." value={this.state.remark} onChange={v => this.setState({remark: v})} />
            </div>
            <List.Item>
              <Button 
                type="primary" 
                size="small"
                onClick={async () => {
                  const { data } = await updateOver({
                    ...OverShow,
                    pastdueBack: this.state.pastdueFirst,
                    remark: this.state.remark,
                  })
                  if(data && data.code === 200) {
                    Toast.success("操作成功", 2)
                  }
                  this.setState({
                    visible: false
                  })
                }}
              >提交</Button>
            </List.Item>
          </List>
      </Modal>
    )
  }
  render() {
    const { history } = this.props
    return (
      <div className={style.Details}>
        <NavBar
          className={style.NavBar}
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => history.goBack()}
        >订单详情页</NavBar>
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
        {
          // 退课计算Modal
          this.rendercourse()
        }
        {
          // 提前还款计算
          this.renderPerPayModal()
        }
      </div>
    )
  }
}