import axios from "./axiosWithHeaders";
import API_PATHS from "./url";

export const getTags = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(API_PATHS.TAGS)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
