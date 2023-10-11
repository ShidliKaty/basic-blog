import { baseAPI } from "./baseAPI";

export const getPosts = (options) => {
  return baseAPI.get("posts", options).then((res) => res.data);
};

export const getPost = (postId, options) => {
  return baseAPI.get(`posts/${postId}`, options).then((res) => res.data);
};
