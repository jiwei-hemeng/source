import React, { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Loadding from "@/component/loadding"
const Index = React.lazy(() => import("./pages/"));
const Home = React.lazy(() => import("@/pages/home"))
export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<Loadding />}>
          <Route exact path="/" component={Index} />
          <Route exact path="/home" component={Home} />
        </Suspense>
      </BrowserRouter>
    );
  }
}
