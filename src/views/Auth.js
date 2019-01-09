import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import LoginCard from "../components/Auth/LoginCard";
import BackGround from "../assets/bitmap@2x.png";

const Auth = props => {
  const { match } = props;

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    background: `url(${BackGround}) no-repeat center center fixed`,
    // -webkitBackgroundSize: cover;
    // -moz-background-size: cover;
    // -o-background-size: cover;
    backgroundSize: "cover"
  };
  return (
    <div className="login-container" style={style}>
      <Switch>
        <Route path={`${match.path}/login`} component={LoginCard} />
        <Route component={() => <Redirect to="/auth/login" />} />
      </Switch>
    </div>
  );
};

export default Auth;
