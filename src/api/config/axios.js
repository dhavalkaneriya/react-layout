import axios from "axios";
import JWTDecoder from "jwt-decode";
import isBefore from "date-fns/is_before";

import { logout } from "../../store/actions";

//REACT_APP_API_HOST=https://dev-api.contextcenter.com
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_HOST
});

let logoutPromise = null;

axiosInstance.interceptors.request.use(
  config => {
    const JWTtoken = localStorage.getItem("token");

    const isTokenValid = token => {
      const payload = JWTDecoder(token);

      // payload.exp is timestamp in second we need to convert it to milliseconds thus multiply by 1000
      return isBefore(new Date(), new Date(payload.exp * 1000));
    };

    if (JWTtoken) {
      // If token is still valid
      if (isTokenValid(JWTtoken)) {
        config.headers.Authorization = `Bearer ${JWTtoken}`;

        return config;
      } else {
        // We use variable logoutPromise here to ensure that multiple API call don't trigger logout multiple times
        if (!logoutPromise) {
          console.log("src/api/config/axios.js @line 33 TOKEN is not VALID");

          logoutPromise = logout();

          return logoutPromise.then(() => {
            logoutPromise = null;

            return config;
          });
        }
      }
    }

    return config;
  },
  error => {
    console.log("Intercepter Error:", error);

    throw error;
  }
);

export default axiosInstance;
