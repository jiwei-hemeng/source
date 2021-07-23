import React from "react";
import { Route } from "react-router-dom";
import { TabBar } from "antd-mobile";
const Home = React.lazy(() => import("@/pages/home"));
const Overdue = React.lazy(() => import("@/pages/overdue"));
const My = React.lazy(() => import("@/pages/my"));

const tabItems = [
  { title: "正常订单", icon: "iconfont icon-order", path: "/home/index" },
  { title: "逾期订单", icon: "iconfont icon-overdue", path: "/home/overdue" },
  { title: "我的", icon: "iconfont icon-wode", path: "/home/my" },
];
class Index extends React.Component {
  state = {
    selectedTab: "/home/index",
  };
  renderTabBarItem = () => {
    return tabItems.map((item) => {
      return (
        <TabBar.Item
          title={item.title}
          key={item.path}
          icon={<i className={item.icon} />}
          selectedIcon={<i className={item.icon} />}
          selected={this.state.selectedTab === item.path}
          onPress={() => {
            this.setState(
              {
                selectedTab: item.path,
              },
              () => {
                this.props.history.push({
                  pathname: item.path,
                });
              }
            );
          }}
        />
      );
    });
  };
  componentDidMount() {
    const { location } = this.props;
    this.setState({
      selectedTab: location.pathname,
    });
  }
  render() {
    return (
      <>
        <Route exact path="/home/index" component={Home} />
        <Route exact path="/home/overdue" component={Overdue} />
        <Route exact path="/home/my" component={My} />
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          prerenderingSiblingsNumber="0"
          tabBarPosition="bottom"
        >
          {this.renderTabBarItem()}
        </TabBar>
      </>
    );
  }
}
export default Index;
