import React, { Suspense } from "react";
// import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { HashRouter, Route, Redirect } from "react-router-dom";
import Loadding from "@/component/loadding"
const Index = React.lazy(() => import("./pages/"));
const Login = React.lazy(() => import("@/pages/login"))
export default class App extends React.Component {
  render() {
    return (
      // <BrowserRouter>
      //   <Suspense fallback={<Loadding />}>
      //     <Route exact path="/" render={() => {
      //       return <Redirect to="/home/index"></Redirect>
      //     }} />
      //     <Route path="/home" component={Index} />
      //     <Route exact path="/login" component={Login} />
      //   </Suspense>
      // </BrowserRouter>
      <HashRouter>
        <Suspense fallback={<Loadding />}>
          <Route exact path="/" render={() => {
            return <Redirect to="/home/index"></Redirect>
          }} />
          <Route path="/home" component={Index} />
          <Route exact path="/login" component={Login} />
        </Suspense>
      </HashRouter>
    );
  }
}
