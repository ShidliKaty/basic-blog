import { baseAPI } from "./baseAPI";

export const getUsers = (options) => {
  return baseAPI.get("users", options).then((res) => res.data);
};

export const getUser = (userId, options) => {
  return baseAPI.get(`users/${userId}`, options).then((res) => res.data);
};
