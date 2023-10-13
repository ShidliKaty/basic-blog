import React from "react";
import PostForm from "../components/PostForm";
import { getUsers } from "../api/users";
import { redirect, useLoaderData, useNavigation } from "react-router-dom";
import { getPost, updatePost } from "../api/posts";

const EditPost = () => {
  const { users, post } = useLoaderData();
  const { state } = useNavigation();
  const isSubmitting = state === "submitting";

  return (
    <>
      <h1 className='page-title'>Edit Post</h1>
      <PostForm
        users={users}
        defaultValues={post}
        isSubmitting={isSubmitting}
      />
    </>
  );
};

const loader = async ({ params: { postId }, request: { signal } }) => {
  const users = getUsers({ signal });
  const post = getPost(postId, { signal });

  return { users: await users, post: await post };
};

const action = async ({ params: { postId }, request }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  const userId = formData.get("userId");

  const post = await updatePost(
    postId,
    { title, body, userId },
    { signal: request.signal }
  );

  return redirect(`/posts/${post.id}`);
};

export const editPostRoute = {
  loader,
  action,
  element: <EditPost />,
};
