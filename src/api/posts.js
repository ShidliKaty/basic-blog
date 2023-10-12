import { baseAPI } from "./baseAPI";

export const getPosts = (options) => {
  return baseAPI.get("posts", options).then((res) => res.data);
};

export const getPost = (postId, options) => {
  return baseAPI.get(`posts/${postId}`, options).then((res) => res.data);
};

export const createPost = (data, options) => {
  return baseAPI.post("posts", data, options).then((res) => res.data);
};

export const updatePost = (postId, data, options) => {
  return baseAPI.put(`posts/${postId}`, data, options).then((res) => res.data);
};
