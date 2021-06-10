import React from "react";
import Request from "@/utils/request";
// import Loadding from "@/component/loadding";
import "./App.scss";
export default class App extends React.Component {
  state = {
    name: "nkjadsnkj",
  };
  async componentDidMount() {
    const { data } = await Request({
      url: "xs/getSlideshow",
      method: "POST",
    });
    console.log("lunbotu", data);
  }
  render() {
    // return (
    //   <Suspense fallback={<Loadding />}>
    //     <div className="App">App_root</div>
    //     <div>4564654654545</div>
    //   </Suspense>
    // );
    return <div id="App">1231312</div>;
  }
}
