import React from "react";
import { InputItem, Button } from 'antd-mobile';
import style from "./login.module.scss"
import { login } from "@/api/user"
export default class Login extends React.Component {
  state = {
    userName: "hemeng",
    passWord: "123123"
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
    this.props.history.push("/home/index")
  }
  render() {
    return (
      <form className={style.Login}>
        <div className={style.form_item}>
          <i className="iconfont icon-userName"></i>
          <InputItem className={style.InputItem} value={this.state.userName} onChange={(val) => {
            this.setState({
              userName: val
            })
          }} />
        </div>
        <div className={style.form_item}>
          <i className="iconfont icon-password"></i>
          <InputItem className={style.InputItem} value={this.state.passWord} onChange={(val) => {
            this.setState({
              passWord: val
            })
          }} />
        </div>
        <Button className={style.submit} type="primary" onClick={this.login}>注册或登录</Button>
      </form>
    )
  }
}