import React from "react";
import { getUsers } from "../api/users";
import {
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { createPost } from "../api/posts";
import PostForm, { postFormValidator } from "../components/PostForm";

const NewPost = () => {
  const { state } = useNavigation();
  const isSubmitting = state === "submitting";

  const users = useLoaderData();
  const errors = useActionData();

  console.log(errors);

  return (
    <>
      <h1 className='page-title'>New Post</h1>
      <PostForm users={users} isSubmitting={isSubmitting} errors={errors} />
    </>
  );
};

async function action({ request }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  const userId = formData.get("userId");

  const errors = postFormValidator({ title, body, userId });

  if (Object.keys(errors).length > 0) return errors;

  const post = await createPost(
    { title, body, userId },
    { signal: request.signal }
  );

  return redirect(`/posts/${post.id}`);
}

const loader = ({ request: { signal } }) => getUsers({ signal });

export const newPostRoute = {
  loader,
  action,
  element: <NewPost />,
};
