import React, { useState } from "react";
import { InputItem, Button, Toast } from "antd-mobile";
import style from "./login.module.scss";
import { login } from "@/api/user";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
function Login(props) {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin@123");
  const history = useHistory();
  async function userLogin(e) {
    e.preventDefault();
    const { data } = await login({
      username,
      password,
    });
    if (data.code !== 200) {
      return Toast.success(data.msg, 2);
    }
    sessionStorage.setItem("token", data.data);
    props.setToken(data.data);
    history.push("/home/index");
    history.push("/home/index");
  }
  return (
    <div className={style.Login}>
      <div className={style.form_item_title}>欢迎登录后台管理系统</div>
      <div className={style.form_item}>
        <i className="iconfont icon-userName"></i>
        <InputItem
          className={style.InputItem}
          value={username}
          clear
          onChange={(val) => {
            setUsername(val);
          }}
        />
      </div>
      <div className={style.form_item}>
        <i className="iconfont icon-password"></i>
        <InputItem
          type="password"
          className={style.InputItem}
          value={password}
          onChange={(val) => {
            setPassword(val);
          }}
        />
      </div>
      <Button className={style.submit} type="primary" onClick={userLogin}>
        登录
      </Button>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    token: state.token,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setToken: (token) => {
      dispatch({
        type: "setToken",
        value: token,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
