import axios from "./axiosWithHeaders";
import { setAuthToken } from "./localStore";
import API_PATHS from "./url";

export const registerUser = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(API_PATHS.REGISTER, data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const loginUser = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(API_PATHS.LOGIN, data)
      .then((res) => {
        setAuthToken(res.headers.token);
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
