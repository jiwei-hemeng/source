import React from "react";
import Request from "@/utils/request";
import { connect } from "react-redux";
import { Button } from "antd-mobile";
import style from "./index.module.scss";
class App extends React.Component {
  state = {
    name: "nkjadsnkj",
  };
  async componentDidMount() {
    const { data } = await Request({
      url: "xs/getSlideshow",
      method: "POST",
    });
    console.log("lunbotu", data);
  }
  render() {
    return (
      <div id="App">
        <div className={ style.test }>px2rem适配的配置</div>
        <div>商品数量：{this.props.num}</div>
        <Button
          type="primary"
          onClick={() => {
            this.props.add();
          }}
        >
          点我++
        </Button>
      </div>
    );
  }
}
// 获取共享的数据
const mapStateToProps = (state, ownProps) => {
  return {
    num: state.num,
  };
};
// 操作共享的数据
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    add: () => {
      dispatch({
        type: "add",
        value: 1,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
