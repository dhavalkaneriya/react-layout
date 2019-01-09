import { USER_STATUS } from "../../constants";

import AUTH_TYPE from "./authTypes";

const defaults = {
  agent: {
    email: "",
    status: USER_STATUS.OFFLINE
  },
  otpData: {}
};

export default function appReducer(state = defaults, action) {
  switch (action.type) {
    case AUTH_TYPE.LOGIN: {
      const token = action.token || null;

      localStorage.setItem("token", token);

      return state;
    }

    case AUTH_TYPE.LOGOUT: {
      localStorage.removeItem("token");

      return { ...defaults };
    }

    case AUTH_TYPE.UPDATE_AUTH_DATA: {
      const { agent } = state;

      return { ...state, agent: { ...agent, ...action.payload } };
    }

    default:
      return state;
  }
}
