import React, { Suspense } from "react";
// import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { HashRouter, Route, Redirect } from "react-router-dom";
import AuthRoute from "@/component/AuthRoute"
import Loadding from "@/component/loadding"
const Index = React.lazy(() => import("./pages/"));
const Login = React.lazy(() => import("@/pages/login"))
const OverdueDetails = React.lazy(() => import("@/pages/details"));
const CreditRecords = React.lazy(() => import("@/pages/CreditRecords"));
const OverdueSearch = React.lazy(() => import("@/pages/search"));
const Periodization = React.lazy(() => import("@/pages/periodization"));
const ReturnBack = React.lazy(() => import("@/pages/ReturnBack"));
const leaveschool = React.lazy(() => import("@/pages/leaveschool"));
export default class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={<Loadding />}>
          <Route exact path="/" render={() => {
            return <Redirect to="/home/index"></Redirect>
          }} />
          {/* <Route path="/home" component={ Index } /> */}
          <AuthRoute path="/home" exact={false} Page={ Index } />
          <Route exact path="/login" component={ Login } />
          {/* <Route path="/overduedetails/:id" component={ OverdueDetails } /> */}
          <AuthRoute path="/overduedetails" exact={true} Page={ OverdueDetails } />
          {/* <Route path="/creditrecords" component={ CreditRecords } /> */}
          <AuthRoute path="/creditrecords" exact={true} Page={ CreditRecords } />
          {/* <Route path="/overdueSearch" component={ OverdueSearch } /> */}
          <AuthRoute path="/overdueSearch" exact={true} Page={ OverdueSearch } />
          {/* <Route path="/returnBack" component={ ReturnBack } /> */}
          <AuthRoute path="/returnBack" exact={true} Page={ ReturnBack } />
          {/* <Route path="/periodization" component={ Periodization } /> */}
          <AuthRoute path="/periodization" exact={true} Page={ Periodization } />
          <AuthRoute path="/leaveschool" exact={true} Page={ leaveschool } />
        </Suspense>
      </HashRouter>
    );
  }
}
