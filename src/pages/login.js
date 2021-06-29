import React from "react";
import { InputItem, Button } from 'antd-mobile';
import style from "./login.module.scss"
import { login } from "@/api/user"
export default class Login extends React.Component {
  state = {
    username: "admin",
    password: "admin@123"
  }
  login = async () => {
    const userInfo = {
      ...this.state
    }
    const { data } = await login({
      ...userInfo
    })
    if(data.code !== 200) return
    sessionStorage.setItem("token", data.token);
    this.props.history.push({
      pathname: "/home/index"
    })
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
          <InputItem type="password" className={style.InputItem} value={this.state.password} onChange={(val) => {
            this.setState({
              password: val
            })
          }} />
        </div>
        <Button className={style.submit} type="primary" onClick={this.login}>登录</Button>
      </form>
    )
  }
}