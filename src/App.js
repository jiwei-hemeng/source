import React, { Suspense } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
// import { HashRouter, Route, Redirect } from "react-router-dom";
import Loadding from "@/component/loadding"
const Index = React.lazy(() => import("./pages/"));
const Login = React.lazy(() => import("@/pages/login"))
const OverdueDetails = React.lazy(() => import("@/pages/overdue_details"));
const CreditRecords = React.lazy(() => import("@/pages/CreditRecords"));
const OverdueSearch = React.lazy(() => import("@/pages/overdueSearch"));
const Periodization = React.lazy(() => import("@/pages/periodization"));
const ReturnBack = React.lazy(() => import("@/pages/ReturnBack"));
export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<Loadding />}>
          <Route exact path="/" render={() => {
            return <Redirect to="/home/index"></Redirect>
          }} />
          <Route path="/home" component={ Index } />
          <Route exact path="/login" component={ Login } />
          <Route path="/overduedetails/:id" component={ OverdueDetails } />
          <Route path="/creditrecords" component={ CreditRecords } />
          <Route path="/overdueSearch" component={ OverdueSearch } />
          <Route path="/periodization" component={ Periodization } />
          <Route path="/returnBack" component={ ReturnBack } />
        </Suspense>
      </BrowserRouter>
      // <HashRouter>
      //   <Suspense fallback={<Loadding />}>
      //     <Route exact path="/" render={() => {
      //       return <Redirect to="/home/index"></Redirect>
      //     }} />
      //     <Route path="/home" component={Index} />
      //     <Route exact path="/login" component={Login} />
      //   </Suspense>
      // </HashRouter>
    );
  }
}
