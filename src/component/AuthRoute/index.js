import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
class Authroute extends Component {
  render() {
    const { path, exact, Page } = this.props;
    return (
      <Route
        path={path}
        exact={exact}
        render={(props) => {
          if (this.props.token) {
            // 封装以后必须先张开props然后传给相应的页面
            return <Page {...props}></Page>;
          }
          return <Redirect to="/login"></Redirect>;
        }}
      ></Route>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    token: state.token,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setToken: (token) => {
      dispatch({
        type: "setToken",
        value: token,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Authroute);
