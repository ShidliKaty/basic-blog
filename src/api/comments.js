import { baseAPI } from "./baseAPI";

export const getComments = (postId, options) => {
  return baseAPI
    .get(`posts/${postId}/comments`, options)
    .then((res) => res.data);
};
