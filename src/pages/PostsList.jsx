import { Form, Link, useLoaderData } from "react-router-dom";
import { getPosts } from "../api/posts";
import PostCard from "../components/PostCard";
import { useEffect, useRef } from "react";
import { getUsers } from "../api/users";

const PostsList = () => {
  const {
    posts,
    users,
    searchParams: { query, userId },
  } = useLoaderData();

  const searchRef = useRef();
  const filterRef = useRef();

  useEffect(() => {
    searchRef.current.value = query || "";
  }, [query]);

  useEffect(() => {
    filterRef.current.value = userId || "";
  }, [userId]);

  return (
    <>
      <h1 className='page-title'>
        Posts
        <div className='title-btns'>
          <Link className='btn btn-outline' to='new'>
            New
          </Link>
        </div>
      </h1>
      <Form className='form mb-4'>
        <div className='form-row'>
          <div className='form-group'>
            <label htmlFor='query'>Query</label>
            <input type='search' name='query' id='query' ref={searchRef} />
          </div>
          <div className='form-group'>
            <label htmlFor='userId'>Author</label>
            <select type='search' name='userId' id='userId' ref={filterRef}>
              <option value=''>Any</option>
              {users.map((user, i) => (
                <option key={user.id} value={i + 1}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
          <button className='btn'>Filter</button>
        </div>
      </Form>
      <div className='card-grid'>
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </>
  );
};

const loader = async ({ request: { signal, url } }) => {
  const searchParams = new URL(url).searchParams;
  const query = searchParams.get("query");
  const userId = searchParams.get("userId");
  const filterParams = { q: query };

  if (userId !== "") filterParams.userId = userId;

  console.log(filterParams);

  const posts = getPosts({ signal, params: filterParams });
  const users = getUsers({ signal });

  return {
    posts: await posts,
    users: await users,
    searchParams: { query, userId },
  };
};

export const postsListRoute = {
  loader,
  element: <PostsList />,
};
