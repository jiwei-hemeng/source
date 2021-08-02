import React, { useEffect, useState } from "react";
import {
  NavBar,
  Icon,
  Card,
  List,
  Radio,
  TextareaItem,
  Button,
} from "antd-mobile";
import { editDay } from "@/api/today";
import style from "./index.module.scss";
import MyList from "@/component/MyList";
import MyTable from "@/component/MyTable";
const RadioItem = Radio.RadioItem;
const Chunk = ({ title, children, list }) => {
  if (list) {
    return (
      <Card className={style.Card}>
        <Card.Header title={title} />
        <Card.Body>{children(list)}</Card.Body>
      </Card>
    );
  }
  return null;
};
const Edit = ({ location, history }) => {
  const { id } = location.state;
  const [list, setlist] = useState({});
  useEffect(() => {
    const getList = async () => {
      const { data } = await editDay({
        summary_id: id,
      });
      if (data && data.code !== 200) return;
      setlist(data.data);
    };
    getList();
  }, [id]);
  const renderAuditStatus = () => {
    const Radiolist = [
      { value: 0, label: "待审核" },
      { value: 1, label: "通过" },
      { value: 2, label: "拒绝" },
      { value: 4, label: "等待会员签约" },
    ];
    const AuditStatus = 1;
    return (
      <List className={style.List} renderHeader={() => "审核状态"}>
        {Radiolist.map((item) => {
          return (
            <RadioItem key={item.value} checked={item.value === AuditStatus}>
              {item.label}
            </RadioItem>
          );
        })}
      </List>
    );
  };
  const renderRemark = () => {
    return (
      <List
        className={style.List}
        renderHeader={() => "回访记录"}
        renderFooter={() => {
          return (
            <Button type="primary" size="small" inline>
              提交
            </Button>
          );
        }}
      >
        <TextareaItem autoHeight placeholder="请输入回访记录" rows={3} />
      </List>
    );
  };
  if (list !== {}) {
    return (
      <div className={style.Edit}>
        <NavBar
          className={style.NavBar}
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => history.goBack()}
        >
          订单编辑
        </NavBar>
        <Chunk title="基本信息" list={list.fqOrder}>
          {(item) => {
            if (!item) return null;
            const Arr = [
              { title: "订单ID", value: item.summary_id },
              { title: "订单号", value: item.order_number },
              { title: "卖家姓名", value: item.student_name },
              { title: "手机号", value: item.person_phone },
              { title: "商品价格", value: item.money },
              { title: "贷款费用", value: item.dk_money },
              { title: "分期状态", value: item.order_status },
              { title: "下单时间", value: item.set_up_time },
              { title: "延期期数", value: item.delay_stages },
            ];
            return <MyList list={Arr} />;
          }}
        </Chunk>
        <Chunk title="还款会员详情" list={list.fqOrder}>
          {(item) => {
            const Arr = [
              { title: "剩余本金", value: item.syMoney },
              { title: "已还本息", value: item.paidAllMoney },
              { title: "逾期本息", value: item.overdueAllMoney },
              { title: "罚息", value: item.faxi },
              { title: "逾期天数", value: item.yq_day },
            ];
            return <MyList list={Arr} />;
          }}
        </Chunk>
        <Chunk title="商品详情" list={list.fqOrder}>
          {(item) => {
            const Arr = [
              { title: "商品名称", value: item.course_name },
              { title: "期数", value: item.stages_number },
              { title: "月供", value: item.yue_gong },
              { title: "下期还款期数", value: item.dijiqi },
              { title: "下期应还款时间", value: item.nexttime },
              {
                title: "商家是否担保",
                value: item.deposit_status === 1 ? "是" : "否",
              },
              { title: "机构名称", value: item.merchant_name },
            ];
            return <MyList list={Arr} />;
          }}
        </Chunk>
        <Chunk title="用户信用信息" list={list.fqOrder}>
          {(item) => {
            if (!item.fqUrgent) return null;
            const Arr = [
              { title: "买家姓名", value: item.student_name },
              { title: "买家手机号", value: item.person_phone },
              { title: "现居住地址", value: item.fqUrgent.myaddress },
              { title: "月收入额", value: item.fqUrgent.money },
              { title: "公司名称", value: item.fqUrgent.mycompany },
              { title: "任职部门", value: item.fqUrgent.mybumen },
              { title: "公司地址", value: item.fqUrgent.companyAddress },
              { title: "公司座机", value: item.fqUrgent.companyPhone },
              { title: "亲属姓名", value: item.fqUrgent.fmname },
              { title: "关系", value: item.fqUrgent.guanxi },
              { title: "电话", value: item.fqUrgent.fmmobile },
              { title: "婚姻", value: item.fqUrgent.hunyin },
              { title: "配偶", value: item.fqUrgent.duixiang },
              { title: "配偶电话", value: item.fqUrgent.dxmobile },
              { title: "社会联系人", value: item.fqUrgent.friendname },
              { title: "电话", value: item.fqUrgent.friendmobile },
              { title: "公司联系人", value: item.fqUrgent.companyContacts },
              { title: "电话", value: item.fqUrgent.contactsMobile },
            ];
            return <MyList list={Arr} />;
          }}
        </Chunk>
        <Chunk title="实名身份信息" list={list.fqOrder}>
          {(item) => {
            const Arr = [
              { title: "买家姓名", value: item.fqRenzheng.truename },
              { title: "性别", value: item.fqRenzheng.sex },
              { title: "身份证号", value: item.fqRenzheng.idcard },
              { title: "家庭地址", value: item.fqRenzheng.address },
            ];
            const filesArr = item.fqRenzheng.idimage.split(",");
            return (
              <>
                <MyList list={Arr} />
                <div className={style.Idphoto}>
                  <div className={style.title}>身份证照片</div>
                  <div className={style.images}>
                    {filesArr.map((item, index) => {
                      if (item) {
                        return (
                          <div
                            className={style.image_item}
                            key={index}
                            style={{
                              backgroundImage: `url(${item})`,
                            }}
                            onClick={() => {
                              window.location.href = item;
                            }}
                          ></div>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
              </>
            );
          }}
        </Chunk>
        <MyTable
          title="订单详情信息"
          RenderData={[
            { title: "订单Id", value: "orderSn" },
            { title: "第几期", value: "dijiqi" },
            { title: "付款状态", value: "payStatus" },
            { title: "应付款时间", value: "payDate" },
            { title: "实际支付时间", value: "truePayDate" },
            { title: "月供", value: "yuegong" },
            { title: "逾期金额", value: "yqmoney" },
          ]}
          list={list.fqOrderList}
        />
        <MyTable
          title="操作记录"
          RenderData={[
            { title: "操作人", value: "actionUsername" },
            { title: "操作时间", value: "timeString" },
            { title: "商家担保", value: "guarantees" },
            { title: "备注", value: "statusDesc" },
          ]}
          list={list.fqOrderActionList}
        />
        <MyTable
          title="操作记录"
          RenderData={[
            { title: "编号", value: "id" },
            { title: "订单编号", value: "orderSn" },
            { title: "支付商单号", value: "payorderSn" },
            { title: "扣款是否成功", value: "isLokstr" },
            { title: "信息", value: "message" },
            { title: "扣款时间", value: "timeString" },
          ]}
          list={list.fqApilogdks}
        />
        {renderAuditStatus()}
        {renderRemark()}
      </div>
    );
  }
};
export default Edit;
