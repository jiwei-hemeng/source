import React from "react";
import style  from "./index.module.scss";
import { Test } from "@/api/user";
import { List, Button } from "antd-mobile";
import { connect } from "react-redux";
const appIcon = require("../../static/my/appicon.png");

class My extends React.Component {
  state = {
    appIcon: require("../../static/my/appicon.png")
  }
  componentDidMount = async () => {
    await Test()
  }
  render() {
    return (
      <div className={style.My}>
        <div className={style.Card}>
          <div className={style.appIcon}>
            <img className={style.avatar} src={appIcon.default} alt="象上科技" />
            <div className={style.Info}>
              <p>Admin</p>
              <p>管理员</p>
            </div>
          </div>
        </div>
        <List>
          <List.Item
            className={style.ListItem}
            extra="More"
            arrow="horizontal"
            onClick={e => console.log(e)}
          >
            个人中心
          </List.Item>
          <List.Item
            className={style.ListItem}
            extra="More"
            arrow="horizontal"
            onClick={e => console.log(e)}
          >
            版本信息
          </List.Item>
          <List.Item
            className={style.ListItem}
            extra="More"
            arrow="horizontal"
            onClick={e => console.log(e)}
          >
            联系我们
          </List.Item>
        </List>
        <Button
          className={style.Logout}
          type="primary"
          onClick={() => {
            sessionStorage.removeItem("token");
            this.props.setToken("")
            this.props.history.push({
              pathname: "/login"
            })
          }}
        >安全退出</Button>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    token: state.token
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setToken: (token) => {
      dispatch({
        type: "setToken",
        value: token,
      });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(My);