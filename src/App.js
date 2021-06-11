import React from "react";
import Request from "@/utils/request";
import { connect } from "react-redux";
import "./App.scss";
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
    // return (
    //   <Suspense fallback={<Loadding />}>
    //     <div className="App">App_root</div>
    //     <div>4564654654545</div>
    //   </Suspense>
    // );
    return (
      <div id="App">
        <div>商品数量：{this.props.num}</div>
        <button
          onClick={() => {
            this.props.add();
          }}
        >
          点我++
        </button>
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
