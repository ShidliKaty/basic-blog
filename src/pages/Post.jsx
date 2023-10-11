import React from "react";

import { useLoaderData } from "react-router-dom";
import { getPost } from "../api/posts";

const Post = () => {
  const post = useLoaderData();

  return (
    <>
      <h1 className='page-title'>{post.title}</h1>
      <span className='page-subtitle'>
        By: <a href='user.html'>Leanne Graham</a>
      </span>
      <div>{post.body}</div>
    </>
  );
};

const loader = ({ params, request: { signal } }) =>
  getPost(params.postId, { signal });

export const postRoute = {
  loader,
  element: <Post />,
};
