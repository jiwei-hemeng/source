import React, { useEffect, useRef, useState } from "react";
import { NavBar, Icon, Card, ImagePicker } from "antd-mobile";
import { editDay } from "@/api/today";
import style from "./index.module.scss";
import MyList from "@/component/MyList";
const Chunk = ({ title, children, list }) => {
  return (
    <Card className={style.Card}>
      <Card.Header title={title} />
      <Card.Body>{children(list)}</Card.Body>
    </Card>
  );
};
const MyTable = ({ title, list, RenderData }) => {
  return (
    <Card className={style.Card}>
      <Card.Header title={title} />
      <Card.Body>
        <table className={style.OrderInfo}>
          <thead>
            <tr>
              {RenderData.map((item) => {
                return <th key={item.title}>{item.title}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {list.map((item) => {
              return (
                <tr>
                  {RenderData.map((j) => {
                    return <td>{item[j.value]}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card.Body>
    </Card>
  );
};
const Edit = ({ location, history }) => {
  const { id } = location.state;
  const isDistory = useRef(false);
  const [list, setlist] = useState({});
  const [files, setfiles] = useState([]);
  useEffect(() => {
    isDistory.current = true;
    const getList = async () => {
      const { data } = await editDay({
        summary_id: id,
      });
      if (data && data.code !== 200) return;
      const fileList = [
        { url: data.fqOrder.image_front, id: "身份证正面面照片" },
        { url: data.fqOrder.image_fan, id: "身份证国徽面照片" },
        { url: data.fqOrder.image_hand, id: "手持身份证照片" },
      ];
      setfiles(fileList);
      setlist(data.data);
    };
    if (isDistory.current) {
      getList();
    }
    return () => {
      isDistory.current = false;
    };
  });
  return (
    <div className={style.Edit}>
      <NavBar
        className={style.NavBar}
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => history.goBack()}
      >
        回访信息
      </NavBar>
      <Chunk title="基本信息" list={list}>
        {(item) => {
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
      <Chunk title="还款会员详情" list={list}>
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
      <Chunk title="商品详情" list={list}>
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
      <Chunk title="用户信用信息" list={list}>
        {(item) => {
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
      <Chunk title="实名身份信息" list={list}>
        {(item) => {
          const Arr = [
            { title: "买家姓名", value: item.truename },
            { title: "性别", value: item.sex },
            { title: "身份证号", value: item.idcard },
            { title: "家庭地址", value: item.address },
          ];
          return (
            <>
              <MyList list={Arr} />
              <div className={style.Idphoto}>
                <div className={style.title}>身份证照片</div>
                <ImagePicker files={files} selectable={false} disableDelete />
              </div>
            </>
          );
        }}
      </Chunk>
      <MyTable title="订单详情信息" RenderData={[]} list={[]} />
    </div>
  );
};
export default Edit;
