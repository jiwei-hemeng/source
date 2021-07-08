import React from "react";
import { NavBar, Icon } from "antd-mobile";
import style from "./index.module.scss";
export default class Credit extends React.Component {
  render() {
    const { history } = this.props
    return (
      <div className={style.Credit}>
        <NavBar
          className={style.NavBar}
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => history.goBack()}
        >征信信息</NavBar>
        <div className={style.CreditItem}>
          <span className={style.title}>被一家机构加入MSP黑名单信息</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>被两家以上加入MSP黑名单</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>存在申请信息</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>近6个月申请次数达到3次或以上</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>近6个月申请机构数达到3或以上</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>存在申请拒绝信息</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>近6个月内存在2次或以上申请拒绝信息</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>存在借贷合同</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>存在2笔或以上借贷合同</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>存在未到期借贷合同</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>存在逾期信息</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>存在单笔合同2次或以上逾期信息</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>存在2笔或以上不同合同逾期信息</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>存在M3逾期信息</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>手机号与历史记录不一致</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>邮箱与历史记录不一致</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>工作单位与半年内历史记录不一致</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>常用住址与半年内历史记录不一致</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>手机号关联黑名单逾期等风险信息</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>邮箱关联黑名单逾期等风险信息</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>工作单位关联黑名单逾期等风险信息</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>常用住址关联黑名单逾期等风险信息</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>身份证号关联其他身份验证一致申请人</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>手机号与其他申请人共用</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>邮箱与其他申请人共用</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>半年内同一工作单位多人申请借贷</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>半年内同一常用住址多人申请借贷</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>存在司法失信信息</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>存在2条或以上司法失信信息</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>存在司法执行信息</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>存在2条或以上司法执行信息</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>借款申请处于审批过程中的笔数统计</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>处于审批过程中的借贷申请金额合计</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>借款申请得到通过的笔数统计</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>审批通过的借贷申请金额合计</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>借款申请被拒绝的笔数统计</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>被拒绝的借贷申请金额合计</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>借款申请被客户取消的笔数统计</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>借款在合同期内、未偿还总金额大于零、同时无逾期记录的借款笔数统计</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>正常未结清借款的合同金额总计</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>借款合同到期结清或提前还款、未偿还总金额等于零、同时无逾期记录的借款笔数统计</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>正常已结清借款的合同金额总计</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>存在逾期记录、同时没有结清的笔数统计</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>异常未结清借款的合同金额总计</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>款人在行业不良库中的违约记录数统计</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>行业不良记录中的违约合同总金额</span><span>0</span>
        </div>
        <div className={style.CreditItem}>
          <span className={style.title}>3个月内查询记录数统计：贷款申请、债权管理、逾期管理、信息补录、行业不良几个环节被查询的次数之和</span><span>0</span>
        </div>
      </div>
    )
  }
}