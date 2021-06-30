import React from "react";
import { SearchBar, InputItem, Picker, List, Button } from "antd-mobile";
import style from "./index.module.scss"
export default class OverdueSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      keyword: "",
      student_name: "", // 卖家姓名
      overTime: "", // 逾期天数
      selectData: [
        [
          {
            label: '春',
            value: '春',
          },
          {
            label: '夏',
            value: '夏',
          },
        ]
      ],
      sValue: ""
    }
  }
  componentDidMount() {
    this.manualFocusInst.focus();
  }
  Overdue = () => {
    this.props.history.push({
      pathname: "/home/overdue",
      state: {
        keykeyword: this.state.keyword,
        student_name: this.state.student_name,
        overTime: this.state.overTime,
        sValue: this.state.sValue,
      }
    })
  }
  render() {
    return (
      <div>
        <SearchBar 
          className="OverdueSearch"
          placeholder="请输入..." 
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
          placeholder="请输入卖家姓名..."
          value={this.state.student_name}
          onChange={(e) => {
            this.setState({
              student_name: e
            })
          }}
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
          data={this.state.selectData}
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
}