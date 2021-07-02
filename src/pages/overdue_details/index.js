import React from "react";
import { NavBar, Icon, Card, ImagePicker, Button, TextareaItem, Modal, List, InputItem } from "antd-mobile";
import style from "./index.module.scss"
const IDImagesdata = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}, {
  url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
  id: '2122',
}];
const data = {"orderId":null,"downOrdersn":null,"loantype":null,"modelname":null,"brandname":null,"specname":null,"color":null,"adminId":null,"agentId":null,"businessId":null,"userId":null,"cuserId":null,"inId":null,"goodsprice":null,"daimoney":null,"fenqiPeriods":null,"downPaymentRate":null,"downPayment":null,"payorderSn":null,"addtime":null,"paytime":null,"status":null,"paymethod":null,"payname":null,"guarantee":null,"lilv":null,"guanlirate":null,"fuwurate":null,"yuegong":null,"contractnum":null,"fqstatus":null,"dijiqi":1,"nexttime":null,"isapply":null,"applytime":null,"isbaddebt":null,"isprepayment":null,"isvalid":null,"delay":null,"repaymethod":null,"cancelpay":null,"dtime":null,"uconfirm":null,"cconfirm":null,"agreetime":null,"itemId":null,"source":null,"istest":null,"surplusTime":null,"supplyImg":null,"isCdel":null,"isUdel":null,"isfree":null,"yqnum":null,"isPlan":null,"planid":null,"isSend":null,"isSign":null,"isChangeAgent":null,"zdStatus":null,"shPassTime":null,"creditCode":null,"isSign2":null,"summary_id":6232,"order_number":"s20210521160721385818","sh_status":1,"student_name":"曹海军","person_phone":"18030113691","merchant_name":null,"truename":null,"fbId":null,"course_name":"女子健身培训","money":6880.00,"dk_money":3000.00,"stages_type":1,"mc_deposit_bl":0.0,"mc_deposit":0.0,"mc_deposit_status":0,"yue_gong":1036.02,"order_status":"0","deposit_status":"1","set_up_time":"2021-05-21 16:07:21","stages_number":3,"name":"翁明芳","down_payment":null,"down_payment_money":0.0,"down_payment_status":null,"admin_status":null,"choiceName":null,"mc_deposit_paytime":null,"mc_deposit_ought_time":null,"mc_deposit_money":null,"weiyue_day":null,"weiyue_money":null,"mc_deposit_return_time":null,"bank_name":null,"card_number":null,"username":null,"mc_deposit_caiwu_out_status":null,"caiwu_bei_zhu":null,"mc_deposit_cash_out_status":null,"delay_stages":"0","syMoney":null,"paidAllMoney":null,"overdueAllMoney":null,"faxi":null,"yq_day":8,"fqUrgent":null,"fqRenzheng":null,"image_front":null,"image_fan":null,"image_hand":null,"desc_text":null,"application_thumb":null,"statusDesc":null,"audio_url":null,"iscardValue":null,"agentName":"林建喜","a001":null,"a002":null,"b003":null,"b004":null,"c001":null,"c003":null,"d001":null,"f001":null,"h001":null,"h003":null};
export default class OverdueDetails extends React.Component {
  state = {
    files: IDImagesdata,
    multiple: false,
    visible: false,
    course: false
  }
  renderBasicinformation = () => {
    return (
      <Card
        className={style.Card}
      >
        <Card.Header 
          title="基本信息"
        />
        <Card.Body>
          <div className={style.Item}><span className={style.title}>订单ID</span><span>{data.summary_id}</span></div>
          <div className={style.Item}><span className={style.title}>订单号</span><span>{data.order_number}</span></div>
          <div className={style.Item}><span className={style.title}>卖家姓名</span><span>{data.student_name}</span></div>
          <div className={style.Item}><span className={style.title}>手机号</span><span>{data.person_phone}</span></div>
          <div className={style.Item}><span className={style.title}>商品价格</span><span>{data.money}</span></div>
          <div className={style.Item}><span className={style.title}>贷款费用</span><span>{data.dk_money}</span></div>
          <div className={style.Item}><span className={style.title}>分期状态</span><span>分期中</span></div>
          <div className={style.Item}><span className={style.title}>下单时间</span><span>{data.set_up_time}</span></div>
          <div className={style.Item}><span className={style.title}>延期期数</span><span>0000</span></div>
        </Card.Body>
      </Card>
    )
  }
  renderMember = () => {
    return (
      <Card
        className={style.Card}
      >
        <Card.Header 
          title="会员还款详情"
        />
        <Card.Body>
          <div className={style.Item}><span className={style.title}>剩余本金</span><span>0.0001</span></div>
          <div className={style.Item}><span className={style.title}>已还本息</span><span>999999</span></div>
          <div className={style.Item}><span className={style.title}>逾期本息</span><span>999999</span></div>
          <div className={style.Item}><span className={style.title}>罚息</span><span>0.0001</span></div>
          <div className={style.Item}><span className={style.title}>逾期天数</span><span>2</span></div>
        </Card.Body>
      </Card>
    )
  }
  renderProductDetails = () => {
    return (
      <Card
        className={style.Card}
      >
        <Card.Header 
          title="商品详情"
        />
        <Card.Body>
          <div className={style.Item}><span className={style.title}>商品名称</span><span>星辰美鼻</span></div>
          <div className={style.Item}><span className={style.title}>期数</span><span>12</span></div>
          <div className={style.Item}><span className={style.title}>月供</span><span>1866.89</span></div>
          <div className={style.Item}><span className={style.title}>下期还款期数</span><span>0.0001</span></div>
          <div className={style.Item}><span className={style.title}>下期应还款时间</span><span>2</span></div>
          <div className={style.Item}><span className={style.title}>商家是否担保</span><span>是</span></div>
          <div className={style.Item}><span className={style.title}>机构名称</span><span>厦门慕一医疗美容门诊有限公司</span></div>
        </Card.Body>
      </Card>
    )
  }
  renderUserInfo = () => {
    return (
      <Card
        className={style.Card}
      >
        <Card.Header 
          title="用户信用信息"
        />
        <Card.Body>
          <div className={style.Item}><span className={style.title}>买家姓名</span><span>曹海军</span></div>
          <div className={style.Item}><span className={style.title}>买家手机号</span><span>18030113691</span></div>
          <div className={style.Item}><span className={style.title}>现居住地址</span><span>福建省 厦门市 集美区 软件园三期百通科技园</span></div>
          <div className={style.Item}><span className={style.title}>下期还款期数</span><span>0.0001</span></div>
          <div className={style.Item}><span className={style.title}>月收入额</span><span>10000</span></div>
          <div className={style.Item}><span className={style.title}>公司名称</span><span>12123</span></div>
          <div className={style.Item}><span className={style.title}>任职部门</span><span>厦门慕一医疗美容门诊有限公司</span></div>
          <div className={style.Item}><span className={style.title}>公司地址</span><span>厦门慕一医疗美容门诊有限公司</span></div>
          <div className={style.Item}><span className={style.title}>公司座机</span><span>010-110</span></div>
          <div className={style.Item}><span className={style.title}>亲属姓名</span><span>曹先生</span></div>
          <div className={style.Item}><span className={style.title}>关系</span><span>6</span></div>
          <div className={style.Item}><span className={style.title}>电话</span><span>18030113692</span></div>
          <div className={style.Item}><span className={style.title}>婚姻</span><span>18030113692</span></div>
          <div className={style.Item}><span className={style.title}>配偶</span><span>18030113692</span></div>
          <div className={style.Item}><span className={style.title}>配偶电话</span><span>18030113692</span></div>
          <div className={style.Item}><span className={style.title}>社会联系人</span><span>吴老二</span></div>
          <div className={style.Item}><span className={style.title}>电话</span><span>电话</span></div>
          <div className={style.Item}><span className={style.title}>公司联系人</span><span>曾经是</span></div>
          <div className={style.Item}><span className={style.title}>电话</span><span>10086</span></div>
        </Card.Body>
      </Card>
    )
  }
  // 实名身份信息
  renderIdInfo = () => {
    const { files } = this.state;
    return (
      <Card
        className={style.Card}
      >
        <Card.Header 
          title="实名身份信息"
        />
        <Card.Body>
          <div className={style.Item}><span className={style.title}>买家姓名</span><span>曹海军</span></div>
          <div className={style.Item}><span className={style.title}>性别</span><span>男</span></div>
          <div className={style.Item}><span className={style.title}>身份证号</span><span>372930197507280035</span></div>
          <div className={style.Item}><span className={style.title}>家庭地址</span><span>福建省厦门市海沧区海沧社区横街128号</span></div>
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
            <tr>
              <td>f20210513125437280223</td>
              <td>1</td>
              <td>未支付</td>
              <td>2021-06-13 12:54:37	</td>
              <td>2021-06-13 12:54:37</td>
              <td>2375.93</td>
              <td>189.00</td>
            </tr>
            </tbody>
          </table>
        </Card.Body>
      </Card>
    )
  }
  renderNotes = () => {
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
            <tr>
              <td>xinshen2</td>
              <td>2021-05-21 16:05:21</td>
              <td>是</td>
              <td>12332	</td>
            </tr>
            </tbody>
          </table>
        </Card.Body>
      </Card>
    )
  }
  renderDeductionRecord = () => {
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
            <tr>
              <td>xinshen2</td>
              <td>2021-05-21 16:05:21</td>
              <td>是</td>
              <td>12332	</td>
              <td>12332	</td>
              <td>12332	</td>
            </tr>
            </tbody>
          </table>
        </Card.Body>
      </Card>
    )
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
    console.log("审核状态", this.props.location.state)
    const { type } = this.props.location.state
    if(type === 1) {
      return (
        <>
          <Button type="primary" size="small" className={style.btn} onClick={() => {
            this.props.history.push({
              pathname: "/creditrecords",
              state: {id: data.order_number}
            })
          }}>征信信息</Button>
          <Button type="primary" size="small" className={style.btn} onClick={() => {
            this.setState({
              course: true
            })
          }}>退课计算</Button>
          <Button type="primary" size="small" className={style.btn} onClick={() => {
            
          }}>提前还款</Button>
        </>
      )
    }
    return (
      <>
        <Button type="primary" size="small" className={style.btn} onClick={() => {
          this.props.history.push({
            pathname: "/creditrecords",
            state: {id: data.order_number}
          })
        }}>征信信息</Button>
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
      >
        <div style={{ height: 345, overflow: 'scroll' }}>
          <InputItem
            value={6}
            placeholder="displayed clear while typing"
          >使用天数</InputItem>
          <List renderHeader={() => '使用天数'}></List>
        </div>
      </Modal>
    )
  }
  renderAuditStatus = () => {
    return (
      <Card
        className={style.Card}
      >
        <Card.Header title="审核状态"></Card.Header>
        <Card.Body className={style.CreditInformation}>
          <input type="radio" name="AuditStatus" value="0"></input><span>待审核</span>
          <input type="radio" name="AuditStatus" value="2" checked onChange={(e) => console.log(e)}></input><span>通过</span>
          <input type="radio" name="AuditStatus" value="3"></input><span>拒绝</span>
          <input type="radio" name="AuditStatus" value="4"></input><span>等待会员签约</span>
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
          placeholder="fixed number of lines"
          autoHeight
          labelNumber={5}
          onChange={(e) => {
            console.log("回访记录", e)
          }}
        />
        <Button type="primary" size="small" className={style.btn}>提交</Button>
      </Card.Body>
    </Card>
    )
  }
  renderModal = () => {
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
              <InputItem className="InputItem" placeholder="auto focus" value={data.order_number} />
            </div>
            <div className="ModalItem">
              <span>逾期金额</span>
              <InputItem className="InputItem"  placeholder="auto focus" value={100} />
            </div>
            <div className="ModalItem">
              <span>修改逾期金额</span>
              <InputItem className="InputItem"  placeholder="请输入修改逾期金额..." />
            </div>
            <div className="ModalItem">
              <span>备注</span>
              <InputItem className="InputItem"  placeholder="请输入备注..." />
            </div>
            <List.Item>
              <Button 
                type="primary" 
                size="small"
                onClick={() => {
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
    const { history, location } = this.props
    console.log("订单编号", location.state)
    return (
      <div className={style.Details}>
        <NavBar
          className={style.NavBar}
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => history.goBack()}
        >订单详情页</NavBar>
        {
          this.renderBasicinformation()
        }
        {
          this.renderMember()
        }
        {
          this.renderProductDetails()
        }
        {
          this.renderUserInfo()
        }
        {
          this.renderIdInfo()
        }
        {
          this.renderOrderInfo()
        }
        {
          this.renderNotes()
        }
        {
          this.renderDeductionRecord()
        }
        {
          this.renderCreditInformation()
        }
        {
          this.renderAuditStatus()
        }
        {
          this.renderReturnVisit()
        }
        {
          this.renderModal()
        }
        {
          // 退课计算Modal
          this.rendercourse()
        }
      </div>
    )
  }
}