import { baseAPI } from "./baseAPI";

export const getTodods = (options) => {
  return baseAPI.get("todos", options).then((res) => res.data);
};
