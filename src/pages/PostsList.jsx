import { Form, Link, useLoaderData } from "react-router-dom";
import { getPosts } from "../api/posts";
import PostCard from "../components/PostCard";
import { useEffect, useRef } from "react";

const PostsList = () => {
  const {
    posts,
    searchParams: { query },
  } = useLoaderData();

  const searchRef = useRef();

  useEffect(() => {
    searchRef.current.value = query;
  }, [query]);

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
          {/* <div className='form-group'>
            <label htmlFor='userId'>Author</label>
            <select type='search' name='userId' id='userId'>
              <option value=''>Any</option>
              <option value='1'>Leanne Graham</option>
            </select>
          </div> */}
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
  const filterParams = { q: query };
  const posts = getPosts({ signal, params: filterParams });

  return { posts: await posts, searchParams: { query } };
};

export const postsListRoute = {
  loader,
  element: <PostsList />,
};
