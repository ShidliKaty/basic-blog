import React from "react";

import { Link, useLoaderData } from "react-router-dom";
import { getUser } from "../api/users";
import { getPosts } from "../api/posts";
import { getTodods } from "../api/todos";
import PostCard from "../components/PostCard";
import TodoItem from "../components/TodoItem";

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
          <PostCard key={post.id} {...post} />
        ))}
      </div>
      <h3 className='mt-4 mb-2'>Todos</h3>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
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
