import React from "react";
import { InputItem, Button, Toast } from "antd-mobile";
import style from "./login.module.scss";
import { login } from "@/api/user";
import { connect } from "react-redux";
class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
    }
  }
  login = async () => {
    const userInfo = {
      ...this.state
    }
    const { data } = await login({
      ...userInfo
    })
    if(data.code !== 200) {
      return Toast.success(data.msg, 2)
    }
    sessionStorage.setItem("token", data.data);
    this.props.setToken(data.data);
    window.location.href ="/"
  }
  render() { 
    return (
      <form className={style.Login}>
        <div className={style.form_item_title}>
          欢迎登录后台管理系统
        </div>
        <div className={style.form_item}>
          <i className="iconfont icon-userName"></i>
          <InputItem 
            className={style.InputItem} 
            value={this.state.username} 
            clear
            onChange={(val) => {
            this.setState({
              username: val
            })
          }} />
        </div>
        <div className={style.form_item}>
          <i className="iconfont icon-password"></i>
          <InputItem 
            type="password" 
            className={style.InputItem} 
            value={this.state.password} 
            onChange={(val) => {
              this.setState({
                password: val
              })
            }} 
          />
        </div>
        <Button className={style.submit} type="primary" onClick={this.login}>登录</Button>
      </form>
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);
