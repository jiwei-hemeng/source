import React from "react";
import { Route } from "react-router-dom";
import style from "./index.module.scss";
const Home = React.lazy(() => import("@/pages/home"));
class Index extends React.Component {
  clickItem = (i) => {
    console.log("点击了第" + i + "项")
  }
  render() {
    return (
      <>
        <Route exact path="/home/index" component={Home} />
        <ul className={style.tarbar}>
          <li 
            className={style.tarbar_item} 
            onClick={() => {
              this.clickItem(0)
            }}
          >
            <i className="iconfont icon-order"></i>
            <p>正常订单</p>
          </li>
          <li 
            className={style.tarbar_item}
            onClick={() => {
              this.clickItem(1)
            }}
          >
            <i className="iconfont icon-overdue"></i>
            <p>逾期订单</p>
          </li>
        </ul>
      </>
    );
  }
}
export default Index;
