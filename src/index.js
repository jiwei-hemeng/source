import React from "react";
import ReactDOM from "react-dom";
import App from "@/App";
import { Provider } from "react-redux";
import store from "./store/index.js";
import "lib-flexible";
import "./index.scss";
import "./iconfont.css";
import "antd-mobile/dist/antd-mobile.css";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
