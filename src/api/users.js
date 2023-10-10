import { baseAPI } from "./baseAPI";

export const getUsers = (options) => {
  return baseAPI.get("users", options).then((res) => res.data);
};
