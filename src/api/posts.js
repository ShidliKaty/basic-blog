import { baseAPI } from "./baseAPI";

export const getPosts = (options) => {
  return baseAPI.get("posts", options).then((res) => res.data);
};

export const getPost = (id, options) => {
  return baseAPI.get(`posts/${id}`, options).then((res) => res.data);
};
