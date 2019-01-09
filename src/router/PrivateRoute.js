import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = props => {
  const token = localStorage.getItem("impekable-admin-token");

  return token ? <Route {...props} /> : <Redirect to="/auth/login" />;
};

export default PrivateRoute;
