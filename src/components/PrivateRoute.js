import React from "react";
import { navigate } from "gatsby";
import { isLoggedIn } from "../services/auth";

export default class PrivateRoute extends React.Component {
  componentDidMount() {
    const { location } = this.props;
    if (!isLoggedIn() && location.pathname !== `/skevingtonrha/login`) {
      navigate("/login");
    }
  }

  render() {
    const { component: Component, location, ...rest } = this.props;
    if (!isLoggedIn() && location.pathname !== `/skevingtonrha/login`) {
      return null;
    }
    return <Component {...rest} />;
  }
}
