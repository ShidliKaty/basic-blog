import { baseAPI } from "./baseAPI";

export const getPosts = (options) => {
  return baseAPI.get("posts", options).then((res) => res.data);
};
