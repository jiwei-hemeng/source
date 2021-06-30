import React from "react";
export default class OverdueDetails extends React.Component {
  render() {
    console.log(this.props.match.params.id)
    return (
      <div>我是逾期订单详情页</div>
    )
  }
}