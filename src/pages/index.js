import React from "react";
import { Route } from "react-router-dom";
const Home = React.lazy(() => import("@/pages/home"))
class Index extends React.Component {
  render() {
    return (
      <Route exact path="/home/index" component={Home} />
    );
  }
}
export default Index;
