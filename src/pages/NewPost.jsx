import React from "react";
import { getUsers } from "../api/users";
import { Form, redirect, useLoaderData } from "react-router-dom";
import { createPost } from "../api/posts";

const NewPost = () => {
  const users = useLoaderData();

  return (
    <>
      <h1 className='page-title'>New Post</h1>
      <Form method='post' className='form'>
        <div className='form-row'>
          <div className='form-group error'>
            <label htmlFor='title'>Title</label>
            <input type='text' name='title' id='title' />
            <div className='error-message'>Required</div>
          </div>
          <div className='form-group'>
            <label htmlFor='userId'>Author</label>
            <select name='userId' id='userId'>
              {users.map((user, i) => (
                <option key={user.id} value={i + 1}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='form-row'>
          <div className='form-group'>
            <label htmlFor='body'>Body</label>
            <textarea name='body' id='body'></textarea>
          </div>
        </div>
        <div className='form-row form-btn-row'>
          <a className='btn btn-outline' href='/posts'>
            Cancel
          </a>
          <button className='btn'>Save</button>
        </div>
      </Form>
    </>
  );
};

async function action({ request }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  const userId = formData.get("userId");

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
