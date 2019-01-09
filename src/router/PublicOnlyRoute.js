import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicOnlyRoute = props => {
  const token = localStorage.getItem("impekable-admin-token");

  return token ? <Redirect to="/app/dashboard" /> : <Route {...props} />;
};

export default PublicOnlyRoute;
