import AUTH_TYPE from "./authTypes";

const defaults = {
  admin: {
    email: ""
  }
};

export default function appReducer(state = defaults, action) {
  switch (action.type) {
    case AUTH_TYPE.LOGIN: {
      const token = action.token || null;

      localStorage.setItem("impekable-admin-token", token);

      return state;
    }

    case AUTH_TYPE.LOGOUT: {
      localStorage.removeItem("impekable-admin-token");

      return { ...defaults };
    }

    case AUTH_TYPE.UPDATE_AUTH_DATA: {
      const { admin } = state;

      return { ...state, admin: { ...admin, ...action.payload } };
    }

    default:
      return state;
  }
}
