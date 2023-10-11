import React from "react";

import { useLoaderData } from "react-router-dom";
import { getPost } from "../api/posts";
import { getComments } from "../api/comments";
import { getUser } from "../api/users";

const Post = () => {
  const { post, comments, user } = useLoaderData();

  console.log(comments);

  return (
    <>
      <h1 className='page-title'>{post.title}</h1>
      <span className='page-subtitle'>
        By: <a href='user.html'>{user.name}</a>
      </span>
      <div>{post.body}</div>
    </>
  );
};

const loader = async ({ params: { postId }, request: { signal } }) => {
  const post = await getPost(postId, { signal });
  const comments = getComments(postId, { signal });
  const user = getUser(post.userId, { signal });

  return { post, comments: await comments, user: await user };
};

export const postRoute = {
  loader,
  element: <Post />,
};
