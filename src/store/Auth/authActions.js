import store from "../index";
import JWTDecoder from "jwt-decode";
import _ from "lodash";

import history from "../../router/history";
import { authApi } from "../../api/index";

import AUTH_TYPE from "./authTypes";

const { dispatch } = store;

export const login = payload => {
  return authApi
    .login(payload)
    .then(result => {
      const { token } = result;

      dispatch({ type: AUTH_TYPE.LOGIN, token });
    })
    .then(() => updateAuthData());
};

export const logout = () => {
  return Promise.resolve(dispatch({ type: AUTH_TYPE.LOGOUT })).then(() =>
    history.push("/auth/login")
  );
};

export const updateAuthData = (payload = {}) => {
  const token = localStorage.getItem("impekable-admin-token");

  if (token) {
    const tokenData = JWTDecoder(token);

    return authApi
      .profile(tokenData.email)
      .then(result => {
        const { data } = result;

        dispatch({
          type: AUTH_TYPE.UPDATE_AUTH_DATA,
          payload: { ...data, ...payload }
        });

        return data;
      })
      .catch(error => {
        console.log(error);
        logout();
      });
  }

  return Promise.resolve();
};

// export const updateUserStatus = _.throttle(status => {
//   return taskRouterApi.updateWorkerStatus(status);
// }, 500);
