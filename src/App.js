import React, { Suspense } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
// import { HashRouter, Route, Redirect } from "react-router-dom";
import AuthRoute from "@/component/AuthRoute";
import Loadding from "@/component/loadding";
const Index = React.lazy(() => import("./pages/"));
const Login = React.lazy(() => import("@/pages/login"));
const OverdueDetails = React.lazy(() => import("@/pages/details"));
const OverdueSearch = React.lazy(() => import("@/pages/search"));
const Periodization = React.lazy(() => import("@/pages/periodization"));
const ReturnBack = React.lazy(() => import("@/pages/ReturnBack"));
const leaveschool = React.lazy(() => import("@/pages/leaveschool"));
const TodayEdit = React.lazy(() => import("@/pages/today/Edit"));
export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<Loadding />}>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/home/index"></Redirect>;
            }}
          />
          <AuthRoute path="/home" exact={false} Page={Index} />
          <Route exact path="/login" component={Login} />
          <AuthRoute
            path="/overduedetails"
            exact={true}
            Page={OverdueDetails}
          />
          <AuthRoute path="/overdueSearch" exact={true} Page={OverdueSearch} />
          <AuthRoute path="/returnBack" exact={true} Page={ReturnBack} />
          <AuthRoute path="/periodization" exact={true} Page={Periodization} />
          <AuthRoute path="/leaveschool" exact={true} Page={leaveschool} />
          <AuthRoute path="/edit" exact={true} Page={TodayEdit} />
        </Suspense>
      </BrowserRouter>
    );
  }
}
