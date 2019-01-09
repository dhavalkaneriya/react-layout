import React, { Component, Fragment } from "react";
import { Router, Redirect, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store/index";

import PublicOnlyRoute from "./router/PublicOnlyRoute";
import PrivateRoute from "./router/PrivateRoute";

import Loader from "./components/Loader";
import Main from "./views/Main";
import Auth from "./views/Auth";
import Navigation from "./components/Navigation/Navigation";
import history from "./router/history";

export default class app extends Component {
  state = {
    isLoading: false
  };
  render() {
    const { isLoading } = this.state;

    if (isLoading)
      return (
        <div className="app-loader-container">
          <Loader />
        </div>
      );

    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="app-container">
            <Switch>
              <PublicOnlyRoute
                path="/auth"
                component={props => <Auth {...props} />}
              />
              <PrivateRoute
                path="/app"
                component={props => (
                  <Fragment>
                    <Navigation {...props} />

                    <Main {...props} />
                  </Fragment>
                )}
              />
              <Route component={() => <Redirect to="/app/dashboard" />} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
