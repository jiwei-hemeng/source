import React, { Component } from "react";
import { WingBlank, Toast } from "antd-mobile";
import styles from "./index.module.css";
import { login } from "@/api/user";
import { connect } from "react-redux";
import { withFormik, ErrorMessage, Form, Field } from "formik";
// 导入yup
import * as Yup from "yup";
import { decrypt, encrypt } from "@/utils/jsencrypt"
class Login extends Component {
  render() {
    let { errors } = this.props;
    return (
      <div className={styles.root}>
        <WingBlank>
          <Form>
            <div className={styles.formItem}>
              <i className="iconfont icon-userName"></i>
              <Field
                type="text"
                name="username"
                className={styles.input}
                placeholder="请输入账号"
              />
            </div>
            {errors.username ? (
              <ErrorMessage
                component="div"
                name="username"
                className={styles.error}
              />
            ) : null}
            <div className={styles.formItem}>
              <i className="iconfont icon-password"></i>
              <Field
                type="password"
                name="password"
                className={styles.input}
                placeholder="请输入密码"
              />
            </div>
            {errors.password ? (
              <ErrorMessage
                component="div"
                name="password"
                className={styles.error}
              />
            ) : null}
            <div className={styles.formSubmit}>
              <button className={styles.submit} type="submit">
                登 录
              </button>
            </div>
          </Form>
        </WingBlank>
      </div>
    );
  }
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withFormik({
    // 相当于state
    mapPropsToValues: () => {
      return {
        username: "",
        password: "",
      };
    },
    // 默认相当于提交事件
    handleSubmit: async (value, { props }) => {
      Toast.loading("正在登录中...", 0);
      const encryptData = encrypt(value.password);
      console.log("jsencrypt", encryptData, decrypt(encryptData))
      const { data, status } = await login({
        username: value.username,
        password: encryptData,
      });
      console.log("status", status)
      Toast.hide();
      if (data.code === 200) {
        Toast.success("登录成功哦~~", 2);
        sessionStorage.setItem("token", data.token);
        props.setToken(data.token);
        props.history.push("/");
      } else {
        Toast.fail("登录失败~~", 2);
      }
    },
    // 用于表单验证，会将错误消息传给this.props
    validationSchema: Yup.object().shape({
      // username: Yup.string().required('用户名必须填写').matches(/^[a-zA-Z_\d]{5,8}$/,'用户名长度5-8位'),
      username: Yup.string().required("用户名必须填写"),
      password: Yup.string().required("密码必须填写"),
    }),
  })(Login)
);
