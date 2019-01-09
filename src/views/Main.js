import React, { Component } from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../router/PrivateRoute";
import Loader from "../components/Loader";

import Dashboard from "./Dashboard";
import Neworganization from "./Neworganization";
import Allorganization from "./Allorganization";

export default class Main extends Component {
  render() {
    const { loading, match } = this.props;

    if (loading)
      return (
        <div className="loader-container">
          <Loader />
        </div>
      );

    return (
      <div className="app-content">
        <Switch>
          <PrivateRoute
            path={`${match.path}/dashboard`}
            component={Dashboard}
          />
          <PrivateRoute
            path={`${match.path}/new-organization`}
            component={Neworganization}
          />
          <PrivateRoute
            path={`${match.path}/organizations`}
            component={Allorganization}
          />
        </Switch>
      </div>
    );
  }
}
