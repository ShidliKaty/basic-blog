import React from "react";

import { Link, useLoaderData } from "react-router-dom";
import { getUser } from "../api/users";
import { getPosts } from "../api/posts";
import { getTodods } from "../api/todos";

const User = () => {
  const { user, posts, todos } = useLoaderData();

  return (
    <>
      <h1 className='page-title'>{user.name}</h1>
      <div className='page-subtitle'>{user.email}</div>
      <div>
        <b>Company:</b> {user.company.name}
      </div>
      <div>
        <b>Website:</b> {user.website}
      </div>
      <div>
        <b>Address:</b> {user.address.street} {user.address.suite}{" "}
        {user.address.city} {user.address.zipcode}
      </div>
      <h3 className='mt-4 mb-2'>Posts</h3>
      <div className='card-grid'>
        {posts.map((post) => (
          <div key={post.id} className='card'>
            <div className='card-header'>{post.title}</div>
            <div className='card-body'>
              <div className='card-preview-text'>{post.body}</div>
            </div>
            <div className='card-footer'>
              <Link className='btn' to={`/posts/${post.id}`}>
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
      <h3 className='mt-4 mb-2'>Todos</h3>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? "strike-through" : null}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
};

const loader = async ({ params: { userId }, request: { signal } }) => {
  const user = getUser(userId, { signal });
  const posts = getPosts({ signal, params: { userId } });
  const todos = getTodods({ signal, params: { userId } });

  return { user: await user, posts: await posts, todos: await todos };
};

export const userRoute = {
  loader,
  element: <User />,
};
