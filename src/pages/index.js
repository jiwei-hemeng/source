import React from "react";
import { Route } from "react-router-dom";
import { TabBar } from "antd-mobile";
const Home = React.lazy(() => import("@/pages/home"));
const Overdue = React.lazy(() => import("@/pages/overdue"))
class Index extends React.Component {
  state = {
    selectedTab: "order"
  }
  render() {
    return (
      <>
        <Route exact path="/home/index" component={Home} />
        <Route exact path="/home/overdue" component={Overdue} />
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          prerenderingSiblingsNumber="0"
          tabBarPosition="bottom"
        >
          <TabBar.Item
            title="正常订单"
            key="order"
            icon={<i className="iconfont icon-order" />}
            selectedIcon={<i className="iconfont icon-order" />}
            selected={this.state.selectedTab === 'order'}
            onPress={() => {
              this.setState({
                selectedTab: "order",
              }, () => {
                this.props.history.push({
                  pathname: "/home/index"
                })
              });
            }}
          ></TabBar.Item>
          <TabBar.Item
            title="逾期订单"
            key="order"
            icon={<i className="iconfont icon-overdue" />}
            selectedIcon={<i className="iconfont icon-overdue" />}
            selected={this.state.selectedTab === 'overdue'}
            onPress={() => {
              this.setState({
                selectedTab: "overdue",
              }, () => {
                this.props.history.push({
                  pathname: "/home/overdue"
                })
              });
            }}
          />
        </TabBar>
      </>
    );
  }
}
export default Index;
