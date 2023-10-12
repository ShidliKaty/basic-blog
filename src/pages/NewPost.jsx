import React from "react";
import { getUsers } from "../api/users";
import { Form, useLoaderData } from "react-router-dom";

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

const loader = ({ request: { signal } }) => getUsers({ signal });

export const newPostRoute = {
  loader,
  element: <NewPost />,
};
