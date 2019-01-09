import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import LoginCard from "../components/Auth/LoginCard";

const Auth = props => {
  const { match } = props;

  return (
    <div className="login-container">
      <Switch>
        <Route path={`${match.path}/login`} component={LoginCard} />
        <Route component={() => <Redirect to="/auth/login" />} />
      </Switch>
    </div>
  );
};

export default Auth;
