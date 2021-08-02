import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import styles from "./index.module.scss";
import Virtualized from "@/component/virtualized";
import GoTop from "@/component/GoTop";
import { Card, Toast, SearchBar, Button } from "antd-mobile";
import { listDayOrder } from "@/api/today";
import MyList from "@/component/MyList";
const testList = [
  {
    orderId: null,
    downOrdersn: null,
    loantype: null,
    modelname: null,
    brandname: null,
    specname: null,
    color: null,
    adminId: null,
    agentId: null,
    businessId: null,
    userId: null,
    cuserId: null,
    inId: null,
    goodsprice: null,
    daimoney: null,
    fenqiPeriods: null,
    downPaymentRate: null,
    downPayment: null,
    payorderSn: null,
    addtime: null,
    paytime: null,
    status: null,
    paymethod: null,
    payname: null,
    guarantee: null,
    lilv: null,
    guanlirate: null,
    fuwurate: null,
    yuegong: null,
    contractnum: null,
    fqstatus: null,
    dijiqi: 1,
    nexttime: null,
    isapply: null,
    applytime: null,
    isbaddebt: null,
    isprepayment: null,
    isvalid: null,
    delay: null,
    repaymethod: null,
    cancelpay: null,
    dtime: null,
    uconfirm: null,
    cconfirm: null,
    agreetime: null,
    itemId: null,
    source: null,
    istest: null,
    surplusTime: null,
    supplyImg: null,
    isCdel: null,
    isUdel: null,
    isfree: null,
    yqnum: null,
    isPlan: null,
    planid: null,
    isSend: null,
    isSign: null,
    isChangeAgent: null,
    zdStatus: null,
    shPassTime: null,
    creditCode: null,
    isSign2: null,
    order_sn: null,
    summary_id: 6278,
    order_number: "s20210702105349808674",
    sh_status: 1,
    student_name: "谢飞扬",
    person_phone: "17722430460",
    merchant_name: "义乌市若棠计算机培训有限公司",
    truename: "李莎",
    fbId: null,
    course_name: "淘宝美工",
    money: 6000.0,
    dk_money: 4800.0,
    stages_type: 3,
    mc_deposit_bl: 0.0,
    mc_deposit: 0.0,
    mc_deposit_status: 0,
    yue_gong: 800.0,
    order_status: "0",
    deposit_status: "1",
    set_up_time: "2021-07-02 10:53:49",
    stages_number: 6,
    name: "张旭亮",
    down_payment: null,
    down_payment_money: 0.0,
    down_payment_status: null,
    admin_status: null,
    choiceName: null,
    mc_deposit_paytime: null,
    mc_deposit_ought_time: null,
    mc_deposit_money: null,
    weiyue_day: null,
    weiyue_money: null,
    mc_deposit_return_time: null,
    bank_name: null,
    card_number: null,
    username: null,
    mc_deposit_caiwu_out_status: null,
    caiwu_bei_zhu: null,
    mc_deposit_cash_out_status: null,
    delay_stages: "0",
    syMoney: null,
    paidAllMoney: null,
    overdueAllMoney: null,
    faxi: null,
    yq_day: null,
    fqUrgent: null,
    fqRenzheng: null,
    image_front: null,
    image_fan: null,
    image_hand: null,
    desc_text: null,
    application_thumb: null,
    statusDesc: null,
    audio_url: null,
    iscardValue: null,
    agentName: "张旭亮",
    a001: null,
    a002: null,
    b003: null,
    b004: null,
    c001: null,
    c003: null,
    d001: null,
    f001: null,
    h001: null,
    h003: null,
  },
];
const Today = () => {
  // const [list, setList] = useState([]);
  const [list, setList] = useState(testList);
  const [count, setCount] = useState(1);
  const [student_name, set_student_name] = useState("");
  let isUnmounted = useRef(true);
  const history = useHistory();
  useEffect(() => {
    isUnmounted.current = true;
    return () => {
      isUnmounted.current = false;
    };
  });
  // 设置行高
  const rowHeight = () => {
    const clientWidth = document.body.clientWidth;
    if (clientWidth < 321) {
      return 145;
    } else if (clientWidth < 376) {
      return 165;
    } else if (clientWidth < 415) {
      return 213;
    } else {
      return 270;
    }
  };
  // 加载更多
  const loadMoreRows = ({ startIndex, stopIndex }) => {
    const pageNum = startIndex / 10 + 1;
    let params = {
      page: pageNum,
      size: 10,
      truename: student_name === "" ? undefined : student_name,
    };
    return new Promise(async (resolve, reject) => {
      Toast.loading("正在加载中...", 0, null, true);
      const { data } = await listDayOrder(params);
      Toast.hide();
      if (data && data.code === 200) {
        const newlist = [...new Set([...list, ...data.data])];
        const totle = data.count;
        if (isUnmounted.current) {
          setList(newlist);
          setCount(totle);
        }
        return resolve();
      }
      return reject();
    });
  };
  const renderList = (item) => {
    const renderArr = [
      { title: "卖家姓名", value: item.student_name },
      { title: "机构名称", value: item.merchant_name },
      { title: "商品名称", value: item.course_name },
      { title: "商品价格", value: item.money },
    ];
    return (
      <Card className={styles.Card} key={item.order_number}>
        <Card.Header
          title={<span className={styles.CardTitle}>{item.order_number}</span>}
          extra={
            <span
              className={item.order_status === "0" ? styles.status : styles.end}
            >
              {item.order_status === "0" ? "分期中" : "已还清"}
            </span>
          }
        />
        <Card.Body>
          <MyList list={renderArr} />
          <div className={styles.btns}>
            <Button
              type="primary"
              className={styles.btn}
              size="small"
              icon={<i className="iconfont icon-dingdanxiangqingxianxing" />}
              onClick={() => {
                history.push({
                  pathname: "/periodization",
                  state: { id: item.summary_id },
                });
              }}
            >
              详情
            </Button>
            <Button
              type="primary"
              className={styles.btn}
              size="small"
              icon={<i className="iconfont icon-dingdanxiangqingxianxing" />}
              onClick={() => {
                history.push({
                  pathname: "/edit",
                  state: { id: item.summary_id, type: 1 },
                });
              }}
            >
              编辑
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  };
  const rowRenderer = ({
    key, // Unique key within array of rows
    index, // 索引号
    isScrolling, // 当前项是否正在滚动中
    isVisible, // 当前项在List中是可见的
    style, // 重点属性：一定要给每一个行数添加该样式
  }) => {
    let item = list[index];
    if (item) {
      return (
        <div key={key} style={style}>
          {renderList(item)}
        </div>
      );
    }
  };
  return (
    <div className={styles.Today}>
      <SearchBar
        value={student_name}
        placeholder="请输入卖家姓名"
        onChange={(v) => set_student_name(v)}
        onSubmit={(v) => {
          loadMoreRows({
            startIndex: 0,
          });
        }}
        onCancel={() => {
          set_student_name("");
          loadMoreRows({
            startIndex: 0,
          });
        }}
      />
      <Virtualized
        count={count}
        list={list}
        minimumBatchSize={10}
        rowHeight={rowHeight}
        rowRenderer={rowRenderer}
        loadMoreRows={loadMoreRows}
      />
      <GoTop />
    </div>
  );
};
export default Today;
