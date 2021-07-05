import React from "react";
import { SearchBar, InputItem, Picker, List, Button } from "antd-mobile";
import style from "./index.module.scss";
const statusArr = [
  [
    {
      label: '选择分期状态',
      value: '0',
    },
    {
      label: '分期中',
      value: '1',
    },
    {
      label: '已还请',
      value: '2',
    },
  ]
]
const selectData = [[
  {
    label: '春',
    value: '春',
  },
  {
    label: '夏',
    value: '夏',
  },
]]
const shenheArr = [[
  {
    label: '选择审核状态',
    value: '0',
  },
  {
    label: '审核中',
    value: '1',
  },
  {
    label: '审核通过',
    value: '2',
  },
  {
    label: '审核未通过',
    value: '3',
  },
  {
    label: '等待签约',
    value: '4',
  },
]]
const agentArr = [
  [
    {
      label: '李明',
      value: '0',
    },
    {
      label: '小红',
      value: '1',
    },
  ]
]
export default class Overduesearch extends React.Component {
  constructor() {
    super()
    this.state = {
      keyword: "",
      student_name: "", // 卖家姓名
      overTime: "", // 逾期天数
      sValue: "",
      type: "",
      moblie: "", // 卖家手机号
      orderID: "", // 订单编号
      merchant: "", // 商家姓名
      fenqiStatus: 0,
      shenheStatus: 0,
      agent: 0
    }
  }
  componentDidMount() {
    this.manualFocusInst.focus();
  }
  Overdue = () => {
    this.props.history.push({
      pathname: "/home/overdue",
      state: {
        student_name: this.state.student_name,
        overTime: this.state.overTime,
        sValue: this.state.sValue,
      }
    })
  }
  render() {
    if(this.props.location.state.type === "overdue") {
      return (
        <div>
          <SearchBar 
            className="OverdueSearch"
            placeholder="请输入卖家姓名..."
            value={this.state.student_name}
            onChange={(e) => {
              this.setState({
                student_name: e
              })
            }}
            ref={ref => this.manualFocusInst = ref}
          />
          <InputItem
            className={style.SearchItem}
            type="text"
            placeholder="请输入逾期天数..."
            value={this.state.overTime}
            onChange={(e) => {
              this.setState({
                overTime: e
              })
            }}
          />
          <Picker
            data={selectData}
            title="选择分配人员"
            cascade={false}
            value={this.state.sValue}
            onChange={v => this.setState({ sValue: v })}
            onOk={v => this.setState({ sValue: v })}
          >
            <List.Item className={style.SearchItem} arrow="horizontal">选择分配人员</List.Item>
          </Picker>
          <Button
            className={style.SearchItem} 
            type="primary"
            onClick={() => {
              this.Overdue()
            }}
          >确认</Button>
        </div>
      )
    } 
    return (
      <>
        <SearchBar 
          className="OverdueSearch"
          placeholder="请输入卖家姓名" 
          onChange={(e) => {
            this.setState({
              keykeyword: e
            })
          }} 
          ref={ref => this.manualFocusInst = ref}
        />
        <InputItem
          className={style.SearchItem}
          type="text"
          placeholder="请输入卖家手机号..."
          value={this.state.moblie}
          onChange={(e) => {
            this.setState({
              moblie: e
            })
          }}
        />
        <InputItem
          className={style.SearchItem}
          type="text"
          placeholder="请输入订单编号..."
          value={this.state.orderID}
          onChange={(e) => {
            this.setState({
              orderID: e
            })
          }}
        />
        <InputItem
          className={style.SearchItem}
          type="text"
          placeholder="请输入商家姓名..."
          value={this.state.orderID}
          onChange={(e) => {
            this.setState({
              orderID: e
            })
          }}
        />
        <Picker
          data={statusArr}
          title="选择分期状态"
          cascade={false}
          value={this.state.fenqiStatus}
          onChange={v => this.setState({ fenqiStatus: v })}
          onOk={v => this.setState({ fenqiStatus: v })}
        >
          <List.Item className={style.SearchItem} arrow="horizontal">选择分期状态</List.Item>
        </Picker>
        <Picker
          data={shenheArr}
          title="选择审核状态"
          cascade={false}
          value={this.state.shenheStatus}
          onChange={v => this.setState({ shenheStatus: v })}
          onOk={v => this.setState({ shenheStatus: v })}
        >
          <List.Item className={style.SearchItem} arrow="horizontal">选择审核状态</List.Item>
        </Picker>
        <Picker
          data={agentArr}
          title="选择审核状态"
          cascade={false}
          value={this.state.agent}
          onChange={v => this.setState({ agent: v })}
          onOk={v => this.setState({ agent: v })}
        >
          <List.Item className={style.SearchItem} arrow="horizontal">选择审核状态</List.Item>
        </Picker>
        <Button
          className={style.SearchItem} 
          type="primary"
          onClick={() => {
            this.props.history.push({
              pathname: "/home/index",
              state: {
                student_name: this.state.student_name, // 卖家姓名
                moblie: this.state.moblie, // 卖家手机号
                orderID: this.state.orderID, // 订单编号
                merchant: this.state.merchant, // 商家姓名
                fenqiStatus: this.state.fenqiStatus,
                shenheStatus: this.state.shenheStatus,
                agent: this.state.agent
              }
            })
          }}
        >确认</Button>
      </>
    )
  }
    
}