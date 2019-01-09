import axios from "./config/axios";

export const login = data => {
  return axios.post("/admin/login", data).then(result => {
    const { data } = result;

    return data;
  });
};

export const profile = email => {
  return axios.get(`/admin/profile?email=${email}`).then(result => {
    const { data } = result;

    return data;
  });
};
