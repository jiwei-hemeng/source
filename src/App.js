import React from "react";
import Request from "@/utils/request";
import Loadding from "@/component/loadding";
import "./App.scss";
export default class App extends React.Component {
  async componentDidMount() {
    const { data } = await Request({
      url: "xs/getSlideshow",
      method: "POST",
    });
    console.log("lunbotu", data);
  }
  render() {
    return (
      <div className="App">
        <Loadding />
      </div>
    );
  }
}
