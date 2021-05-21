import React from "react";
import Request from "@/utils/request";
import Loadding from "@/component/loadding";
export default class App extends React.Component {
  async componentDidMount() {
    const { data } = await Request({
      url: "xs/getSlideshow",
      method: "POST",
    });
    console.log("lunbotu", data);
  }
  render() {
    // return <div className="App">12312323</div>;
    return <Loadding />;
  }
}
